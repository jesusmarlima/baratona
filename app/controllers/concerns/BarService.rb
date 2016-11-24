require 'yelp'
class BarService

  def initialize
    @limit = 20
    @bars = []
    @total_bars = 0
  end

  def all
    response = api_call
    @total_bars = response.total

    populate_bars response
    while number_of_extra_calls > 0 do
      populate_bars api_call(@bars.size)
    end

    @bars
  end

  private

  def populate_bars(response)
    response.businesses.each do |business|
      bar = Bar.new
      bar.name = business.name
      @bars << bar
    end
  end

  def api_call(offset=0)
    Yelp.client.search("Park Slope", {category_filter: "bars", offset: offset, limit: @limit, sort: 0})
  end

  def number_of_extra_calls
    ((@total_bars - @bars.size) / @limit.to_f).ceil
  end
end