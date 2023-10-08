package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
)

var templates = template.Must(template.ParseFiles("./templates/index.html"))

type PageData struct {
	Languages PageLanguages
	Meta      Meta
	Socials   []Social
	Title     *string
	Founded   *int
	Routes    []Route
}
type Route struct {
	Name string
	Icon string
	Link string
}

type PageLanguages struct {
	Current   string
	Default   string
	Available []string
}

type Meta struct {
	Title       *string
	Description *string
	Image       *string
	Keywords    *string
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	site := GetSiteData()
	lang := "fr"
	title := site.Meta[lang].Title
	description := site.Meta[lang].Description
	keywords := site.Meta[lang].Keywords

	routes := []Route{
		{
			Name: "Home",
			Icon: "M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z",
			Link: "/",
		},
		{
			Name: "About",
			Icon: "M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14",
			Link: "/about",
		},
		{
			Name: "Projects",
			Icon: "M13.03 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V17.5L20.96 16.44C20.97 16.3 21 16.15 21 16C21 14.88 20.62 13.86 20 13.03V8H4V18H11.42C11.77 18.8 12.33 19.5 13.03 20M22.87 21.19L18.76 17.08C19.17 16.04 18.94 14.82 18.08 13.97C17.18 13.06 15.83 12.88 14.74 13.38L16.68 15.32L15.33 16.68L13.34 14.73C12.8 15.82 13.05 17.17 13.93 18.08C14.79 18.94 16 19.16 17.05 18.76L21.16 22.86C21.34 23.05 21.61 23.05 21.79 22.86L22.83 21.83C23.05 21.65 23.05 21.33 22.87 21.19Z",
			Link: "/projects",
		},
		{
			Name: "Blog",
			Icon: "M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z",
			Link: "/blog",
		},
	}

	data := PageData{
		Languages: PageLanguages{
			Current:   lang,
			Default:   site.Languages.Default,
			Available: site.Languages.Available,
		},
		Meta: Meta{
			Title:       &title,
			Description: &description,
			Keywords:    &keywords,
		},
		Socials: site.Socials,
		Title:   &title,
		Founded: &site.YearFounded,
		Routes:  routes,
	}

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
