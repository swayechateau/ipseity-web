package api

import (
	"encoding/json"
	"log"
	"os"
)

// Define the path to the JSON file on the server.
var filePath = "./data.json"

func SaveDataFromAPI() error {
	// Make an HTTP GET request to the API.
	apiData := GetApiData()

	err := StoreData(apiData)
	if err != nil {
		log.Println("Error storing data as JSON:", err)
		return err
	}
	log.Println("Data stored as JSON successfully.")
	return nil
}

func StoreData(data ApiData) error {
	// Marshal the data into JSON format.
	jsonData, err := json.Marshal(data)
	if err != nil {
		return err
	}

	// Write the JSON data to the file.
	err = os.WriteFile(filePath, jsonData, 0644)
	if err != nil {
		return err
	}

	return nil
}

func LoadData() (ApiData, error) {
	var loadedData ApiData
	// Read the JSON data from the file.
	jsonData, err := os.ReadFile(filePath)
	if err != nil {
		return loadedData, err
	}

	// Unmarshal the JSON data into a struct.
	if err := json.Unmarshal(jsonData, &loadedData); err != nil {
		return loadedData, err
	}

	return loadedData, nil
}
