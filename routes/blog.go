package routes

import (
	"log"
	"net/http"
)

func BlogHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Blog Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/anime-girl-futuristic-city-computer-short-hair-coffee-25464.jpeg"
	data.Hero.Title = "Blog"
	//  Executes the layout template
	RenderPage(w, "blog", data)
}

func PostHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Blog Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/aboutme.png"
	data.Hero.Title = "Blog"
	//  Executes the layout template
	RenderPage(w, "blog", data)
}
