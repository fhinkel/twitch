package cloudy

import (
	"fmt"
	"image"
	"net/http"
	"os"

	"github.com/andybons/ascii"

	_ "image/png"
)

// MyFunc has a comment that makes linter happy
func MyFunc(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	f, err := os.Open("gopher.png")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer f.Close()

	src, _, err := image.Decode(f)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	art := ascii.Thumbnail(src, 80, 80)
	fmt.Fprintf(w, `<pre style="line-height:7px">%s</pre>`, art)
}
