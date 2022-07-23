import {particularNavbar} from "../components/navbar.js"
import {footer} from "../components/footer.js"
document.querySelector("#nav").innerHTML=particularNavbar()
document.querySelector("#foot").innerHTML=footer()

let featured = [
    {
        image : "https://c.ndtvimg.com/2022-07/crrata4k_chief-justice_160x120_23_July_22.jpg",
        url :'https://www.ndtv.com/video/news/news/biased-ill-informed-agenda-driven-chief-justice-criticises-media-644524',
        title : "Biased, Ill-Informed, Agenda-Driven: Chief Justice Criticises Media",
        duration : "2:42"
    },
    {
        image : "	https://c.ndtvimg.com/2022-07/5j0mk5o8_bjp-protest_160x120_23_July_22.jpg",
        url :'https://www.ndtv.com/video/news/news/bjp-protests-outside-delhi-minister-s-home-over-liquor-excise-policy-644508',
        title : "BJP Protests Outside Delhi Minister's Home Over Liquor Excise Policy",
        duration : "4:28"
    },
    {
        image : "	https://c.ndtvimg.com/2022-07/osfobad8_bengal-minister_160x120_23_July_22.jpg",
        url :'https://ndtv.in/video/show/news/smile-pose-repeat-ranbir-kapoors-day-out-644332',
        title : "Bengal Minister Partha Chatterjee Arrested After Teacher Job Scam Raids",
        duration : "23:23"
    },
    {
        image : "	https://c.ndtvimg.com/2022-07/s689phhk_river_160x120_23_July_22.jpg",
        url :'https://www.ndtv.com/video/news/news/video-injured-woman-carried-through-river-in-maharashtra-s-palghar-644523',
        title : "Video: Injured Woman Carried Through River In Maharashtra's Palghar",
        duration : "0:13"
    },
    {
        image : "https://c.ndtvimg.com/2022-07/hkrqg9js_sara-dhanush_160x120_23_July_22.jpg",
        url :'https://www.ndtv.com/video/entertainment/news/dhanush-and-his-plus-one-sara-ali-khan-644461',
        title : "Dhanush And His Plus One Sara Ali Khan",
        duration : "1:07"
    },
    {
        image : "	https://c.ndtvimg.com/2022-07/6f38q2ng_kareena-kapoor-and-saif-ali-khan_160x120_23_July_22.jpg",
        url :'https://www.ndtv.com/video/entertainment/news/airport-spotting-kareena-kapoor-and-saif-ali-khan-with-kids-644530',
        title : "Airport Spotting: Kareena Kapoor And Saif Ali Khan With Kids",
        duration : "0:53"
    },
    {
        image : "	https://c.ndtvimg.com/2022-07/ofdg685k_gujarat-river_160x120_23_July_22.jpg",
        url :'https://www.ndtv.com/video/news/news/gujarat-villagers-use-tubes-wooden-logs-to-cross-river-in-valsad-644474',
        title : "Gujarat Villagers Use Tubes, Wooden Logs To Cross River In Valsad",
        duration : "2:39"
    },
    {
        image : "https://c.ndtvimg.com/2022-07/qinv0mek_comic-con_160x120_23_July_22.jpg",
        url :'https://www.ndtv.com/video/entertainment/news/comic-con-2022-the-rings-of-power-one-panel-to-rule-them-all-644483',
        title : "Comic-Con 2022: The Rings Of Power - One Panel To Rule Them All",
        duration : "3:04"
    }
]

