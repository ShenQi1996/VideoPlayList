class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :video_id
      t.integer :views
      t.integer :likes
      t.integer :comments
      t.text :description
      t.string :thumbnail_url
      t.string :created_at
      t.string :updated_at
      t.timestamps
    end
  end
end
