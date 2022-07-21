import navigator from "../components/navigator.js";
let nav = (document.querySelector("#navigator").innerHTML = navigator());

import functionalities from "../components/functionalities.js";
let fun = (document.querySelector("#functionalities").innerHTML =
  functionalities());

import { categories, categoriesButton } from "../components/categories.js";
let cat = (document.querySelector("#categories").innerHTML = categories());

categoriesButton();

import { append1 } from "../components/fetch.js";

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
    read: 2456,
    content:
      "Justice Chandrachud : You withdraw this.\r\nTripathi : With liberty to move the trial court.\r\nAhamdi objects : No, he is not a part to the suit.\r\nJ Chandrachud : Whatever liberty law gives, you can hav… [+1 chars]",
  },
  {
    source: { id: "google-news-in", name: "Google News (India)" },
    author: "Yogesh Naik",
    title: "Maharashtra Government removes stay on constructing Aarey car shed",
    description:
      "Soon after taking over, Deputy Chief Minister Devendra Fadnavis had asked the urban development department to start the process for the construction of the car shed at Aarey.",
    url: "https://indianexpress.com/article/cities/mumbai/maharashtra-government-removed-stay-aarey-car-shed-8043106/",
    urlToImage: "https://images.indianexpress.com/2022/07/aarey-file-1.jpeg",
    publishedAt: "2022-07-21T08:05:39+00:00",
    read: 2456,
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
    read: 2456,
    content:
      "The Supreme Court on Thursday passed an ad-interim order to allow an unmarried woman to abort her pregnancy of 24-weeks arising out of a live-in relationship, subject to a medical board constituted b… [+4936 chars]",
  },
];
append1(data1);
let append = (data) => {
  let body = document.getElementById("body");
 body.innerHTML=""
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
    des.addEventListener("click",function(){
      newsDetails(el)
    })
   
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
    count.innerText = el.read



    social.append(h1, fb, twitter, whatsap, line2, eyeImg,count);
    head.append(des, date, line, social);
    card.append(avatar, head);
    body.append(card);
  });
};


