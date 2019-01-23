class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description
      t.string :url
      t.integer :channel_id, null: false

      t.timestamps
    end
    add_index :videos, :channel_id
    add_index :videos, :url, unique: true
  end
end
