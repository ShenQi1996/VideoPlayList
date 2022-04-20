@lists.each do |list|
    json.set! list.id do
            json.extract! list, :id, :title, :videos_id, :videos_title, :views, :likes, :comments, :descriptions, :thumbnail_urls
    end
end