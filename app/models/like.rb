# == Schema Information
#
# Table name: likes
#
#  id            :bigint(8)        not null, primary key
#  thumbs_up     :boolean          not null
#  user_id       :integer          not null
#  likeable_type :string
#  likeable_id   :bigint(8)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
    validates :thumbs_up, inclusion: { in: [true, false] }

    belongs_to :user
    belongs_to :likeable, polymorphic: true 
end
