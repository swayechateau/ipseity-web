package routes

import (
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
	Data *template.HTML
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
	hero := ""
	if post.Content.HeroImage != nil {
		hero = *post.Content.HeroImage
	}
	data.Meta.Title = &post.Meta.Title
	data.Meta.Description = &post.Meta.Description
	data.Meta.Keywords = &post.Meta.Keywords
	data.Hero.Image = hero
	data.Hero.Title = post.Content.Title
	c := convertConent(post.Content.ContentType, post.Content.ContentData)
	data.Content = postData{
		Data: &c,
	}

	//  Executes the layout template
	RenderPage(w, "post", data)
}
