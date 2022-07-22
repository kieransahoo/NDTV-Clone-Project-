let categories = () =>{
    return ` <h3 id="all">All</h3>
    <h3 id="news">News</h3>
    <h3 id="movies">Movies</h3>
    <h3 id="sports">Sports</h3>
    <h3 id="business">Business</h3>
    <h3 id="gadgets">Gadgets</h3>
    <h3 id="auto">Politics</h3>
    <h3 id="food">Food</h3>
    <h3 id="khabar">Khabar</h3>`
}

let categoriesButton = () =>{
    let all = document.querySelector("#all");
    all.addEventListener("click",alll)
    function alll(){
      window.location.href="trending.html"
    }
  
    let news = document.querySelector("#news");
    news.addEventListener("click",newss);
    function newss(){
      window.location.href="news.html"
    }
  
    let movies = document.querySelector("#movies");
    movies.addEventListener("click",moviess);
    function moviess(){
      window.location.href="movies.html"
    }

    let sports = document.querySelector("#sports");
    sports.addEventListener("click",sportss);
    function sportss(){
      window.location.href="sports.html"
    }

    let business = document.querySelector("#business");
    business.addEventListener("click",businesss);
    function businesss(){
      window.location.href="business.html"
    }

    let gadgets = document.querySelector("#gadgets");
    gadgets.addEventListener("click",gadgetss);
    function gadgetss(){
      window.location.href="gadgets.html"
    }

    let food = document.querySelector("#food");
    food.addEventListener("click",foodss);
    function foodss(){
      window.location.href="food.html"
    }

    let auto = document.querySelector("#auto");
    auto.addEventListener("click",autoss);
    function autoss(){
      window.location.href="auto.html"
    }
}
export {categories,categoriesButton}