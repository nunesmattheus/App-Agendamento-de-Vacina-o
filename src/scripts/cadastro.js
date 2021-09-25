let nome = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let passw = document.getElementById('passw')
let cpf = document.getElementById('cpf')
let idade = document.getElementById('idade')
let sexo = document.getElementById('sexo')

let usuario = {
    nome: '',
    email: '',
    password: '',
    cpf: '',
    idade: '',
    sexo: ''
}

const usuarioAtual = JSON.parse(window.localStorage.getItem('usuario'))

function criaUsuario(){
    window.localStorage.setItem('usuario', JSON.stringify([usuario]))
}

function enviaFormulario(event){
    event.preventDefault()     

    usuario.nome = nome.value
    usuario.email = email.value
    usuario.password = password.value
    usuario.cpf = cpf.value
    usuario.idade = idade.value
    usuario.sexo = sexo.value

    window.localStorage.setItem('nome', nome.value)
    window.localStorage.setItem('cpf', cpf.value)
    window.localStorage.setItem('idade', idade.value)
    window.localStorage.setItem('sexo', sexo.value)
    window.localStorage.setItem('email', email.value)
    window.localStorage.setItem('password', password.value)
    
    if(password.value == passw.value){
        window.location.href = '/src/login.html'         
    }
    else{
        window.alert('As senhas não coincidem')
    }    

}

const button = document.getElementById('submit')
button.addEventListener('click', enviaFormulario)