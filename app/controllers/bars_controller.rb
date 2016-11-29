class BarsController < ApplicationController
  def index
  end

  def search
    bar_name = params[:keyword]
    bar_service = BarService.new()
    @bars = bar_service.filtered({bar_name: bar_name})
    render json: @bars
  end

end
