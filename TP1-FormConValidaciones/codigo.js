var bool1,bool2,bool3,bool4;
document.getElementById('asd').addEventListener('input', function(event) {
    const input = event.target.value;
    const messageElement = document.getElementById('validation-message');
    if (input.length > 3) {
    messageElement.textContent = 'Válido';
    messageElement.style.color = 'green';
    bool1 =true;
    } else {
    messageElement.textContent = 'El nombre completo debe tener al menos 3 caracteres.';
    messageElement.style.color = 'red';
    }
});

document.getElementById('mail').addEventListener('input',
function(event) {
    const input = event.target.value;
    const messageElement2 = document.getElementById('validation-message2');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailRegex.test(input)) {
    messageElement2.textContent = 'Válido';
    messageElement2.style.color = 'green';
    bool2 =true;
    } else {
    messageElement2.textContent = 'El email debe tener un dominio válido.';
    messageElement2.style.color = 'red';
    }
}); 

document.getElementById('contra').addEventListener('input', 
function asd (event) {
    const input = event.target.value;
    const messageElement3 = document.getElementById('validation-message3');
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if (passwordRegex.test(input)) {
    messageElement3.textContent = 'Válido';
    messageElement3.style.color = 'green';
    bool3 =true;
    } else {
    messageElement3.textContent = 'La contraseña debe tener al menos 8 caracteres, al menos un número y una letra.';
    messageElement3.style.color = 'red';
    }
   if(document.getElementById('conf').value.length>0 && document.getElementById('conf').value != input){
    const messageElement4 = document.getElementById('validation-message4');
    messageElement4.textContent = 'La contraseña no coincide.';
    messageElement4.style.color = 'red';
   }
});

document.getElementById('conf').addEventListener('input', 
function(event) {
    const input = event.target.value;
    const messageElement4 = document.getElementById('validation-message4');
    var contra=document.getElementById('contra').value;
        if (input==contra &&bool3) {
    messageElement4.textContent = 'Válido';
    messageElement4.style.color = 'green';
    bool4 =true;
    }else{
         messageElement4.textContent = 'La contraseña no coincide.';
    messageElement4.style.color = 'red';
    }

});

function validar(event){
    if(bool1 && bool2 && bool3 && bool4){
        console.log("sigma")

    }else{
        console.log("por ahi no es rey")
        event.preventDefault();
    }
}
function Ocultar() {
    var x = document.getElementById("contra");
    
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("Im").src = "eye-solid-v.svg";
    } else {
      x.type = "password";
      document.getElementById("Im").src = "eye-slash-solid-v.svg";
    }
  }


function Ocultar2(){
    var y =document.getElementById("conf");
   
        if (y.type === "password") {
        y.type = "text";
        document.getElementById("Imi").src = "eye-solid-v.svg";  
      } else {
        y.type = "password";
        document.getElementById("Imi").src = "eye-slash-solid-v.svg";
      }
    
    
  }

  function DarkMode() {
    var element = document.querySelector("#d");
    var element2 = document.querySelector("#m");
    element.classList.toggle("dark-mode-form");
    element2.classList.toggle("dark-mode-body");
 }