function button(){
    document.getElementById("nav").classList.toggle("active");
}


let slideIndex = 0;
showSlides();

function showSlides() {
 let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}



// 
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function login(name){
      document.querySelector(".user_profile").style.display = "inline";
      document.querySelector(".modal").style.display = "none";
      document.getElementById("user_name").innerHTML = name;
      document.getElementById('username').value="";
      document.getElementById('pass').value="";
    }
    function logout(){
        document.querySelector(".user_profile").style.display = "none";
        document.getElementById("btn_white").innerHTML = "Log In";
    }

function windowClose() {
      window.open('','_parent','');
      window.close();
    }

function big(element){
  element.style.fontSize = "20px";
}
function small(element){
  element.style.fontSize = "14px";
}


//

function initMap() {
  const myLatlng = { lat:41.39085289159617, lng: 2.1495850503572442};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: myLatlng,
  });
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Barcelona",
    icon: "https://img.icons8.com/metro/26/000000/university.png",
  });
const market = new google.maps.Marker({
    position: { lat:  46.95175130973897, lng: 7.442349743991541},
    map,
    title: "Bern",
  });
   marker.addListener("click", () => {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
    const marken = new google.maps.Marker({
    position: { lat: 51.52533229616128, lng: -0.12595026328308215},
    map,
    title: "Abu-Dhabi",
  });
   marken.addListener("click", () => {
    map.setZoom(15);
    map.setCenter(marken.getPosition());
  });
    market.addListener("click", () => {
    map.setZoom(15);
    map.setCenter(market.getPosition());
  });

  flightPath.setMap(map);
}