package main

import (
	"encoding/json"
	"net/http"
	"sync"
	"time"
)

// SiteData represents the structure of the JSON data from the API
type SiteData struct {
	Index       string              `json:"index"`
	Name        string              `json:"name"`
	URI         string              `json:"uri"`
	Email       string              `json:"email"`
	Location    string              `json:"location"`
	Languages   Languages           `json:"languages"`
	Meta        map[string]MetaInfo `json:"meta"`
	Socials     []Social            `json:"socials"`
	YearFounded int                 `json:"year_founded"`
	CreatedAt   time.Time           `json:"created_at"`
	UpdatedAt   time.Time           `json:"updated_at"`
}

// Languages represents language information
type Languages struct {
	Default   string   `json:"default"`
	Available []string `json:"available"`
}

// MetaInfo represents metadata information for different languages
type MetaInfo struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Keywords    string `json:"keywords"`
}

// Social represents social media information
type Social struct {
	Name string `json:"name"`
	Link string `json:"link"`
	Icon string `json:"icon"`
}

var (
	siteData SiteData
	once     sync.Once
)

// FetchSiteData fetches data from the given API and stores it in the global variable siteData
func FetchSiteData() error {
	resp, err := http.Get("https://api.swaye.dev/sites/ipseity-web")
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&siteData)
	if err != nil {
		return err
	}

	return nil
}

// GetSiteData returns the stored site data
func GetSiteData() SiteData {
	once.Do(func() {
		err := FetchSiteData()
		if err != nil {
			// Handle the error, e.g., log it
			panic(err)
		}
	})
	return siteData
}
