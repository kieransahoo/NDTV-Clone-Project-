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

let data = [
  {
    source: { id: null, name: "Formula 1" },
    author: "F1",
    title:
      "FORM GUIDE: Can Ferrari continue their run of form in France? - Formula 1",
    description:
      "Ferrari seek a third win on the bounce in the 2022 French Grand Prix, but with Red Bull raring to hit back – and Mercedes making a case against the frontrunners – it might not be so simple for the Scuderia.",
    url: "https://www.formula1.com/en/latest/article.form-guide-can-ferrari-continue-their-run-of-form-in-france.1PW0TFeHm9NmK0T4k08uIK.html",
    urlToImage:
      "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/FrenchGP/Pre/FRAF1_FEATART_FORM-GUIDE_V1_PT1.jpg",
    publishedAt: "2022-07-21T12:31:08Z",
    read:10324,
    content:
      "Ferrari seek a third win on the bounce in the 2022 French Grand Prix, but with Red Bull raring to hit back and Mercedes making a case against the front-runners it might not be so simple for the Scude… [+6968 chars]",
  },
  {
    source: { id: null, name: "NDTV News" },
    author: "Press Trust of India",
    title:
      '"Just A Drag Now": Pakistan Great Wasim Akram Wants ODIs To Be Scrapped - NDTV Sports',
    description:
      "Wasim Akram's comments came close on the heels of England all-rounder Ben Stokes' sudden retirement from ODIs, which has triggered a serious debate over the existence of 50-over cricket.",
    url: "https://sports.ndtv.com/cricket/just-a-drag-now-pakistan-great-wasim-akram-wants-odis-to-be-scrapped-3179895",
    urlToImage:
      "https://c.ndtvimg.com/2021-04/1nn6b778_wasim-akram-afp_650x400_02_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    publishedAt: "2022-07-21T10:27:58Z",
    read:4523,
    content:
      'Pakistan pace bowling legend Wasim Akram feels ODI cricket has become "run-of-the-mill" stuff now and wants the administrators of the game to scrap the format for good. Akram\'s comments came close on… [+2333 chars]',
  },
  {
    source: { id: null, name: "NDTV News" },
    author: "Vedant Yadav",
    title:
      '"Deserves A Look In": Wasim Jaffer Wants This Youngster To Open With Shikhar Dhawan In West Indies O.. - NDTV Sports',
    description:
      "WI vs IND: Wasim Jaffer also pointed out that playing the youngster will keep the left-right opening combo intact.",
    url: "https://sports.ndtv.com/west-indies-vs-india-2022/deserves-a-look-in-wasim-jaffer-wants-this-youngster-to-open-with-shikhar-dhawan-in-west-indies-odis-3179775",
    urlToImage:
      "https://c.ndtvimg.com/2022-07/inf59t48_wasim-jaffer-806_625x300_10_July_22.jpg",
    publishedAt: "2022-07-21T09:26:42Z",
    read:415,
    content:
      "Former India batter Wasim Jaffer wants Ruturaj Gaikwad to make his ODI debut against West Indies in the first game of three-match series at the Port of Spain in Trinidad on Friday. With captain Rohit… [+1765 chars]",
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
    publishedAt: "2022-07-21T09:25:42Z",
    read:41654,
    content:
      "There was little shock in the chess world when Magnus Carlsen announced that he no longer intends to defend his world championship crown, firmly perched on his head since he snatched it from Viswanat… [+5419 chars]",
  },
  {
    source: { id: null, name: "The Indian Express" },
    author: "Nihal Koshie",
    title:
      "World Championships: How faster arm speed is helping Neeraj Chopra throw further - The Indian Express",
    description:
      "Neeraj Chopra is not as physically strong as he was at the Tokyo Olympics but a quicker arm speed and consistency in technique is working wonders for him.",
    url: "https://indianexpress.com/article/sports/world-championships-how-faster-arm-speed-is-helping-neeraj-chopra-throw-further-8041906/",
    urlToImage: "https://images.indianexpress.com/2022/07/neeraj-chopra-8.jpg",
    publishedAt: "2022-07-21T09:25:37Z",
    read:154,
    content:
      "For no fault of his, the javelin thrower Neeraj Chopra has been forced to behave like a student in a race against time. He’s had to rush through a year’s syllabus in about six months. The extended fe… [+7880 chars]",
  },
  {
    source: { id: null, name: "Cricketaddictor.com" },
    author: "More by Vicky Singh",
    title:
      "RCC vs RC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- FanCode ECS T10 Rome - Cricket Addictor",
    description:
      "RCC vs RC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- FanCode ECS T10 Rome",
    url: "https://cricketaddictor.com/fantasy-cricket/rcc-vs-rc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ecs-t10-rome/",
    urlToImage:
      "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/07/IMG-20220720-WA0045.jpg",
    publishedAt: "2022-07-21T08:06:33Z",
    read:7456,
    content:
      "RCC vs RC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of FanCode ECS T10 Rome match between Roma CC and Roma Capennelle.\r\nRCC vs RC FanCode ECS T10… [+4412 chars]",
  },
  {
    source: { id: null, name: "Hindustan Times" },
    author: "HT Sports Desk",
    title:
      "Watch: Fan braves rain, waits for 2 hours to meet Shreyas Iyer and then… - Hindustan Times",
    description:
      "India vs West Indies: Shizara, who claimed to be a big Shreyas Iyer fan, got the India batter's autograph in a miniature bat afteer waiting for two hours in Port of Spain during India's first training session ahead of the first ODI.",
    url: "https://www.hindustantimes.com/cricket/fan-braves-rain-waits-for-two-hours-to-get-shreyas-iyer-s-autograph-in-india-s-first-training-session-ahead-of-west-indies-odis-watch-video-101658389717755.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/21/1600x900/kapil_kohli_(1)_1658390054561_1658390065023_1658390065023.jpg",
    publishedAt: "2022-07-21T08:01:18Z",
    read:456,
    content:
      "An Indian cricket team fan braved the rains and waited for two hours to get a glimpse of her favourite players at Port of Spain in Trinidad and Tobago on Wednesday. Shizara, who claimed to be a big S… [+1866 chars]",
  },
  {
    source: { id: null, name: "SPORTbible" },
    author: "Nathan Allen",
    title:
      "Player Ratings: Manchester City 2-1 Club América (Pre-Season Friendly) - SPORTbible",
    description:
      "Kevin De Bruyne scored a brace as Manchester City beat Club América in their first pre-season friendly. Here is how we rated the players...",
    url: "https://www.sportbible.com/city-xtra/man-city-club-america-player-ratings-pre-season-20220721",
    urlToImage:
      "https://images.ladbible.com/resize?type=jpeg&quality=70&width=1200&fit=contain&dpr=1&url=https://eu-images.contentstack.com/v3/assets/blta90d05ad41a54a71/bltf4b95ee4418b4757/62d8c5702695f93a46c7db42/2JHWF8G.jpg",
    publishedAt: "2022-07-21T08:00:07Z",
    read:8794,
    content:
      "Three new signings made their debuts as Manchester City kicked off pre-season with a victory over Mexican outfit, Club América in Houston.\r\nKalvin Phillips started on the bench as Pep Guardiola named… [+4394 chars]",
  },
  {
    source: { id: null, name: "SB Nation" },
    author: "David Pasztor",
    title:
      "Tuchel not best pleased by familiar issues as Chelsea draw preseason friendly in Charlotte - We Ain't Got No History",
    description: "Not good enough",
    url: "https://weaintgotnohistory.sbnation.com/2022/7/21/23272438/tuchel-not-best-pleased-by-familiar-issues-as-chelsea-draw-preseason-friendly-in-charlotte",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/CBZJtmRXBeqWln5tvgr3Q8h4LPE=/0x275:4074x2408/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23890529/1409982697.jpg",
    publishedAt: "2022-07-21T07:36:40Z",
    read:4864,
    content:
      "The focus in Chelseas first preseason match over the weekend was purely on fitness, to get the legs moving in a semi-competitive match setting. That focus has started to shift a bit towards the tacti… [+2995 chars]",
  },
  {
    source: { id: null, name: "NDTV News" },
    author: "Abhishek Paul",
    title:
      '"If There Was Some Other Out Of Form Player...": World Cup Winner Says This On Virat Kohli\'s Place I.. - NDTV Sports',
    description:
      "Many have wondered whether Virat Kohli should be picked for the 2022 T20 World Cup or not, based on current form.",
    url: "https://sports.ndtv.com/cricket/if-there-was-some-other-out-of-form-player-world-cup-winner-says-this-on-virat-kohlis-place-in-the-indian-cricket-team-3179182",
    urlToImage:
      "https://c.ndtvimg.com/2022-07/6h28sk5g_virat-kohli-afp_625x300_18_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    publishedAt: "2022-07-21T07:31:00Z",
    read:8948,
    content:
      "Virat Kohli's lean patch is currently one of the most-discussed topics in Indian cricket. The former Indian cricket team has failed to produce big scores in recent times. Some former Indian players h… [+1841 chars]",
  },
  {
    source: { id: null, name: "Bavarian Football Works" },
    author: "Jake Fenner",
    title:
      "Bayern Munich manager Julian Nagelsmann speaks following 6-2 win over D.C. United - Bavarian Football Works",
    description:
      "A hot day ended with a cool result as Bayern’s manager let the team play to its hearts content.",
    url: "https://www.bavarianfootballworks.com/2022/7/21/23272354/bayern-munich-manager-julian-naglesmann-speaks-following-6-2-win-over-dc-united-mane-de-ligt-muller",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/R9Sdng4bKKqUFwwgpJfVVkN0B70=/0x0:1232x645/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23890413/IMG_7881.jpg",
    publishedAt: "2022-07-21T06:00:00Z",
    read:4156,
    content:
      "WASHINGTON A game of changes was on hand going into the match against D.C. United. Bayern Munich head coach Julian Naglesmann was fully willing to admit that when I asked him about his change in atta… [+4593 chars]",
  },
  {
    source: { id: null, name: "Hindustan Times" },
    author: "HT Sports Desk",
    title:
      "'Pakistan shouldn't have done that. I know it was captain's decision...' - Hindustan Times",
    description:
      "Shahid Afridi expressed his disagreement with Babar Azam's captaincy decision despite Pakistan's impressive win over Sri Lanka in the first Test in Galle.",
    url: "https://www.hindustantimes.com/cricket/pakistan-shouldn-t-have-done-that-i-know-it-was-captain-s-decision-shahid-afridi-unhappy-with-babar-azam-s-call-despite-win-101658380539842.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/21/1600x900/Collage_Maker-21-Jul-2022-11.07-AM_1658381849746_1658381855585_1658381855585.jpg",
    publishedAt: "2022-07-21T05:38:43Z",
    read:123,
    content:
      "Pakistan registered a record run-chase in Galle on Wednesday to beat Sri Lanka in the first Test of the series. The side chased down a 342-run target with four wickets remaining, as Abdullah Shafique… [+1760 chars]",
  },
  {
    source: { id: null, name: "SportsCafe" },
    author: "SportsCafe Desk",
    title:
      "T20 World Cup 2022 | Would try every way to have Rishabh Pant and Dinesh Karthik in playing XI, says Ricky Ponting - SportsCafe",
    description:
      "Ricky Ponting has given his verdict about the idea of both Rishabh Pant's and Dinesh Karthik's inclusions in India's lineup for the next T20 World Cup in Australia later this year. Ponting feels India should play with both Pant and Karthik and rather drop Ish…",
    url: "https://sportscafe.in/cricket/articles/2022/jul/21/t-20-world-cup-2022-would-be-trying-to-find-every-way-to-have-both-rishabh-pant-and-dinesh-karthik-in-playing-xi-remarks-ricky-ponting",
    urlToImage:
      "https://cdn-images.spcafe.in/img/es3-cfill-w800-h418/articles/Cricket_1/ricky_ponting_rishabh_pant.jfif",
    publishedAt: "2022-07-21T04:45:42Z",
    read:1564,
    content:
      "Rishabh to bat, in that three-four-five range, and have Dinesh and maybe Hardik Pandya if you have those guys finishing for you, well that batting line-up looks very, very dangerous. Obviously, that … [+342 chars]",
  },
  {
    source: { id: null, name: "cricket.com.au" },
    author: "Jack Paynter",
    title:
      "Renegades claim top pick in first BBL Draft lottery - cricket.com.au",
    description:
      "The date, broadcast details and order of the BBL's first overseas player draft have been confirmed with the two Melbourne clubs to have first dibs on the best talent",
    url: "https://www.cricket.com.au/news/bbl-draft-first-pick-order-lottery-no1-renegades-stars-heat-sixers-scorchers-thunder-hurricanes/2022-07-21",
    urlToImage:
      "https://www.cricket.com.au/~/-/media/News/2022/07/21Gades-Cele.ashx?w=1600",
    publishedAt: "2022-07-21T04:10:47Z",
    read:1324,
    content:
      "Draft explainer: How clubs will recruit overseas stars in BBL|12\r\nThe Melbourne Renegades have clinched the coveted first pick in the BBL's inaugural overseas player draft after being drawn first in … [+4988 chars]",
  },
  {
    source: { id: null, name: "NDTV News" },
    author: "NDTV Sports Desk",
    title:
      "Watch: Batter Forgets To Wear Pads During Match, Hilarious Video Takes Twitter By Storm - NDTV Sports",
    description:
      "The batter walked up and marked his guard, but had to run back to the pavilion once he realised his blunder.",
    url: "https://sports.ndtv.com/cricket/batter-forgets-to-wear-pads-during-match-hilarious-video-takes-twitter-by-storm-watch-3178663",
    urlToImage:
      "https://c.ndtvimg.com/2022-07/7uj0aq3_village-cricket-pads-twitter_625x300_21_July_22.jpg",
    publishedAt: "2022-07-21T03:41:44Z",
    read:45,
    content:
      "While cricket is a competitive and serious sport, there are times when funny incidents can happen on the field. Having said that, in a bizarre turn of events, a hilarious incident has gone viral on s… [+2095 chars]",
  },
  {
    source: { id: null, name: "NDTV News" },
    author: "NDTV Sports Desk",
    title:
      "\"Off The Field, Don't Enjoy Too Much\": Pakistan Great's Advice To Hardik Pandya - NDTV Sports",
    description:
      "Shoaib Akhtar feels Hardik Pandya has reinvented himself after being dropped from the team due to his fitness, adding that the player adds more balance to the Indian team.",
    url: "https://sports.ndtv.com/cricket/off-the-field-dont-enjoy-too-much-pakistan-greats-advice-to-hardik-pandya-3178640",
    urlToImage:
      "https://c.ndtvimg.com/2022-07/1jjkgbe_hardik-pandya-afp_625x300_17_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    publishedAt: "2022-07-21T03:20:39Z",
    read:78,
    read:153,
    content:
      "Former Pakistan pacer Shoaib Akhtar is impressed with India all-rounder Hardik Pandya's recent form. Hardik had a great Indian Premier League 2022 campaign where he led Gujarat Titans to the title in… [+1268 chars]",
  },
  {
    source: { id: null, name: "Hindustan Times" },
    author: "HT Sports Desk",
    title:
      "Watch: Lord's' million-dollar reaction to Pujara's 3rd double century - Hindustan Times",
    description:
      "Cheteshwar Pujara continued his sizzling form in the ongoing County Championship, scoring his third double century of the season for Sussex.",
    url: "https://www.hindustantimes.com/cricket/watch-lord-s-million-dollar-reaction-after-pujara-scores-3rd-double-century-for-sussex-in-county-harbhajan-reacts-101658371592890.html",
    urlToImage:
      "https://images.hindustantimes.com/img/2022/07/21/1600x900/pujara-lords_1658371900726_1658371904712_1658371904712.jpg",
    publishedAt: "2022-07-21T02:56:51Z",
    read:656,
    content:
      "India's Cheteshwar Pujara is batting on a whole different level in the County Championship season. A day after he registered his fifth century of the season for Sussex, India's Test specialist took i… [+1776 chars]",
  },
  {
    source: { id: null, name: "The Hard Tackle" },
    author: "Keshav Awasty",
    title:
      "Transfer News: Chelsea agree £55 million deal to sign Jules Kounde - The Hard Tackle",
    description:
      "Premier League heavyweights Chelsea have reportedly agreed to a transfer fee worth £55 million with Sevilla to sign Jules Kounde, a target for Barcelona. #Barcelona #ChelseaFC #JulesKounde",
    url: "http://www.thehardtackle.com/transfer-news/2022/07/21/chelsea-agree-55-million-deal-to-sign-jules-kounde/",
    urlToImage:
      "http://www.thehardtackle.com/wp-content/uploads/2016/12/Chelsea-v-West-Ham-United-Premier-League-1-600x315.jpg",
    publishedAt: "2022-07-21T02:52:35Z",
    read:413,
    content:
      "Premier League heavyweights Chelsea have reportedly agreed to a transfer fee worth £55 million with Sevilla to sign Jules Kounde, a target for Barcelona.\r\nAccording to a report by The Sun, Chelsea an… [+2662 chars]",
  },
  {
    source: { id: null, name: "International Cricket Council" },
    author: "ICC",
    title:
      "One of Pakistan's best: Shafique showered in praise after Test exploits - International Cricket Council",
    description:
      "The plaudits have come in thick and fast for first Test hero Abdullah Shafique with one former great declaring his match-winning innings against Sri Lanka as one of the greatest he has ever seen from a Pakistan player, while skipper Babar Azam believes the ri…",
    url: "https://www.icc-cricket.com/news/2685196",
    urlToImage:
      "https://resources.pulse.icc-cricket.com/ICC/photo/2022/07/21/393da3aa-e8d6-4c08-aca5-5689aba05b72/Shafiqueton.jpg",
    publishedAt: "2022-07-21T02:33:53Z",
    read:5684,
    content:
      "The plaudits have come in thick and fast for first Test hero Abdullah Shafique with one former great declaring his match-winning innings against Sri Lanka as one of the greatest he has ever seen from… [+3661 chars]",
  },
  {
    source: { id: null, name: "The Indian Express" },
    author: "Andrew Amsan",
    title:
      "New national record holder among two athletes who fail dope test - The Indian Express",
    description:
      "The 24-year-old Dhanalakshmi returned positive for a banned steroid in a dope test conducted abroad by the Athletics Integrity Unit (AIU) of the World Athletics.",
    url: "https://indianexpress.com/article/sports/sport-others/cwg-bound-sprinter-dhanalakshmi-and-triple-jumper-aishwarya-babu-fail-dope-test-8040943/",
    urlToImage: "https://images.indianexpress.com/2021/08/dhanalakhsmi.jpg",
    publishedAt: "2022-07-21T01:03:25Z",
    read:456,
    content:
      "With about a week to go for the Commonwealth Games in Birmingham, two of India’s brightest track and field athletes have failed dope tests, The Indian Express has learnt.Dhanalakshmi Sekar (24), who … [+3631 chars]",
  },
];

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
