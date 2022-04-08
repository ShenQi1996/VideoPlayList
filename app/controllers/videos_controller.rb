class VideosController < ApplicationController
    require 'rest-client'
    def get_videos
        url = "https://mock-youtube-api.herokuapp.com/api/videos"
        response = RestClient.get(url)
        render json: response
    end
end