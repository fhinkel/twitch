package cloudy

import (
	"fmt"
	"net/http"
)

// MyFunc has a comment that makes linter happy
func MyFunc(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	fmt.Fprintln(w, "Hello, world!")
}
