class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.references :topic, null: false, foreign_key: true
      t.string :ask
      t.references :asker, polymorphic: true, null: false

      t.timestamps
    end
  end
end
