require "concerns/BarService"
class HomeController < ApplicationController

  def index
    bar_service = BarService.new
    @bars = bar_service.all
  end
end
