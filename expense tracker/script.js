const text = document.getElementById('input-box');
const date = document.getElementById('datePicker');  
const expense = document.getElementById('expenseAmount'); 
const table = document.getElementById('table');

function addTask(){
  if(text.value === '' || date.value === '' || expense.value === ''){
    alert('Please enter All Inputs');
  }
  else{
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    table.appendChild(tr);
    td1.innerHTML = text.value;
    tr.appendChild(td1);
    td.innerHTML = date.value;
    tr.appendChild(td);
    td2.innerHTML = expense.value;
    tr.appendChild(td2);
    text.value = "";
    date.value = "";
    expense.value = "";

    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    tr.appendChild(span);

  }
}


table.addEventListener("click", function(e) {
  if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);

