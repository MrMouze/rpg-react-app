//import firebase from 'firebase/app'

function generateInvite(){

    var inviteUrl = "";
    var data = localStorage.getItem('config');
    var blob = new Blob([data], {type: "application/json"});

    try{
        var uploadTask = firebase.storage().ref('Invites/invite.json').put(blob);
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            inviteUrl = url
            openLinkBox("Link para convite:", inviteUrl);
        });
    

    }
    catch(e){
        console.log(e);
    }
}
