const form = document.querySelector('form');
const nome=document.querySelector('#nome');
const email=document.querySelector('#email');
const msg=document.querySelector('#msg');
const errorName = document.querySelector('.errorName');
const errorEmail = document.querySelector('.errorEmail');
const errorMsg = document.querySelector('.errorMsg');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    //Verifica se o nome está vazio
    if (nome.value==='') {
        errorName.innerHTML="<span class='errorMessage'>Preencha o campo nome!!!</span>"
        //alert("Preencha o campo nome")
        nome.focus();
        return;
    }else{
        errorName.innerHTML="";
    }
    if (nome.value.length<10) {
        errorName.innerHTML="<span class='errorMessage'>Nome inválido</span>"
        //alert("Nome inválido");
        nome.focus();
        return;
    }else{
        errorName.innerHTML="";
    }
    //Verficação de email
    
    if (email.value==='') {
        errorEmail.innerHTML="<span class='errorMessage'>Preencha o campo Email!!!</span>"
        email.focus()
        return;
    }else{
        errorEmail.innerHTML='';
    }
    if (validarEmail(email.value)) {
        errorEmail.innerHTML='<span class="errorMessage">Email inválido!!!</span>';
        email.focus()
        return;
    }else{
        errorEmail.innerHTML='';
    }
    //Vefiricação de mensagen
    if (msg.value==='') {
        errorMsg.innerHTML="<span class='errorMessage'>Preencha o campo mensagem!!!</span>";
        msg.focus();
        return;
    }else{
        errorMsg.innerHTML="";
    }
    if (msg.value<10) {
        errorMsg.innerHTML="<span class='errorMessage'>Mensagem inválida</span>"
        msg.focus();
        return;
    }else{

    }
    //Se tudo estiver certo, envie o form
    form.submit();
});
//Função de validação de email
function validarEmail(email) {
    //Criar uma regex para validar email
    const emailRegex=new RegExp(
        //Verficar cada elemento do email :user 12 @ gmail. com. br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return false;
    }
    return true;
    
}