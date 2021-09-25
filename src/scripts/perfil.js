let nome1 = document.getElementById('nome1')
let cpf1 = document.getElementById('cpf1')
let idade1 = document.getElementById('idade1')
let sexo1 = document.getElementById('sexo1')


nome1.innerHTML = window.localStorage.getItem('nome') 
cpf1.innerHTML = window.localStorage.getItem('cpf')  
idade1.innerHTML = window.localStorage.getItem('idade') 
sexo1.innerHTML = window.localStorage.getItem('sexo')
  
function agenda(event){    
    event.preventDefault()

    window.location.href = '/src/agendamento.html'  
   
}

const button = document.getElementById('submit')
button.addEventListener('click', agenda)