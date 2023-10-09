package routes

import (
	"fmt"
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

	content := components.GetTemplate("home")
	err := content.Execute(w, data)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		log.Println("Template execution error:", err)
	}
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
	content := components.GetTemplate("404")
	err := content.Execute(w, data)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		log.Println("Template execution error:", err)
	}
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
