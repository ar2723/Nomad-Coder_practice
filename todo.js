const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


const TODOS_KEY = "toDos"

//사용자가 입력한 할일 목록 값을 받을 배열
let toDos = [];

//할일 목록 폼에 입력하고 엔터 쳤을 때 발생하는 이벤트 함수
toDoForm.addEventListener("submit", handleToDoSubmit);

//실행 이벤트 함수 상세
function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value; // 입력한 할일 목록 읽어오기
      toDoInput.value = ""; //입력한 폼 클리어

      const newTodoObj = {
            text: newTodo,
            id: Date.now(),
      };

      toDos.push(newTodoObj); //준비한 배열에 할일 목록값을 String으로 저장
      paintToDo(newTodoObj); // 리스트 및 삭제 버튼 추가 함수 실행
      saveToDos (); // 할일 목록 저장한 배열을 로컬 저장소에 저장 함수 실행
}

//할일 리스트 및 삭제 버튼 추가 함수 상세
function paintToDo(newTodo) {
      const li = document.createElement("li");
      li.id = newTodo.id;
      const span = document.createElement("span");
      span.innerText = newTodo.text; //추가할 리스트에 입력한 할일 목록 내용 대입

      //아래 button 변수를 전역에 선언하면 이벤트 발생시마다 버튼이생성되는 것이 아닌
      //웹브라우저 로딩 시에 한번만 생성된 상태가 되기 때문에 로컬에 만들고 이벤트 발생 시마다
      //버튼이 만들어지도록 해야한다.
      const button = document.createElement("button");
      button.innerText="❌";

      li.appendChild(span);
      li.appendChild(button);
      toDoList.appendChild(li);

      //버튼 클릭시 리스트를 삭제하는 이벤트 함수 호출
      button.addEventListener("click", deleteToDo)

      //리스트 삭제 함수 상세
      function deleteToDo(event){
            const li = event.target.parentElement;
            console.log(li.id)
            li.remove();
      } 
}

//입력한 할일 목록을 브라우저에 저장하기
function saveToDos (){
      //웹브라우저 저장 값을 단순 문자열이 아닌 배열 형태의 String으로 전환해서 입력하기
      localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//최초 웹페이지 로딩 시에는 null, 새로고침 이후에 savedToDos에 값이 들어감
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
      //웹브라우저에 저장된 배열 형태의 String을 JS가 사용할 수 있는 배열로 전환하기
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(
            paintToDo
      );
}







