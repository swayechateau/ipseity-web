package api

import (
	"encoding/json"
	"net/http"
)

type Page struct {
	URIIndex     string                 `json:"uri_index"`
	GitHubLink   string                 `json:"github_link"`
	LiveLink     string                 `json:"live_link"`
	OpenSource   bool                   `json:"open_source"`
	Translations map[string]Translation `json:"translations"`
}

type PagesData struct {
	All []Page
}

var pagesData PagesData

// FetchProjectsData fetches data from the given API and stores it in the global variable projectsData
func FetchPagesData() error {
	resp, err := http.Get(url + "/pages")
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	mu.Lock()
	defer mu.Unlock()

	err = json.NewDecoder(resp.Body).Decode(&pagesData.All)
	if err != nil {
		return err
	}

	return nil
}