let data = [
  {
    source: { id: null, name: "Moneycontrol" },
    author: "Rakesh Patil",
    title:
      "Market LIVE Updates: Indices trade in the green; IndusInd Bank top gainer, Wipro, RIL most active - Moneycontrol",
    description:
      "Stock Market LIVE Updates: All the sectoral indices are trading in the green. BSE midcap and smallcap indices up nearly a percent each.",
    url: "https://www.moneycontrol.com/news/business/markets/pro-indusind-bank-au-small-finance-bank-gland-pharma-tata-communications-ador-welding-som-distilleries-sbi-jsw-ispat-ceat-agro-tech-havells-india-sonata-software-sasken-technologies-mcnally-bharat-8860541.html",
    urlToImage:
      "https://images.moneycontrol.com/static-mcnews/2022/03/fandosensexniftyderivative-2-770x433.jpg",

    publishedAt: "2022-07-21T04:33:28Z",
    read: 6456,
    content:
      "July 21, 2022 / 09:22 AM IST\r\nV K Vijayakumar, Chief Investment Strategist at Geojit Financial Services:\r\nWith around 8.5% rally from the June lows, Nifty is likely to consolidate around the present … [+821 chars]",
  },
  {
    source: { id: null, name: "Hindustan Times" },
    author: "HT Education Desk",
    title:
      "CBSE Result 2022 Live: CBSE Class 10th results date, time latest updates - Hindustan Times",
    description:
      "CBSE 10th Results 2022 Live Updates: Central Board of Secondary Education (CBSE) will announce Class 10 results on its official website, cbseresults.nic.in, results.cbse.nic.in. Live updates here.",
    url: "https://www.hindustantimes.com/education/board-exams/cbse-result-2022-live-class-10th-12th-results-on-cbseresults-nic-in-date-101658369913837.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/21/1600x900/cbse-result_1658370069818_1658370070108_1658370070108.jpg",
    publishedAt: "2022-07-21T04:22:57Z",
    read: 246,
    content:
      "CBSE 10th Result 2022 Live Updates: Central Board of Secondary Education (CBSE) will announce board exam results for Class 10 students on its official website, cbseresults.nic.in and results.cbse.nic… [+2615 chars]",
  },
  {
    source: { id: null, name: "The Indian Express" },
    author: "AP",
    title:
      "NASA aiming for late August test flight of giant moon rocket - The Indian Express",
    description:
      "On the 53rd anniversary of the Apollo 11 lunar landing, NASA announced it’s shooting for a late August launch of its giant, new moon rocket.",
    url: "https://indianexpress.com/article/technology/science/nasa-aiming-for-late-august-test-flight-of-giant-moon-rocket-8042559/",
    urlToImage:
      "https://images.indianexpress.com/2022/07/NASA_MoonRocket_AP.jpg",
    publishedAt: "2022-07-21T04:19:48Z",
    read: 2436,
    content:
      "On the 53rd anniversary of the Apollo 11 lunar landing, NASA announced its shooting for a late August launch of its giant, new moon rocket.NASA will attempt the more than month-long lunar test flight… [+1704 chars]",
  },
  {
    source: { id: null, name: "The Indian Express" },
    author: "Express Web Desk",
    title:
      "Presidential Election 2022 Result Live Updates: India set to get first woman tribal President; counting of votes today - The Indian Express",
    description:
      "Presidential Election 2022 Result Live Updates, July 21: Ballot boxes from all states have arrived at the Parliament House and poll officials are ready to begin counting in room number 63.",
    url: "https://indianexpress.com/article/india/presidential-election-2022-results-counting-votes-live-updates-yashwant-sinha-droupadi-murmu-8042430/",
    urlToImage: "https://images.indianexpress.com/2022/07/murmu-yashwant.jpg",
    publishedAt: "2022-07-21T04:07:40Z",
    read: 5456,
    content:
      "Narendra Modi; Amit Shah; Manmohan Singh; Mamata Banerjee cast votes. (PTI and Express Photos)\r\nExplained: How the President of India is electedOn July 18, elected MLAs and MPs across the country wil… [+1614 chars]",
  },
  {
    source: { id: null, name: "NDTV News" },
    author: "NDTV Sports Desk",
    title:
      '"Can Emerge As Model, Earn In Crores": Shoaib Akhtar Wants India Star To Lose Weight - NDTV Sports',
    description:
      "Former Pakistan pacer Shoaib Akhtar urged Rishabh Pant to focus on his fitness and shed some weight.",
    url: "https://sports.ndtv.com/cricket/can-emerge-as-model-earn-in-crores-shoaib-akhtar-wants-india-star-to-lose-weight-3178608",
    urlToImage:
      "https://c.ndtvimg.com/2020-05/pai76d1g_shoaib-akhtar-afp_625x300_26_May_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
    publishedAt: "2022-07-21T03:45:40Z",
    read: 1456,
    content:
      "Former Pakistan pacer Shoaib Akhtar lauded India wicketkeeper-batter Rishabh Pant, saying that the youngster is a fearless cricketer, who has got variety of shots in his arsenal to trouble the opposi… [+1341 chars]",
  },
  {
    source: { id: null, name: "Hindustan Times" },
    author: "Hindustantimes",
    title:
      "Cong on BJP celebration after MP results: 'Child born at someone else's home…' - Hindustan Times",
    description:
      'According to the BJP, their performance was “historic" since they won 300 out of 347 urban civic bodies. | Latest News India',
    url: "https://www.hindustantimes.com/india-news/kamal-nath-takes-dig-at-bjp-celebration-after-mp-civic-polls-a-child-is-born-at-someone-else-s-home-and-101658367289922.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/21/1600x900/kamal-nath-addresses-bhopal-press-conferance-residence_d7bb2d60-2eb4-11eb-b9a2-d7de0b3760e9_1658374501574_1658374501574.jpg",
    publishedAt: "2022-07-21T03:39:06Z",
    read: 2963,
    content:
      "Congress leader Kamal Nath on Wednesday took a dig at the Bharatiya Janata Party (BJP) over the Madhya Pradesh municipal elections and alleged that the ruling party blatantly used police, admin and m… [+1884 chars]",
  },
  {
    source: { id: "the-times-of-india", name: "The Times of India" },
    author: "TIMESOFINDIA.COM",
    title:
      "Things everyone should know about protecting their eyes - Times of India",
    description:
      "Out of the 5 senses of the human body - touch, hearing, sight, smell and taste - our eyesight is the most important for us.",
    url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/things-everyone-should-know-about-protecting-their-eyes/photostory/93004487.cms",
    urlToImage: "https://static.toiimg.com/photo/93004540.cms",
    publishedAt: "2022-07-21T03:30:00Z",
    read: 6556,
    content:
      "Out of the 5 senses of the human body - touch, hearing, sight, smell and taste - our eyesight is the most important for us. The ability to see is the most precious attribute gifted to mankind, and th… [+287 chars]",
  },
  {
    source: { id: null, name: "NDTV News" },
    author: null,
    title:
      "Sharad Pawar Dissolves All Units Of Party, Days After Shiv Sena Coup - NDTV",
    description:
      "Nationalist Congress Party president Sharad Pawar has dissolved all departments and cells of his political party with immediate effect, a senior NCP leader said on Wednesday.",
    url: "https://www.ndtv.com/india-news/sharad-pawar-dissolves-all-departments-cells-of-ncp-gives-no-reason-3178310",
    urlToImage:
      "https://c.ndtvimg.com/2019-09/ekqv5sl4_sharad-pawar-pti_625x300_25_September_19.jpg",
    publishedAt: "2022-07-21T03:27:20Z",
    read: 4556,
    content:
      "Sharad Pawar has dissolved all departments and cells of his party NCP with immediate effect\r\nMumbai: Nationalist Congress Party president Sharad Pawar has dissolved all departments and cells of his p… [+1190 chars]",
  },
  {
    source: { id: null, name: "India.com" },
    author: "Zee Media Bureau",
    title:
      "NASA shares stunning rainbow coloured image of Pluto, leaves internet amazed - See pic - Zee News",
    description:
      "American Space Agency NASA has taken the internet by storm after it shared a rainbow-coloured image of Pluto on its official Instagram account. NASA keeps on sharing amazing photographs of celestial bodies on its social media platforms.",
    url: "https://zeenews.india.com/india/nasa-shares-stunning-rainbow-coloured-image-of-pluto-leaves-internet-amazed-see-pic-2487836.html",
    urlToImage:
      "https://english.cdn.zeenews.com/sites/default/files/2022/07/21/1067621-untitled-design-2022-07-21t085512.748.jpg",
    publishedAt: "2022-07-21T03:25:34Z",
    read: 256,
    content:
      "New Delhi: American Space Agency NASA has taken the internet by storm after it shared a rainbow-coloured image of Pluto on its official Instagram account. NASA keeps on sharing amazing photographs of… [+1064 chars]",
  },
  {
    source: { id: null, name: "NDTV News" },
    author: null,
    title:
      "Punjab Chief Minister Bhagwant Mann Admitted To Delhi Hospital: Report - NDTV",
    description:
      "Punjab Chief Minister Bhagwant Mann has been admitted to a hospital in Delhi, sources said today.",
    url: "https://www.ndtv.com/india-news/punjab-chief-minister-bhagwant-mann-admitted-to-delhis-apollo-hospital-report-3178589",
    urlToImage:
      "https://c.ndtvimg.com/2022-07/jeg78d4g_bhagwant-mann-pti_625x300_21_July_22.jpg",
    publishedAt: "2022-07-21T03:17:06Z",
    read: 6416,
    content:
      "Bhagwant Mann admitted for treatment in Delhi's Apollo Hospital after a stomach ache. (File)\r\nNew Delhi: Punjab Chief Minister Bhagwant Mann has been admitted to a hospital in Delhi, sources said tod… [+1531 chars]",
  },
  {
    source: { id: null, name: "Northeast Now" },
    author: "NE NOW NEWS",
    title:
      "Garena Free Fire Max Redeem Codes for July 21 2022 : Grab these free FF Max diamonds, skins and more - Northeast Now",
    description:
      "What excites you more- playing your favorite game or getting free rewards? What if we tell you that you can get both.",
    url: "http://nenow.in/free-fire/garena-free-fire-max-redeem-codes-for-july-21-2022.html",
    urlToImage:
      "https://nenow.in/wp-content/uploads/2022/03/Garena-Free-Fire-max.jpg",
    publishedAt: "2022-07-21T03:06:12Z",
    read: 541,
    content:
      "What excites you more- playing your favorite game or getting free rewards? What if we tell you that you can get both. Garena Free Fire MAX players can not only enjoy playing the game but can also cla… [+1975 chars]",
  },
  {
    source: { id: "the-times-of-india", name: "The Times of India" },
    author: "Umesh Isalkar",
    title:
      "Docs treating dengue see hints of more serious type-2 virus - Times of India",
    description:
      "A number of dengue patients from the rural parts of Pune and Satara are landing in hospital with acute lung injury within days of symptom onset, whic",
    url: "https://timesofindia.indiatimes.com/city/pune/docs-treating-dengue-see-hints-of-more-serious-type-2-virus/articleshow/93017467.cms",
    urlToImage:
      "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2022-07-21T02:57:00Z",
    read: 3562,
    content: "",
  },
  {
    source: { id: null, name: "Hindustan Times" },
    author: "HT Sports Desk",
    title:
      "Watch: Lord's million-dollar reaction to Pujara's 3rd double-century - Hindustan Times",
    description:
      "Cheteshwar Pujara continued his sizzling form in the ongoing County Championship, scoring his third double century of the season for Sussex.",
    url: "https://www.hindustantimes.com/cricket/watch-lord-s-million-dollar-reaction-after-pujara-scores-3rd-double-century-for-sussex-in-county-harbhajan-reacts-101658371592890.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/21/1600x900/pujara-lords_1658371900726_1658371904712_1658371904712.jpg",
    publishedAt: "2022-07-21T02:56:51Z",
    read: 6245,
    content:
      "India's Cheteshwar Pujara is batting on a whole different level in the County Championship season. A day after he registered his fifth century of the season for Sussex, India's Test specialist took i… [+1776 chars]",
  },
  {
    source: { id: null, name: "The Tribune India" },
    author: "The Tribune India",
    title:
      "Sidhu Moosewala killing: Search all over, but killers were in Punjab - The Tribune India",
    description:
      "Gangsters Jagroop Singh Rupa and Manpreet Kussa, who were killed in a police encounter at Bhakna village near Attari in Amritsar district today, were hiding in Punjab all this while whereas the police were searching for them across the country, police source …",
    url: "https://www.tribuneindia.com/news/punjab/sidhu-moosewala-killing-search-all-over-but-killers-were-in-punjab-414164",
    urlToImage:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/7/2022_7$largeimg_256035164.jpg",
    publishedAt: "2022-07-21T02:40:00Z",
    read: 7456,
    content:
      "Tribune News Service\r\nChandigarh/ Amritsar, July 20\r\nGangsters Jagroop Singh Rupa and Manpreet Kussa, who were killed in a police encounter at Bhakna village near Attari in Amritsar district today, w… [+2079 chars]",
  },
  {
    source: { id: "the-times-of-india", name: "The Times of India" },
    author: "TNN",
    title:
      "Neeraj Chopra eyes history at World Athletics Championships - Times of India",
    description:
      "More sports News: The moment everyone has been waiting for is here. Olympic champion Neeraj Chopra will begin his much-awaited campaign at the World athletics champions",
    url: "https://timesofindia.indiatimes.com/sports/more-sports/athletics/neeraj-chopra-eyes-history-at-world-athletics-championships/articleshow/93016723.cms",
    urlToImage:
      "https://static.toiimg.com/thumb/msid-93016703,width-1070,height-580,imgsize-50628,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2022-07-21T02:26:00Z",
    read: 8556,
    content:
      "I beat better throwers than me for Olympic gold, cut-throat competition now at World Championships: Neeraj ChopraFormer long-jumper Anju Bobby George's 2003 bronze is still the only World Championshi… [+138 chars]",
  },
  {
    source: { id: null, name: "The Indian Express" },
    author: "Sandip G",
    title:
      "Why does Magnus Carlsen find the World Chess Championship boring? - The Indian Express",
    description:
      "Lack of competition and the monotony of focusing on challenger are the reasons the world champion wasn't keen on defending title.",
    url: "https://indianexpress.com/article/sports/chess/why-does-magnus-carlsen-find-the-world-chess-championship-boring-8041988/",
    urlToImage: "https://images.indianexpress.com/2021/12/Carlsen-2.jpg",
    publishedAt: "2022-07-21T01:31:10Z",
    read: 1556,
    content:
      "There was little shock in the chess world when Magnus Carlsen announced that he no longer intends to defend his world championship crown, firmly perched on his head since he snatched it from Viswanat… [+5419 chars]",
  },
  {
    source: { id: null, name: "Hindustan Times" },
    author: "HT Entertainment Desk",
    title:
      "Karan Malhotra recalls Sanjay Dutt battling cancer throughout Shamshera shoot - Hindustan Times",
    description:
      "Shamshera director Karan Malhotra opened up about working with Sanjay Dutt during his battle with cancer. He also called him a mentor.",
    url: "https://www.hindustantimes.com/entertainment/bollywood/karan-malhotra-recalls-sanjay-dutt-battling-cancer-throughout-shamshera-shoot-101658314571834.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/20/1600x900/sanjay_1658315101915_1658315102139_1658315102139.jpg",
    publishedAt: "2022-07-21T01:04:32Z",
    read: 956,
    content:
      "Sanjay Dutt is all set for his upcoming film Shamshera. While the film is not his first work after recovering from cancer, he filmed portions of the film after he was declared cancer-free. Recalling … [+1569 chars]",
  },
  {
    source: { id: null, name: "The Indian Express" },
    author: "Tech Desk",
    title:
      "Google Pixel 6a, Pixel Buds Pro now open for pre-booking in India: Check price here - The Indian Express",
    description:
      "Google Pixel 6a is now open for pre-orders in India, starting at a price of Rs 43,999. The Pixel 6a was announced in May at Google's I/O conference.",
    url: "https://indianexpress.com/article/technology/mobile-tabs/google-pixel-6a-pixel-buds-pro-now-open-for-pre-booking-in-india-check-price-here/",
    urlToImage: "https://images.indianexpress.com/2022/07/Pixel6a_NEW.jpg",
    publishedAt: "2022-07-21T01:00:58Z",
    read: 566,
    content:
      "Google Pixel 6a is now open for pre-orders in India, starting at a price of Rs 43,999. The Pixel 6a was announced in May at Google’s I/O conference. The Pixel 6a’s launch marks the return of Pixel ph… [+2592 chars]",
  },
  {
    source: { id: null, name: "Hindustan Times" },
    author: "HT News Desk",
    title:
      "Droupadi Murmu's hometown ready for celebration ahead of counting today. Updates - Hindustan Times",
    description:
      "Presidential election counting: Droupadi Murmu's hometown in Odisha is confident of her win and started preparing for the celebrations since Wednesday evening. If elected, she will be the country's first tribal President.  | Latest News India",
    url: "https://www.hindustantimes.com/india-news/droupadi-murmu-yashwant-sinha-presidential-poll-countdown-11am-101658362314149.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/21/1600x900/droupadi_murmu_(1)_1658362741733_1658362751691_1658362751691.jpg",
    publishedAt: "2022-07-21T00:21:35Z",
    read: 5156,
    content:
      "As India will get its 15th President on Thursday, Odisha's Rairangpur, the native place of NDA's presidential candidate Droupadi Murmu, began preparations anticipating Murmu's victory in the contest … [+3334 chars]",
  },
  {
    source: { id: null, name: "The Indian Express" },
    author: null,
    title:
      "Gaganyaan abort mission this year; solar, lunar missions in 2023 - The Indian Express",
    description:
      "The space agency's third scientific mission scheduled for next year is the space observatory, XpoSat, designed to study cosmic x-rays. The first abort demonstration for ISRO’s Gaganyaan mission, however, is scheduled for later this year.",
    url: "https://indianexpress.com/article/technology/science/gaganyaan-abort-mission-this-yr-solar-lunar-missions-in-2023-8042227/",
    urlToImage:
      "https://images.indianexpress.com/2019/09/gaganyaan-mission-1200.jpg",
    publishedAt: "2022-07-20T23:44:41Z",
    read: 4856,
    content:
      "The Indian Space Research Organisation (ISRO) has set new deadlines for major missions, with its first solar mission and third lunar mission set to take place in the first quarter of next year. The s… [+3186 chars]",
  },
];

append(data)

let mR = document.getElementById("mR");
mR.addEventListener("click", function () {
  mostRated(data);
});
let mostRated = (data) => {
  console.log(Math.random()*10000);
data.sort((a, b) => {
return b.read-a.read
  });
append(data);
};


let  newsDetails = (el) =>{
  console.log(el);
}