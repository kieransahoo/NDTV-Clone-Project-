

import { getData, displayTreadingNews, displaymidNews } from "../components/citiesFetch.js";

const btn = document.querySelector('.btn'),
     input = document.querySelector('.input')

btn.addEventListener("click", () => {
     btn.classList.toggle('close')
     input.classList.toggle('inclicked')

})


let btn1 = document.querySelector("#query")
btn1.addEventListener("input", function () {
     debouncing(main, 1000)
})

let urlFun1 = (query) => {

     return `https://ndtvnews-api.herokuapp.com/general?category=${query}`
}



let container = document.querySelector("#midNews")


async function main() {

     let query = document.querySelector("#query").value

     let res1 = await getData(urlFun1(query))
     let data1 = res1.news[0].articles


     displaymidNews(data1, container)
}


let id
function debouncing(func, delay) {
     if (id) {
          clearTimeout(id)
     }
     id = setTimeout(function () {
          func();
     }, delay)
}  
