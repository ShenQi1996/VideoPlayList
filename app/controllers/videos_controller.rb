class VideosController < ApplicationController
    require 'rest-client'
    def get_videos
        url = "https://mock-youtube-api.herokuapp.com/api/videos?page=1"
        response = RestClient.get(url)
        render json: response
    end
end

