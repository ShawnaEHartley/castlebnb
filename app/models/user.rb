# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  full_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  before_validation :ensure_session_token

  validates :full_name, 
    length: { in: 3..50 },
    format: { without: URI::MailTo::EMAIL_REGEXP, message: 'Cannot be an email address' }
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { in: 6..255 }, allow_nil: true
  validates :session_token, presence: true, uniqueness: true

  attr_reader :password

  def password=(new_pw)
      @password = new_pw
      self.password_digest = BCrypt::Password.create(new_pw)
  end
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user&.authenticate(password)
      return user
    else
      nil
    end
  end


  # private

  def generate_session_token
    # in a loop:
    # use SecureRandom.base64 to generate a random token
    # use `User.exists?` to check if this `session_token` is already in use
    # if already in use, continue the loop, generating a new token
    # if not in use, return the token
    while true
      token = SecureRandom::urlsafe_base64
      return token unless (User.exists?(session_token: token))
    end
  end
  
  def ensure_session_token
    # if `self.session_token` is already present, leave it be
    # if `self.session_token` is nil, set it to `generate_unique_session_token`
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    # `update!` the user's session token to a new, random token
    # return the new session token, for convenience
    self.update!(session_token: generate_session_token)
    self.session_token
  end





end
