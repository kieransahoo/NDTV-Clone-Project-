import {particularNavbar} from "../components/navbar.js";
  let patNav = document.querySelector("#navbar").innerHTML=particularNavbar();
  import { append1 } from "../components/fetch.js";

  let data = JSON.parse(localStorage.getItem("newsData"));
  console.log(data);


  let box = document.getElementById("title");
  let title = document.createElement("h1");
title.innerText=data.description;

let des = document.createElement("p");
des.innerText=data.title;
let box1 = document.getElementById("des")
let cont = document.createElement("p");
cont.innerText="Author :"+" "+data.author+" "+"|"+" "+"Updated :"+" "+data.publishedAt;
box1.append(cont)


let box2 = document.getElementById("image")
let pic = document.createElement("img");
pic.src=data.urlToImage
box2.append(pic)

let box3 = document.getElementById("details")
let mains = document.createElement("p");
mains.innerText=data.content;
box3.append(mains)

box.append(title,des)










let data1 = [
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
    read: 2456,
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
    read: 2456,
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
    read: 2456,
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
    read: 2456,
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
    read: 2456,
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
    read: 2456,
    content:
      "A day after two gangsters were killed in an encounter with Punjab Police in Amritsars Hoshiar Nagar village, Punjabi singer Sidhu Moose Walas father, Balkaur Singh, visited the Amritsar civil hospita… [+1249 chars]",
  },

];
append1(data1);