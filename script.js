const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const container = document.querySelector(".container");
const chatbotToggle = document.querySelector(".chatbot-toggle");


function toggleMenu() {
  let menu = document.getElementById("myMenu");
  menu.classList.toggle("show");
}

function toggleAdd() {
  let menu = document.getElementById("add");
  menu.classList.toggle("show");
}

function clearData() {
  // Clear the value of the input field
  chatBody.innerHTML = '';
  toggleMenu()
}

//chatbot toggle 
function openChatBot(){
  container.style.display = "flex"
  chatbotToggle.style.display = "none"
}
function closeChatBot(){
  container.style.display = "none"
  chatbotToggle.style.display = "flex"
  toggleMenu()
}




send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  if (userInput === "") {
    
  } else { 
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600); 
 }
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user"){
    className = "chatbot-message";
  }
  
  const msgbody = document.createElement("div");
  const messageEle = document.createElement("div");
  const insertHtml = document.createElement("div");
  const time = document.createElement("dev");

  const img = document.createElement("div")
  img.innerHTML = ` <div class="image"></div>`
  const txtNode = document.createTextNode(txt);
  time.innerHTML = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
  messageEle.classList.add(className);
  msgbody.classList.add("msgbox");
  time.classList.add("time");
  msgbody.classList.add("msgbox");
  insertHtml.classList.add("insert");
  messageEle.append(txtNode);
  msgbody.append( img, messageEle);
  chatBody.append(msgbody,insertHtml,time);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Please try something else"
    : responseObj[userInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};



$(document).ready(function () {
  if (!$.browser.webkit) {
      $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
  }
});