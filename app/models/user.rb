# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates_presence_of :email, :username, :session_token, :password_digest
  validates_uniqueness_of :email, :username, :case_sensitive => false
  validates_uniqueness_of :session_token, :password_digest
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  #FGRIPE

  def self.find_by_credentials(params)
    user = User.find_by(username: params[:username]) || User.find_by(email: params[:username])
    return user if user && user.is_password?(params[:password])
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.update!(session_token: User.generate_session_token)
    self.session_token
  end

  def is_password?(password)
    bcrypted_pw = BCrypt::Password.new(password_digest)
    bcrypted_pw.is_password?(password)
  end

  def password=(value)
    @password = value
    self.password_digest = BCrypt::Password.create(value)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
