var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('primeiro-paciente');

var tdPeso = document.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = document.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = document.querySelector('.info-imc');

var imc = peso / (altura * altura);
tdImc.textContent = imc;
