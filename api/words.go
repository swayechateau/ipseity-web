package api

import (
	"encoding/json"
	"log"
	"net/http"
)

// SiteData represents the structure of the JSON data from the API
type Word struct {
	EnglishWord *string           `json:"english_word"`
	Translation map[string]string `json:"translation"`
}

type WordsData struct {
	All        map[string]Word
	Categories map[string]Word
}

var wordsData WordsData

// FetchSiteData fetches data from the given API and stores it in the global variable siteData
func FetchWordData() error {
	resp, err := http.Get("https://api.swaye.dev/words")
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&wordsData.All)
	if err != nil {
		return err
	}

	return nil
}

func FetchCategoriesData() error {
	resp, err := http.Get("https://api.swaye.dev/words?categories=true")
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&wordsData.Categories)
	if err != nil {
		return err
	}

	return nil
}

// GetSiteData returns the stored site data
func GetWordsData() WordsData {
	once.Do(func() {
		err := FetchWordData()
		if err != nil {
			// Handle the error, e.g., log it
			log.Println(err)
		}

		err = FetchCategoriesData()
		if err != nil {
			// Handle the error, e.g., log it
			log.Println(err)
		}
	})
	return wordsData
}
