let siteArray;
try {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../sites.json", false);
    xhr.send();
    if (xhr.status === 200) {
        siteArray = JSON.parse(xhr.responseText);
    }
} catch (e) {}
if (!siteArray) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./sites.json", false);
    xhr.send();
    siteArray = JSON.parse(xhr.responseText);
}

let url = window.location.href.toString()
var urlSegments = url.split("/");
var currentSiteName = urlSegments[urlSegments.length - 2];
const siteNo = siteArray.findIndex(obj => obj.href === currentSiteName);

maxLevel = localStorage.getItem('level');
if (siteNo > maxLevel) localStorage.setItem('level', siteNo);

var storedNames = JSON.parse(localStorage.getItem("solvedSites"));

// Check if the Site is already solved
var siteIsSolved = storedNames != null && storedNames.includes(currentSiteName);

const container = document.body;

var link = document.createElement("link");
link.href = "../styles.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName("head")[0].appendChild(link);

const nav = document.createElement("div");
nav.classList.add("nav")
nav.innerHTML = `<a id="prev">Back</a>`
container.appendChild(nav);

if (siteNo > 0) {
    const prevElement = document.getElementById("prev");
    prevElement.href = "../" + siteArray[siteNo - 1].href;
}

//Display the Menu, if the Site is solved
if (siteIsSolved) {
    nav.innerHTML += "| <a id=\"index\" href=\"../menu\">Menu</a> | "

    nextLink = document.createElement("a");
    nextLink.href = "../" + siteArray[siteNo + 1].href;
    nextLink.textContent = "Forward"
    nav.appendChild(nextLink);
    nav.style.display = "block";
}

//Jump tp the next site
function next() {
    if (!siteIsSolved) {
        if (storedNames == null) storedNames = []
        storedNames.push(currentSiteName)
        localStorage.setItem("solvedSites", JSON.stringify(storedNames));
        console.log(storedNames)
    }
    window.location.href = "../" + siteArray[siteNo + 1].href;
}

let clicks = localStorage.getItem('clicks');
document.addEventListener("click", function (event) {
 if (clicks == undefined) clicks = 1
    clicks++
    localStorage.setItem('clicks', clicks)
})
