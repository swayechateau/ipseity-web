package routes

import (
	"fmt"
	"html/template"
	"ipseity-web/components"
	"log"
	"net/http"
	"os"
)

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Index Handler")
	log.Printf("Getting projects data")
	pf := Api.Projects.Featured
	log.Printf("Projects Retrieved: %d", len(pf))
	log.Printf("Converting projects data")
	featuredProjects := ConvertApiProjects(pf)
	log.Println(featuredProjects)
	data := pageDataTemplate()
	data.Hero.Large = true
	data.Hero.TitleGlow = true
	data.Hero.Image = "https://swayechateau.com/media/image/deep-blue.jpg"
	data.Projects = &featuredProjects
	// Render the template

	c := components.LoadPage("home")
	err := c.Execute(w, data)
	if err != nil {
		log.Println("Template execution error:", err)
		InternalServerErrorHandler(w, r, err)
	}
	layoutTemplate := template.Must(template.ParseFiles("templates/layouts/layout.html"))
	lerr := layoutTemplate.Execute(w, data)
	if lerr != nil {
		log.Println("Template execution error:", lerr)
	}
	// components.RenderTemplate(w, "home", data)
}

func NotFoundHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotFound)
	image := "https://swayechateau.com/media/image/deep-blue.jpg"
	data := pageDataTemplate()
	mTitle := "404 Not Found | Swaye Chateau"
	mDesc := "The page you seek is not here."
	data.Hero.Title = "404 Not Found"
	data.Hero.Large = true
	data.Hero.Subtitle = "Are you lost Traveller, the page you seek is not here."
	data.Meta.Title = &mTitle
	data.Meta.Description = &mDesc
	// data.Meta.Keywords = append(data.Meta.Keywords, "404", "Not Found")
	data.Meta.Image = &image
	data.Hero.TitleGlow = true
	data.Hero.Image = image
	c := components.LoadPage("404")
	err := c.Execute(w, data)
	if err != nil {
		log.Println("Template execution error:", err)
		InternalServerErrorHandler(w, r, err)
	}
}

func InternalServerErrorHandler(w http.ResponseWriter, r *http.Request, err error) {
	w.WriteHeader(http.StatusInternalServerError)
	fmt.Fprintf(w, "Internal Server Error: Something went wrong! %s", err.Error())
}

// Remove Later
func ApiHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("API Handler")
	url := os.Getenv("API_URL")
	if url == "" {
		fmt.Fprintf(w, "API_URL not set")
	}

	fmt.Fprintf(w, "API_URL: %s", url)
}
