class Question < ApplicationRecord
  belongs_to :topic
  belongs_to :asker, polymorphic: true

  has_many :answers

  validates :ask, presence: true
end
