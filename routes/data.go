package routes

import (
	"html/template"
	"ipseity-web/api"
	"ipseity-web/convert"
	"log"
	"strings"
	"time"
)

type TimeText struct {
	Updated   string
	Published string
}

type PageLanguages struct {
	Current   string
	Default   string
	Available []string
}

type PageMeta struct {
	Title       *string
	Description *string
	Image       *string
	Keywords    *string
}

type PageNavigation struct {
	Home     map[string]string
	About    map[string]string
	Projects map[string]string
	Blog     map[string]string
}

type PageData struct {
	Languages PageLanguages
	Meta      PageMeta
	Socials   []api.Social
	UseHero   bool
	Hero      *PageHero
	Founded   *int
	Routes    []Route
	Words     pageTranslations
	Content   interface{}
}

type Route struct {
	Name string
	Icon string
	Link string
}

type PageHero struct {
	Large     bool
	TitleGlow bool
	Title     string
	Subtitle  string
	GlowText  string
	Image     string
}

type ProjectData struct {
	Index      string
	Url        string
	GitHubLink string
	LiveLink   string
	OpenSource bool
	CaseStudy  *string
	Meta       api.Meta
	Categories api.Category
	Content    api.Content
}

type PostData struct {
	Index      string
	Link       string
	Published  string
	Updated    string
	Meta       api.Meta
	Categories api.Category
	Content    api.Content
	Time       TimeText
}

var state = api.GetApiData()
var Lang = PageLanguages{
	Current:   state.Site.Languages.Default,
	Default:   state.Site.Languages.Default,
	Available: state.Site.Languages.Available,
}

func PollApi() {
	updateInterval := 1 // Hours
	// Poll the API and store the data in a JSON file on the server periodically.
	// Convert updateInterval to time.Duration before multiplying.
	ticker := time.NewTicker(time.Duration(updateInterval) * time.Hour)
	for range ticker.C {
		log.Println("Hourly API Check...")
		api.UpdateCache()
		state = api.GetApiData()
	}
}

func ConvertApiProjects(projects []api.Project) []ProjectData {
	var projectsData []ProjectData
	for _, project := range projects {
		log.Printf("Project: %v", project)
		projectsData = append(projectsData, ConvertApiProject(project))
	}
	return projectsData
}

func ConvertApiProject(project api.Project) ProjectData {
	baseImage := "/static/project-image.jpg"
	translation := project.Translations[Lang.Current]
	caseStudy := ""
	if project.CaseStudyIndex != "" {
		caseStudy = Lang.Current + "/blog/" + project.CaseStudyIndex
	}
	url := Lang.Current + "/projects/" + project.URIIndex
	meta := translation.Meta
	categories := translation.Categories
	subs := sortSubCategories(*categories)
	categories.Sub = &subs
	content := translation.Content
	log.Printf("Hero Image: %v", content.HeroImage)

	var image string = *content.HeroImage
	log.Printf("Image: %v", image)
	if isBlank(image) {
		content.HeroImage = &baseImage
	}

	return ProjectData{
		Index:      project.URIIndex,
		Url:        url,
		GitHubLink: project.GitHubLink,
		LiveLink:   project.LiveLink,
		CaseStudy:  &caseStudy,
		OpenSource: project.OpenSource,
		Meta:       *meta,
		Categories: *categories,
		Content:    *content,
	}
}

func ConvertApiPosts(posts []api.Post) []PostData {
	var postsData []PostData
	for _, post := range posts {
		log.Printf("Project: %v", post)
		postsData = append(postsData, ConvertApiPost(post))
	}
	return postsData
}

func ConvertApiPost(post api.Post) PostData {
	translation := post.Translations[Lang.Current]
	meta := translation.Meta
	categories := translation.Categories
	subs := sortSubCategories(*categories)
	categories.Sub = &subs
	content := translation.Content
	link := Lang.Current + "/blog/" + post.URIIndex
	return PostData{
		Index:      post.URIIndex,
		Link:       link,
		Published:  post.PublishedAt,
		Updated:    post.UpdatedAt,
		Meta:       *meta,
		Categories: *categories,
		Content:    *content,
		Time: TimeText{
			Updated:   setTimeText(post.UpdatedAt),
			Published: setTimeText(post.PublishedAt),
		},
	}
}

func ConvertApiWords(words map[string]api.Word) map[string]string {
	wordsData := make(map[string]string)
	for key, word := range words {
		wordsData[key] = ConvertApiWord(word)
	}
	return wordsData
}

func ConvertApiWord(word api.Word) string {
	return word.Translation[Lang.Current]
}

func isBlank(s string) bool {
	return len(strings.TrimSpace(s)) == 0
}
func sortSubCategories(categories api.Category) []string {
	var sorted []string
	for _, category := range *categories.Sub {
		if category != categories.Main {
			sorted = append(sorted, category)
		}
	}
	return sorted
}
func convertConent(contentType *string, c api.ContentData) template.HTML {
	var content interface{}
	cType := ""
	if contentType != nil {
		cType = *contentType
	}

	if cType == "editorjs" {
		content = c.EditorJs
	}
	if cType == "markdown" {
		content = c.Markdown
	}

	log.Printf("Content Type: %s", cType)
	log.Printf("Content Data: %v", content)

	html := convert.ConvertToHtml(cType, content)
	log.Printf("Content: %s", html)
	return html
}

func setMeta(data *PageData, meta *api.Meta) {
	data.Meta.Title = &meta.Title
	data.Meta.Description = &meta.Description
	data.Meta.Keywords = &meta.Keywords
}

type pageTranslations struct {
	Home             string
	About            string
	Projects         string
	Blog             string
	ViewDemo         string
	OpenSource       string
	ViewCode         string
	CaseStudy        string
	FeaturedProjects string
	RecentPosts      string
	RecentVideos     string
	ReadTime         string
	XMinuteRead      string
	AboutMe          string
	Contact          string
	Updated          string
	Published        string
	CommentsDisabled string
}

func getPageTranslations() pageTranslations {
	words := getWords()
	data := pageTranslations{
		Home:             words["home"],
		About:            words["about"],
		Projects:         words["projects"],
		Blog:             words["blog"],
		ViewDemo:         words["viewDemo"],
		OpenSource:       words["openSource"],
		ViewCode:         words["viewCode"],
		CaseStudy:        words["caseStudy"],
		FeaturedProjects: words["featuredProjects"],
		RecentPosts:      words["recentPosts"],
		RecentVideos:     words["recentVideos"],
		Updated:          words["updated"],
		Published:        words["published"],
		Contact:          words["contact"],
		ReadTime:         words["readTime"],
		XMinuteRead:      words["xMinuteRead"],
		AboutMe:          words["aboutMe"],
		CommentsDisabled: words["commentsDisabled"],
	}
	return data
}

func getWords() map[string]string {
	return ConvertApiWords(state.Words.All)
}

func setTimeText(timeStamp string) string {
	t, err := time.Parse(time.RFC3339, timeStamp)
	if err != nil {
		log.Printf("Error parsing time: %s", err)
		return ""
	}
	return t.Format("January 2, 2006")
}
