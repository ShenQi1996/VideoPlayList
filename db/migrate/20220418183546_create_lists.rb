class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.text :videos_id, array: true, default: []
      t.string :videos_title, array: true, default: []
      t.integer :views, array: true, default: []
      t.integer :likes, array: true, default: []
      t.integer :comments, array: true, default: []
      t.text :descriptions, array: true, default: []
      t.string :thumbnail_urls, array: true, default: []
      t.timestamps
    end
  end
end
