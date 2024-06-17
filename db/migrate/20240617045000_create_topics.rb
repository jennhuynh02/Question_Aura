class CreateTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :topics do |t|
      t.string :name

      t.timestamps
    end
    add_index :topics, :name
  end
end
