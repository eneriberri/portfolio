Portfolio::Application.routes.draw do
  get '/signup', to: 'StaticPages#signup'
  root :to => "StaticPages#index"
end
