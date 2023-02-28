class CreateFortuneQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :fortune_questions do |t|
      t.string :question
      t.string :answers
      t.timestamps
    end
  end
end
