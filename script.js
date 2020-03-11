const button =  document.getElementById('button');

const texto =  document.getElementById('browsers2');

/*
button.addEventListener('click', () =>{
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(result => {
        const list = document.getElementById('list');
        const fragment = document.createDocumentFragment();
        for(const userInfo  of result.data){
            const listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.title}`;
            fragment.appendChild(listItem);
        }
        list.appendChild(fragment);
        console.log(result.data);
    }).catch(err => {
        console.log(err);
    });
});*/

var nodos=null;

$('#browsers2').keyup(function (e) { 
    let valueTexto = $(this).val();  //obtenemos valor del input text que va tecleando cliente asociado al datalist
    console.log(valueTexto);
    //let optionCreada=null;
    $("#browsers option").remove();
    if(nodos == null){  //evaluamos que solo una vez se haya rescatado la data para optimizar recursos
        console.log('este es el if');
        nodos = $('#data-nodo').data('nodos'); //obtenemos data json
        //console.log(nodos);
        //console.log(nodos[0]['name']);
        

        nodos.forEach(function (elemento, indice, array) {  //recoremos data
            //console.log(array[indice]['id']);
            if(array[indice]['name'].indexOf(valueTexto) != -1){  //buscamos en la cadena de texto en cuestion el valor introducido por el usuario para sinonimos
                console.log("Se encontro " + array[indice]['name']);
                //$("#browsers option").remove();
                let optionCreada=document.createElement("option"); //Creamos elemento
                $("#browsers").append(optionCreada);  //agregamos el elemento creado
                $("#browsers option:last-child").attr('value',array[indice]['name']);  //establecemos valor de value para que se muestre en el datalist
                //$("#browsers").append("<option value="+array[indice]['name']+">" );
            }
        });

    }else{
        console.log("este es el else");
        nodos = $('#data-nodo').data('nodos');
        
        nodos.forEach(function (elemento, indice, array) {
            //console.logX(array[indice]['name']);
            if(array[indice]['name'].indexOf(valueTexto) != -1){
                console.log("Se encontro " + array[indice]['name']);
                //$("#browsers option").remove();
                optionCreada=document.createElement("option");
                $("#browsers").append(optionCreada);
                $("#browsers option:last-child").attr('value',array[indice]['name']);
                //$("#browsers").append("<option value="+array[indice]['name']+">");
            }
        });
    }
    
    //console.log(datos);

    
        
    
});;


//Cuando cargamos pagina hacemos una peticion por medio de axiros y obtenemos una url
//json, 
$(document).ready(function(){
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(result => {
        datos = result.data;
        //console.log(datos[0]['userId']);
        $('#data-nodo').data('nodos',datos);  //seteamos valor 'data' en data-nodo que es la data del json
        //console.log($('#data-nodo').data('nodos'));
    }).catch(err => {
        console.log(err);
    });
});




