# My Video Playlist App

My Video Playlist App is an App that uses the Collab Youtube API to fetch all the videos and the user can add those videos to the playlist, then the user can save the playlist or the user can delete the existing playlist.


# How to run it
Please make sure you have PostgreSQL server running or run  `npm run server` to start the server. Then run `rails s` to run the server. After running `npm install` to install all the packages. Then will be run `npm run webpack` to start watching the frontend. Last just run the life server on index.html.

# Technologies

This is a single-page application built using React, HTML, CSS, Javascript, Ruby on Rails, and PostgreSQL and allows users to create their own playlist.

## Frontend
* Reactjs, JavaScript, CSS, HTML, Webpack


## Backend
* PostgreSQL and Ruby on Rails

# Features
 * User can name, create, delete their playlist
 
   *Input playlist name 
   
   ![inputname](https://user-images.githubusercontent.com/68937006/164542258-2c5892f6-d770-4416-9116-f9e19c40c1c3.PNG)

 ```
             <Col className="mt-2 FormPlaylist">
                <Form onSubmit={handleCreateName}>
                    <Form.Group className="mb-3" controlId="playlistName">
                        <Form.Label>Playlist Name :</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                        <Form.Text className="text-muted">
                            Lets see what kind of playlist name you can think of
                        </Form.Text>
                    </Form.Group>
                    <Button  variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
 ```
   *Create playlist
   
   ![createplaylist](https://user-images.githubusercontent.com/68937006/164542403-4d19590f-f09f-4c6b-8cdd-cea66ef3a784.PNG)
   
   ```
           const handleCreate = () => {
            let title = `${pln}`;
            const videos_id = mylist.map((list) => list.video_id);
            const videos_title = mylist.map((list) => list.title);
            const views = mylist.map((list) => list.views);
            const likes = mylist.map((list) => list.likes);
            const comments = mylist.map((list) => list.comments)
            const descriptions = mylist.map((list) => list.description)
            const thumbnail_urls = mylist.map((list) =>list.thumbnail_url)
            createPlayList(title, videos_id, videos_title, views, likes, comments, descriptions, thumbnail_urls)
            setChange(!change)
            setPlm("")
            debugger
            setMyList([])
        }
   ```
   
   ```
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
                console.log("works");
              })
              .catch(error => {
                console.error("Error is in api", error);
              });
          };
   ```
   *Delete playlist
   
   ![delete](https://user-images.githubusercontent.com/68937006/164542560-66bbea00-b245-4ef0-9f91-9c4036021a80.PNG)
   
        const handleDelete = (id) => {
          deletePlayList(id)
          setChange(!change)
        }
         export const deletePlayList = playlistId => {
            const newUrl = url.concat(playlistId);
            fetch(newUrl, {
              method: "DELETE",
            })
              .then(data => {
                console.log("it works");
              })
              .catch(err => {
                console.error("Error", err);
              });
          };
