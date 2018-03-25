
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
		
		var pesoEhValido = true;
		var alturaEhValida = true;
		
		if(peso <= 0 || peso >= 500)
		{
			console.log("Peso inválido");
			pesoEhValido = false;
			tdimc.textContent = "Peso inválido";
			pacientes[i].classList.add("paciente-invalido");
		}
		if(altura <= 0 || altura >= 3.00)
		{
			console.log("Altura inválida");
			alturaEhValida = false;
			tdimc.textContent = "Altura inválida";
			pacientes[i].classList.add("paciente-invalido");
		}
		if(pesoEhValido && alturaEhValida)
		{
			var imc = (peso / (altura*altura));
			tdimc.textContent = imc.toFixed(2);
		}
	}

