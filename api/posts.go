package api

import (
	"encoding/json"
	"net/http"
)

type Post struct {
	URIIndex     string                 `json:"uri_index"`
	PublishedAt  string                 `json:"published_at"`
	Translations map[string]Translation `json:"translations"`
}

type PostsData struct {
	All      []Post
	Featured []Post
}

var postsData PostsData

// FetchProjectsData fetches data from the given API and stores it in the global variable projectsData
func FetchPostsData() error {
	resp, err := http.Get("https://api.swaye.dev/posts")
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	mu.Lock()
	defer mu.Unlock()

	err = json.NewDecoder(resp.Body).Decode(&postsData.All)
	if err != nil {
		return err
	}

	return nil
}

func FetchFeaturedPostsData() error {
	resp, err := http.Get("https://api.swaye.dev/posts?featured=true")
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
