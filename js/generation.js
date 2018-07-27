function setup() {
  noCanvas();
}

exportImage = function() {
  saveFrames('gen', 'jpg', 1, 1, function(data) {
    img = document.createElement("img");
    img.setAttribute("src", data[0]["imageData"]);
    $("div.imageList#mainImages").append(img);
  });
}

generateImage = function() {
  createCanvas(1920, 1080);
  let forms = [invertedEllipses];
  forms[(int) (random() * forms.length)]();
  exportImage();
  noCanvas();
}

invertedEllipses = function() {
  let red = random(255);
  let redP = 255 - red;
  let green = random(255);
  let greenP = 255 - green;
  let blue = random(255);
  let blueP = 255 - blue;

  background(red, green, blue);
  fill(redP, greenP, blueP);
  noStroke();
  for(i = 0; i < 1000 + random() * 1000; i++) {
      ellipse(random(width), random(height), random(25, 100), random(25, 100));
  }
}