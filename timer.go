package main

import (
	"fmt"
	"time"
)

func main() {
	t := time.Date(2019, 2, 19, 21, 0, 0, 0, time.UTC)
	for {
		left := time.Until(t)
		fmt.Printf("\r%02d min %02d sec", int(left.Minutes()), int(left.Seconds())%60)
		time.Sleep(1 * time.Second)
	}
}
