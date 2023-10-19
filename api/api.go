package api

import (
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
	once.Do(func() {
		UpdateApiData()
	})
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
