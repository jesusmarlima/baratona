class EventsController < ApplicationController

  def create
    bars = []
    params[:bars].each do |k,v|
      byebug
      if bar = Bar.find_by(yelp_id: v[:yelp_id])
        bars << bar
      else
        bar = Bar.new(yelp_id: v["yelp_id"], name: v["name"], image_url: v["image_url"])
        bars << bar
      end
    end

    @event = Event.new(user: current_user, bars: bars)

    if !@event.save
      @errors = @event.errors.full_messages
      render json: @errors
    else
      @errors = @event.errors.full_messages
      render json: [@errors]
    end
  end

  def user_events
    @user = current_user
    render json: @user.events
  end

end
