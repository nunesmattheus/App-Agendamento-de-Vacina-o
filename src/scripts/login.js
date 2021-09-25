let email1 = document.getElementById('email1')
let senha1 = document.getElementById('password1')

function autenticaSenha(event){
    event.preventDefault()

    let email = window.localStorage.getItem('email')
    let senha = window.localStorage.getItem('password')

    if(email1.value == email && senha1.value == senha){
        window.location.href = '/src/perfil.html'
    }
    else{
        window.alert("Usuario ou senha incorretos")
    }    
   
}

const button = document.getElementById('submit')
button.addEventListener('click', autenticaSenha)


