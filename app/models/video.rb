# == Schema Information
#
# Table name: videos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string
#  url         :string
#  channel_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
    validates_presence_of :title 

    belongs_to :channel
    has_many :comments, dependent: :destroy

    has_one_attached :file
    has_one_attached :thumbnail
end
