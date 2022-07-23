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
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title:
        "Booster vaccination counters the severity of Omicron breakthrough infections - News-Medical.Net",
      description:
        "Researchers assessed a panel of seven SARS-CoV-2 vaccines currently available globally and in the United States and immunity acquired through the previous infection against all Omicron subvariants.",
      url: "https://www.news-medical.net/news/20220721/Booster-vaccination-counters-the-severity-of-Omicron-breakthrough-infections.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_720136_16584112666691051.jpg",
      publishedAt: "2022-07-21T14:03:00Z",
      read:464,
      content:
        "In a recent study published in Science, researchers assessed a panel of seven severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) vaccines currently available globally and in the United Stat… [+5651 chars]",
    },
    {
      source: { id: null, name: "The New Indian Express" },
      author: "PTI",
      title:
        "WHO moves to roll out first malaria vaccine in Africa - The New Indian Express",
      description:
        "Scientist say they're mystified by that decision, warning it could leave million of kids at risk of dying from malaria as well as undermine future efforts to solve intractable problem in public health",
      url: "https://www.newindianexpress.com/world/2022/jul/21/who-moves-to-roll-out-first-malaria-vaccine-in-africa-2479142.html",
      urlToImage:
        "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/7/10/w600X390/mosquito456.jpg",
      publishedAt: "2022-07-21T14:03:00Z",
      read:4154,
      content:
        "BLANTYRE (Malawi): As the World Health Organisation announces the next step in its rollout of the world's first authorised malaria vaccine in three African countries, concerns about its value have co… [+12536 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Doctor answers questions about the BA.5 Coronavirus sub-variant - CBS Mornings",
      description:
        "The highly-infectious BA.5 Coronavirus sub-variant now accounts for about 78% of all Coronavirus infections in the United States. Dr. Celine Gounder, editor-...",
      url: "https://www.youtube.com/watch?v=qoNmwlW2Fcc",
      urlToImage: "https://i.ytimg.com/vi/qoNmwlW2Fcc/maxresdefault.jpg",
      publishedAt: "2022-07-21T12:55:05Z",
      read:4654,
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Parmita Uniyal",
      title:
        "Mental health benefits of eating a fibre-rich diet - Hindustan Times",
      description:
        "Did you know not eating enough fibre can lead to cognitive impairment? Here are all the mental health benefits of consuming a diet high in fibre. | Health",
      url: "https://www.hindustantimes.com/lifestyle/health/mental-health-benefits-of-eating-a-fibre-rich-diet-101658407597817.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/21/1600x900/high_fibre_1658407710310_1658407720925_1658407720925.jpg",
      publishedAt: "2022-07-21T12:52:49Z",
      read:4841,
      content:
        "Eating a diet high in fibre - both soluble and insoluble - has innumerable benefits for your digestive health and heart health besides aiding in controlling blood sugar levels. You can get the fibre … [+2310 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "ET HealthWorld",
      title:
        "Significant surge in brain disorders post COVID-19 pandemic - ETHealthWorld",
      description:
        "The effect of long COVID on the brain is now manifesting itself, even though it is early days since the pandemic abated. It will be a few years before its full impact on the human body is understood and the reasons for the spike in various brain disorders pos…",
      url: "https://health.economictimes.indiatimes.com/news/diagnostics/significant-surge-in-brain-disorders-post-covid-19-pandemic/93031901",
      urlToImage:
        "https://etimg.etb2bimg.com/thumb/msid-93031901,imgsize-9470,width-1200,height-628,overlay-ethealthworld/significant-surge-in-brain-disorders-post-covid-19-pandemic.jpg",
      publishedAt: "2022-07-21T12:41:00Z",
      read:8748,
      content:
        "Faridabad: Doctors have reported seeing a significant surge in cases of brain disorders like brain strokes and benign brain tumours after the COVID-19 pandemic. COVID-19 has significantly impacted th… [+2253 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: null,
      title:
        "SonoVive Reviews: Are The Customers Really Satisfied With SonoVive Results? - Zee News",
      description:
        "Are they effective? The SonoVive hearing health supplement is made with a perfect blend of natural ingredients. All the SonoVive ingredients are highly effective and composed in the right manner.",
      url: "https://zeenews.india.com/india/sonovive-reviews-are-the-customers-really-satisfied-with-sonovive-results-2488090.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/07/21/1067830-sonovive-reviews.jpg",
      publishedAt: "2022-07-21T12:33:35Z",
      read:41564,
      content:
        "Does it really work? Are all the SonoVive reviews positive? Let us know the answers here. Most people suffer from hearing disabilities and wish to listen to the voices and sounds around them, which i… [+8806 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Alpha, Delta, Omicron: With newer COVID variants, study reveals how symptoms continue to change - Times of India",
      description:
        "Unlike any other disease, COVID-19 has been highly unpredictable. With wide-ranging symptoms, long COVID complications and new emerging variants, SARs-CoV-2 virus has really impacted our lives in the most grievous ways.",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/alpha-delta-omicron-with-newer-covid-variants-study-reveals-how-symptoms-continue-to-change/photostory/93028572.cms",
      urlToImage: "https://static.toiimg.com/photo/93028603.cms",
      publishedAt: "2022-07-21T12:30:00Z",
      read:8787,
      content:
        "The respiratory system is classified into two main parts: Upper and lower respiratory systems.\r\nThe upper respiratory tract consists of the nose, nasal cavity and the pharynx, whereas the lower respi… [+794 chars]",
    },
    {
      source: { id: null, name: "Onmanorama.com" },
      author: "PTI",
      title:
        "WHO again considers declaring monkeypox a global emergency - Onmanorama",
      description:
        "There are now more than 15,000 monkeypox cases worldwide. While the United States, Britain, Canada and other countries have bought millions of vaccines, none have gone to Africa.",
      url: "https://www.onmanorama.com/news/world/2022/07/21/who-monkey-global-emergency.html",
      urlToImage:
        "https://img.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2022/7/17/monkeypox.jpg",
      publishedAt: "2022-07-21T12:26:43Z",
      read:8764,
      content:
        "London: As the World Health Organisation's emergency committee convenes Thursday to consider for the second time within weeks whether to declare monkeypox a global crisis, some scientists say the str… [+5371 chars]",
    },
    {
      source: { id: null, name: "The Weather Channel" },
      author: null,
      title:
        "Swine Flu: All You Need to Know About Its Transmission, Symptoms, Prevention and Cure Amid Fears in Mumbai and Lucknow - The Weather Channel",
      description:
        "There has recently been a wave of swine flu cases in some Indian cities like Mumbai and Lucknow. - Articles from The Weather Channel | weather.com",
      url: "https://weather.com/en-IN/india/health/news/2022-07-21-swine-flu-transmission-symptoms-prevention-and-care",
      urlToImage: "https://s.w-x.co/in-swine_flu.jpg",
      publishedAt: "2022-07-21T11:53:49Z",
      read:6514,
      content:
        "With several parts of India facing monsoon-induced waterlogging and flooding, the stagnated rainwater is acting as the perfect breeding ground for disease-ridden pests. After a flurry of dengue cases… [+3845 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "ET HealthWorld",
      title:
        "Adapting integrated approaches for malaria elimination by 2030- need of the hour - ETHealthWorld",
      description:
        "Integrated approaches are not new to combat vector-borne diseases, particularly malaria -- humanity’s oldest and deadliest disease. Although India has seen a remarkable decrease in malaria cases and malaria-related deaths in 2019. As a country, India is missi…",
      url: "https://health.economictimes.indiatimes.com/news/industry/adapting-integrated-approaches-for-malaria-elimination-by-2030-need-of-the-hour/93030230",
      urlToImage:
        "https://etimg.etb2bimg.com/thumb/msid-93030230,imgsize-24768,width-1200,height-628,overlay-ethealthworld/adapting-integrated-approaches-for-malaria-elimination-by-2030-need-of-the-hour.jpg",
      publishedAt: "2022-07-21T11:46:00Z",
      read:1234,
      content:
        "New Delhi: Malaria has been one of Indias long-standing public health problems the disease threatens a population of about 1.26 billion and is responsible for an economic burden of approximately 14.6… [+9230 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "ANI",
      title:
        "High blood pressure may double risk of severe Covid despite vaccination: Study - Hindustan Times",
      description:
        "According to a new study, high blood pressure more than doubled a person's risk for hospitalisation from an Omicron-variant Covid-19 infection - even in the presence of full vaccination including a booster dose of the Covid-19 vaccines. | Health",
      url: "https://www.hindustantimes.com/lifestyle/health/high-blood-pressure-may-double-risk-of-severe-covid-despite-vaccination-study-101658403183077.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/21/1600x900/hypertension_1652253363083_1658403268744_1658403268744.jpg",
      publishedAt: "2022-07-21T11:37:37Z",
      read:35641,
      content:
        "According to a new analysis of adults hospitalised with COVID-19 in Los Angeles between December 2021 and April 2022, high blood pressure more than doubled a person's risk for hospitalisation from an… [+4640 chars]",
    },
    {
      source: { id: null, name: "Ommcomnews.com" },
      author: "OMMCOM NEWS",
      title:
        "Global Monkeypox Cases Surge To 14,000, 5 Deaths Reported In Africa: WHO Chief | World - Ommcom News",
      description:
        "New Delhi:  More than 70 countries have reported about 14,000 confirmed cases of monkeypox infections, World Health Organisation (WHO) chief Tedros Adhanom Ghebreyesus has said.In addition, five deaths have also been reported from Africa, he wrote on",
      url: "https://ommcomnews.com/world-news/global-monkeypox-cases-surge-to-14000-5-deaths-reported-in-africa-who-chief",
      urlToImage:
        "https://ommcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/12/15121045/WHO-Chief-Tedros-Adhanom-Ghebreyesus-e1640831909908.jpg",
      publishedAt: "2022-07-21T11:35:44Z",
      read:2648,
      content:
        "New Delhi:  More than 70 countries have reported about 14,000 confirmed cases of monkeypox infections, World Health Organisation (WHO) chief Tedros Adhanom Ghebreyesus has said.\r\nIn addition, five de… [+2355 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Priyanka Sharma",
      title:
        "In India, less than one in four aware of symptoms of brain stroke: Survey | Mint - Mint",
      description:
        "Every year, approximately 1.8 million people in India suffer from a brain stroke, which is the second most common cause of death after coronary artery disease",
      url: "https://www.livemint.com/science/health/in-india-less-than-one-in-four-aware-of-symptoms-of-brain-stroke-survey-11658400209680.html",
      urlToImage:
        "https://images.livemint.com/img/2022/07/21/600x338/9f3a75ee913341dbaf78e2ce592f2b0d-84a09bd83f7b43328b92bb64b88bbc07-0_1626380526021_1658401499377_1658401499377.jpg",
      publishedAt: "2022-07-21T11:06:52Z",
      read:2346,
      content:
        "NEW DELHI: Less than one in four in India are aware of the symptoms of a brain stroke, according to the findings of a nationwide survey conducted by a pharma company Boehringer Ingelheim, India The s… [+1886 chars]",
    },
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title:
        "UK study finds an increase in cardiovascular diseases and diabetes up to 12 months after COVID-19 - News-Medical.Net",
      description:
        "Researchers determined whether the incidence of new diabetes mellitus (DM) and cardiovascular diseases (CVDs) increases in a year among those recovering from COVID-19.",
      url: "https://www.news-medical.net/news/20220721/UK-study-finds-an-increase-in-cardiovascular-diseases-and-diabetes-up-to-12-months-after-COVID-19.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_720116_1658400944879391.jpg",
      publishedAt: "2022-07-21T11:04:00Z",
      read:34156,
      content:
        "In a recent study published in PLOS, researchers determined whether the incidence of new diabetes mellitus (DM) and cardiovascular diseases (CVDs) increases in a year among those recovering from coro… [+4836 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title: "11 Superfoods You Need To Add To Your Dinner - NDTV",
      description:
        "Add these superfoods to your dinner meals to maximise their benefits.",
      url: "https://www.ndtv.com/health/11-superfoods-you-need-to-add-to-your-dinner-3084723",
      urlToImage:
        "https://c.ndtvimg.com/2019-10/rjkg7jt_cauliflower-recipes_625x300_18_October_19.jpg",
      publishedAt: "2022-07-21T10:00:46Z",
      read:341654,
      content:
        "Cauliflower is a filling superfood and is full of nutrients\r\nOur sleep cycle is significantly influenced by what we eat and at what time of the day we eat it. Being mindful of your diet can help you … [+3369 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Zarafshan Shiraz",
      title:
        "Stretch marks: 7 causes apart from pregnancy, effective ways to get rid of them - Hindustan Times",
      description:
        "It is not just during pregnancy that you get stretch marks, there are other reasons as well. Want to decrease and diminish the appearance of stretch marks? Here's all you need to know about why stretch marks appear (apart from pregnancy) and effective ways to…",
      url: "https://www.hindustantimes.com/lifestyle/health/stretch-marks-7-causes-apart-from-pregnancy-effective-ways-to-get-rid-of-them-101658395978895.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/21/1600x900/pexels-karolina-grabowska-8093129_1658396207094_1658396225924_1658396225924.jpg",
      publishedAt: "2022-07-21T09:59:14Z",
      read:234,
      content:
        "Giving birth to a child is a distinct delight to all the aches you have endured throughout your pregnancy, which is a beautiful journey in and of itself. Every pregnant lady has developed stretch mar… [+5650 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "Lifestyle Desk",
      title:
        "What Is Monkeypox? Here’s How to Prevent Your Child From Getting Infected - News18",
      description:
        "Recently, World Health Organisation stated that 14,000 Monkeypox cases have been recorded across 70 countries in the world and this is a state of health emergency",
      url: "https://www.news18.com/news/lifestyle/health-and-fitness-what-is-monkeypox-heres-how-to-prevent-your-child-from-getting-infected-5597605.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/05/shutterstock_monkeypox-2158549553-165338689116x9.jpg",
      publishedAt: "2022-07-21T09:46:49Z",
      read:1564,
      content:
        "Parents should keep a watch on a few symptoms in children as a precautionary measure against monkeypox.\r\nMonkeypox is a communicable disease that can spread from animals to humans. The viral infectio… [+1820 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "PTI",
      title:
        "Vitamin B6 supplements may reduce anxiety, depression: Study - Times of India",
      description:
        "Science News: LONDON: Taking high-dose Vitamin B6 supplements may reduce the feelings of anxiety and depression, according to a study.",
      url: "https://timesofindia.indiatimes.com/home/science/vitamin-b6-supplements-may-reduce-anxiety-depression-study/articleshow/93027021.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-93027045,width-1070,height-580,imgsize-31536,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-07-21T09:44:00Z",
      read:54564,
      content: null,
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Livemint",
      title:
        "Covid vaccine: Pfizer and AstraZeneca offer high protection 6 months after 2nd dose | Mint - Mint",
      description:
        "The team led by researchers at the University of Bristol, UK, analysed the National Health Service (NHS) health record data on over seven million adults, finding protection in people aged over 65 years, and in clinically vulnerable adults.",
      url: "https://www.livemint.com/news/world/covid-vaccine-pfizer-and-astrazeneca-offer-high-protection-6-months-after-2nd-dose-11658394049633.html",
      urlToImage:
        "https://images.livemint.com/img/2022/07/21/600x338/injection_1658394460625_1658394460865_1658394460865.jpg",
      publishedAt: "2022-07-21T09:15:21Z",
      read:54564,
      content:
        "A study published in the BMJ shows that two doses of Pfizer and AstraZeneca vaccines provide high protection against severe COVID-19 up to six months after the second shot. The team led by researcher… [+2998 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        '"Worst Pain Ever Experienced": New Yorker Narrates Monkeypox Experience - NDTV',
      description:
        '"It was the worst pain that I have experienced in my life," says 26-year-old New Yorker Kyle Planck, recalling his recent monkeypox infection.',
      url: "https://www.ndtv.com/world-news/monkeypox-cases-worst-pain-ever-experienced-a-new-yorkers-story-of-monkeypox-3179379",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/okdqch1k_kyle-planckafp_625x300_21_July_22.jpg",
      publishedAt: "2022-07-21T09:01:37Z",
      read:234654,
      content:
        'Monkeypox usually clears up on its own but can be extremely painful.\r\nNew York: "It was the worst pain that I have experienced in my life," says 26-year-old New Yorker Kyle Planck, recalling his rece… [+3578 chars]',
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
