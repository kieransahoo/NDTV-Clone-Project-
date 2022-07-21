import navigator from "../component/navigator.js";
let nav = (document.querySelector("#navigator").innerHTML = navigator());

import functionalities from "../component/functionalities.js";
let fun = (document.querySelector("#functionalities").innerHTML =
  functionalities());

import { categories, categoriesButton } from "../component/categories.js";
let cat = (document.querySelector("#categories").innerHTML = categories());

categoriesButton();


import { append, append1 } from "../component/fetch.js";
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
      source: { id: null, name: "Investing.com" },
      author: "Investing.com",
      title:
        "ECB Raises Rates by 50 Basis Points, More Than Expected, Amid Record Inflation By Investing.com - Investing.com",
      description:
        "ECB Raises Rates by 50 Basis Points, More Than Expected, Amid Record Inflation",
      url: "https://www.investing.com/news/economy/ecb-raises-rates-by-50-basis-points-more-than-expected-amid-record-inflation-2850679",
      urlToImage: "https://i-invdn-com.investing.com/news/LYNXNPEB6F0K0_L.jpg",
      publishedAt: "2022-07-21T12:28:00Z",
      read:15641,
      content:
        "By Geoffrey Smith \r\nInvesting.com -- The European Central Bank raised its key interest rates on Thursday for the first time in over 11 years, going beyond its own guidance as it tries to bring down i… [+2242 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Priyanka Sangani",
      title:
        "Green card wait time likely to remain high for Indian applicants - Economic Times",
      description:
        "Almost all of these are applicants under the EB2 and EB3 (for professionals and skilled workers) categories, used by technology companies to sponsor visas for immigrant workers. The green card, or permanent residence, option is available on these visas.",
      url: "https://economictimes.indiatimes.com/nri/migrate/green-card-wait-time-likely-to-remain-high-for-indian-applicants/articleshow/93031205.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-93031154,width-1070,height-580,imgsize-44490,overlay-economictimes/photo.jpg",
      publishedAt: "2022-07-21T12:15:00Z",
      read:415684,
      content:
        "The wait for green cards for Indian applicants is likely to remain long, with 369,322 applicants having approved employment visa petitions awaiting visa availability, according to recent data from th… [+2269 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Moneycontrol News",
      title:
        "MPC's August meeting rescheduled due to 'administrative exigencies', says RBI - Moneycontrol",
      description:
        "The MPC will now meet on August 3-5, from previously scheduled August 2-4, said the central bank",
      url: "https://www.moneycontrol.com/news/economy/policy/mpc-meeting-rescheduled-to-august-3-5-due-to-administrative-exigencies-rbi-8863801.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/04/RBI_shutterstock_1686527644-770x433.jpg",
      publishedAt: "2022-07-21T11:42:01Z",
      read:1234,
      content:
        "The Reserve Bank of India (RBI) on July 21 said that the rate setting Monetary Policy Committees (MPC) meeting next month is rescheduled due to administrative exigencies.\r\nThe MPC will now meet on Au… [+1413 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Chiranjivi Chakraborty",
      title:
        "RIL Q1 preview | Net profit to double YoY as refining business shines - Moneycontrol",
      description:
        "RIL has benefitted from the substantial rise in margins of refining products like diesel and jet fuel during the June quarter",
      url: "https://www.moneycontrol.com/news/business/earnings/ril-q1-preview-net-profit-to-double-yoy-as-refining-business-shines-8864531.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2017/04/Reliance_Industries_RIL-770x433.jpg",
      publishedAt: "2022-07-21T11:41:20Z",
      read:234685,
      content:
        "Reliance Industries Limited is expected to report strong earnings for the quarter ended June on July 22, aided by a sharp rise in gross refining margins and strength in its organised retail business.… [+4144 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Joseph Rai",
      title:
        "Lawmaker Karti P Chidambaram asks fraud regulator to investigate Byju’s finances | Mint - Mint",
      description:
        "Byju’s has been under fire these past months over its delay in filing audited financials as well as over its March funding round. Besides, the company’s subsidiaries have had to lay off staff in the past weeks amid a funding crunch",
      url: "https://www.livemint.com/companies/news/lawmaker-karti-p-chidambaram-asks-fraud-regulator-to-investigate-byju-s-finances-11658401706849.html",
      urlToImage:
        "https://images.livemint.com/img/2022/07/21/600x338/6ddb5c8c-d7f5-11ea-b961-ad37760ffd4d_1596765192283_1658403013273_1658403013273.jpg",
      publishedAt: "2022-07-21T11:32:02Z",
      read:4874,
      content:
        "NEW DELHI: Karti P. Chidambaram, Member of Parliament, on Thursday said he has written to the Indias fraud regulator to launch a thorough investigation into the finances of edtech giant Byjus. I have… [+2951 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Rakesh Patil",
      title:
        "Closing Bell: Nifty ends above 16,600, Sensex gains 284 pts; capital goods, PSU bank rally - Moneycontrol",
      description:
        "On the sectoral front, except pharma, all indices ended in the green, with PSU Bank, Oil &amp; Gas, Power and Capital Goods indices rose 1-2 percent.",
      url: "https://www.moneycontrol.com/news/business/markets/pro-indusind-bank-au-small-finance-bank-gland-pharma-tata-communications-ador-welding-som-distilleries-sbi-jsw-ispat-ceat-agro-tech-havells-india-sonata-software-sasken-technologies-mcnally-bharat-8860541.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/03/fandosensexniftyderivative-2-770x433.jpg",
      publishedAt: "2022-07-21T10:23:31Z",
      read:8774,
      content:
        "July 21, 2022 / 03:34 PM IST\r\nMarket Close: Benchmark indices ended higher on the fifth day in a row with Nifty above 16600.\r\nAt close, the Sensex was up 284.42 points or 0.51% at 55,681.95, and the … [+581 chars]",
    },
    {
      source: { id: null, name: "CarToq.com" },
      author: "Jayprashanth Mohanram",
      title:
        "Last EcoSport rolls off the production line as Ford bids goodbye to car manufacturing in India - CarToq.com",
      description:
        "Goodbye, Ford Ecosport. You will be missed. Nearly everyone who’s either owned or driven the Ford EcoSport is likely to feel this way. The final EcoSport rolled out off Ford India’s Maramalainagar production facility off Chennai yesterday, marking the end of …",
      url: "https://www.cartoq.com/last-ecosport-rolls-off-the-production-line-as-ford-bids-goodbye-to-car-manufacturing-in-india/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2022/07/ford-ecosport-last-off-the-production-line.jpg",
      publishedAt: "2022-07-21T10:09:31Z",
      read:659,
      content:
        "Goodbye, Ford Ecosport. You will be missed. Nearly everyone who’s either owned or driven the Ford EcoSport is likely to feel this way. The final EcoSport rolled out off Ford India’s Maramalainagar pr… [+2396 chars]",
    },
    {
      source: { id: null, name: "Greatandhra.com" },
      author: "IANS",
      title:
        "Rupee fall against dollar, leaves parents worried.. - Greatandhra",
      description:
        "The fall in rupee against the US dollar will be pinching the Indian parents and their wards studying and aspiring to study in that country, said experts and parents.",
      url: "https://www.greatandhra.com/articles/special-articles/rupee-fall-against-dollar-leaves-parents-worried-122546",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/dollar21658394207.jpg",
      publishedAt: "2022-07-21T09:03:27Z",
      read:316541,
      content:
        "The fall in rupee against the US dollar will be pinching the Indian parents and their wards studying and aspiring to study in that country, said experts and parents.\r\nThey also said students can look… [+5140 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "ET CONTRIBUTORS",
      title:
        "Smoke screen lifts over ITC stock. Is it now on verge of re-rating? - Economic Times",
      description:
        "In recent times, the ITC stock has witnessed a significant rally, outperforming the benchmark Nifty 50 and the Nifty FMCG index. From January 1, 2022, to June 30, 2022, the stock has yielded a double-digit return of 25.4%, while the benchmarks BSE Sensex and …",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/smoke-screen-lifts-over-itc-stock-is-it-now-on-verge-of-re-rating/articleshow/93024964.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-93025756,width-1070,height-580/photo.jpg",
      publishedAt: "2022-07-21T09:00:00Z",
      read:5656,
      content:
        "SynopsisIn recent times, the ITC stock has witnessed a significant rally, outperforming the benchmark Nifty 50 and the Nifty FMCG index. From January 1, 2022, to June 30, 2022, the stock has yielded … [+234 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Muntazir Abbas, ET Telecom",
      title: "BSNL’s pan-India 4G rollout in 18-24 months: TCS - ETTelecom",
      description:
        "'Telecom Infrastructure is becoming the backbone on which major economic activities will happen in the coming decades with the next generation of businesses across financial services, agriculture, healthcare, manufacturing, and more. '",
      url: "https://telecom.economictimes.indiatimes.com/news/bsnls-pan-india-4g-rollout-in-18-24-months-tcs/93025450",
      urlToImage:
        "https://etimg.etb2bimg.com/thumb/msid-93025450,imgsize-8978,width-1200,height-628,overlay-ettelecom/bsnl-s-pan-india-4g-rollout-in-18-24-months-tcs.jpg",
      publishedAt: "2022-07-21T08:52:00Z",
      read:34641,
      content:
        "Tata Consultancy Services (TCS), a part of Tata group, is focussing on to develop tested and proven homegrown next generation telecom technology, and following the satisfactory outcome of the fourth … [+4160 chars]",
    },
    {
      source: { id: null, name: "DAWN.com" },
      author: null,
      title:
        "ADB projects Pakistan's economic growth 'recovering slightly' in FY23 - DAWN.com",
      description:
        "Checkout for the Latest and Top News from Pakistan and around the world",
      url: "https://www.dawn.com/",
      urlToImage: "http://www.dawn.com/_img/social-default.jpg",
      publishedAt: "2022-07-21T08:49:28Z",
      read:41654,
      content:
        'Says it is clear Dua is "not on good terms" with her purported \'husband\' anymore.\r\nPublished21 Jul, 202205:11pm\r\n"We are hopeful that he will be able to steer the accountability drive without any par… [+1269 chars]',
    },
    {
      source: { id: null, name: "Cardekho.com" },
      author: "Rohit",
      title: "Maruti To Uncover New Grand Vitara Tomorrow - CarDekho",
      description:
        "The Grand Vitara will be Maruti Suzuki’s first model to feature a strong-hybrid powertrain Update: Maruti has unveiled the 2022 Grand Vitara SUV ahead of its launch in September.     The new Grand Vitara is Maruti’s version of the Toyota Urban Cruiser Hyryder…",
      url: "https://www.cardekho.com/india-car-news/maruti-to-uncover-new-grand-vitara-tomorrow-29408.htm",
      urlToImage:
        "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/29407/1658150550251/GeneralNews.jpg",
      publishedAt: "2022-07-21T08:43:00Z",
      read:45654,
      content:
        "The Grand Vitara will be Maruti Suzukis first model to feature a strong-hybrid powertrain\r\nUpdate: Maruti has unveiled the 2022 Grand Vitara SUV ahead of its launch in September.\r\n<ul><li>The new Gra… [+2387 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Devika Singh",
      title:
        "Hotel business de-merger ‘very much’ on table, says ITC chief Sanjiv Puri - Moneycontrol",
      description:
        "Sanjiv Puri, chairman and managing director, ITC, said that the company will be exploring an alternate structure for the hotels business",
      url: "https://www.moneycontrol.com/news/business/companies/hotel-business-de-merger-very-much-on-table-itc-chief-sanjiv-puri-8863721.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/01/Sanjiv-Puri-ITC-770x433.jpg",
      publishedAt: "2022-07-21T08:41:05Z",
      read:123465,
      content:
        "Cigarettes-to-hotels conglomerate ITC is considering a de-merger of its hotel business, the companys chairman and managing director Sanjiv Puri said at a press conference on July 21.\r\nWe had shared p… [+4580 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Haripriya Suresh",
      title: "Former TCS CFO V Ramakrishnan passes away - Moneycontrol",
      description:
        "The former CFO, who retired in April 2021, was in the position since February 2017",
      url: "https://www.moneycontrol.com/news/business/former-tcs-cfo-v-ramakrishnan-passes-away-8863551.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/07/TCS-CFO-V-Ramakrishnan-3-770x433.jpg",
      publishedAt: "2022-07-21T08:15:48Z",
      read:98746,
      content:
        "Former Tata Consultancy Services (TCS) chief financial officer (CFO) Ramakrishnan Venkataraman, fondly known as Ramki, passed away in the early hours of July 21 at his home in Bengaluru.\r\nVenkatarama… [+2102 chars]",
    },
    {
      source: { id: null, name: "Team-BHP" },
      author: "Tushar Kelshikar",
      title:
        "More images: Next-gen Maruti Suzuki Alto spied sans camouflage - Team-BHP",
      description:
        "We shared the first undisguised images of the 2022 Maruti Suzuki Alto earlier this week. Now, more images of the car have surfaced online.",
      url: "https://www.team-bhp.com/news/more-images-next-gen-maruti-suzuki-alto-spied-sans-camouflage",
      urlToImage:
        "https://www.team-bhp.com/sites/default/files/styles/large/public/2022-maruti-alto-spied-blue-colour-new-3-747x420.jpg",
      publishedAt: "2022-07-21T07:46:06Z",
      read:654,
      content:
        "We shared the first undisguised images of the 2022 Maruti Suzuki Alto earlier this week. Now, more images of the car have surfaced online.\r\nThe latest images showcase the new Alto being loaded onto a… [+615 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Facebook's growth woes in India: too much nudity, not enough women - Reuters",
      description:
        'On Feb. 2, when Meta Platforms <a href="https://www.reuters.com/companies/META.O" target="_blank">(META.O)</a> reported Facebook\'s first-ever quarterly drop in daily users, its finance chief identified higher mobile data costs as a unique obstacle slowing gro…',
      url: "https://www.reuters.com/technology/facebooks-growth-woes-india-too-much-nudity-not-enough-women-2022-07-21/",
      urlToImage:
        "https://www.reuters.com/resizer/nclXA638Aa-DtRQzqRfiMMl7gCk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CPZ4I26DHFOV7KMK6JKOMN6FBY.jpg",
      publishedAt: "2022-07-21T06:40:00Z",
      read:97512,
      content:
        "NEW DELHI, July 21 (Reuters) - On Feb. 2, when Meta Platforms (META.O) reported Facebook's first-ever quarterly drop in daily users, its finance chief identified higher mobile data costs as a unique … [+8591 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Gautam Adani Overtakes Bill Gates To Become 4th Richest Person In The World - NDTV",
      description:
        "The 60-year-old business tycoon's net worth reached $115.5 billion on Thursday eclipsing Mr Gates whose fortunes are at $104.6 billion.",
      url: "https://www.ndtv.com/india-news/gautam-adani-overtakes-bill-gates-to-become-4th-richest-person-in-the-world-3179020",
      urlToImage:
        "https://c.ndtvimg.com/2021-07/u4mv8nm8_gautam-adani-new_625x300_21_July_21.jpg",
      publishedAt: "2022-07-21T06:16:43Z",
      read:34534,
      content:
        "The Adani group Chairman isfamed for turning a small commodities trading business into a conglomerate.\r\nNew Delhi: Indian businessman Gautam Adani has left behind Microsoft co-founder Bill Gates to b… [+1996 chars]",
    },
    {
      source: { id: null, name: "Autocarindia.com" },
      author: "Zaran Mody",
      title:
        "Royal Enfield Hunter 350 spotted at dealership, will get 2 variants - Autocar India",
      description:
        "This is the first time that the upcoming bike has been spotted undisguised, in its final paint scheme.",
      url: "https://www.autocarindia.com/bike-news/royal-enfield-hunter-350-spotted-at-dealership-will-get-2-variants-425170",
      urlToImage:
        "https://cdni.autocarindia.com/ExtraImages/20220721113415_Hunter1.jpg",
      publishedAt: "2022-07-21T06:00:00Z",
      read:3468,
      content:
        "This is the first time that the upcoming bike has been spotted undisguised, in its final paint scheme.With anticipation building ahead of its launch next month, the eagerly awaited Royal Enfield Hunt… [+3314 chars]",
    },
    {
      source: { id: null, name: "Inside Bitcoins" },
      author: "Azeez Mustapha",
      title:
        "Bitcoin Price Prediction for Today July 20: BTC Price Holds above $22.8K - Inside Bitcoins",
      description:
        "Bitcoin trades in the bullish trend zone as BTC Price holds above $22.8K. However, BTC/USD risks decline as it faced resistance at the $24,",
      url: "https://insidebitcoins.com/news/bitcoin-price-prediction-for-today-july-20-btc-price-holds-above-22-8k",
      urlToImage:
        "https://insidebitcoins.com/wp-content/uploads/2022/07/BTCUSDDaily-Chart-5.png",
      publishedAt: "2022-07-21T05:59:10Z",
      read:4654,
      content:
        "Bitcoin Is Unable To Sustain Above $24K as BTC Price Holds Above $22.8K – July 20, 2022\r\nBitcoin trades in the bullish trend zone as BTC Price holds above $22.8K. However, BTC/USD risks decline as it… [+2566 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Why This $85 Billion Fund Manager Is Betting On Indian Stocks - NDTV Profit",
      description:
        "India is best positioned among emerging nations to withstand a global recession, as a thriving domestic market makes it less dependent on exports, according to US-based GQG Partners LLC.",
      url: "https://www.ndtv.com/business/85-billion-fund-manager-betting-on-indian-stocks-amid-recession-fears-3178873",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/9hqoo98g_recession_625x300_21_July_22.jpg",
      publishedAt: "2022-07-21T05:21:52Z",
      read:541564,
      content:
        "The fund manager is bullish on Indias large private banks.\r\nIndia is best positioned among emerging nations to withstand a global recession, as a thriving domestic market makes it less dependent on e… [+1573 chars]",
    },
  ]
  append(data)


  let mR = document.getElementById("mR");
mR.addEventListener("click", function () {
  mostRated(data);
});
let mostRated = (data) => {
data.sort((a, b) => {
return b.read-a.read
  });
append(data);
};