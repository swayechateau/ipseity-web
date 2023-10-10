package routes

import (
	"log"
	"net/http"
)

func AboutHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("About Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/aboutme.png"
	data.Hero.Title = "About Me"
	RenderPage(w, "about", data)
}
