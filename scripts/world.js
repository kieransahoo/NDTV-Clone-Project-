import {homeNavbar,particularNavbar} from "../component/navbar.js"

document.getElementById("navbar").innerHTML = particularNavbar();

var x;

getData();


async function getData(){

    console.log("*************")

    let url =`https://ndtvnews-api.herokuapp.com/general?category=world`;

    let res = await fetch(url);

    let data = await res.json();

     x = data.news[0].articles


     console.log(x)

    append(x);
    append1(x)



}



function append(data){

    let container= document.getElementById('worldNews');
    container.innerHTML = null

    
    data.forEach((el) =>{

        let div = document.createElement('div')
        div.id = "World_News_Element";

        let div1 = document.createElement("div")
        div1.id = "innerDiv";

        let img = document.createElement('img');
        img.src = el.image_url;
      

        let p = document.createElement('p');
        p.innerText = el.headline;
        p.style.fontWeight = "bold"
        p.style.fontFamily ="sans-serif"

        let po = document.createElement('p');
        po.innerText = el.posted_date;

        let pr = document.createElement('p');
        pr.innerText = el.description;
        pr.style.color = 'rgb(98, 92, 92)'
        pr.style.fontFamily ="sans-serif"

        div1.append(p,po,pr)
        div.append(img,div1);
        container.append(div);

    })

}


// Trend Api
// https://newsapi.org/v2/top-headlines?country=in&apiKey=14993370fd314a3fb8077a38a89169f1



// var y;

// getDataTrend();


// async function getDataTrend(){

//     let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=14993370fd314a3fb8077a38a89169f1`;

//     let res = await fetch(url);

//     let data = await res.json();
    
//     console.log(data.articles)
//      y = data.articles

//     append1(y);

// }


function append1(data){

    let container= document.getElementById('Trend_News');
    container.innerHTML = null

    
    data.forEach((el) =>{

        let div = document.createElement('div');
        div.id = "trend";

        let img = document.createElement('img');
        img.src = el.image_url;
        img.style.height = "45px"

     

        let p = document.createElement('p');
        p.innerText = el.headline;
        p.style.fontSize = "14px"
        p.style.fontFamily ="sans-serif"
   

       
        let h = document.createElement('hr');
        h.style.marginLeft = "20px";
        h.style.marginRight = "20px";

        div.append(img,p);
        container.append(div,h);

    })

}

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);
