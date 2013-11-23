class StaticPagesController < ApplicationController
  def index
    render :index
  end
  
  def signup
    render :signup
  end
end
