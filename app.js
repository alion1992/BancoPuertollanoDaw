
class Usuario{
     nombre
     apellido1
     apellido2
     nacionalidad

     constructor(n,a1,a2,na){
        this.nombre=n
        this.apellido1=a1
        this.apellido2=a2
        this.nacionalidad=na
     }
}
function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
 document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="InfoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}
var nombre=document.getElementById('inpNombre')
var primerApellido=document.getElementById('inpPApellido')
var segundoApellido=document.getElementById('inpSegundoApellido')
var nacionalidad=document.getElementById('inpNacionalidad')
var enviar=document.getElementById('enviar')
const expReguLetras=/^[A-Za-zñÑ]+$/
var guardado=true

var data=localStorage.getItem('user')


if(data!=null){
    var user=JSON.parse(data)
    
}else{
    var user=new Usuario('Francisco','Alia','Hernandez','Española')
}


nombre.value=user.nombre
primerApellido.value=user.apellido1
segundoApellido.value=user.apellido2
nacionalidad.value=user.nacionalidad





nombre.addEventListener('change', function (event) {

    var mensaje=document.getElementById('msgNombre')

    var test =expReguLetras.test(nombre.value)

    if(test){
    var array = nombre.value.split('')

    if (!validarTam(3,20, array.length)) {

            mensaje.textContent = 'Tamaño incorrecto (3-20)'
            mensaje.style.color='red'
            guardado=false

        } else {

            mensaje.textContent = ''
            mensaje.style.color = ''
            guardado=true
        }
    } else {

        mensaje.textContent = 'Solo se pueden introducir letras(A-Z)'
        mensaje.style.color = 'red'
        guardado=false
    }

})
primerApellido.addEventListener('change', function (event) {

    var mensaje=document.getElementById('msgPApellido')

    var test =expReguLetras.test(primerApellido.value)

    if(test){
    var array = primerApellido.value.split('')

    if (!validarTam(3,20, array.length)) {

            mensaje.textContent = 'Tamaño incorrecto (3-20)'
            mensaje.style.color='red'
            guardado=false

        } else {

            mensaje.textContent = ''
            mensaje.style.color = ''
            guardado=true
        }
    } else {

        mensaje.textContent = 'Solo se pueden introducir letras(A-Z)'
        mensaje.style.color = 'red'
        guardado=false
    }

})
    segundoApellido.addEventListener('change', function (event) {

    var mensaje=document.getElementById('msgSegundoApellido')

    var test =expReguLetras.test(segundoApellido.value)

    if(test){
         var array = segundoApellido.value.split('')

    if (!validarTam(3,20, array.length)) {

            mensaje.textContent = 'Tamaño incorrecto (3-20)'
            mensaje.style.color='red'
            guardado=false

        } else {

            mensaje.textContent = ''
            mensaje.style.color = ''
            guardado=true
        }
    } else {

        mensaje.textContent = 'Solo se pueden introducir letras(A-Z)'
        mensaje.style.color = 'red'
        guardado=false

    }

})

nacionalidad.addEventListener('change', function (event) {

    var mensaje=document.getElementById('msgNacionalidad')

    var test =expReguLetras.test(nacionalidad.value)

    if(test){
         var array = nacionalidad.value.split('')

    if (!validarTam(3,15, array.length)) {

            mensaje.textContent = 'Tamaño incorrecto (3-20)'
            mensaje.style.color='red'
            guardado=false
        } else {

            mensaje.textContent = ''
            mensaje.style.color = ''
            guardado=true
        }
    } else {

        mensaje.textContent = 'Solo se pueden introducir letras(A-Z)'
        mensaje.style.color = 'red'
        guardado=false
    }

})

enviar.addEventListener('click', function (event) {
    
    var mensaje=document.getElementById('msgGuardado')
    if(guardado){
     Guardar(nombre,primerApellido,segundoApellido,nacionalidad,user)
     establecerUsuario(user)
     mensaje.textContent='Guardado correctamente'
     mensaje.style.color='green'
     
    }else{
     
     mensaje.textContent='Ingresa los datos correctamente'
     mensaje.style.color='red'
    }
}
)



function validarTam(minimo,maximo, tamCadena) {
   var valido=true 
   if(tamCadena<minimo){
    valido=false
   }
   if(tamCadena>maximo){
    valido= false
   }
    return valido
}

function Guardar(n,a1,a2,na,usuario){
    usuario.nombre=n.value
    usuario.apellido1= a1.value
    usuario.apellido2=a2.value
    usuario.nacionalidad=na.value
}

function establecerUsuario(user){
    var u=JSON.stringify(user)
    localStorage.setItem('user',u)
}