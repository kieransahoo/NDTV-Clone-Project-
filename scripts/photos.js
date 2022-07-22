import {particularNavbar} from "../components/navbar.js"

document.querySelector("#nav").innerHTML= particularNavbar()


let featured = [
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/i-liger-i-trail_637941021962826448/637941021962826448_640x480.jpeg",
        title : "Liger Trailer Launch: Vijay Deverakonda, Ranveer Singh And The Great T-Shirt Swap",
        category : "Entertainment",
        Date : "Jul 22, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/arjun-kapoor-ta_637940216451146656/637940216451146656_640x480.jpeg",
        title : "Keeping Up With Shamshera Stars Ranbir, Vaani And Sanjay Dutt",
        category : "Entertainment",
        Date : "Jul 22, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/at-the-gray-man_637940073015000381/637940073015000381_640x480.jpeg",
        title : "Arjun Kapoor-Tara Sutaria And Janhvi Kapoor's Promotional Diaries",
        category : "Entertainment",
        Date : "Jul 22, 2022"
    }
]

let news = [
    {
        image : "https://drop.ndtv.com/albums/NEWS/how-fast-fashio_637938582805631287/637939103224269379_640x480.jpeg",
        title : "How Fast Fashion Is Affecting Our Climate?",
        category : "News",
        Date : "Jul 18, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/NEWS/sri-lanka-prote_637929833757428174/637929833757428174_640x480.jpeg",
        title : "In Pictures: Protesters Break Into Sri Lanka President's Home",
        category : "News",
        Date : "Jul 09, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/NEWS/heavy-rain-in-d_637924782580430537/637924786435857466_640x480.jpeg",
        title : "Pics: Heavy Rain In Delhi, Flooded Roads, Traffic Hit",
        category : "News",
        Date : "Jul 03, 2022"
    }
]

let entertainment = [
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/i-liger-i-trail_637941021962826448/637941021962826448_640x480.jpeg",
        title : "Liger Trailer Launch: Vijay Deverakonda, Ranveer Singh And The Great T-Shirt Swap",
        category : "Entertainment",
        Date : "Jul 22, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/arjun-kapoor-ta_637940216451146656/637940216451146656_640x480.jpeg",
        title : "Keeping Up With Shamshera Stars Ranbir, Vaani And Sanjay Dutt",
        category : "Entertainment",
        Date : "Jul 22, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/at-the-gray-man_637940073015000381/637940073015000381_640x480.jpeg",
        title : "Arjun Kapoor-Tara Sutaria And Janhvi Kapoor's Promotional Diaries",
        category : "Entertainment",
        Date : "Jul 22, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/at-the-gray-man_637940073015000381/637940073015000381_640x480.jpeg",
        title : "At The Gray Man Premiere: Dhanush, Vicky Kaushal, Jacqueline And Other Stars",
        category : "Entertainment",
        Date : "Jul 21, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/spotted-malaika_637939340373513721/637939340373513721_640x480.jpeg",
        title : "Spotted: Malaika Arora, Suhana Khan And Kriti Sanon In The City",
        category : "Entertainment",
        Date : "Jul 21, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/ENTERTAINMENT/katrina-vicky-a_637939238285611888/637939238285611888_640x480.jpeg",
        title : "Katrina, Vicky And The Maldives Gang Are Back In The Bay",
        category : "Entertainment",
        Date : "Jul 20, 2022"
    }
]

let sports = [
    {
        image : "https://drop.ndtv.com/albums/SPORTS/1st-t20i-david-_637904130985731759/637904130985731759_640x480.jpeg",
        title : "1st T20I: David Miller, Rassie van der Dussen Shine As South Africa Defeat India",
        category : "Sports",
        Date : "Jun 09, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/SPORTS/ipl-2022-hardik_637894668695189728/637894668695189728_640x480.jpeg",
        title : "IPL 2022: Hardik Pandya, Shubman Gill Dazzle As GT Beat RR To Win Maiden Title",
        category : "Sports",
        Date : "May 30, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/SPORTS/ipl-2022-closin_637894541249890901/637894541249890901_640x480.jpeg",
        title : "Ranveer Singh, AR Rahman Star In Glittering IPL Closing Ceremony",
        category : "Sports",
        Date : "Jul 03, 2022"
    }
]

let food = [
    {
        image : "https://drop.ndtv.com/albums/COOKS/5-pasta-recipes_637940779259133873/637940779259133873_640x480.jpeg",
        title : "5 Pasta Recipes To Try Over Weekend",
        category : "Food",
        Date : "Jul 22, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/COOKS/5-healthy-south_637939939949809367/637939939949809367_640x480.jpeg",
        title : "5 Healthy South Indian Recipes You Can Make Easily",
        category : "Food",
        Date : "Jul 21, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/COOKS/5-gluten-free-r_637938202830581243/637938202830581243_640x480.jpeg",
        title : "5 Gluten-Free Recipes To Add To Your Menu",
        category : "Food",
        Date : "Jul 19, 2022"
    }
]

