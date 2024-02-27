let history = [];
let strikeList = [];
let toPurchaseList = [];

function groceryAdd() {
  let groceryList = document.getElementById("displayList");
  let appendItem = document.createElement("button");
  appendItem.onclick = function () {
    strikeOut(this);
  };
  let getItem = document.getElementById("addBox").value;
  history.push(getItem);
  toPurchaseList.push(getItem);
  appendItem.append(getItem);
  appendItem.classList.add("btnList");
  groceryList.appendChild(appendItem);
}

function strikeOut(thing) {
  thing.classList.add("strike");
  thing.onclick = function () {
    removeStrike(thing);
  };
  strikeList.push(thing.innerHTML);
  let item = strikeList.indexOf(thing.innerHTML);
  if (item > -1) {
    toPurchaseList.splice(item, 1);
  }
}

function removeStrike(thing) {
  thing.classList.remove("strike");
  thing.onclick = function () {
    strikeOut(thing);
  };
  toPurchaseList.push(thing);
  let item = strikeList.indexOf(thing.innerHTML);
  if (item > -1) {
    strikeList.splice(item, 1);
  }
}

function showEverything(thing) {
  let oldList = document.getElementById("displayList");
  for(let child of oldList.children){
    child.style.display = "block";
  }
  }
  
  function showListPurchased(thing){
    let oldList = document.getElementById("displayList");
    for(let child of oldList.children){
      if(child.classList.contains("strike")){
        child.style.display = "block";
      }
      else{
        child.style.display = "none";
      }
    }
  }

  function showListToPurchase(thing){
    let oldList = document.getElementById("displayList");
    for(let child of oldList.children){
      if(!child.classList.contains("strike")){
        child.style.display = "block";
      }
      else{
        child.style.display = "none";
      }
    }
  }