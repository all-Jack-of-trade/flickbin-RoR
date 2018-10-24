class Comment < ApplicationRecord
  has_ancestry cache_depth: true

  belongs_to :video
  belongs_to :commentator, class_name: 'User'
  belongs_to :parent, class_name: 'Comment', optional: true, inverse_of: :parent
  has_many :subcomments, class_name: 'Comment', foreign_key: :parent_id, inverse_of: :subcomments

  before_validation :check_ancestry_depth
  validates_length_of :message, maximum: AppConstants::MAX_COMMENT_MESSAGE_LENGTH

  def check_ancestry_depth
    errors.add(:ancestry_depth, 'level cannot be more than 1') if self.depth > 1
  end
end