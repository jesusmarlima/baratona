class CreatePitStops < ActiveRecord::Migration[5.0]
  def change
    create_table :pit_stops do |t|
      t.integer :bar_id
      t.integer :event_id
      t.timestamps
    end
  end
end
