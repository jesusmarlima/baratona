class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :date
      t.integer :user_id
      t.timestamps
    end
  end
end
