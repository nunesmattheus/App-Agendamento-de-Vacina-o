let date
let agendamentoAtual = { data: '', horario: '' }
const botaoEnvio = document.getElementById('submit') 
const agendamentosExistentes = JSON.parse(window.localStorage.getItem('agendamentos'))

document.getElementById("date").addEventListener("change", function() {
  agendamentoAtual.data = this.value
})

document.getElementById("horario").addEventListener("change", function() {
  agendamentoAtual.horario = this.value
})

function checaSeAgendamentoJaExiste (agendamentoAtual) {
  if (!agendamentosExistentes) return false
  return agendamentosExistentes.some(a => a.data === agendamentoAtual.data && a.horario === agendamentoAtual.horario)
}

function criaAgendamento (evento) {
  evento.preventDefault()
  if (!agendamentoAtual.data || !agendamentoAtual.horario.length>1) {
    window.alert("Preencha todos os dados")
  }

  if (checaSeAgendamentoJaExiste(agendamentoAtual)) {
    window.alert('Agendamento já existe')
    return
  }

  if (!agendamentosExistentes) {
    window.localStorage.setItem('agendamentos', JSON.stringify([agendamentoAtual]))
  } else {
    window.localStorage.setItem('agendamentos', JSON.stringify([...agendamentosExistentes, agendamentoAtual]))
    agendamentoAtual = { data: '', horario: '' }
  }
  window.alert("Agendamento criado com sucesso")
}

botaoEnvio.addEventListener('click', criaAgendamento)
