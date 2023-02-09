# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_09_201103) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.bigint "lister_id", null: false
    t.text "description", null: false
    t.string "street_address", default: "100 Kings Rd", null: false
    t.string "address_line_two"
    t.string "city", default: "Venice", null: false
    t.string "state", default: "Veneto", null: false
    t.string "zip_code", default: "10010", null: false
    t.string "country", default: "Italy", null: false
    t.decimal "latitude", precision: 10, scale: 6, default: "45.438759", null: false
    t.decimal "longitude", precision: 10, scale: 6, default: "12.327145", null: false
    t.string "region", default: "Valyria", null: false
    t.integer "price", default: 20, null: false
    t.integer "max_guests", default: 4, null: false
    t.integer "bedrooms", default: 2, null: false
    t.integer "beds", default: 2, null: false
    t.integer "baths", default: 1, null: false
    t.boolean "kitchen", default: true, null: false
    t.boolean "parking", default: true, null: false
    t.boolean "heating", default: true, null: false
    t.boolean "fireplace", default: true, null: false
    t.boolean "patio", default: true, null: false
    t.boolean "wifi", default: true, null: false
    t.boolean "pets", default: true, null: false
    t.boolean "self_checkin", default: true, null: false
    t.text "rules"
    t.text "cancellation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lister_id"], name: "index_listings_on_lister_id"
    t.index ["title"], name: "index_listings_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "full_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "listings", "users", column: "lister_id"
end
