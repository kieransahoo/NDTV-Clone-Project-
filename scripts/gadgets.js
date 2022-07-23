import navigator from "../components/navigator.js";
let nav = (document.querySelector("#navigator").innerHTML = navigator());

import functionalities from "../components/functionalities.js";
let fun = (document.querySelector("#functionalities").innerHTML =
  functionalities());


  import {particularNavbar} from "../components/navbar.js";
  let patNav = document.querySelector("#navbar").innerHTML=particularNavbar();


import { categories, categoriesButton } from "../components/categories.js";
let cat = (document.querySelector("#categories").innerHTML = categories());

categoriesButton();

import { append, append1 } from "../components/fetch.js";
let data1 =  [
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: "Express Web Desk",
      title:
        "Presidential Election 2022 Result Live Updates: Droupadi Murmu makes history, becomes India’s first tribal woman President",
      description:
        "Presidential Election 2022 Result Live Updates, July 21: Murmu, 64, is the first Adivasi and second woman to become the nation’s First Citizen and the Supreme Commander of India’s Armed Forces.",
      url: "https://indianexpress.com/article/india/presidential-election-2022-results-counting-votes-live-updates-yashwant-sinha-droupadi-murmu-8042430/",
      urlToImage: "https://images.indianexpress.com/2022/07/modi-13.jpg",
      publishedAt: "2022-07-21T16:30:05+00:00",
      content:
        "Narendra Modi; Amit Shah; Manmohan Singh; Mamata Banerjee cast votes. (PTI and Express Photos)\r\nGoing by the support extended by various parties, National Democratic Alliance (NDA) candidate Droupadi… [+1958 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: null,
      title:
        "\"Taken For Granted\": Trinamool's Derek O'Brien On Why Party Will Not Vote In Vice-President Polls",
      description:
        "Party leader Derek O'Brien on latest move by Trinamool Congress, which was a prime mover in putting up a joint Opposition candidate for President but is not playing along in the V-P polls",
      url: "https://www.ndtv.com/india-news/trinamool-congress-derek-obrien-on-why-party-will-abstain-in-vice-president-polls-3181218",
      urlToImage:
        "https://c.ndtvimg.com/2021-11/9d4k179o_derek-o-brien-interview-to-ndtv_625x300_03_November_21.jpg",
      publishedAt: "2022-07-21T15:50:00+00:00",
      content:
        "New Delhi: West Bengal Chief Minister Mamata Banerjee's Trinamool Congress \"cannot be taken for granted\" for Opposition unity, said party leader Derek O'Brien today. Speaking to NDTV on why the party… [+2582 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: "News Desk",
      title:
        "L-G Dismisses Arvind Kejriwal’s Plea to Attend Singapore Summit, CM Says Will Go Ahead",
      description:
        "According to sources, a CM attending such a conference will also set a bad precedent. Kejriwal on Sunday wrote a letter to PM Modi and sought permission to attend the World Cities Summit in Singapore",
      url: "https://www.news18.com/news/politics/l-g-dismisses-arvind-kejriwals-plea-to-attend-singapore-summit-says-conference-only-for-mayors-5599507.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/07/arvind-kejriwal-165840863216x9.jpg",
      publishedAt: "2022-07-21T13:17:00+00:00",
      content:
        "After Lieutenant Governor Vinai Kumar Saxena dismissed Arvind Kejriwals proposal, seeking permission to attend a summit in Singapore, the Aam Aadmi Party (AAP) convener said on Thursday he did not ag… [+2555 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: "TIMESOFINDIA.COM",
      title:
        "National Herald case: Sonia Gandhi questioned for 2 hours by ED; Congress workers protest across the country",
      description:
        "India News: NEW DELHI: Congress interim chief Sonia Gandhi was questioned for two hours by the Enforcement Directorate on Thursday in the National Herald money la.",
      url: "https://timesofindia.indiatimes.com/india/national-herald-case-sonia-gandhi-questioned-for-2-hours-by-ed-congress-workers-protest-across-the-country/articleshow/93030131.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-93030203,width-1070,height-580,imgsize-1320211,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-07-21T11:36:00+00:00",
      content:
        "India News: NEW DELHI: Congress interim chief Sonia Gandhi was questioned for two hours by the Enforcement Directorate on Thursday in the National Herald money la.",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: null,
      title:
        "CBSE Class 10th Result 2022 date, time: Official confirmation awaited, direct link to check CBSE results",
      description:
        "The date and time of the CBSE Class 10th result 2022 will be confirmed soon. Students must keep an eye on the official website for all the latest updates.",
      url: "https://www.indiatoday.in/education-today/notification/story/cbse-class-10th-result-2022-date-time-official-confirmation-awaited-direct-link-to-check-cbse-results-1978252-2022-07-21",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/PTI06-03-2020_000035B_15836858-647x363.jpeg?c8ZG1VEUpsVRcW2SoCsPDwEQDApgs1D.",
      publishedAt: "2022-07-21T10:20:25+00:00",
      content:
        "CBSE Class 10 result 2022: It's been more than two months since the CBSE Class 10th board examination got over, and students are now eagerly waiting for the declaration of the term 2 board results. A… [+1478 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: "Anil Sharma",
      title:
        "Moose Wala’s father visits Amritsar hospital to identify two gangsters",
      description:
        "Gangsters Jagroop Singh, alias Roopa, and Manpreet Singh, alias Manu Kusa, were killed after a heavy exchange of fire with Punjab Police personnel at village near border on Wednesday",
      url: "https://www.hindustantimes.com/cities/chandigarh-news/moose-wala-s-father-visits-amritsar-hospital-to-identify-two-gangsters-101658394676133.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/21/1600x900/b0f60398-08d4-11ed-b1ae-8c97092d388b_1658394667228.jpg",
      publishedAt: "2022-07-21T09:11:15+00:00",
      content:
        "A day after two gangsters were killed in an encounter with Punjab Police in Amritsars Hoshiar Nagar village, Punjabi singer Sidhu Moose Walas father, Balkaur Singh, visited the Amritsar civil hospita… [+1249 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: "LIVELAW NEWS NETWORK",
      title: "Gyanvapi Case-Supreme Court Hearing- Live Updates",
      description:
        "A bench comprising Justices DY Chandrachud, Surya Kant and PS Narasimha to hear at 2 PM today the...",
      url: "https://www.livelaw.in/top-stories/gyanvapi-case-supreme-court-hearing-live-updates-204402",
      urlToImage:
        "https://www.livelaw.in/h-upload/2022/05/14/417661-sc-and-gyanvapi-mosque.jpg",
      publishedAt: "2022-07-21T08:37:34+00:00",
      content:
        "Justice Chandrachud : You withdraw this.\r\nTripathi : With liberty to move the trial court.\r\nAhamdi objects : No, he is not a part to the suit.\r\nJ Chandrachud : Whatever liberty law gives, you can hav… [+1 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: "Yogesh Naik",
      title:
        "Maharashtra Government removes stay on constructing Aarey car shed",
      description:
        "Soon after taking over, Deputy Chief Minister Devendra Fadnavis had asked the urban development department to start the process for the construction of the car shed at Aarey.",
      url: "https://indianexpress.com/article/cities/mumbai/maharashtra-government-removed-stay-aarey-car-shed-8043106/",
      urlToImage: "https://images.indianexpress.com/2022/07/aarey-file-1.jpeg",
      publishedAt: "2022-07-21T08:05:39+00:00",
      content:
        "The Maharashtra government has removed the stay on constructing a car shed in Mumbais Aarey Milk Colony for Metro 3, said additional chief secretary and urban development departments head Bhushan Gag… [+1783 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: "LIVELAW NEWS NETWORK",
      title:
        "Abortion Cant Be Denied Solely Because Woman Is Unmarried : Supreme Court Allows Unmarried Woman To Seek...",
      description:
        "The Supreme Court on Thursday passed an ad-interim order to allow an unmarried woman to abort her...",
      url: "https://www.livelaw.in/top-stories/abortion-cant-be-denied-solely-because-woman-is-unmarried-supreme-court-allows-unmarried-woman-to-seek-termination-of-pregnancy-204394",
      urlToImage:
        "https://www.livelaw.in/h-upload/2022/06/25/423288-abortion-medical-termination-of-pregnancy-act.jpg",
      publishedAt: "2022-07-21T07:53:47+00:00",
      content:
        "The Supreme Court on Thursday passed an ad-interim order to allow an unmarried woman to abort her pregnancy of 24-weeks arising out of a live-in relationship, subject to a medical board constituted b… [+4936 chars]",
    },
  ]
  append1(data1)

