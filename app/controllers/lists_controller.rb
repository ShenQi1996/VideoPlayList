class ListsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @lists = List.all
    end

    def show
        @list = List.find(params[:id])
    end

    def create
        @list = List.new(list_params)
        if @list.save!
            render "lists/show"
        else
            render json: @list.errors.full_messages, status: 401
        end
    end

    def destroy
            @list = List.find(params[:id])
            if @list.destroy
                render json: {id: params[:id]}
            end
        end

    private

    def list_params
        params.permit(:title, videos:[:title, :video_id, :views, :likes, :comments, :description, :thumbnail_url])
    end

end