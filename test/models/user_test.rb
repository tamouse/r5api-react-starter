require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @valid_attributes = {
      username: 'user',
      email: 'user@example.org',
      password: 'blue',
      password_confirmation: 'blue',
      admin: false
    }
  end

  def test_can_create_user
    user = User.create(@valid_attributes)
    assert(user.persisted?)
  end

  def test_cannot_create_user_with_duplicate_username_and_email
    user1 = User.create(@valid_attributes)
    user2 = User.new(@valid_attributes)
    refute(user2.valid?)
    assert_includes(user2.errors.full_messages, "Username has already been taken")
    assert_includes(user2.errors.full_messages, "Email has already been taken")
  end

  def test_password_and_confimation_must_match
    @valid_attributes[:password_confirmation]='asdfasdfasdf'
    user = User.new(@valid_attributes)
    refute(user.valid?)
    assert_includes(user.errors.full_messages, "Password confirmation doesn't match Password")
  end

  def test_lowercase_username_and_email_enforced
    @valid_attributes[:username] = 'UsEr'
    @valid_attributes[:email] = 'USeR@exAMPLe.ORG'
    user = User.create(@valid_attributes)
    assert(user.persisted?)
    assert_equal('user', user.username)
    assert_equal('user@example.org', user.email)
  end


end
