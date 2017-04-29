class User < ApplicationRecord
  has_secure_password

  before_create do
    username.downcase!
    email.downcase!
  end

  validates_presence_of :username, :email
  validates_uniqueness_of :username, :email
end
