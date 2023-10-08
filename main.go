package main

import (
	"log"
	"net/http"
)

func main() {
	LoadTemplates()

	http.HandleFunc("/api", apiHandler)

	fs := http.FileServer(http.Dir("./templates/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	AppHandler("/", SiteHandler)

	log.Printf("Server started on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

}
