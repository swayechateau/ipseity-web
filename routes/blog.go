package routes

import (
	"fmt"
	"html/template"
	"ipseity-web/api"
	"log"
	"net/http"
)

func BlogHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Blog Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/anime-girl-futuristic-city-computer-short-hair-coffee-25464.jpeg"
	data.Hero.Title = "Blog"
	posts := ConvertApiPosts(state.Posts.All)
	data.Content = &posts
	//  Executes the layout template
	RenderPage(w, "blog", data)
}

type postData struct {
	Data      *template.HTML
	Category  api.Category
	Published string
	Updated   string
}

func PostHandler(w http.ResponseWriter, r *http.Request, slug string) {
	log.Printf("Post Handler")
	data := pageDataTemplate()
	// Get the post from the API
	p, err := api.FetchPost(slug)
	if err != nil {
		log.Printf("Error fetching post: %s", err)
		NotFoundHandler(w, r)
		return
	}

	post := ConvertApiPost(p)
	setMeta(&data, &post.Meta)
	hero := ""
	if post.Content.HeroImage != nil {
		hero = *post.Content.HeroImage
	}
	data.Hero.Image = hero
	data.Hero.Title = post.Content.Title
	data.Hero.Subtitle = setReadtime(*post.Content.ReadTime)
	c := convertConent(post.Content.ContentType, post.Content.ContentData)
	data.Content = postData{
		Data:      &c,
		Category:  post.Categories,
		Published: post.Published,
		Updated:   post.Updated,
	}

	//  Executes the layout template
	RenderPage(w, "post", data)
}

func setReadtime(rT int) string {
	if rT == 1 {
		return "1 minute read"
	}
	return fmt.Sprintf("%d minutes read", rT)
}
