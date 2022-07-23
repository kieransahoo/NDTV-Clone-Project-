let getapi = async  () => {
    try{
    let url = `https://ndtvnews-api.herokuapp.com/general?category=india`;

        let reso = await fetch(url);
        let data = await reso.json();

        // console.log(data.news[0].articles);
        append(data.news[0].articles);


    } catch(err){
     console.log(err);
    }
}

getapi();

let append = (data) =>{
 document.getElementById("topstory").innerHTML = null;

for(var i = 0; i<data.length; i++)
{
  
if(i<=10)
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
  
if(i<=5)
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

 document.getElementById("seachbox").addEventListener("keypress",function(e){
if(e.key=="Enter")
{
    // getnewsdata(document.getElementById("seachbox").value);
    console.log(document.getElementById("seachbox").value)
}
 })
 
 







