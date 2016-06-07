class DropTweetsTable < ActiveRecord::Migration
  def up
    drop_table :tweets
  end

  def down
    raise ActiveRecord::IrreversibleMigration
    end
end
