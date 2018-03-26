
var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
		
		var form = document.querySelector("#form-adiciona");
      
        var paciente = obtemPacienteDoFormulario(form);

        var pacienteTr =  montaTr(paciente);
        var erro = validaPaciente(paciente);

        console.log(erro);
        if (erro.length > 0)
        {
            exibeMensagensDeErro(erro);
            return;
        }
        if(!validaPaciente(paciente))
        {
            console.log("Paciente inválido");
            return;
        }
        //adicionando o paciente na tabela
    
		var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        form.reset();
        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";
    });

    function exibeMensagensDeErro(erros) {
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
    
        erros.forEach(function(teste) {
            var li = document.createElement("li");
            li.textContent = teste;
            ul.appendChild(li);
        });
    }
function obtemPacienteDoFormulario(form)
{
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montaTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
function montaTd(dado,classe)
{
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validaPaciente(paciente)
{
    var erros = [];

    if (paciente.nome.length == 0){
    erros.push("O nome está em branco!");    
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura está em branco!");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso está em branco!");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura está em branco!");
    }
    return erros;
}