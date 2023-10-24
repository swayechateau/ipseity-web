package routes

import (
	"ipseity-web/api"
	"ipseity-web/convert"
	"log"
	"net/http"
)

func BlogHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Blog Handler")
	data := pageDataTemplate()
	data.Hero.Image = "https://swayechateau.com/media/image/anime-girl-futuristic-city-computer-short-hair-coffee-25464.jpeg"
	data.Hero.Title = "Blog"
	posts := ConvertApiPosts(state.Posts.All)
	data.Posts = &posts
	//  Executes the layout template
	RenderPage(w, "blog", data)
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
	data.Post = &post
	cType := ""
	var content interface{}
	if post.Content.ContentType != nil {
		cType = *post.Content.ContentType
		if cType == "editorjs" {
			content = post.Content.ContentData.EditorJs
		}
		if cType == "markdown" {
			content = post.Content.ContentData.Markdown
		}
	}
	log.Printf("Content Type: %s", cType)
	log.Printf("Content Data: %v", post.Content.ContentData)

	c := convert.ConvertToHtml(cType, content)
	log.Printf("Content: %s", c)
	data.Content = &c

	//  Executes the layout template
	RenderPage(w, "post", data)
}
