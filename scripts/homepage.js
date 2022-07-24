import {homeNavbar} from "../components/navbar.js";
// import {footer} from "../components/footer.js"

// document.querySelector("#foot").innerHTML= footer()

document.querySelector("#nav").innerHTML= homeNavbar();





let getapi = async  () => {
    try{
    let url = `https://ndtvnews-api.herokuapp.com/general?category=india`;

        let reso = await fetch(url);
        let data = await reso.json();

        // console.log(data.news[0].articles);
        append2(data.news[0].articles);


    } catch(err){
     console.log(err);
    }
}

getapi();

let append2 = (data) =>{
 document.getElementById("topstory").innerHTML = null;

for(var i = 0; i<data.length; i++)
{
  
if(i<=5)
  {
    // console.log(data[i]);
    let card = document.createElement("div");
     card.setAttribute("id","newslist")

     let image = document.createElement("img");
      image.src = data[i].image_url;
      image.setAttribute("id","sidebarimage")
     
     let title = document.createElement("h3")
      title.textContent = data[i].headline;
      title.setAttribute("id","sidetitel")

      card.append(image,title)
    
          let mainbox = document.getElementById("topstory")
          mainbox.append(card);
     
  }
}

}

let getapi1 = async  () => {
    
        try{
        let url = `https://ndtvnews-api.herokuapp.com/general?category=world`;
    
            let reso = await fetch(url);
            let data = await reso.json();
    
            console.log(data.news[0].articles);
            appendi(data.news[0].articles);
    
    
        } catch(err){
         console.log(err);
        }
    }
    
    getapi1();

    const appendi = (data) =>{
     
        for(var i = 0; i<data.length; i++)
{
  
if(i<=20)
  {
    // console.log(data[i]);
    let card = document.createElement("div");
     card.setAttribute("id","newslist")

     let image = document.createElement("img");
      image.src = data[i].image_url;
      image.setAttribute("id","imgmid")
     
     let title = document.createElement("h3")
      title.textContent = data[i].headline;
      title.setAttribute("id","h4mid")

      card.append(image,title)
    
          let mainbox = document.getElementById("lowermid")
          mainbox.append(card); 
     
  }
}
 }

 let searchkeyword
 

 let search = async (searchkeyword) =>{
 
  searchkeyword = document.getElementById("searchbox").value;
  let url = `https://ndtvnews-api.herokuapp.com/general?category=${searchkeyword}`
  
  let reso = await fetch(url);
  let data = await reso.json();
  console.log(data);
  append1(data.news[0].articles)
  
  } 
  

document.getElementById("searchbox").addEventListener("keypress",function(){
  if(event.key==="Enter")
  {

      // getnewsdata(document.getElementById("seachbox").value);
      search(searchkeyword)

  }
 })


function append1(elem){
  document.getElementById("box1").innerHTML = null;

  elem.map(function(ind){


let card = document.createElement("div")
card.setAttribute("id","card1")

let image = document.createElement("img")
image.src = ind.image_url
 image.setAttribute("id","worldimage")

 let title = document.createElement("h3")
 title.setAttribute("id","worldtitle")
 title.textContent = ind.headline;

 card.append(image,title)
 let mainbox = document.getElementById("box1")
 mainbox.append(card); 
   })

}






// let url;
// let query;


// let getData = async (query) =>{
//         query = document.querySelector("#search_input").value;
//         url = `https://masai-api.herokuapp.com/news?q=${query}`
//         let res = await fetch(url)
//         let data = await res.json()
//         append(data.articles)
   
// }

// document.querySelector("#search_input").addEventListener("keypress",function(){
//     if(event.key === "Enter"){
//         getData(query)
//     }
// })

// let append = (data) =>{
//     document.querySelector("#results").innerHTML="";

//     data.forEach(function(elem){
//         let image = document.createElement("img")
//         image.src = elem.urlToImage

//         let title = document.createElement("h3")
//         title.innerText = elem.title

//         let desc = document.createElement("p")
//         desc.innerText = elem.description

//         let details = document.createElement("div")
//         details.append(title,desc)

//         let div = document.createElement("div")
//         div.append(image,details)
//         div.addEventListener("click",function(){
//             setNews(elem);
//         })

//         document.querySelector("#results").append(div)
//     })
// }



 







