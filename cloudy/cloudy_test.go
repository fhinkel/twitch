package cloudy

import (
	"io/ioutil"
	"net/http/httptest"
	"testing"
)

func TestMyFunc(t *testing.T) {
	req := httptest.NewRequest("GET", "/", nil)
	w := httptest.NewRecorder()
	MyFunc(w, req)
	resp := w.Result()

	if got, want := resp.StatusCode, 200; got != want {
		t.Errorf("resp.StatusCode: got %d; want %d", got, want)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Fatalf("ioutil.ReadAll: got unexpected error %v", err)
	}
	defer resp.Body.Close()

	if got, want := string(body), "Hello, world!\n"; got != want {
		t.Errorf("resp.Body: got %q; want %q", got, want)
	}
}
