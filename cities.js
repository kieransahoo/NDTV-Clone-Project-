import {getData,displayTreadingNews,displaymidNews} from "../components/citiesFetch.js";

import {filterFun,container} from "../components/citiesHTML.js"

import { homeNavbar,particularNavbar  } from "../components/navbar.js";

let navbar1=document.getElementById("navbar")
navbar1.innerHTML=particularNavbar()

let filterHTML=document.getElementById("filter")
filterHTML.innerHTML=filterFun()

let mainContainer=document.getElementById("container")
mainContainer.innerHTML=container()

let url1="https://ndtvnews-api.herokuapp.com/cities"

let url2="https://ndtvnews-api.herokuapp.com/general?category=india"

let url3="https://ndtvnews-api.herokuapp.com/sports?sport=cricket"

let url4="https://ndtvnews-api.herokuapp.com/general?category=values(latest)&field%20=headline"


let container1=document.getElementById("midNews")

let container2=document.querySelector("#treadingNews")
let className1="inner"

let container3=document.getElementById("rightSideNews")
let className2="innerBox"

let data4;
let main=async ()=>{
     let res1=await getData(url1)
     let data1=res1.news[0].articles

     let res2=await getData(url2)
     let data2=res2.news[0].articles

     let res3=await getData(url3)
     let data3=res3.news[0].articles
    //  console.log(data3)

     let res4=await getData(url4)
      data4=res4.news[0].articles
    //  console.log(data5)

displaymidNews(data1,container1)
displayTreadingNews(data2,container2,className1)
displayTreadingNews(data3,container3,className2,"none")


}
main()




let filter = document.querySelector("select")
filter.addEventListener("change", displayChange)





// //  FILTER METHOD
async function displayChange() {
       let change = document.querySelector("#changeName").value
      //  filter.innerHTML=null


let filterUrl=`https://ndtvnews-api.herokuapp.com/cities?city=${change}`

let res4= await getData(filterUrl)
let data5=res4.news[0].articles
console.log(data5)

  if (change == "") {
//     window.location.reload()
return 
  }


  let selected = data5.filter(function (el) {

     container2.innerHTML = "";

    return el.category == change
  })

  
displaymidNews(selected,container1)
displayTreadingNews(data4,container2,className1)


  let symbol = document.createElement("span")
  symbol.setAttribute("class", "symbol")
  symbol.innerText = ">"

  let heading = document.querySelector(".heading")
  heading.innerText = change
  document.querySelector(".showName").innerText = ">          " + change

}



