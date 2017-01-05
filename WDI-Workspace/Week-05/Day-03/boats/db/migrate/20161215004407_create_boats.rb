class CreateBoats < ActiveRecord::Migration[5.0]
  def change
    create_table :boats do |t|
      t.string :title
      t.integer :price
      t.string :city
      t.string :pic

      t.timestamps
    end
  end
end
