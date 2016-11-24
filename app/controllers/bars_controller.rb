class BarsController < ApplicationController
  def index
    bar_service = BarService.new
    @bars = bar_service.all
    render json: @bars
  end
end