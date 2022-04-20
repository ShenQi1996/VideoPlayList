const url = "http://localhost:3000/lists/";

export const fetchPlayList = playlistId => {
  const newUrl = url.concat(playlistId);
  console.log(newUrl);
  const response = fetch(newUrl).then(res => res.json());
  return response;
};

export const fetchPlayLists = () => {
  const response = fetch(url).then(res => res.json());
  return response;
};

export const createPlayList = (
  title,
  videos_id,
  videos_title,
  views,
  likes,
  comments,
  descriptions,
  thumbnail_urls
) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      videos_id: [...videos_id],
      videos_title: [...videos_title],
      views: [...views],
      likes: [...likes],
      comments: [...comments],
      descriptions: [...descriptions],
      thumbnail_urls: [...thumbnail_urls],
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log("works", data);
    })
    .catch(error => {
      console.error("Error is in api", error);
    });
};
export const deletePlayList = playlistId => {
  const newUrl = url.concat(playlistId);
  fetch(newUrl, {
    method: "DELETE",
  })
    .then(res => console.log(res))
    .then(data => {
      console.log("it works", data);
    })
    .catch(err => {
      console.error("Error", err);
    });
};
