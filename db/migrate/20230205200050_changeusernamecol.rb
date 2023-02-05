class Changeusernamecol < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :username, :full_name
    remove_index :users, :full_name

  end
end
