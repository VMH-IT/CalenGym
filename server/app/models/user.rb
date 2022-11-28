class User < ApplicationRecord
  devise :database_authenticatable
  attr_accessor :remember_token

  before_save { email.downcase! }

  validates :fname, presence: { message: 'First name cannot be empty' },
                    length: { maximum: 50, message: 'First name is too long' }

  validates :lname, presence: { message: 'Last name cannot be empty' },
                    length: { maximum: 50, message: 'Last name is too long' }
  VALID_EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  validates :email, presence: { message: 'Email cannot be empty' },
                    length: { maximum: 255, message: 'Email is too long' }
  validates :email, format: { with: VALID_EMAIL_REGEX, message: 'Email is invalid' }, if: -> { email.present? }
  validates :password, presence: { message: 'Password cannot be empty' }
  validates :password, length: { minimum: 8, message: 'Password is too short' }, if: -> { password.present? }
  validates :age, presence: { message: 'Age cannot be empty' }
  validates :age, numericality: { greater_than: 0, less_than: 100, message: 'Age is wrong' }, if: -> { age.present? }
  validates :gender, numericality: { only_integer: true, less_than: 3, message: 'Gender seems wrong' }
  validates :phone, presence: { message: 'Phone cannot be empty' }
  validates :phone, numericality: { only_integer: true, message: 'phonenumber must have number' }, if: lambda {
                                                                                                         phone.present?
                                                                                                       }
  validates :phone, length: { is: 10, message: 'Phone number must has 10 characters' }, if: -> { phone.present? }
  validates :weight, presence: { message: 'Weight cannot be empty' }
  validates :weight, numericality: { only_integer: true, message: 'Weight must have number' }, if: lambda {
                                                                                                     weight.present?
                                                                                                   }
  validates :height, presence: { message: 'Height cannot be empty' }
  validates :height, numericality: { only_integer: true, message: 'Height must have number' }, if: lambda {
                                                                                                     height.present?
                                                                                                   }

  has_many :roupackage
end
