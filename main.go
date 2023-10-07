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
	Lang  string
	Meta  Meta
	Title *string
}
type Meta struct {
	Title       *string
	Description *string
	Image       *string
	Keywords    *string
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	// templates.ExecuteTemplate(w, "index.html", nil)
	title := "My Title"
	description := "My Description"
	image := "My Image"
	keywords := "My Keywords"

	data := PageData{
		Lang: "en",
		Meta: Meta{
			Title:       &title,
			Description: &description,
			Image:       &image,
			Keywords:    &keywords,
		},
		Title: &title,
	}
	templates.ExecuteTemplate(w, "index.html", data)
}

func main() {

	http.HandleFunc("/", indexHandler)

	http.HandleFunc("/api", apiHandler)

	fs := http.FileServer(http.Dir("./templates/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}

	log.Printf("Server started on port 8080")

}

func apiHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("API Handler")
	url := os.Getenv("API_URL")
	if url == "" {
		fmt.Fprintf(w, "API_URL not set")
	}

	fmt.Fprintf(w, "API_URL: %s", url)
}
