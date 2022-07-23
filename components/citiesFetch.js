let getData = async (url) => {
  try {
    let res = await fetch(url)
    let data = await res.json()
    return data
  } catch (err) {
    console.log("Something wrong, please check your code")
  }
}

let displayTreadingNews = (data, container, className, displayProperty) => {

  container.innerHTML = null

  let p = document.createElement("p")
  p.innerText = "Treading"
  p.style.display = `${displayProperty}`


  container.append(p)

  data.forEach(({ image_url, headline }) => {
    let div = document.createElement("div");
    div.setAttribute("class", `${className}`)

    let img = document.createElement("img");
    img.src = image_url;

    let p = document.createElement("p");
    p.innerText = headline;

    div.append(img, p);
    container.append(div);

  });
}

let displaymidNews = (data, container) => {

  container.innerHTML = null
  data.forEach(({ image_url, headline, posted_date, description }) => {
    let div = document.createElement("div");

    let div1 = document.createElement("div");

    let img = document.createElement("img");
    img.src = image_url;

    let div2 = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.innerText = headline;

    let p1 = document.createElement("p");
    p1.innerText = posted_date;

    let p2 = document.createElement("p");
    p2.innerText = description;

    div1.setAttribute("class", "image");
    div2.setAttribute("class", "innertext");

    div.append(div1, div2);
    div1.append(img);
    div2.append(h2, p1, p2);

    container.append(div);
  });
}

export { getData, displayTreadingNews, displaymidNews };