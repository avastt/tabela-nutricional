
	var titulo = document.querySelector(".titulo");
	console.log(titulo);
	console.log(titulo.textContent);
	titulo.textContent = "Aparecida Nutricionista"; 
	
	
	var pacientes = document.querySelectorAll(".paciente");
	
	for (var i = 0; i < pacientes.length; i++)
	{
		var tdpeso = pacientes[i].querySelector(".info-peso");
		var peso = tdpeso.textContent;
		
		var tdaltura = pacientes[i].querySelector(".info-altura");
		var altura = tdaltura.textContent;
		
		var tdimc = pacientes[i].querySelector(".info-imc");
		
		var pesoEhValido = validaPeso(peso);
		var alturaEhValida = validaAltura(altura);
		
		if(!pesoEhValido)
		{
			console.log("Peso inválido");
			pesoEhValido = false;
			tdimc.textContent = "Peso inválido";
			pacientes[i].classList.add("paciente-invalido");
		}
		if(!alturaEhValida)
		{
			console.log("Altura inválida");
			alturaEhValida = false;
			tdimc.textContent = "Altura inválida";
			pacientes[i].classList.add("paciente-invalido");
		}
		if(pesoEhValido && alturaEhValida)
		{
			var imc = calculaImc(peso,altura);
			tdimc.textContent = imc;
		}
	}
function validaPeso(peso)
{
	if (peso >= 0 && peso <= 1000)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function validaAltura(altura)
{
	if (altura >= 0 && altura <= 3.0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
    
function calculaImc(peso,altura)
{
     var imc = 0;
       imc = peso / (altura * altura);
       return imc.toFixed(2);
}

