class RemoveLikesUserIdIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :user_id
    add_index :likes, :user_id
  end
end
