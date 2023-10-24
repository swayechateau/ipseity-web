package api

import (
	"encoding/json"
	"log"
	"net/http"
)

type Post struct {
	URIIndex     string                 `json:"uri_index"`
	HasAside     bool                   `json:"has_aside"`
	IsPublished  bool                   `json:"is_published"`
	CreatedAt    string                 `json:"created_at"`
	UpdatedAt    string                 `json:"updated_at"`
	PublishedAt  string                 `json:"published_at"`
	Translations map[string]Translation `json:"translations"`
}

type PostsData struct {
	All      []Post
	Featured []Post
}

var postsData PostsData

func FetchPostsData() error {
	var fetchedPosts []Post
	posts, err := FetchPosts()
	if err != nil {
		return err
	}

	for _, post := range posts {
		resp, err := FetchPost(post.URIIndex)
		if err != nil {
			log.Println(err)
			continue
		}
		fetchedPosts = append(fetchedPosts, resp)
	}
	mu.Lock()
	defer mu.Unlock()
	postsData.All = fetchedPosts
	return nil
}

func FetchFeaturedPostsData() error {
	resp, err := http.Get(url + "/posts?featured=true")
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	mu.Lock()
	defer mu.Unlock()

	err = json.NewDecoder(resp.Body).Decode(&postsData.Featured)
	if err != nil {
		return err
	}

	return nil
}

func FetchPost(id string) (Post, error) {
	resp, err := http.Get(url + "/posts/" + id)
	if err != nil {
		return Post{}, err
	}
	defer resp.Body.Close()

	var post Post
	err = json.NewDecoder(resp.Body).Decode(&post)
	if err != nil {
		return Post{}, err
	}

	return post, nil
}

func FetchPosts() ([]Post, error) {
	var posts []Post
	resp, err := http.Get(url + "/posts")
	if err != nil {
		return posts, err
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&posts)
	if err != nil {
		return posts, err
	}

	return posts, nil
}
