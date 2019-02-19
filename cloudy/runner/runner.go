package main

import (
	"log"
	"net/http"

	"github.com/andybons/cloudy"
)

func main() {
	http.HandleFunc("/", cloudy.MyFunc)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
