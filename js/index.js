setupPage = function() {
  loadFileContents("productPages.txt", createElements);
}

createElements = function(data) {
  json = JSON.parse(data);
  let imageContainer = $("div.imageList#mainImages");
  for(key in json) {
    let source = json[key]["source"];
    img = document.createElement("img");
    img.setAttribute("src", "/images/"+source);
    img.setAttribute("name", key);
    img.setAttribute("onclick", "loadProductPage('"+key+"');");
    imageContainer.append(img);
  }
}

loadProductPage = function(name) {
  url = createUrl("/productPage.html", {page: name});
  window.location.assign(url);
}