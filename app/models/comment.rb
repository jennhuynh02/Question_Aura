class Comment < ApplicationRecord
  belongs_to :answer
  belongs_to :commenter, polymorphic: true

  validates :body, presence: true
end
