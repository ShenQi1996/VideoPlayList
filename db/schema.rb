# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_18_183546) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "lists", force: :cascade do |t|
    t.string "title", null: false
    t.text "videos_id", default: [], array: true
    t.string "videos_title", default: [], array: true
    t.integer "views", default: [], array: true
    t.integer "likes", default: [], array: true
    t.integer "comments", default: [], array: true
    t.text "descriptions", default: [], array: true
    t.string "thumbnail_urls", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end


end
