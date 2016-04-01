
var randomlinks = [
  "http://medinagrill.com",
  "http://www.culinariaschnucks.com/",
  "http://www.reddoorstlouis.com/",
  "https://www.facebook.com/SeoulTaco/",
  "http://www.eatsnarfs.com/locations/stlouis-downtownatthemx",
  "http://picklesdelistl.com/"
];

function randomlink(){
  window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
  window.refresh()
}
