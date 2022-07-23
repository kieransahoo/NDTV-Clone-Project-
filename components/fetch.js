


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
      des.innerText = el.title;
     
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



  
 
  
  let append1 = (datas) => {
    console.log(datas);
    let cont = document.getElementById("extremeRight")
  datas.forEach((el)=>{
  
    let card = document.createElement("div");
    let avatar = document.createElement("div");
    avatar.setAttribute("id", "sideImage");
    let pic = document.createElement("img");
    pic.src = el.urlToImage;
    avatar.append(pic);
  
    let headline = document.createElement("p");
    headline.setAttribute("id","headline")
    headline.innerText=el.title
  card.append(avatar,headline)
  cont.append(card)
  })
  }


export {append, append1}