let topshows = [
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/23072022_n_gadgets360show_104964.gif",
        url :'https://www.ndtv.com/video/embed-player/?site=classic&id=644468',
        title : "Apple MacBook Air M2: A Refreshing Comeback After 2 Years",
        duration : "18:49"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/23072022_n_cellguru_104961.gif",
        url :'undefined',
        title : "Vivo T1x: A Winner Under Rs.15K?",
        duration : "21:32"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/158999ZX.gif",
        url :'https://www.ndtv.com/video/news/the-big-fight/cross-voting-in-presidential-elections-alarm-bells-for-the-opposition-644445',
        title : "Cross-Voting In Presidential Elections: Alarm Bells For The Opposition?",
        duration : "50:44"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/158998ZX.gif",
        url :'https://www.ndtv.com/video/news/left-right-centre/droupadi-murmu-india-s-15th-president-644249',
        title : "Droupadi Murmu: India's 15th President",
        duration : "22:50"
    },
    {
        image : "https://c.ndtvimg.com/2022-07/67enfjtc_nidhi_160x120_21_July_22.jpg",
        url :'https://www.ndtv.com/video/shows/no-spin/enter-madam-president-droupadi-murmu-win-exposes-opposition-disunity-644241',
        title : "Enter, Madam President: Droupadi Murmu Win Exposes Opposition Disunity?",
        duration : "25:04"
    },
    {
        image : "https://c.ndtvimg.com/2022-07/g0jo7jfs_droupadimurmu_160x120_21_July_22.jpg",
        url :'https://www.ndtv.com/video/shows/breaking-views/know-your-president-droupadi-murmu-644235',
        title : "Know Your President: Droupadi Murmu",
        duration : "25:32"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/158743ZX.gif",
        url :'https://ndtv.in/video/show/news/smile-pose-repeat-ranbir-kapoors-day-out-644332',
        title : "Why Are More Indians Giving Up Citizenship?",
        duration : "27:41"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/158742ZX.gif",
        url :'https://ndtv.in/video/show/news/smile-pose-repeat-ranbir-kapoors-day-out-644332',
        title : "Mohammed Zubair Leaves Jail After 23 Days As Court Ends Vicious Cycle",
        duration : "26:34"
    }
]

let mostwatched = [
    {
        image : "https://c.ndtvimg.com/2022-07/ok47v5l_bollywood_160x120_22_July_22.png",
        url :'https://ndtv.in/video/show/news/smile-pose-repeat-ranbir-kapoors-day-out-644332',
        title : "स्माइल, पोज़, रिपीट: रणबीर कपूर का डे आउट ",
        duration : "00:33"
    },
    {
        image : "https://c.ndtvimg.com/2022-07/1dsod17_kiaraadvani_160x120_22_July_22.jpg",
        url :'https://ndtv.in/video/show/news/whats-not-to-love-about-kiara-advanis-airport-ootd-644431',
        title : "मुंबई एयरपोर्ट पर स्पॉट हुईं कियारा आडवाणी, दिखा अलग अंदाज",
        duration : "00:50"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/95779SXYZ.gif",
        url :'https://www.ndtv.com/video/entertainment/the-news/national-awards-2022-suriya-ajay-devgn-share-best-actor-soorarai-pottru-best-film-644425',
        title : "National Awards 2022: Suriya, Ajay Devgn Share Best Actor, Soorarai Pottru Best Film",
        duration : "00:24"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/95908SXYZ.gif",
        url :'https://www.ndtv.com/video/news/news/bengal-minister-arrested-day-after-rs-20-crore-cash-found-at-aide-s-home-644493',
        title : "Bengal Minister Arrested Day After Rs. 20 Crore Cash Found At Aide's Home",
        duration : "03:10"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/95895SXYZ.gif",
        url :'https://www.ndtv.com/video/news/news/biased-ill-informed-agenda-driven-chief-justice-criticises-media-644524',
        title : "Biased, Ill-Informed, Agenda-Driven: Chief Justice Criticises Media",
        duration : "02:42"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/95791SXYZ.gif",
        url :'https://www.ndtv.com/video/news/news/rs-20-crore-cash-seized-after-raids-on-west-bengal-minister-partha-chatterjee-s-aide-644447',
        title : "Rs. 20 Crore Cash Seized After Raids On West Bengal Minister Partha Chatterjee's Aide",
        duration : "0:36"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/159111ZX.gif",
        url :'https://www.ndtv.com/video/news/news/not-time-for-whataboutery-opposition-veep-candidate-to-mamata-banerjee-644368',
        title : "Not Time For Whataboutery: Opposition Veep Candidate To Mamata Banerjee",
        duration : "0:28"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/95665SXYZ.gif",
        url :'https://www.ndtv.com/video/news/news/in-droupadi-murmu-s-victory-cross-voting-bares-cracks-in-opposition-644300',
        title : "In Droupadi Murmu's Victory, Cross-Voting Bares Cracks In Opposition",
        duration : "04:19"
    }
]

