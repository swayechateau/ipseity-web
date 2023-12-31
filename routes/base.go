package routes

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

type homeData struct {
	Projects *[]ProjectData
	Posts    *[]PostData
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Index Handler")
	log.Printf("Getting projects data")
	pf := state.Projects.Featured
	psf := state.Posts.Featured
	log.Printf("Projects Retrieved: %d", len(pf))
	log.Printf("Converting projects data")
	featuredProjects := ConvertApiProjects(pf)
	featuredPosts := ConvertApiPosts(psf)
	log.Println(featuredProjects)
	data := pageDataTemplate()
	data.Hero.Large = true
	data.Hero.TitleGlow = true
	data.Hero.Image = "https://swayechateau.com/media/image/deep-blue.jpg"
	data.Content = homeData{
		Projects: &featuredProjects,
		Posts:    &featuredPosts,
	}
	RenderPage(w, "home", data)
}

func NotFoundHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotFound)
	image := "https://swayechateau.com/media/image/lost-city.jpg"
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

	RenderPage(w, "404", data)
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
