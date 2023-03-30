class ChangeReservationAddNumGuests < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :num_guests, :integer 
  end
end
