class PitStop < ApplicationRecord
  belongs_to :bar
  belongs_to :event
end
