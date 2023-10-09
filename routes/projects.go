package routes

import (
	"ipseity-web/components"
	"log"
	"net/http"
)

func ProjectsHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Project Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/futaba-computer.jpg"
	data.Hero.Title = "Projects"
	content := components.GetTemplate("projects")
	err := content.Execute(w, data)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		log.Println("Template execution error:", err)
	}
}
