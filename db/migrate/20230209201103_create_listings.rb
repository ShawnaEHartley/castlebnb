class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null:false, unique:true, index:true
      t.references :lister, null:false, foreign_key: {to_table: :users}
      t.text :description, null:false
      t.string :street_address, null:false, default: "100 Kings Rd"
      t.string :address_line_two
      t.string :city, null:false, default: "Venice"
      t.string :state, null:false, default:"Veneto"
      t.string :zip_code, null:false, default:"10010"
      t.string :country, null:false, default:"Italy"
      t.decimal :latitude, null:false, default:45.438759, precision:10, scale:6
      t.decimal :longitude, null:false, default:12.327145, precision:10, scale:6
      t.string :region, null:false, default:"Valyria"
      t.integer :price, null:false, default:20
      t.integer :max_guests, null:false, default:4
      t.integer :bedrooms, null:false, default:2
      t.integer :beds, null:false, default:2
      t.integer :baths, null:false, default:1
      t.boolean :kitchen, null:false, default:true
      t.boolean :parking, null:false, default:true
      t.boolean :heating, null:false, default:true
      t.boolean :fireplace, null:false, default:true
      t.boolean :patio, null:false, default:true
      t.boolean :wifi, null:false, default:true
      t.boolean :pets, null:false, default:true
      t.boolean :self_checkin, null:false, default:true
      t.text :rules
      t.text :cancellation

      t.timestamps
    end
  end
end
