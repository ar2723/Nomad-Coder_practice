const images = ["0.avif", "1.avif", "2.avif"];

const chosenImage = images [Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `https://images.unsplash.com/photo-1614586125858-e695dd97d1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1803&q=80`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);

//append는 가장 아래에 추가, prepend는 가장 위에 추가
//document.body.appendChild(bgImage);
