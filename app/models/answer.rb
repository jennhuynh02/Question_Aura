class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :responder, polymorphic: true

  has_many :comments

  validates :answer, presence: true
end
