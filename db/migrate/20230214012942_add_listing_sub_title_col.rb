class AddListingSubTitleCol < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :subtitle, :string
  end
end
