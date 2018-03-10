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

dataPanel.



//Click event

items.addEventListener('click', )

