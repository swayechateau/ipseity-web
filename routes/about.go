package routes

import (
	"ipseity-web/components"
	"log"
	"net/http"
)

func AboutHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("About Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/aboutme.png"
	data.Hero.Title = "About Me"
	content := components.GetTemplate("about")
	err := content.Execute(w, data)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		log.Println("Template execution error:", err)
	}
}
