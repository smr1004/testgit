// 변수명 바꿔보세요.
const TtInput = document.getElementById('TtInput');
const addButton = document.getElementById('addButton');
const TtList = document.getElementById('TtList');
let Tts= []; 

addButton.addEventListener('click', addTt);
function addTt() {
  const TtText = TtInput.value.trim();
  if (TtText !== '') {
    const TtItem = createTtItem(TtText);
    TtList.appendChild(TtItem);
    Tts.push(TtText);   // 배열에 추가
    saveTt(Tts);   // 로컬 저장소에 저장 
    TtInput.value = '';
  }
}
  function createTtItem(TtText) {
    const TtItem = document.createElement('li');
    TtItem.textContent = TtText;
    TtItem.addEventListener('click', completeTt);
  ​const removeButton = document.createElement('button');
  removeButton.textContent = '❌'; // x
  removeButton.addEventListener('click', removeTt);
  TtItem.appendChild(removeButton);
  return TtItem;
}
function completeTt(event) {
  const TtItem = event.target.closest('li'); 
  TtItem.classList.toggle('completed');
}
function removeTt(event) {
  const TtItem = event.target.closest('li');
  TtItem.parentNode.removeChild(TtItem);
}
function saveTt(Tts){
  localStorage.setItem('Tts',JSON.stringify(Tts));}

function loadTt(){
  const savedTts=localStorage.getItem('Tts');
  Tts=JSON.parse(savedTts);
  for(let i=0, i< Tts.length ; i++)
  {
    const TtItem=createTtItem (Tts[i]);
  TtList.appendChild(TtItem);  
  }
}
   window.addEventListener('load',loadTt);
  
//  https://github.com/smr1004/testgit 2013.7.13