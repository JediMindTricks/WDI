class CreateBoots < ActiveRecord::Migration
  def change
    create_table :boots do |t|
      t.integer :size
      t.string :brand
      t.string :color
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
