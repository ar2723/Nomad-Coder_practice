const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 
//위와 같이 자주 사용하게 되는 string은 대문자 변수로 저장해서 사용하면, 오탈자 발생시에 체크가 용이하다.

function onLoginSubmit (event){
     event.preventDefault();
     loginForm.classList.add(HIDDEN_CLASSNAME);
     localStorage.setItem(USERNAME_KEY, loginInput.value);
     paintGreetings();
}

function paintGreetings (){
     const username = localStorage.getItem(USERNAME_KEY);
     greeting.innerText = `Hello ${username}`;
     greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
     //처음 사용자가 웹페이지에 들어왔을 때 실행되는 부분
     loginForm.classList.remove(HIDDEN_CLASSNAME)
     loginForm.addEventListener("submit", onLoginSubmit)
} else {
     //새로고침 했을 때 실행되는 부분
     paintGreetings();
     
}
