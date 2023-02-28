class HomepageController < ApplicationController
  def index
  end

  def questions
  end

  def getquetions
    render json: FortuneQuestion.all.last(10), status: :ok
  end

  def getresult
    messages = [
      "In nearby future you will be achieving a growth in your career",
      "Life-partner will prove to be the reason for happiness",
      "Some tension may have to be faced in domestic life",
      "Today the pain of being away from your beloved will continue to hurt you.",
      "Your hard work will be rewarded. Don't think about financial gains.",
      "If you run away from a situation in panic - it will chase you in every ugly way.",
      "You will be able to relive the old days full of love and romance with your life partner",
      "Cultivate in yourself the confidence to face the adverse situations wisely because it will be needed a lot.",
      "You should avoid people who caused you trouble in the past they might try thak again in coming future",
      "Your loved ones will come back to you if you try connecting them again",
      "Buying goods can be beneficial for you right now",
    ]
    render json: {message: messages[rand(8)]}, status: :ok
  end
end
