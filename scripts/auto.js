import navigator from "../components/navigator.js";
let nav = document.querySelector("#navigator").innerHTML=navigator()

import functionalities from "../components/functionalities.js";
let fun = document.querySelector("#functionalities").innerHTML=functionalities()

import {categories, categoriesButton} from "../components/categories.js";

let cat = document.querySelector("#categories").innerHTML=categories()


  
categoriesButton()

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
  let append2 = (data) => {
    let body = document.getElementById("body");
    data.forEach((el) => {
      let card = document.createElement("div");
      card.setAttribute("id", "card");

      let avatar = document.createElement("div");
      avatar.setAttribute("id", "image");
      let pic = document.createElement("img");
      pic.src = el.urlToImage;
      avatar.append(pic);

      let head = document.createElement("div");
      head.setAttribute("id", "head");
      let des = document.createElement("h3");
      des.innerText = el.description;
      let date = document.createElement("p");
      date.innerText = "Updated :" + " " + el.publishedAt;
      let line = document.createElement("hr");

      let social = document.createElement("div");
      social.setAttribute("id", "social");
      let h1 = document.createElement("p");
      h1.innerText = "Share Trending On:";

      let fb = document.createElement("a");
      fb.href = "https://www.facebook.com/";
      let fbImg = document.createElement("img");
      fbImg.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAD8/PzIyMg8PDxcXFyYmJjLy8t+fn6Li4vt7e3o6Oj09PS3t7dhYWFQUFDW1tYsLCxwcHDCwsKVlZUjIyPU1NSdnZ2FhYVVVVVqamqnp6fd3d2xsbGIiIhBQUFISEjM9axNAAACRklEQVR4nO3aCW7bMBBG4dCOF8WLHMfZarvp/U/ZdAWKmIxGHnT4E+87wTwIFi2SNzcAAAAAAAAAAAAAAAAAgOutnzbPL/vta9+/zrZf9stuftxMd6tJ9Fw+TsdtylpGT3e13Uu+roXC8325T73w/Fneu6/RQ17h9Onz++EQPeZ43ZC+lObRc441eRsWmJ6jJx3pbmBfSsfoUccZHihauB4emM7Rw44y6CX62yZ62DH2hkDJwgdLYHqIHncEU2CaRo9rN3Cl/2MRPa+Z5T2qWWh8hOkpemAzY2A6RQ9stWm+cGYtXEVPbGUNlCtcmAvvokc2OpRz+uVh/tPhl65brqNHNir9DL/pLX0XFAJVP+b/NckHau8a/rXKF0aP5mTX+iMsLBaKH7qXTLOFcn/OMvKFagt7Tr5QbWHPyRc2chRKYQMo1EehPgr1UaiPQn0U6qNQX34nKnqykfps0HBv0RFF5sPCC7bREUUehfvoiCKPwro3wz0Ku+iIIo/Cuu8IexTWfazoUVj3/VKPwroPpTwK67596VFY9/UFj8JddESRR2HdR6cehXXf+vIorPvo1KOw7k9jj8LohjIKKXz3GN1Q5lB4G91Q5lDYRzeUORTOohvKHHYT695q+6i5HeEP2t/Vp1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn3tFy7uby97bKUQAAAAAAAAAAAAAAAAAP6n78C+HSuk6RDCAAAAAElFTkSuQmCC";
      fbImg.setAttribute("id", "fb");
      fb.append(fbImg);

      let whatsap = document.createElement("a");
      whatsap.href = "https://www.whatsapp.com/";
      let whatsapImg = document.createElement("img");
      whatsapImg.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyf42ac41PPtwLqUwlmau5V7hTZ_oHChkHg&usqp=CAU";
      whatsapImg.setAttribute("id", "fb");
      whatsap.append(whatsapImg);

      let twitter = document.createElement("a");
      twitter.href = "https://twitter.com/i/flow/login";
      let twitterImg = document.createElement("img");
      twitterImg.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaalaV3NJnfbTSWLy7LpUy2aJUJot9qGIDA&usqp=CAU";
      twitterImg.setAttribute("id", "fb");
      twitter.append(twitterImg);

      let line2 = document.createElement("h3");
      line2.setAttribute("id", "line2");
      line2.innerText = "|";

      let eyeImg = document.createElement("img");
      eyeImg.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiP0P3fl479CK_AHWPocp7L1s2mRhXhSK5HA&usqp=CAU";
      eyeImg.setAttribute("id", "eye");

      let count = document.createElement("p");
      count.setAttribute("id","count")
      count.innerText = (Math.random()*10000).toFixed(0);


      social.append(h1, fb, twitter, whatsap, line2, eyeImg,count);
      head.append(des, date, line, social);
      card.append(avatar, head);
      body.append(card);
    });
  };
  append2(data1)