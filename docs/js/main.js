//Create panel

var createDataPanel = document.createElement('div');
var createClosePanel = document.createElement('p');

createDataPanel.textContent ='test';
createClosePanel.textContent = 'X';

createDataPanel.setAttribute('id', 'dataPanel');
createClosePanel.setAttribute('id', 'closePanel');

document.body.appendChild(createDataPanel);


//Selectors

var dataPanel = document.getElementById('dataPanel');
var items = document.querySelector('tr');
var closePanel =  document.getElementById('closePanel');

dataPanel.appendChild(createClosePanel);

//Constructor Item

function Item(site, owner){
  this.site=site;
  this.owner=owner;

}

Item.prototype.generateData = function(){

}


//Sliding animation





//Click event

//items.addEventListener('click', )


var requestURL = 'https://iradit.github.io/aproplan-test/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var listItems = request.response;
  createList(listItems);
}

function createList(jsonObj){
  for (var i=0; i<jsonObj.length;i++){
    console.log(jsonObj[1]["site"]);
  }
}