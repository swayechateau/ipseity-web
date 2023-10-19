package main

import (
	"ipseity-web/routes"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/api", routes.ApiHandler)
	fs := http.FileServer(http.Dir("./templates/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	routes.AppHandler("/", routes.SiteHandler)
	log.Printf("Server started on port 8081")
	log.Fatal(http.ListenAndServe(":8081", nil))
}
