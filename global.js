const siteArray = [
    {
        title: "Buttons",
        img: "start.jpg",
        href: "/",
        description: "Hello"
    },
    {
        title: "Lines",
        img: "linefun.png",
        href: "lines",
        description: "Hello"
    },
    {
        title: "Nothing",
        img: "nonexisting.png",
        href: "nonexisting",
        description: "Hello"
    },
    {
        title: "Planet Storm",
        img: "planetStorm.png",
        href: "planets",
        description: "Hello"
    },
    {
        title: "Sessellift",
        img: "sessellift.png",
        href: "sessellift",
        description: "Hello"
    },
    {
        title: "Artist",
        img: "artist.png",
        href: "artist",
        description: "Hello"
    },
    {
        title: "Secret Words",
        img: "secretWords.png",
        href: "secret",
        description: "Hello"
    },
    {
        title: "Worker",
        img: "worker.png",
        href: "worker",
        description: "Hello"
    },
    {
        title: "Screens",
        img: "screens.jpeg",
        href: "screens",
        description: "Hello"
    },
    {
        title: "Knowledge",
        img: "knowledge.png",
        href: "knowledge",
        description: "Hello"
    },
    {
        title: "Decisions",
        img: "decisions.png",
        href: "decisions",
        description: "Hello"
    },
    {
        title: "Reward",
        img: "reward.png",
        href: "reward",
        description: "Hello"
    },
    {
        title: "Serious",
        img: "serious.png",
        href: "serious",
        description: "Hello"
    },
    {
        title: "Flow",
        img: "flow.png",
        href: "flow",
        description: "Hello"
    },
    {
        title: "Boring",
        img: "boring.png",
        href: "boring",
        description: "Hello"
    },
    {
        title: "Color Lines",
        img: "colorlines.png",
        href: "colorlines",
        description: "Hello"
    },
    {
        title: "Light",
        img: "light.jpg",
        href: "light",
        description: "Hello"
    },
    {
        title: "Accident",
        img: "accident.png",
        href: "accident",
        description: "Hello"
    },
    {
        title: "Rich",
        img: "rich.jpeg",
        href: "rich",
        description: "Hello"
    },
    {
        title: "Good",
        img: "good.png",
        href: "good",
        description: "Hello"
    },
    {
        title: "Relationship",
        img: "relationship.png",
        href: "relationship",
        description: "We get along well"
    },
    {
        title: "Landscape",
        img: "landscape.png",
        href: "landscape",
        description: "mindsweep"
    },
    {
        title: "End",
        img: "end.png",
        href: "end",
        description: "Hello"
    }
]

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
