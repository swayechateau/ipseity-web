package main

import (
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", indexHandler)

	http.HandleFunc("/api", apiHandler)

	fs := http.FileServer(http.Dir("./templates/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}

	log.Printf("Server started on port 8080")

}