let data =  [
    {
      source: { id: null, name: "News18" },
      author: "Tech Desk",
      title:
        "Apple Watch Comes To A User’s Rescue, Helps In Detecting A Deadly Tumour - News18",
      description:
        "Apple Watch has become a saviour for many people over the years and once again it has helped a person detect a deadly issue.",
      url: "https://www.news18.com/news/tech/apple-watch-comes-to-a-users-rescue-helps-in-detecting-a-deadly-tumour-5600767.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/04/apple-watch-series-6-repair-165077763016x9.jpg",
      publishedAt: "2022-07-21T14:19:50Z",
      read:1234,
      content:
        "Apple Watch has become a vital tool to detect health issues over the years, helping people save themselves from major events. And the Apple Watch is back in the news for a similar episode, this time … [+2361 chars]",
    },
    {
      source: { id: null, name: "Sportskeeda" },
      author: "Zachary Roberts",
      title:
        "Why some Fortnite players are getting upto 1200 V-Bucks as refund - Sportskeeda",
      description:
        "Certain eligible Fortnite players will be able to get 1,200 V-Bucks back if they want to refund the Komplex skin, which just underwent some changes.",
      url: "https://www.sportskeeda.com/fortnite/news-why-fortnite-players-getting-upto-1200-v-bucks-refund",
      urlToImage:
        "https://staticg.sportskeeda.com/editor/2022/07/f73a1-16583331784512-1920.jpg",
      publishedAt: "2022-07-21T14:03:05Z",
      read:456,
      content:
        "Certain eligible Fortnite players will be able to get 1,200 V-Bucks back if they want to refund the Komplex skin, which just underwent some changes. Epic Games has offered a free refund ticket solely… [+1955 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "How To Hide Status Updates from Specific People on WhatsApp | WhatsApp tutorials - BGR India",
      description:
        "#BGRIndia #TechNews WhatsApp is that kind of platform that lets its users share status with their contact list. These status updates can be photos, or any ot...",
      url: "https://www.youtube.com/watch?v=3BwlcKfEACg",
      urlToImage: "https://i.ytimg.com/vi/3BwlcKfEACg/maxresdefault.jpg",
      publishedAt: "2022-07-21T13:20:31Z",
      read:486,
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Tech",
      title:
        "Windows 11 taskbar now lets you deal with overflowing apps like a PRO! - HT Tech",
      description:
        "Windows 11 in its latest version allows you to have your overflowing apps on the taskbar stacked neatly in one space. Here are all the details.",
      url: "https://tech.hindustantimes.com/laptops-pc/news/windows-11-taskbar-now-lets-you-deal-with-overflowing-apps-like-a-pro-71658408982078.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/07/21/1600x900/Windows_11_taskbar_1658409232189_1658409247409_1658409247409.jpg",
      publishedAt: "2022-07-21T13:17:27Z",
      read:7897,
      content:
        "Windows 11 is kind of a work-in-progress platform for PC users! With the new policy of updates, Windows 11 will now frequently keep adding experimental features to the OS rather than wait for a big u… [+1935 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "iQoo 9T to launch in India on August 2: Here’s what the smartphone may offer - Times of India",
      description:
        "iQoo is all set to launch its new 9-series smartphone in India soon. The Chinese smartphone maker introduced the iQoo 9 series of smartphones in India",
      url: "https://timesofindia.indiatimes.com/gadgets-news/iqoo-9t-to-launch-in-india-on-august-2-heres-what-the-smartphone-may-offer/articleshow/93031360.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-93031540,width-1070,height-580,imgsize-17482,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-07-21T12:28:00Z",
      read:1654,
      content: null,
    },
    {
      source: { id: null, name: "9to5Mac" },
      author: null,
      title:
        "Apple Arcade: here’s what happens when your favorite game leaves the service - 9to5Mac",
      description:
        "Last week, 9to5Mac reported that 15 games are leaving Apple Arcade soon, as the company added a tab on the App Store that shows which games will leave the service in the near future. With some questions remaining, the company has now addressed what happens wh…",
      url: "https://9to5mac.com/2022/07/21/apple-arcade-what-happens-game-leaves-service/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/Leaving-Apple-Arcade.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-07-21T12:28:00Z",
      read:444,
      content:
        "Last week, 9to5Mac reported that 15 games are leaving Apple Arcade soon, as the company added a tab on the App Store that shows which games will leave the service in the near future. With some questi… [+1763 chars]",
    },
    {
      source: { id: null, name: "91mobiles" },
      author: null,
      title:
        "Planning to buy iPhone 13 in India? Here are the best offers and deals available right now - 91mobiles",
      description:
        "Taking advantage of various offers and deals, you can get the iPhone 13 for much lower than retail values.",
      url: "https://www.91mobiles.com/hub/iphone-13-hubble-croma-deal-discount/",
      urlToImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/iPhone-13-1.jpg",
      publishedAt: "2022-07-21T12:16:43Z",
      read:1541,
      content:
        "Taking advantage of various offers and deals, you can get the iPhone 13 for much lower than retail values.\r\niPhone 13 is one of the most desired phones in the market and whether you are currently on … [+4363 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "OPPO Watch 3 series confirmed to be powered by Snapdragon Wear 5 SoC, will launch next month - gizmochina",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiggFodHRwczovL3d3dy5naXptb2NoaW5hLmNvbS8yMDIyLzA3LzIxL29wcG8td2F0Y2gtMy1zZXJpZXMtY29uZmlybWVkLXRvLWJlLXBvd2VyZWQtYnktc25hcGRyYWdvbi13ZWFyLTUtc29jLXdpbGwtbGF1bmNoLW5leHQtbW9udGgv0gGIAWh0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjIvMDcvMjEvb3Bwby13YXRjaC0zLXNlcmllcy1jb25maXJtZWQtdG8tYmUtcG93ZXJlZC1ieS1zbmFwZHJhZ29uLXdlYXItNS1zb2Mtd2lsbC1sYXVuY2gtbmV4dC1tb250aC8_YW1wPTE?oc=5",
      urlToImage: null,
      publishedAt: "2022-07-21T11:41:16Z",
      read:7984,
      content: null,
    },
    {
      source: { id: null, name: "RadioTimes" },
      author: "Rob Leane",
      title:
        "Stray platforms | Xbox, Nintendo Switch and Steam Deck latest - RadioTimes",
      description: "Will Stray be a PlayStation exclusive forever?",
      url: "https://www.radiotimes.com/technology/gaming/stray-platforms-xbox-nintendo-switch/",
      urlToImage:
        "https://images.immediate.co.uk/production/volatile/sites/3/2022/07/Stray-review-1d2fd3d.jpg?resize=620,413",
      publishedAt: "2022-07-21T11:35:43Z",
      read:48965,
      content:
        "If you're an Xbox One, Xbox Series X/S or Nintendo Switch owner, you might be wondering if your console of choice is able to run Stray. And what about PC gamers that are lucky enough to have a Steam … [+2624 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title: "WhatsApp to bring quick reactions for Status - BusinessLine",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMifGh0dHBzOi8vd3d3LnRoZWhpbmR1YnVzaW5lc3NsaW5lLmNvbS9pbmZvLXRlY2gvc29jaWFsLW1lZGlhL3doYXRzYXBwLXRvLWJyaW5nLXF1aWNrLXJlYWN0aW9ucy1mb3Itc3RhdHVzL2FydGljbGU2NTY2NTgxNi5lY2XSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-07-21T11:19:28Z",
      read:1564,
      content: null,
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Sounak Mukhopadhyay",
      title:
        "Joker malware attack: Google deletes 50 apps; do you own any of these? | Mint - Mint",
      description:
        "Joker is one of the most well-known malware families that preys on Android mobile devices.",
      url: "https://www.livemint.com/news/world/joker-malware-attack-google-deletes-50-apps-do-you-own-any-of-these-11658401696400.html",
      urlToImage:
        "https://images.livemint.com/img/2022/07/21/600x338/2021-01-11T010721Z_1_LYNXMPEH0A00S_RTROPTP_3_INDIA-GOOGLE-APPS_1611838500725_1658401884954_1658401884954.JPG",
      publishedAt: "2022-07-21T11:12:23Z",
      read:6894,
      content:
        "Joker malware infected 50 apps on the Google Play Store, according to Zscaler Threatlabz. Google swiftly removed them from its app store. However, if you still happen to have any of them loaded on yo… [+5515 chars]",
    },
    {
      source: { id: null, name: "Rock Paper Shotgun" },
      author: "James Archer",
      title:
        "Marvel's Spider-Man Remastered will have DLSS and ray tracing on PC, with system requirements to match - Rock Paper Shotgun",
      description:
        "Marvel's Spider-Man Remastered will launch on PC with a web of Windows-exclusive features, including DLSS, ray tracing, custom controls and ultrawide support.",
      url: "https://www.rockpapershotgun.com/marvels-spider-man-remastered-will-have-dlss-and-ray-tracing-on-pc-with-system-requirements-to-match",
      urlToImage:
        "https://assets2.rockpapershotgun.com/marvels_spider_man_pc_02.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/marvels_spider_man_pc_02.jpg",
      publishedAt: "2022-07-21T10:33:21Z",
      read:9784,
      content:
        "Marvel’s Spider-Man Remastered is getting more than a quick polish for its PC launch next month. A new PC features trailer has revealed the myriad of visual and technical improvements that the Window… [+3468 chars]",
    },
    {
      source: { id: null, name: "DNA India" },
      author: null,
      title:
        "Arrival of first official press renderings of Galaxy Z Fold 4 and Z Flip 4 - DNA India",
      description:
        "The first glimpse of the impending Galaxy Z Fold4 and Galaxy Z Flip4 via what appear to be official press renderings. According to GSM Arena, the Galaxy Z Fold4 is launched in 3 colours: Phantom black, beige, and grey-green. The render depicts a design that i…",
      url: "https://www.dnaindia.com/business/video-arrival-of-first-official-press-renderings-of-galaxy-z-fold-4-and-z-flip-4-2970338",
      urlToImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2524036-2100000009.jpg",
      publishedAt: "2022-07-21T10:31:41Z",
      read:475,
      content: null,
    },
    {
      source: { id: null, name: "GQ India" },
      author: "Vanshika Jain",
      title:
        "Nothing phone (1) brings you one of the boldest, most stylish phone to the Indian market with Flipkart in India - GQ India",
      description:
        "Be prepared to tap into pure instinct and inspiring technology as sales kick off with your favourite icons celebrating this futuristic mobile by Nothing",
      url: "https://www.gqindia.com/story/nothing-phone-1-brings-you-one-of-the-boldest-most-stylish-phone-to-the-indian-market-with-flipkart-in-india/",
      urlToImage: null,
      publishedAt: "2022-07-21T10:19:34Z",
      read:7486,
      content: null,
    },
    {
      source: { id: null, name: "Sportskeeda" },
      author: "Matthew Wilkins",
      title:
        "Fortnite: How to keep the first weapon you collect in your inventory until you reach the top 20 players - Sportskeeda",
      description:
        "Finding the perfect weapon in Fortnite is not an easy task. Depending on the area, players will have to rush to find a weapon and arm themselves after landing.",
      url: "https://www.sportskeeda.com/fortnite/fortnite-how-keep-first-weapon-collect-inventory-reach-top-20-players",
      urlToImage:
        "https://staticc.sportskeeda.com/editor/2022/07/a7190-16583904709447-1920.jpg",
      publishedAt: "2022-07-21T10:17:15Z",
      read:1564,
      content:
        "Finding the perfect weapon in Fortnite is not an easy task. Depending on the area, players will have to rush to find a weapon and arm themselves after landing. While, at times, the choice and tier of… [+3226 chars]",
    },
    {
      source: { id: null, name: "Thefederal.com" },
      author: null,
      title:
        "Redmi launches K50i 5G, Buds 3 Lite; K series hit market after 2 years - The Federal",
      description:
        "Redmi launched its Redmi K50i 5G model along with Redmi Buds 3 Lite on Thursday, marking the return of its K-series after nearly two years.",
      url: "https://thefederal.com/business/redmi-launches-k50i-5g-buds-3-lite-k-series-hit-market-after-2-years/",
      urlToImage: "https://thefederal.com/wp-content/uploads/2022/07/redmi.jpg",
      publishedAt: "2022-07-21T09:32:42Z",
      read:4186,
      content:
        "Redmi launched its Redmi K50i 5G model along with Redmi Buds 3 Lite on Thursday, marking the return of its K-series after nearly two years.\r\nThe Redmi K50i is the first K-series Redmi smartphone from… [+2238 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Tech Desk",
      title:
        "FIFA 23 under Rs 5: Epic Games briefly offers game almost for free - The Indian Express",
      description:
        "FIFA 23: An Epic Games listing mistake allowed FIFA fans to pre-order the game for Rs 4.8 ahead of launch, instead of the full price of Rs 4,799.",
      url: "https://indianexpress.com/article/technology/gaming/fifa-23-under-rs-5-epic-games-mistakenly-offers-game-practically-for-free-8042570/",
      urlToImage: "https://images.indianexpress.com/2022/07/FIFA-23-Mbappe.jpg",
      publishedAt: "2022-07-21T09:26:20Z",
      read:68564,
      content:
        "FIFA 23, EAs last collaboration with FIFA, was announced with a new trailer yesterday that highlights the upcoming games top features including the new Hypermotion 2 mechanics and a deeper focus on w… [+1973 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Moneycontrol News",
      title:
        "Dell launches the XPS 13 Plus 9320 in India: Check price, specs - Moneycontrol",
      description: "The laptop has been priced starting at Rs.1,59,990",
      url: "https://www.moneycontrol.com/news/technology/dell-launches-the-xps-13-plus-9320-in-india-check-price-specs-8858601.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/07/Dell-XPS-770x433.jpg",
      publishedAt: "2022-07-21T09:26:06Z",
      read:8564,
      content:
        "Dell has launched a new laptop in its XPS range of devices, the XPS 13 Plus 9320. Dell says its the company's most powerful laptop yet with Intel's 12th Gen Core processors.\r\nPricing\r\nThe laptop has … [+1492 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "The best smartphones of 2022 so far - Trusted Reviews",
      description:
        "Here’s the Trusted Reviews round-up of the best phones you can buy in 2022 based on all the models we’ve tested and reviewed so far. Whether you’re looking f...",
      url: "https://www.youtube.com/watch?v=6qfgK3LHWNA",
      urlToImage: "https://i.ytimg.com/vi/6qfgK3LHWNA/maxresdefault.jpg",
      publishedAt: "2022-07-21T09:14:04Z",
      read:8974,
      content: null,
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Jon Porter",
      title:
        "Twitter Spaces’ clipping feature now available to all on iOS and Android - The Verge",
      description:
        "A new feature that lets you extract a short audio clip from a Twitter Space is getting a widespread release on iOS and Android. The platform says support for Twitter on the web is “on the way.”",
      url: "https://www.theverge.com/2022/7/21/23272456/twitter-spaces-clipping-ios-android-widespread-rollout",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/Am9aVCPudCSP31imI0QhDOQQMCA=/0x141:1951x1162/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23890549/FYIhvttXwAA6uVF.jpg",
      publishedAt: "2022-07-21T08:31:22Z",
      read:6541,
      content:
        "Following a more limited test that started in March\r\nTwitter imagery showing the process of clipping a Space.\r\nImage: Twitter\r\nA new feature that lets you extract a short audio clip from a Twitter Sp… [+1411 chars]",
    },
  ]
  append(data)

  
let mR = document.getElementById("mR");
mR.addEventListener("click", function () {
  mostRated(data);
});
let mostRated = (data) => {
  document.getElementById("mP")
.innerText="Most Watched"
data.sort((a, b) => {
return b.read-a.read
  });
append(data);
};
