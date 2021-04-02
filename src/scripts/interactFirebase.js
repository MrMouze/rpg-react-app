function verifyFirebase(havent){
  var data = localStorage.getItem('config');
  if (data != null){
    changePage('../MasterHome/index.html')
  }
  else changePage(havent);
}

function configFirebase(){

  var config = {
    'apiKey': document.getElementById('api').value,
    'authDomain': document.getElementById('auth').value,
    'databaseURL': document.getElementById('database').value,
    'projectId': document.getElementById('project').value,
    'storageBucket': document.getElementById('storage').value,
    'messagingSenderId': document.getElementById('messaging').value,
    'appId': document.getElementById('app').value
  }

  try {
    localStorage.setItem('config', JSON.stringify(config));
  }
  catch(e) {
    console.log(e);
  }

  var data = JSON.parse(localStorage.getItem('config'));
  
  try {
    firebase.initializeApp(data);
    changePage('../../MasterHome/index.html')
  }
  catch(e){
    console.log(e);
  }

} 
    
function initFirebase(){
  
  var data = JSON.parse(localStorage.getItem('config'));
  firebase.initializeApp(data);

}

function askDeleteFirebaseConfig(){

    openConfirmBox("Atenção!", "Tem certeza que deseja deletar a configuração atual?", deleteFirebaseConfig);
}

function deleteFirebaseConfig(){

  if (document.getElementById('result').innerHTML == "true"){
    console.log(e);
    localStorage.removeItem('config');
    changePage('../../Begin/index.html')
  }

}
