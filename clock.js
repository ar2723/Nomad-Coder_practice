const clock = document.querySelector("#clock");

function getClock (){
      const date = new Date();
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      let period = "오전";
      
      if (hours > 12) {
            hours -= 12;
            period = "오후";
          }

      hours = String(hours).padStart(2, "0");

      clock.innerText = 
            `${period} ${hours}:${minutes}:${seconds}`;
}

getClock ()
setInterval(getClock, 1000);