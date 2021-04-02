
function verifyClasseSelected(){

    var type = localStorage.getItem('classType');
    var name = localStorage.getItem('selectedClass');
    var vname = document.getElementById('name');
    var caracs = document.getElementById('caracs');
    var vtype = document.getElementById('vtype');
    var diceQtd = document.getElementById('lDiceQtd');
    var diceType = document.getElementById('lDiceType');
    console.log(name);

    if (name != null){
        firebase.database().ref('Classes/'+ type + '/' + name).on('value', function(snapshot){
            vname.value = snapshot.val().ClassName;
            vtype.value = snapshot.val().ClassType;
            caracs.value = snapshot.val().ClasseCaracs;
            diceQtd.value = snapshot.val().ClasseLifeDiceQtd;
            diceType.value = snapshot.val().ClasseLifeDiceType;
        })

    }
        
}

function verifyClasses(){

    function addButton(name, type){
        var container = document.getElementById('classescontainer');
        var btn = document.createElement('button');
        var typebtn = type;
        btn.value = name;
        btn.innerHTML = name;
        container.appendChild(btn);

        btn.onclick = () =>{
            console.log(btn.value)
            localStorage.setItem('selectedClass', btn.value);
            localStorage.setItem('classType', typebtn);
            changePage('create.html')
        }
        
    }

    firebase.database().ref('Classes/Jogador').once('value', function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){

                let name = ChildSnapshot.val().ClassName;
                var type = "Jogador";
                addButton(name, type)

            }
        );
    });

    firebase.database().ref('Classes/Criatura').once('value', function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){

                let name = ChildSnapshot.val().ClassName;
                var type = "Criatura";
                addButton(name, type)
            }
        );
    });
}

function addClass() {
    
    var classename, type, lifeDiceQtd, lifeDiceType, caracs;
    
    function Ready(){
        classename = document.getElementById('name').value;
        type = document.getElementById('type').value;
        lifeDiceQtd = document.getElementById('diceQtd').value;
        lifeDiceType = document.getElementById('diceType').value;
        caracs = document.getElementById('caracs').value;

        console.log(classename, type, lifeDiceQtd, lifeDiceType, caracs);
    }

    try{
        Ready();
        firebase.database().ref('Classes/' + type +'/' + classename).set({
            ClassName: classename,
            ClassType: type,
            ClasseLifeDiceQtd: lifeDiceQtd,
            ClasseLifeDiceType: lifeDiceType,
            ClasseCaracs: caracs
        });

        openAlertBoxWhithoutOkButton("Sucesso", "Classe criada com sucesso");
        changePageIn('../index.html', 500);
        
    }
    catch (e) {

        openAlertBox("Erro!","Confira se todos os campos estão preenchidos e tente novamente.");
    }
}
