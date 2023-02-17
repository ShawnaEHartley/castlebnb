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

ActiveRecord::Schema[7.0].define(version: 2023_02_15_164956) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

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
    t.string "subtitle"
    t.index ["lister_id"], name: "index_listings_on_lister_id"
    t.index ["title"], name: "index_listings_on_title"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.bigint "user_id", null: false
    t.integer "cleanliness_rating", null: false
    t.integer "communication_rating", null: false
    t.integer "checkin_rating", null: false
    t.integer "accuracy_rating", null: false
    t.integer "location_rating", null: false
    t.integer "value_rating", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_reviews_on_listing_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "listings", "users", column: "lister_id"
  add_foreign_key "reviews", "listings"
  add_foreign_key "reviews", "users"
end
