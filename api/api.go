package api

import (
	"log"
	"sync"
)

var (
	once sync.Once
	mu   sync.Mutex
	url  = "https://api.swaye.dev"
)

type ApiData struct {
	Site     SiteData
	Words    WordsData
	Projects ProjectsData
	Posts    PostsData
	Pages    PagesData
}

func init() {
	// check for chached data
	log.Println("Loading data from cache...")
	data, err := LoadData()
	// if error, fetch data from api
	if err != nil {
		log.Println("Error loading data:", err)
		UpdateCache()
		return
	}
	// set data from cache
	setData(data)
	log.Println("Data loaded from cache.")

}

func UpdateCache() {
	log.Println("Updating API Data...")
	UpdateApiData()
	log.Println("API Data Updated.")
	log.Println("Caching data...")
	if err := SaveDataFromAPI(); err != nil {
		log.Println("Error saving data:", err)
		return
	}
	log.Println("Data cached.")
}

func setData(data ApiData) {
	mu.Lock()
	defer mu.Unlock()
	siteData = data.Site
	wordsData = data.Words
	projectsData = data.Projects
	postsData = data.Posts
	pagesData = data.Pages
}

func GetApiData() ApiData {
	return ApiData{
		Site:     siteData,
		Words:    wordsData,
		Projects: projectsData,
		Posts:    postsData,
		Pages:    pagesData,
	}
}

func UpdateApiData() {
	// Fetch Site Data
	FetchSiteData()
	// Fetch Words Data
	FetchWordData()
	FetchCategoriesData()
	// Fetch Projects Data
	FetchProjectsData()
	FetchFeaturedProjectsData()
	// Fetch Posts Data
	FetchPostsData()
	FetchFeaturedPostsData()
}
