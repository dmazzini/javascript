function suma(lista){
	var total = 0
	var contador = 0
	for (var contador = 0; contador < lista.length; contador++) {		
			total+=lista[contador]
		
	}

	alert(total)
	return total
}	

/*Escribir una foncion promedio que tome como parametro una lista y devuelve el promedio de todos su elementos.
Ejemplos:
promedio( [5, 3, 1] ) debe devolver 3
promedio( [8, 2, 3, 7] ) debe devolver 5
promedio( [5] ) debe devolver 5
*/
function promedio(lista){
	
	var promedio
	var total = 0

	total = suma(lista)

	promedio = total/lista.length;

	alert(promedio)

	return promedio
}
