var tabs = document.getElementById("tabs").getElementsByTagName("li");
var work = document.getElementById("work");
var recreating = document.getElementById("recreating");
recreating.style.display = "none";
//var work = document.getElementsByClassName("work");

tabs[0].classList.add("activeTab");
//document.getElementsByClassName("work").style.backgroundColor = "lightblue";

tabs[0].addEventListener("click", function () {
    tabs[0].classList.add("activeTab");
    tabs[1].classList.remove("activeTab");

    work.style.display = "block";
    recreating.style.display = "none";
});

tabs[1].addEventListener("click", function () {
    tabs[1].classList.add("activeTab");
    tabs[0].classList.remove("activeTab");

    work.style.display = "none";
    recreating.style.display = "block";
});



// make the second tab active for easier manipulation

//tabs[1].classList.add("activeTab");
//work.style.display = "none";
//recreating.style.display = "block";









var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};
img2.onclick = function () {
    var img2 = document.querySelector('.fullImgHidden');
    modal.style.display = "block";
    modalImg.src = img2.src;
    captionText.innerHTML = img2.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
