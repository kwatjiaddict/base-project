import loadPage from "./loadPageFromNav.js";

function loadNav() {
    
    loadSideNav();

    fetch("../nav.html")
        .then(function respons(value) {
            return value.text();
        })
        .then(result => {
            document.querySelectorAll(".topnav").forEach(elm => {
                elm.innerHTML = result
            })

            document.querySelectorAll(".topnav a, .sidenav a").forEach(elm => {
                elm.addEventListener("click", function (event) {
                    var sidenav = document.querySelector(".sidenav");
                    M.Sidenav.getInstance(sidenav).close();
                })
            })
        })
        .catch(reject => {
            document.querySelectorAll(".topnav, .sidenav").forEach(elem => {
                elem.innerHTML = "<h2>file tidak ada</h2>"
            })
        })

    loadNavRight();
}


function loadNavRight() {
    fetch("../navRight.html")
        .then(function respons(value) {
            return value.text();
        })
        .then(result => {
            document.querySelectorAll(".topnavright").forEach(elm => {
                elm.innerHTML = result
            })

            document.querySelectorAll(".topnavright a, .sidenav a").forEach(elm => {
                elm.addEventListener("click", function (event) {
                    var sidenav = document.querySelector(".sidenav");
                    M.Sidenav.getInstance(sidenav).close();
                })
            })
        })
        .catch(reject => {
            document.querySelectorAll(".topnavright, .sidenav").forEach(elem => {
                elem.innerHTML = "<h2>file tidak ada</h2>"
            })
        })
}


function loadSideNav() {
    const urls = ["../nav.html","../navRight.html"];

    Promise.all(urls.map(url => fetch(url)
        .then(resolve => {
            return resolve.text();
        })
        .then(res => {
            console.log(res)
            return res
        })
    )).then(resolve => {
        document.querySelector(".sidenav").innerHTML = resolve;
    })
}


export {loadNav};