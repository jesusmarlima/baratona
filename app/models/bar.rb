class Bar < ApplicationRecord
  has_many :pit_stops
  has_many :events, through: :pit_stops
end
