var inputName = document.getElementById("name");
var btnCriar = document.getElementById("btnCriar");

var userPhoto = document.getElementById("userPhoto");
var userName = document.getElementById("userName");
var userLocation = document.getElementById("userLocation");
var userBio = document.getElementById("userBio");
var userLink = document.getElementById("userLink");

btnCriar.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${inputName.value}`)
    .then((response) => response.json())
    .then((data) => {
      userPhoto.setAttribute("src", data.avatar_url);
      userLink.setAttribute("href", data.html_url);
      userName.innerHTML = data.name;
      userBio.innerHTML = data.bio;
      userLocation.innerHTML = data.location;
    });
});
