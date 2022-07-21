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



let data =  [
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Viral: Aamir Khan Hosts Special Dinner For Russo Brothers, Dhanush And Ex-Wife Kiran Rao - NDTV Movies",
      description: "The Russo Brothers landed in India on Wednesday",
      url: "https://www.ndtv.com/entertainment/viral-aamir-khan-hosts-special-dinner-for-russo-brothers-dhanush-and-ex-wife-kiran-rao-3180793",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/8255q2bo_aamir-khan_625x300_21_July_22.jpg",
      publishedAt: "2022-07-21T13:19:11Z",
      read:1564,
      content:
        "A picture shared by a fan club. (courtesy: aamirkhanuniverse)\r\nNew Delhi: Aamir Khan hosted a special dinner for The Gray Man directors Anthony and Joe Russo. Dhanush, who plays an as assassin in the… [+1450 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: null,
      title:
        "Meet Reena Roy's daughter Sanam Khan whose picture has gone viral on internet - Times of India",
      description:
        "Veteran actress Reena Roy was one of the most charming actresses of 70s and 80s. The actress has given many superhit films during her career and she is considered one of the most beautiful actresses of that era. More than films and her professional career, sh…",
      url: "https://timesofindia.indiatimes.com/videos/entertainment/hindi/meet-reena-roys-daughter-sanam-khan-whose-picture-has-gone-viral-on-internet/videoshow/93032149.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/93032149/size-59676/93032149.jpg",
      publishedAt: "2022-07-21T12:52:07Z",
      read:1654,
      content:
        "Veteran actress Reena Roy\r\n was one of the most charming actresses of 70s and 80s. The actress has given many superhit films during her career and she is considered one of the most beautiful actresse… [+558 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Kartik Aaryan reacts to Ranveer Singh mimicking him, reveals his one mistake - Hindustan Times",
      description:
        "On Koffee With Karan season 7 episode 1, Ranveer Singh’s Kartik Aaryan impression left Alia Bhatt and Karan Johar in splits. In a new interview, Kartik said he’s watched the video of Ranveer mimicking him. Here’s how he responded.  | Web Series",
      url: "https://www.hindustantimes.com/entertainment/web-series/kartik-aaryan-reacts-to-ranveer-singh-mimicking-him-reveals-his-one-mistake-101658402570691.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/21/1600x900/Kartik_Aaryan_Koffee_With_Karan_1658403057639_1658403073105_1658403073105.jpg",
      publishedAt: "2022-07-21T11:52:15Z",
      read:754,
      content:
        "Ranveer Singh and Alia Bhatt were the first guests on Koffee With Karan season 7 episode 2. In the episode, which premiered on Disney+ Hotstar on July 7, Ranveer mimicked everyone from Hrithik Roshan… [+1803 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "On Second Anniversary, Freida Pinto Shares Throwback Pics From California Wedding - NDTV Movies",
      description:
        '"Try and beat that wedding budget y\'all," read the caption one of her Instagram stories',
      url: "https://www.ndtv.com/entertainment/on-second-anniversary-freida-pinto-shares-throwback-pics-from-california-wedding-3180316",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/bv81s5fo_freida_625x300_21_July_22.jpg",
      publishedAt: "2022-07-21T11:34:52Z",
      read:564,
      content:
        "A throwback picture of Freida and Cory Tran. (courtesy: freidapinto)\r\nNew Delhi: Slumdog Millionaire star Freida Pinto, who married Cory Tran in a secret ceremony in 2020, shared a couple of throwbac… [+2007 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Horoscope for July 22, 2022: Cancer, Libra, Pisces know your astrological predictions - Kalinga TV",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMicmh0dHBzOi8va2FsaW5nYXR2LmNvbS9hc3Ryb2xvZ3kvaG9yb3Njb3BlLWZvci1qdWx5LTIyLTIwMjItY2FuY2VyLWxpYnJhLXBpc2Nlcy1rbm93LXlvdXItYXN0cm9sb2dpY2FsLXByZWRpY3Rpb25zL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-07-21T11:21:14Z",
      read:5412,
      content: null,
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Arushi Bhaskar",
      title:
        "Explained: The phenomenon of 'pan-Indian' films, their spread and success - The Indian Express",
      description:
        "Puri Jagannadh’s sports-action drama 'Liger' will be released in five languages. Before this, there were 'RRR' and 'KGF: Chapter 2'. When did the trend of seeking to cater to tastes around the country start?",
      url: "https://indianexpress.com/article/explained/explained-the-phenomenon-of-pan-indian-films-their-spread-and-success-8043343/",
      urlToImage: "https://images.indianexpress.com/2022/07/liger.jpg",
      publishedAt: "2022-07-21T10:47:50Z",
      read:4531,
      content:
        "With the trailer of Puri Jagannadhs sports-action drama ‘Liger’ releasing today, the focus is back on pan-Indian films.‘Liger’, starring Vijay Deverakonda, Ananya Panday, Ramya Krishnan, and Mike Tys… [+4781 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "India.com Entertainment Desk",
      title:
        "Tejasswi Prakash Just Wore a Skirt Worth Rs 600 And It's So Stylish You Would Hop On To Buy It Right Now! - India.com",
      description:
        "Tejasswi Prakash’s Blue Mini Skirt is Quite Affordable, Even You Can Buy For Yourself And Your Friends - Check Pictures",
      url: "https://www.india.com/lifestyle/tejasswi-prakash-just-wore-a-skirt-worth-rs-600-and-its-so-stylish-you-would-hop-on-to-buy-it-right-now-5526510/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2022/07/Collage-Maker-21-Jul-2022-03.43-PM.jpg",
      publishedAt: "2022-07-21T10:24:02Z",
      read:5987,
      content:
        "Tejasswi Prakash Fashion Look: Televisions popular actress Tejasswi Prakash never misses a chance to grab headlines with her sizzling photos. The diva often sets fashion goals with her choice of clot… [+1349 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Smriti Irani Shares Video From Son's Graduation Ceremony, Says, \"I'm Overwhelmed, Overjoyed...\" - NDTV",
      description:
        "Union Minister Smriti Irani on Wednesday shared a video from her son Zohr Irani's graduation ceremony and said how proud she is of her son.",
      url: "https://www.ndtv.com/india-news/smriti-irani-shares-video-from-sons-graduation-ceremony-says-im-overwhelmed-overjoyed-3179966",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/sskcf63_smriti-irani-son-graduation_625x300_21_July_22.jpg",
      publishedAt: "2022-07-21T10:14:00Z",
      read:4564,
      content:
        "On son's graduation, Smriti Irani said she is \"very proud, overwhelmed and overjoyed\".\r\nUnion Minister Smriti Irani on Wednesday shared a video from Zohr Irani's graduation ceremony and said how prou… [+1748 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Step inside Sussanne Khan's lavish home as she reveals most prized possessions - Hindustan Times",
      description:
        "Sussanne Khan's house is washed in white but is a lavish abode with too many small and big memorabilia and artworks, including those made by her son Hridaan.",
      url: "https://www.hindustantimes.com/entertainment/bollywood/step-inside-sussanne-khan-s-lavish-home-watch-video-101658395597970.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/21/1600x900/sussanne_khan_house_1658397505025_1658397505225_1658397505225.jpg",
      publishedAt: "2022-07-21T10:12:37Z",
      read:867464,
      content:
        "Interior designer and entrepreneur Sussanne Khan, daughter of actor Sanjay Khan and ex-wife of Hrithik Roshan, has given her fans a sneak peek into her lavish abode. She revealed how she has used her… [+1675 chars]",
    },
    {
      source: { id: null, name: "Bollywood Life" },
      author: "Shivani Pawaskar",
      title:
        "Nayanthara-Vignesh Shivan's dreamy pre-wedding pictures boast of simplicity; OTT giant shares official announ - Bollywood Life",
      description:
        "Netflix India just confirmed bringing Nayanthara-Vignesh Shivan's wedding documentary on the streaming platform with a pre-wedding photoshoot. Check out the dreamy pictures below:",
      url: "https://www.bollywoodlife.com/photos/nayanthara-vignesh-shivans-dreamy-pre-wedding-pictures-boasts-of-simplicity-ott-giant-shares-official-announcement-shah-rukh-khan-jawan-tollywood-updates-entertainment-news-2134792/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/07/Nayanthara-Vignesh-Shivan-Netflix-pre-wedding1-1-600x315.png",
      publishedAt: "2022-07-21T09:54:50Z",
      read:412,
      content:
        "Nayanthara-Vignesh Shivans wedding documentary: Check pre-wedding pictures\r\nNayanthara is not on Instagram, but Vignesh Shivan is. He had dropped some exclusive pictures from their wedding, and it wa… [+364 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "More Pics From Priyanka Chopra's Mexico Birthday Party With Nick Jonas And Parineeti Chopra. See Inside - NDTV Movies",
      description:
        "Nick Jonas hosted a beachside birthday party for Priyanka in Mexico",
      url: "https://www.ndtv.com/entertainment/more-pics-from-priyanka-chopras-mexico-birthday-party-with-nick-jonas-and-parineeti-chopra-see-inside-3179805",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/1dq1qq3_priyanka_625x300_21_July_22.jpg",
      publishedAt: "2022-07-21T09:52:58Z",
      read:784,
      content:
        "Priyanka Chopra with Nick Jonas. (courtesy: nickjonas)\r\nNew Delhi: Nick Jonas hosted a beachside birthday bash for Priyanka Chopra earlier this week. The couple along with their close friends and fam… [+2207 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "Sonil Dedhia",
      title:
        "Dhanush: It Wasn't Absolutely Necessary to be Referred as 'Sexy Tamil Friend' in The Gray Man | Exclusive - News18",
      description:
        "Dhanush plays the role of Avik San alias Lone Wolf, a deadly assassin in the film, who is addressed by Chris Evans character as ‘sexy Tamil friend.’",
      url: "https://www.news18.com/news/movies/dhanush-it-wasnt-absolutely-necessary-to-be-referred-as-sexy-tamil-friend-in-the-gray-man-exclusive-5596915.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/07/dhanush-gray-man-165838950716x9.jpg",
      publishedAt: "2022-07-21T09:15:00Z",
      read:784,
      content:
        "One of the most anticipated OTT films of the year, The Gray Man has been keeping fans waiting. The film, which stars the whos who of Hollywood such as Chris Evans, Ryan Gosling, Regé-Jean Page, and o… [+2464 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Ranbir Kapoor on prepping for his baby: 'We have started to build a nursery' - Hindustan Times",
      description:
        "Ranbir Kapoor has opened up about how he and wife Alia Bhatt are preparing for their new roles, becoming parents to their first child.",
      url: "https://www.hindustantimes.com/entertainment/bollywood/ranbir-kapoor-on-prepping-for-his-baby-we-have-started-to-build-a-nursery-101658390408158.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/21/1600x900/alia_ranbir_1658392327829_1658392328068_1658392328068.jpg",
      publishedAt: "2022-07-21T08:54:02Z",
      read:1564,
      content:
        "Ranbir Kapoor and wife Alia Bhatt are expecting their first child together. Ranbir is also returning to the silver screen after a gap of four years, with the film Shamshera releasing on Friday. He pl… [+1784 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Anushka Sharma shares glimpses of her pristine white room in Paris. See pics - Hindustan Times",
      description:
        "Anushka Sharma has shared an update from luxurious abode in Paris. She appeared to be preparing for a day of shoot in the city.",
      url: "https://www.hindustantimes.com/entertainment/bollywood/anushka-sharma-shares-glimpses-of-her-pristine-white-room-in-paris-see-pics-101658389742843.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/07/21/1600x900/anushka_1658391240219_1658391240462_1658391240462.jpg",
      publishedAt: "2022-07-21T08:14:25Z",
      read:8974,
      content:
        "Actor Anushka Sharma gave fans a sneak peek into her room in Paris. She is currently vacationing with her husband, cricketer Virat Kohli and their daughter Vamika. Taking to her Instagram Stories, sh… [+1679 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Dayle Pereira Alemao",
      title:
        "Nysa Devgan Goes Greek Chic In Gorgeous Slit Floral Skirt And White Shirt For Her Holiday In Greece - NDTV Swirlster",
      description:
        "Nysa Devgan needs nothing more to set vacation fashion goals",
      url: "https://swirlster.ndtv.com/style/nysa-devgan-goes-greek-chic-in-gorgeous-slit-floral-skirt-and-white-shirt-for-her-holiday-in-greece-3179263",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/kdsm13vo_nysa-devgan_625x300_21_July_22.jpg",
      publishedAt: "2022-07-21T07:09:56Z",
      read:2564,
      content:
        "Nysa Devgan certainly knows how to make the best use of the summer. Like the rest of Bollywood, the star kid is currently enjoying a European sojourn. After dressing up to the nines in London and wal… [+1480 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Entertainment Desk",
      title:
        "British historian attacks RRR for casting English as villains, gets roundly rejected on social media: 'Denying colonialism is a crime' - The Indian Express",
      description:
        "An article criticising SS Rajamouli's RRR for misrepresenting history and suggesting that it is racist is being roundly rejected on social media.",
      url: "https://indianexpress.com/article/entertainment/telugu/rrr-fans-rally-behind-film-after-spectator-article-8042748/",
      urlToImage: "https://images.indianexpress.com/2022/06/RRR-1200by667.jpg",
      publishedAt: "2022-07-21T07:05:04Z",
      read:8945,
      content:
        "An article declaring that RRR is a reflection of ‘the nastiness of today’s India’, and that ‘Netflix should be ashamed for promoting it’, is drawing ridicule on social media. Published on The Spectat… [+3530 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Entertainment Desk",
      title:
        "Sunil Grover returns as Dr Mashoor Gulati, floors Archana Puran Singh with his quip. Watch - The Indian Express",
      description:
        "Sunil Grover made a surprising appearance on India's Laughter Champion, much to the joy of fans. He reprised his character of Dr Mashoor Gulati that he previously played on The Kapil Sharma Show.",
      url: "https://indianexpress.com/article/entertainment/television/sunil-grover-returns-as-dr-mashoor-gulati-floors-archana-puran-singh-with-his-quip-8042662/",
      urlToImage: "https://images.indianexpress.com/2022/07/sunilgrover.jpeg",
      publishedAt: "2022-07-21T06:46:58Z",
      read:87,
      content:
        "Comedian Sunil Grover is back to entertain. In a new promo for India’s Laughter Champion, Grover, who hasn’t been on screen for quite some time, made a surprising appearance as Dr Mashoor Gulati. The… [+1523 chars]",
    },
    {
      source: { id: null, name: "Bollywood Life" },
      author: "Nikita Thakkar",
      title:
        "KGF 2 star Yash goes on an EXOTIC vacation with wife Radhika Pandit; their holiday pictures will leave you je - Bollywood Life",
      description:
        "KGF 2 star Yash has become immensely popular all thanks to the stupendous success of his film. Taking a break from his hectic schedule, he has gone on vacation with wife Radhika Pandit.",
      url: "https://www.bollywoodlife.com/photos/kgf-2-star-yash-goes-on-an-exotic-vacation-with-wife-radhika-pandit-their-holiday-pictures-will-leave-you-jealous-and-how-south-indian-actors-entertainment-news-south-indian-actors-entertainment-news-2134458/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/07/Yash-15-600x315.png",
      publishedAt: "2022-07-21T06:42:29Z",
      read:489,
      content:
        "Actor Yash is on cloud nine currently and why wouldn't he be? His move, KGF 2, has broken several box office records. It has become one of the highest grossing Indian films ever. It has set high benc… [+260 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Uorfi Javed wears black see-through dress, fans say 'sara mood kharab kar diya' - India Today",
      description:
        "Uorfi Javed shared a video of herself wearing a black see-through dress. Fans took no time to troll her.",
      url: "https://www.indiatoday.in/television/celebrity/story/uorfi-javed-wears-black-see-through-dress-fans-say-sara-mood-kharab-kar-diya-1978131-2022-07-21",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/BeFunky-collage_54-647x363.jpeg?2nu3i.Y6VJDEAonog2zoa6dnmv0SdPMB",
      publishedAt: "2022-07-21T06:20:03Z",
      read:8564,
      content:
        "You can't stop Urfi Javed, who recently changed her name to Uorfi, from experimenting in fashion. Her outfits aren't the regular ones you would see on the streets daily. Everytime she steps out in Mu… [+1147 chars]",
    },
    {
      source: { id: null, name: "Greatandhra.com" },
      author: "Venkat",
      title: "Pics: Kapoor Girl Shines In Sexy Blue.. - Greatandhra",
      description:
        "Janhvi Kapoor is regular in hitting the hearts of her fans with her high dose glam pics on the internet.",
      url: "https://www.greatandhra.com/politics/andhra-news/pics-kapoor-girl-shines-in-sexy-blue-122539",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/jahnnnavv1658383982.jpeg",
      publishedAt: "2022-07-21T06:13:02Z",
      read:4564,
      content:
        "Janhvi Kapoor is regular in hitting the hearts of her fans with her high dose glam pics on the internet. She glues the instagram with her colorful pictures posed in bold manner.\r\nShe is the girl of n… [+614 chars]",
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
