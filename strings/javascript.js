/*- Escribir una función que se llame removerCaracteres que tome como parámetro un string y que remueva el primer y último caracter. Ejemplos:


removerCaracteres('Hola') tiene que devolver el string 'ol'

removerCaracteres('bicicleta') tiene que devolver 'iciclet'

removerCaracteres('Federico') tiene que devolver 'ederic
*/



//1)
function removerCaracteres(string) {
	var resultado
	resultado = string.substring(1,string.length-1)
		
	return resultado	
}

document.write(removerCaracteres('Hola'))
document.write("<br>")
document.write(removerCaracteres('bicicleta'))
document.write("<br>")
document.write(removerCaracteres('Federico'))



/*- Escribir una función menosDe4 que tome como parámetro una lista de strings y que devuelva una lista con los strings que tengan 4 o menos caracteres. Ejemplos:


menosDe4(['te', 'salamin', 'oso', 'tostada']) debe devolver ['te', 'oso']

menosDe4(['Chilavert', 'Flores', 'Asad', 'Sotomayor']) debe devolver ['Asad']
*/

//2)
/*function menosDe4(lista) {
	var resultado = []
	for (var i =0; i < lista.length; i++) {
		var palabra = lista[i]
		
		if (palabra.length <= 4){ 
			resultado.push(palabra)
		}
	}
	return resultado
}


document.write(menosDe4(["te", "salamin" , "oso", "tostada"]))
document.write("<br>")
document.write(menosDe4(['Chilavert', 'Flores', 'Asad', 'Sotomayor']))*/