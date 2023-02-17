class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :listing, null:false, foreign_key:true
      t.references :user, null:false, foreign_key:true
      t.integer :cleanliness_rating, null:false
      t.integer :communication_rating, null:false
      t.integer :checkin_rating, null:false
      t.integer :accuracy_rating, null:false
      t.integer :location_rating, null:false
      t.integer :value_rating, null:false
      t.text :body, null:false


      t.timestamps
    end
  end
end
