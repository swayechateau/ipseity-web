package api

import (
	"encoding/json"
	"net/http"
)

type Project struct {
	URIIndex     string                 `json:"uri_index"`
	GitHubLink   string                 `json:"github_link"`
	LiveLink     string                 `json:"live_link"`
	OpenSource   bool                   `json:"open_source"`
	Translations map[string]Translation `json:"translations"`
}

type ProjectsData struct {
	All      []Project
	Featured []Project
}

var projectsData ProjectsData

// FetchProjectsData fetches data from the given API and stores it in the global variable projectsData
func FetchProjectsData() error {
	resp, err := http.Get("https://api.swaye.dev/projects")
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	mu.Lock()
	defer mu.Unlock()

	err = json.NewDecoder(resp.Body).Decode(&projectsData.All)
	if err != nil {
		return err
	}

	return nil
}

func FetchFeaturedProjectsData() error {
	resp, err := http.Get("https://api.swaye.dev/projects?featured=true")
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	mu.Lock()
	defer mu.Unlock()

	err = json.NewDecoder(resp.Body).Decode(&projectsData.Featured)
	if err != nil {
		return err
	}

	return nil
}

// // GetProjectsData returns the stored site data
// func GetProjectsData(featured bool) []Project {
// 	once.Do(func() {
// 		err := FetchProjectsData(featured)
// 		if err != nil {
// 			// Handle the error, e.g., log it
// 			log.Printf("Error: %s", err)
// 		}
// 	})
// 	return projectsData
// }

// // GetProjectsData returns the stored site data
// func GetProjectData(index string) Project {
// 	project := Project{}
// 	var err error
// 	once.Do(func() {
// 		project, err = FetchProjectData(index)
// 		if err != nil {
// 			// Handle the error, e.g., log it
// 			log.Printf("Error: %s", err)
// 		}
// 	})
// 	return project
// }
