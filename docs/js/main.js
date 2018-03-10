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

function createList(jsonObj){
  var myArr = jsonObj[0];

    console.log(myArr[i]["site"]);
    var test2 = myArr[i];
    console.log(test1);
    console.log(test2);

  
  
}





var requestURL = 'https://iradit.github.io/aproplan-test/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var jsonObj = request.response;
  createList(jsonObj);
}

