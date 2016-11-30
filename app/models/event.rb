class Event < ApplicationRecord
  belongs_to :user
  has_many :pit_stops
  has_many :bars, through: :pit_stops
end
