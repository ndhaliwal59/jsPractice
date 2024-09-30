const addTop = document.getElementById('addTop');
const addBottom = document.getElementById('addBottom');

const delTop = document.getElementById('delTop');
const delBottom = document.getElementById('delBottom');

const delName = document.getElementById('delName');
const addName = document.getElementById('addName');

const addButton = document.getElementById('addButton'); 
const deleteButton = document.getElementById('deleteButton'); 

const submitButton = document.getElementById('submit');

const tops = [];
const bottoms = [];


function randomElement(list, tops = 5){
  return [...list].sort(() => Math.random()> 0.5 ? 1 : -1).slice(0, tops);
}



function unCheck(){
  addTop.checked = false;
  delTop.checked = false;
  addBottom.checked = false;
  delBottom.checked = false;
}

function deleteItem(x){
  var myIndex = x.indexOf(delName.value.toLowerCase());
  if (myIndex !== -1) {
      x.splice(myIndex, 1);
  }
}





addButton.addEventListener('click', () => { 
  if(addName.value == ""){
    alert("Name must be filled out");
  }
  else{
    if(addTop.checked){
      tops.push(addName.value.toLowerCase());
      addName.value = "";
      unCheck();
      console.log(tops);
      console.log("hello");
    }
    else if (addBottom.checked){
      bottoms.push(addName.value.toLowerCase());
      addName.value = "";
      unCheck();
    }
  }
});

deleteButton.addEventListener('click', () => { 
  if(delName.value == ""){
    alert("Name must be filled out");
  }
  else{
    if(delTop.checked){
      deleteItem(tops);
      delName.value = "";
      unCheck();
    }
    else if (delBottom.checked){
      deleteItem(bottoms);
      delName.value = "";
      unCheck();
    }
  }
});

submitButton.addEventListener('click', () => { 
  var topsArray = randomElement(tops, 5 );

  document.getElementById('top1').innerHTML = topsArray[0];
  document.getElementById('top2').innerHTML = topsArray[1];
  document.getElementById('top3').innerHTML = topsArray[2];
  document.getElementById('top4').innerHTML = topsArray[3];
  document.getElementById('top5').innerHTML = topsArray[4];

  var bottomArray = randomElement(bottoms, 5 );

  document.getElementById('bottom1').innerHTML = bottomArray[0];
  document.getElementById('bottom2').innerHTML = bottomArray[1];
  document.getElementById('bottom3').innerHTML = bottomArray[2];
  document.getElementById('bottom4').innerHTML = bottomArray[3];
  document.getElementById('bottom5').innerHTML = bottomArray[4];

});








