class EventsController < ApplicationController

  def new

  end

  def create
    bars = []
    params[:bars].each do |k,v|
        bars <<  Bar.where(yelp_id: v[:yelp_id]).first_or_create do |bar|
          bar.name = v["name"]
          bar.image_url = v["image_url"]
        end
    end

    @event = Event.new(user: current_user, bars: bars)

    if @event.save
      head :ok
    else
      @errors = @event.errors.full_messages
      render json: @errors
    end
  end

  def user_events
    @user = current_user
    render json: @user.events
  end

  def show
    @event = Event.find_by(id: params[:id])
  end

  def bars
    @event = Event.find_by(id: params[:event_id])
    @bars = @event.bars
    render json: @bars
  end

end
