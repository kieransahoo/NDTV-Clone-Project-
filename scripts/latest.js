import { homeNavbar, particularNavbar } from "../components/navbar.js";

import { getData, displayTreadingNews, displaymidNews } from "../components/citiesFetch.js";

import { filterFun, container } from "../components/citiesHTML.js"


let navbar2 = document.getElementById("latestNavbar")
navbar2.innerHTML = particularNavbar()

let mainContainer = document.getElementById("container")
mainContainer.innerHTML = container()


let latestUrl = "https://ndtvnews-api.herokuapp.com/general?category=latest"

let indiaUrl = "https://ndtvnews-api.herokuapp.com/general?category=india"


let container1 = document.getElementById("midNews")


let container2 = document.querySelector("#treadingNews")
let className1 = "inner"

let main = async () => {
    let res1 = await getData(latestUrl)
    let data1 = res1.news[0].articles
    // console.log(data1)

    let res2 = await getData(indiaUrl)
    let data2 = res2.news[0].articles
    console.log(data2)



    displaymidNews(data1, container1)
    displayTreadingNews(data2, container2, className1)

}
main()