ActiveAdmin.register Video, as: 'WASP Outreach' do
  permit_params :url, :tag_id
  menu label: 'WASP Outreach'

  controller do
    def scoped_collection
      super.where(wasp_outreach: true)
    end

    def create
      user_id = User.where(role: 'dummy').sample.id
      tag_id = permitted_params[:video][:tag_id]
      video_url = permitted_params[:video][:url]

      if tag_id.blank? || video_url.blank?
        flash[:error] = "Tag and video url must be present"
        redirect_to new_admin_wasp_outreach_path
      elsif !Video.exists?(url: video_url, tag_id: tag_id)
        additional_params = {
          user_id: user_id,
          wasp_outreach: true
        }

        @resource = Video.new(permitted_params[:video].merge(additional_params))

        if @resource.save
          flash[:notice] = "Video was successfully added!"
          redirect_to admin_wasp_outreach_path(@resource)
        else
          render :new
        end
      else
        tag_title = Tag.find(permitted_params[:video][:tag_id]).title
        flash[:error] = "This video has already been added to the tag - '#{tag_title}'"
        redirect_to new_admin_wasp_outreach_path
      end
    end
  end

  index do
    selectable_column
    id_column
    column :title
    column :url
    column :tag
    column :user
    column :wasp_outreach
    actions
  end

  form do |f|
    f.semantic_errors
    f.inputs do
      f.input :url, label: 'Video url'
      f.input :tag_id, as: :search_select, url: admin_tags_path,
                    fields: [:title], display_name: 'title', minimum_input_length: 2,
                    order_by: 'title_asc'
    end
    f.actions
  end

  filter :title
  filter :url
  filter :tag
  filter :user, as: :select, collection: proc { User.all.map { |c| [c.email, c.id] } }
end
