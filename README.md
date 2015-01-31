npm install -g jspm live-server
jspm install
live-server

BUILD:
jspm bundle-sfx --minify lib/main

go to http://localhost:8080/build.html


