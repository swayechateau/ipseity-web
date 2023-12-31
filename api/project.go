package api

import (
	"encoding/json"
	"net/http"
)

type Project struct {
	URIIndex       string                 `json:"uri_index"`
	GitHubLink     string                 `json:"github_link"`
	LiveLink       string                 `json:"live_link"`
	OpenSource     bool                   `json:"open_source"`
	CaseStudyIndex string                 `json:"case_study_index"`
	Translations   map[string]Translation `json:"translations"`
}

type ProjectsData struct {
	All      []Project
	Featured []Project
}

var projectsData ProjectsData

// FetchProjectsData fetches data from the given API and stores it in the global variable projectsData
func FetchProjectsData() error {
	resp, err := http.Get(url + "/projects")
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
	resp, err := http.Get(url + "/projects?featured=true")
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

func FetchProject(id string) (Project, error) {
	var project Project
	resp, err := http.Get(url + "/projects/" + id)
	if err != nil {
		return project, err
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&project)
	if err != nil {
		return project, err
	}

	return project, nil
}
