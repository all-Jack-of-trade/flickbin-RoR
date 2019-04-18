ActiveAdmin.register Battle do
  permit_params :tag_id, :final_date, :first_member_id, :second_member_id, :status

  controller do
    def scoped_collection
      super.includes(:tag, :first_member, :second_member)
    end

    def new
      if params[:battle_id]
        prev_battle = Battle.find(params[:battle_id])
        @battle = prev_battle.dup
        @battle.final_date = Time.now + (prev_battle.final_date - prev_battle.created_at)
        @battle.status = 'live'
      else
        @battle = Battle.new
      end
    end
  end

  after_create do |battle|
    FinishBattleJob.set(wait: battle.final_date - Time.now).perform_later(battle.id)

    {battle.first_member => battle.second_member,
     battle.second_member => battle.first_member}.each do |receiver, opponent|
      ApplicationMailer.battle_participant_notification(receiver, opponent, battle).deliver_now if receiver.user
    end

    battle.tag.users.none_battle_members.uniq.each do |user|
      ApplicationMailer.battle_tag_contributor_notification(user, battle).deliver_later
    end

    TweetBattleService.new(battle).call
  end

  index do
    selectable_column
    id_column
    column :tag
    column :first_member_id do |battle|
      battle.first_member.name
    end
    column :first_member_votes do |battle|
      battle.battle_votes.where(battle_member_id: battle.first_member.id).count
    end
    column :second_member_id do |battle|
      battle.second_member.name
    end
    column :second_member_votes do |battle|
      battle.battle_votes.where(battle_member_id: battle.first_member.id).count
    end
    column :final_date
    column :number_of_rematch_requests
    column :status do |battle|
      case battle.status
      when 'live'
        status_tag(battle.status, class: "orange abc")
      when 'finished'
        status_tag(battle.status, :yes, class: "abc")
      end
    end
    column :created_at
    column :updated_at
    actions defaults: true do |battle|
      link_to 'Rematch', new_admin_battle_path(battle_id: battle.id)
    end
  end

  form do |f|
    f.semantic_errors
    f.inputs do
      f.input :tag
      f.input :first_member_id, as: :search_select, url: admin_battle_members_path,
                    fields: [:name], display_name: :name, minimum_input_length: 2,
                    order_by: 'name_asc'
      f.input :second_member_id, as: :search_select, url: admin_battle_members_path,
                    fields: [:name], display_name: :name, minimum_input_length: 2,
                    order_by: 'name_asc'
      f.input :final_date, as: :date_time_picker, picker_options: { min_date: Date.today },
                           input_html: { style: 'width: 100px;', autocomplete: 'off' }
    end
    f.actions
  end

  filter :tag
end