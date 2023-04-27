const images = ["0.avif", "1.avif", "2.avif"];

const chosenImage = images [Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImage}`;

//append는 가장 아래에 추가, prepend는 가장 위에 추가
document.body.appendChild(bgImage);