var tabs = document.getElementById("tabs").getElementsByTagName("li");
var work = document.getElementById("work");
var recreating = document.getElementById("recreating");
recreating.style.display = "none";

// tabs[0].classList.add("activeTab");

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
//---------------------------------------------------------
// make the second tab active for easier manipulation

// tabs[1].classList.add("activeTab");
// work.style.display = "none";
// recreating.style.display = "block";
//---------------------------------------------------------


//==========================================================
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
        var sibling = this.nextElementSibling;
        if (sibling.classList.contains("fullImgHidden")) {
            modalImg.src = sibling.src;
        } else {
            modalImg.src = this.src;
        }
        modal.style.display = "block";
        captionText.innerHTML = this.alt;



    });
}
// myImgHidden

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//==========================================================

// open images through h4
var h4 = document.querySelectorAll("h4");
for (var i = 0; i < h4.length; i++) {
    h4[i].addEventListener("click", function () {
        modalImg.src = this.title;        
        modal.style.display = "block";
        captionText.innerHTML = this.dataset.caption; // this.alt;
    });
}