let auto = [
    {
        image : "https://drop.ndtv.com/albums/AUTO/2022-hyundai-ve_637916843277800050/637916843277800050_640x480.jpeg",
        title : "2022 Hyundai Venue Facelift Review: In Images",
        category : "Auto",
        Date : "Jul 22, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/AUTO/new-gen-land-ro_637916838610725219/637916838610725219_640x480.jpeg",
        title : "New-Gen Land Rover Range Rover - In Images",
        category : "Auto",
        Date : "Jul 21, 2022"
    },
    {
        image : "https://drop.ndtv.com/albums/AUTO/rolls-royce-gho_637862491466262019/637862491466262019_640x480.jpeg",
        title : "Rolls-Royce Ghost Black Badge - In Images",
        category : "Auto",
        Date : "Jul 19, 2022"
    }
]

let ad = [
    {
        image : "https://i.gadgets360cdn.com/large/nothing_phone_1_cover_gadgets360_1658412590074.jpg?downsize=950:*",
        title : "Oppo Reno 8 Pro 5G First Impressions: Dressed to Impress",
        
    },
    {
        image : "https://i.gadgets360cdn.com/products/large/dr-arora4-1920x1080-1650022098724.jpg?downsize=*:420",
        title : "Dr. Arora",
        
    },
    {
        image : "https://assets.gadgets360cdn.com/pricee/assets/product/202207/Paper-Rocket-Zee5-poster_1658338495.jpg?downsize=220:308",
        title : "Paper Rocket",
        
    },
    {
        image : "https://i.gadgets360cdn.com/large/nothing_phone_1_cover_gadgets360_1658412590074.jpg?downsize=950:*",
        title : "Oppo Reno 8 Pro 5G First Impressions: Dressed to Impress",
        
    },
    {
        image : "https://i.gadgets360cdn.com/products/large/dr-arora4-1920x1080-1650022098724.jpg?downsize=*:420",
        title : "Dr. Arora",
        
    },
    {
        image : "https://assets.gadgets360cdn.com/pricee/assets/product/202207/Paper-Rocket-Zee5-poster_1658338495.jpg?downsize=220:308",
        title : "Paper Rocket",
        
    }
]

featured.forEach(function(elem){
    let card = document.createElement("div")
    card.className="card"
    
    let image = document.createElement('img')
    image.src = elem.image;

    let title = document.createElement("h3")
    title.innerText = elem.title

    let div1 = document.createElement("div")
    div1.style.color="blueviolet"
    div1.className="cat-date"
    let category = document.createElement("p")
    category.innerText = elem.category;

    let date = document.createElement("p")
    date.innerText = elem.Date
    div1.append(category,date)
    card.append(image,title,div1)
    document.querySelector("#f2").append(card)
})

news.forEach(function(elem){
    let card = document.createElement("div")
    card.className="card"
    
    let image = document.createElement('img')
    image.src = elem.image;

    let title = document.createElement("h3")
    title.innerText = elem.title

    let div1 = document.createElement("div")
    div1.style.color="#666766"
    div1.className="cat-date"
    let category = document.createElement("p")
    category.innerText = elem.category;

    let date = document.createElement("p")
    date.innerText = elem.Date
    div1.append(category,date)
    card.append(image,title,div1)
    document.querySelector("#news").append(card)
})

entertainment.forEach(function(elem){
    let card = document.createElement("div")
    card.className="card"
    
    let image = document.createElement('img')
    image.src = elem.image;

    let title = document.createElement("h3")
    title.innerText = elem.title

    let div1 = document.createElement("div")
    div1.style.color="#666766"
    div1.className="cat-date"
    let category = document.createElement("p")
    category.innerText = elem.category;

    let date = document.createElement("p")
    date.innerText = elem.Date
    div1.append(category,date)
    card.append(image,title,div1)
    document.querySelector("#entertainment").append(card)
})

sports.forEach(function(elem){
    let card = document.createElement("div")
    card.className="card"
    
    let image = document.createElement('img')
    image.src = elem.image;

    let title = document.createElement("h3")
    title.innerText = elem.title

    let div1 = document.createElement("div")
    div1.style.color="#18b4ea"
    div1.className="cat-date"
    let category = document.createElement("p")
    category.innerText = elem.category;

    let date = document.createElement("p")
    date.innerText = elem.Date
    div1.append(category,date)
    card.append(image,title,div1)
    document.querySelector("#sports").append(card)
})

food.forEach(function(elem){
    let card = document.createElement("div")
    card.className="card"
    
    let image = document.createElement('img')
    image.src = elem.image;

    let title = document.createElement("h3")
    title.innerText = elem.title

    let div1 = document.createElement("div")
    div1.style.color="green"
    div1.className="cat-date"
    let category = document.createElement("p")
    category.innerText = elem.category;

    let date = document.createElement("p")
    date.innerText = elem.Date
    div1.append(category,date)
    card.append(image,title,div1)
    document.querySelector("#food").append(card)
})

auto.forEach(function(elem){
    let card = document.createElement("div")
    card.className="card"
    
    let image = document.createElement('img')
    image.src = elem.image;

    let title = document.createElement("h3")
    title.innerText = elem.title

    let div1 = document.createElement("div")
    div1.style.color="#dca62f"
    div1.className="cat-date"
    let category = document.createElement("p")
    category.innerText = elem.category;

    let date = document.createElement("p")
    date.innerText = elem.Date
    div1.append(category,date)
    card.append(image,title,div1)
    document.querySelector("#auto").append(card)
})

ad.forEach(function(elem){
    let card = document.createElement("div")
    
    let image = document.createElement('img')
    image.src = elem.image;

    let title = document.createElement("h3")
    title.innerText = elem.title
    
    card.append(image,title)
    document.querySelector("#ad").append(card)
})


