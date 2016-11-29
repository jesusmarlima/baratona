class BarsController < ApplicationController
  def index
  end

  def search
    bar_name = params[:keyword]
    bar_service = BarService.new()
    @bars = bar_service.filtered({bar_name: bar_name})
    render json: @bars
  end

  def add
    @bar = Bar.new
    @bar.id = params[:id]
    @bar.name = params[:name]
    @bar.image_url = params[:image_url]
    @bars = [@bar]
    render json: @bars
  end

end
