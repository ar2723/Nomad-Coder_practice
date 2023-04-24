
handlerWindowResize = () => {
     const bodyClass = document.body.classList
     if(window.innerWidth >= 800){
          bodyClass.add("resized2")
     } else if (window.innerWidth >= 600){
          bodyClass.add("resized")
          bodyClass.remove("resized2")
     } else {
          bodyClass.remove("resized")
     }
};

window.addEventListener("resize", handlerWindowResize)