import {articles} from '../components/test.js';
import {homeNavbar} from "../components/navbar.js"

document.querySelector("#navbar").innerHTML= homeNavbar()

console.log(articles)

window.addEventListener("load",function (){
    displayNews(articles); // main column
    displayLatest(articles); //left column
    displayRight(articles); //right column
})


// Search Function for Headline

let searchkeyword
 let search = async (searchkeyword) =>{
 
  searchkeyword = document.getElementById("searchbox").value;
  let url = `https://ndtvnews-api.herokuapp.com/general?category=${searchkeyword}`
  
  let reso = await fetch(url);
  let data = await reso.json();
  console.log(data);
  appendSearch(data.news[0].articles)
  
  } 
  

document.getElementById("searchbox").addEventListener("keypress",function(){
  if(event.key==="Enter")
  {
      search(searchkeyword)
  }
 })

function appendSearch(data){
document.getElementById("search-cont").innerHTML = null;

  data.forEach(function(elm){
        let card = document.createElement("div")
        card.className="search-divs"
        let imgdiv = document.createElement("div")
        imgdiv.className="search-img-div"
        let image = document.createElement("img")
        image.className="search-img"
        image.src = elm.image_url
        imgdiv.append(image)

        let title = document.createElement("h2")
        title.textContent = elm.headline;
        card.append(imgdiv,title)
        document.getElementById("search-cont").append(card); 
   })

}

function displayNews(articles){
    articles.forEach(function(elem,index) {
        if(index<31){
        let div = document.createElement("div");
        let firstdiv = document.createElement("div");
        let heading = document.createElement("p");
        heading.innerText = elem.headline
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        img.setAttribute("loading","lazy")
       firstdiv.append(img,heading);
        let innerDiv = document.createElement("div");
        let btn = document.createElement("button");
        let type= document.createElement("p");
        type.innerText = elem.category
        // var today = new Date;
        // type.innerText = (today.getMonth()+1)+'-'+today.getDate();;
        btn.innerText = "Read Later"
        innerDiv.append(type,btn);

        div.append(innerDiv,firstdiv);
        btn.addEventListener("click",function(){
            flag = readLater(elem);
        });
            
        document.querySelector("#mainContent").appendChild(div);
    }
    });
}

function displayLatest(articles){

    let filtered  = articles.filter(function(elem){
        return elem.category === "latest";
    });

    filtered.forEach(function(elem,index){
        if(index<30){
        let div = document.createElement("div");
        let firstdiv = document.createElement("div");
        let heading = document.createElement("p");
        heading.innerText = elem.headline;
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        img.setAttribute("loading","lazy")
        firstdiv.append(img,heading);

        let innerDiv = document.createElement("div");
        let btn = document.createElement("button");
        let type= document.createElement("p");
        type.innerText = elem.category;
        btn.innerText = "Read Later"
        innerDiv.append(type,btn)
        div.append(innerDiv,firstdiv);
        btn.addEventListener("click",function(){
            readLater(elem);
        })
        
        document.querySelector("#leftContent").appendChild(div);
    }
    })
}

function displayRight(articles){

    let filtered  = articles.filter(function(elem){
        return elem.category === "football" || elem.category === "cricket" || elem.category === "tennis";
    }); 

    filtered.forEach(function(elem,index){
        if(index<30){
        let div = document.createElement("div");

        let firstdiv = document.createElement("div");
        let heading = document.createElement("p");
        heading.innerText = elem.headline;
        let img = document.createElement("img");
        img.setAttribute("src",elem.imageUrl);
        img.setAttribute("loading","lazy")
        firstdiv.append(img,heading);
        let innerDiv = document.createElement("div");
        let btn = document.createElement("button");
        let type= document.createElement("p");
        type.innerText = elem.category;
        btn.innerText = "Read Later"
        innerDiv.append(type,btn)
        div.append(innerDiv,firstdiv);
        
        btn.addEventListener("click",function(){
            readLater(elem);
        })
        document.querySelector("#rightContent").appendChild(div);
    }
    })


}

let redLaterData = JSON.parse(localStorage.getItem("readLaterArticles")) || [];
function readLater(elem){
    redLaterData.push(elem);
    localStorage.setItem("readLaterArticles",JSON.stringify(redLaterData));
    window.alert("Article added to Read Later")
}

