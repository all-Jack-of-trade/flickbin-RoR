class AddRankColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :rank, :integer, default: 0
  end
end
