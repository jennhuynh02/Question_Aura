class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :questions, foreign_key: :asker_id
  has_many :answers, foreign_key: :responder_id
  has_many :comments, foreign_key: :commenter_id

  validates :email, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
end
