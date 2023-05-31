let inputBtn = document.getElementById("input-btn");
let myLeads = [];
let inputEl = document.getElementById("input-el");

const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener =
  ("click",
  function () {
    myLeads.push(inputEl.value);
  });

let listItems = "";

for (let i = 0; i < inputBtn.length; i++) {
  listItems += "<li>" + myLeads[i] + "<li>";
}

ulEl.innerHTML = listItems;
