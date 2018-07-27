setupPage = function() {
  loadFileContents("productPages.txt", createElements);
}

createElements = function(data) {
  json = JSON.parse(data);
	let urlParams = new URLSearchParams(window.location.search);
	let page = urlParams.get("page");
	let pageData = json[page];

	img = document.createElement("img");
	img.setAttribute("src", "/images/"+pageData["source"]);

  title = document.createElement("h1");
  title.innerHTML = pageData["title"];

	$("div.imageContainer#productImage").append(img);
  $("div.textContainer#productInfo").append(title);

  loadFileContents("descriptions/"+pageData["description"], function(data) {
    description = document.createElement("p");
    description.innerHTML = data;
    $("div.textContainer#productInfo").append(description);
  });
}