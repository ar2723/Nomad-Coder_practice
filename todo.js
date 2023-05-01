const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//할일 목록 폼에 입력하고 엔터 쳤을 때 발생하는 이벤트 함수
toDoForm.addEventListener("submit", handleToDoSubmit);

//실행 이벤트 함수 상세
function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value; // 입력한 할일 목록 읽어오기
      toDoInput.value = ""; //입력한 폼 클리어
      toDos.push(newTodo); //웹브라우저에 할일 목록 데이터 저장 사전 단계(1)
      paintToDo(newTodo); // 리스트 및 삭제 버튼 추가 작업
      saveToDos (); // 웹브라우저에 할일 목록 데이터 저장 사전 단계(2)
}

//할일 목록 리스트 추가하기 + 누르면 리스트 삭제하는 버튼 만들기
function paintToDo(newTodo) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerText = newTodo; //추가할 리스트에 입력한 할일 목록 내용 대입

      const button = document.createElement("button");
      button.innerText="❌";

      li.appendChild(span);
      li.appendChild(button);
      toDoList.appendChild(li);

     
      //버튼 클릭시 리스트를 삭제하는 이벤트 함수 호출
      button.addEventListener("click", deleteToDo)

      //리스트 삭제 이벤트 함수 상세
      function deleteToDo(event){
            const li = event.target.parentElement;
            li.remove();
      } 
}

//할일 목록 브라우저에 저장하기
const toDos = [];
function saveToDos (){
      localStorage.setItem("toDos", JSON.stringify(toDos));
}







