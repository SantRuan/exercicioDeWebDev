
let mensagens =[]

const addMensagem = (ev)=>{

    ev.preventDefault();

    let mensagem = {
        id: Date.now(),
        nome: document.getElementById('fname').value,
        telefone: document.getElementById('fphone').value,
        empresa: document.getElementById('fentreprise').value,
        endereco: document.getElementById('fadress').value,
        email: document.getElementById('femail').value,
        mensagem: document.getElementById('fmensage').value
    }

    mensagens.push(mensagem)
    
    document.forms[0].reset()

    console.warn('added',{mensagem})
    console.log(JSON.stringify(mensagens))
// Salvando em uma base local
localStorage.setItem('Mensagens', JSON.stringify(mensagens))


}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('enviar').addEventListener('click', addMensagem)
})
