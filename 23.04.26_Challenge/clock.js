const clock = document.querySelector("#clock");

function getClock (){
      const chistmasTime = new Date("2023-12-25");
      const date = new Date();
      const diff= chistmasTime - date;
      const days = Math.floor(diff / (1000*60*60*24));
      const hours = Math.floor((diff / (1000*60*60)) % 24);
      const minutes = Math.floor((diff / (1000*60)) % 60);
      const seconds = Math.floor(diff / 1000 % 60);
      
      clock.innerText = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock ()
setInterval(getClock, 1000);

