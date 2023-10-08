package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {

	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/deep-blue.jpg"
	err := templates.ExecuteTemplate(w, "index.html", data)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		log.Println("Template execution error:", err)
	}

}

func apiHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("API Handler")
	url := os.Getenv("API_URL")
	if url == "" {
		url = "https://api.swaye.dev"
		fmt.Fprintf(w, "API_URL not set")
	}

	fmt.Fprintf(w, "API_URL: %s", url)
}

func pageDataTemplate() PageData {
	title := Site.Meta[Lang].Title
	description := Site.Meta[Lang].Description
	keywords := Site.Meta[Lang].Keywords

	return PageData{
		Languages: PageLanguages{
			Current:   Lang,
			Default:   Site.Languages.Default,
			Available: Site.Languages.Available,
		},
		Meta: Meta{
			Title:       &title,
			Description: &description,
			Keywords:    &keywords,
		},
		Socials: Site.Socials,
		UseHero: true,
		Hero: &PageHero{
			Large:     true,
			TitleGlow: true,
			Title:     title,
		},
		Founded: &Site.YearFounded,
		Routes:  Routes,
	}
}
