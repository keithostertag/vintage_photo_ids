


// Global array of Image entries
var Image = [
            "http://card16.com/photos/images/1976-ID6927web.jpg",
            "http://card16.com/photos/images/1977-ID6926web.jpg",
            "http://card16.com/photos/images/1980a-ID6928web.jpg",
            "http://card16.com/photos/images/1980b-ID6925web.jpg",
            "http://card16.com/photos/images/1981-ID6924web.jpg",
            "http://card16.com/photos/images/1983-ID6929web.jpg",
            "http://card16.com/photos/images/1984-ID6923web.jpg",
            "http://card16.com/photos/images/1986-ID6934web.jpg",
            "http://card16.com/photos/images/1989-ID6920web.jpg",
            "http://card16.com/photos/images/1991-ID6930web.jpg",
            "http://card16.com/photos/images/1992a-ID6932web.jpg",
            "http://card16.com/photos/images/1992b-ID6931web.jpg",
            "http://card16.com/photos/images/1995-ID6935web.jpg",
            "http://card16.com/photos/images/1997a-ID6919web.jpg",
            "http://card16.com/photos/images/2001a-ID6936web.jpg",
            "http://card16.com/photos/images/2001b-ID6921web.jpg"];


function showIntro()  {

        var ImageText = "<img onclick='showImage()' src = http://card16.com/3/bullseye.png></img>";
        document.getElementById("image").innerHTML = ImageText;
      }

//Show one random Image
function showImage() {
var ImageText = "";
var i = Math.floor(Math.random() * Image.length);
      ImageText += "<img onclick='showImage()' src=" + Image[i] + "></img>";

  // Set the Image HTML code on the page
  document.getElementById("image").innerHTML = ImageText;

}
