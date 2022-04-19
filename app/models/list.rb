class List < ApplicationRecord
    validates :title, presence: true
    validates :videos, presence: true
end