class CreateToys < ActiveRecord::Migration
  def change
    create_table :toys do |t|
      t.string :name
      t.string :country
      t.belongs_to :user_id, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