let justadded = [
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/95883SXYZ.gif",
        url :'https://www.ndtv.com/video/news/news/trinamool-government-corrupt-bjp-steps-up-attack-after-minister-s-arrest-644516',
        title : "Trinamool Government Corrupt: BJP Steps Up Attack After Minister's Arrest",
        duration : "14:21"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/2307viralhog_frog_78739.gif",
        url :'https://ndtv.in/video/show/news/bullfrogs-are-scary-when-they-eat-644515',
        title : "मेढ़क तो आपने बहुत देखें होंगे, लेकिन ऐसा खतरनाक मेढ़क कभी नहीं देखा होगा",
        duration : "00:06"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/2307viralhog_fire_104980.gif",
        url :'https://ndtv.in/video/show/news/a-row-of-cars-on-fire-644514',
        title : "एकसाथ धू-धू कर जल गईं पार्किंग में खड़ी 8 गाड़ियां, खौफनाक मंजर देख उड़ जाएंगे होश",
        duration : "00:13"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/2307viralhog_bear_104979.gif",
        url :'https://ndtv.in/video/show/news/bear-digging-in-the-dirt-644513',
        title : "गड्ढा खोदने में लगा था भालू, थककर हुआ बुरा हाल, फिर किया कुछ ऐसा",
        duration : "01:38"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/95881SXYZ.gif",
        url :'https://www.ndtv.com/video/news/news/bjp-protests-outside-delhi-minister-s-home-over-liquor-excise-policy-644508',
        title : "BJP Protests Outside Delhi Minister's Home Over Liquor Excise Policy",
        duration : "04:28"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/159289ZX.gif",
        url :'https://ndtv.in/video/show/news/congress-accuses-union-minister-smriti-irani-of-corruption-644506',
        title : "कांग्रेस ने स्मृति ईरानी पर लगाया भ्रष्टाचार का आरोप, किया ये दावा",
        duration : "02:08"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/159285ZX.gif",
        url :'https://ndtv.in/video/show/news/bjp-protest-outside-deputy-cm-manish-sisodias-residence-644505',
        title : "मनीष सिसोदिया के आवास के बाहर BJP का प्रदर्शन, कई नेता हिरासत में लिए गए",
        duration : "05:41"
    },
    {
        image : "https://drop.ndtv.com/video/images/vod/gif/2022-07/159281ZX.gif",
        url :'https://ndtv.in/video/show/news/todays-top-headlines-16-july-2022-644504',
        title : "आज दोपहर की सुर्खियां : 23 जुलाई, 2022",
        duration : "01:13"
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



let rhsappend = (data) => {
    console.log("hello")
    data.forEach(function(elem){
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.className = "rhs-gif"
        image.src = elem.image

        let title = document.createElement("p")
        title.innerText = elem.title

        // let duration = document.createElement("h3")
        // duration.innerText = elem.duration

        div.append(title,image)

        document.querySelector("#rhs-cont").append(div)
    })
}
rhsappend(mostwatched)
// document.querySelector("#filterVideo").addEventListener("click",filterLive)
let filterLive = () =>{
    let filtered = document.querySelector("#filterVideo").value;
    if(filtered="mv"){
        rhsappend(mostwatched)
    }
    if(filtered="ra"){
        rhsappend(justadded)
    }
    if(filtered="vs"){
        rhsappend(topshows)
    }
}
filterLive()


let categoryAppend = (data,cont) =>{
    data.forEach(function(elem){
        let div = document.createElement("div")
        div.className="category-videos"

        let imgdiv = document.createElement("div")
        imgdiv.className="cat-imagediv"
        let image = document.createElement("img")
        image.className="cat-div-image"
        image.src = elem.image
        imgdiv.append(image)

        let contdiv = document.createElement("div")
        contdiv.className="cat-contdiv"
        let title = document.createElement("p")
        title.innerText = elem.title
        
        let duration = document.createElement("p")
        duration.innerText = elem.duration
        duration.style.color="red"

        contdiv.append(title,duration)

        div.append(imgdiv,contdiv)

        cont.append(div)
    })
}
let cont1 = document.querySelector('#featured')
categoryAppend(featured,cont1)

let cont2 = document.querySelector('#top-shows')
categoryAppend(topshows ,cont2)

let cont3 = document.querySelector('#most-watched')
categoryAppend(mostwatched,cont3)

let cont4= document.querySelector('#just-added')
categoryAppend(justadded,cont4)


let appendPromo = (data) =>{
    data.forEach(function(elem){
        // console.log("hello")
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = elem.image

        let title = document.createElement("p")
        title.innerText = elem.title

        // let duration = document.createElement("h3")
        // duration.innerText = elem.duration

        div.append(title,image)

        document.querySelector("#promo-ad").append(div)
    })
}
appendPromo(ad)



