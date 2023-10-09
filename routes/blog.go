package routes

import (
	"ipseity-web/components"
	"log"
	"net/http"
)

func BlogHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Blog Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/aboutme.png"
	data.Hero.Title = "Blog"
	//  Executes the layout template
	content := components.GetTemplate("blog")
	err := content.Execute(w, data)
	// Executes the content subtemplate and inserts it into the layout
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		log.Println("Template execution error:", err)
	}
}
