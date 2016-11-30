class User < ApplicationRecord
  has_secure_password
  has_many :events
  validates :username, :email, uniqueness: true
end
