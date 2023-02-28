Rails.application.routes.draw do
  root 'homepage#index'
  get '/questions', to: "homepage#questions"
  get '/getquetions', to: "homepage#getquetions"
  get '/getresult', to: "homepage#getresult"
end
