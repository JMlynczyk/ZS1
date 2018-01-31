var a=10, b="3c";
var wynik= a + b;
//alert(wynik);
//alert(a+b);
console.log("tekst");
console.log(a);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(a + b)); //string

console.trace();

var _zmienna1 = 10;

//var 3liczba = 10; //błędna nazwa zmiennej

var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa));

//int interger   liczba całkowita np. 3 (C++)
//float zmiennoprzecinkowa np. 3.5 (C++)

var prawda = true;
var falsz = false;
console.log(typeof(prawda)); //boolean

//string

var tekst = "Janusz";
console.log(typeof(tekst)) //string

//undefined

var imie;
console.log(imie); //undefined
console.log(typeof(imie)); //undefined
imie = "Sandra";
console.log(imie);
console.log(typeof(imie)); //string

//object

var tablica = ["Janusz", "Anna", "Krystyna"];
console.log(tablica);
console.log(typeof(tablica)); //object

//#####################################################################
/*
//var liczba = prompt ("Podaj liczbę");
var liczba1 = prompt("Podaj pierwszą liczbę", "np. 3.4");
var liczba2 = prompt("Podaj drugą liczbę", "np. 3.4");
//parseInt- liczby całkowite
//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);

//konwersja na typ zmiennoprzecinkowy
liczba1 = parseFloat(liczba1)
liczba2 = parseFloat(liczba2)
console.log(typeof(liczba1));
console.log(typeof(liczba2));
var suma = liczba1 + liczba2; //konkatenacja
document.write(suma);
console.log(typeof(suma));
*/
/*zad.1
Mama, tata oraz dziecko podają swój wiek z klawiatury
Na ekranie wyświetl w formacie:
mama: ... lat
tata: ...lat
dziecko: ...lat
średni wiek wynosi: ...lat
*/
var mama = prompt("Ile masz lat?", "Mama");
var tata = prompt("Ile masz lat?", "Tata");
var dziecko= prompt("Ile masz lat?", "Dziecko");
mama = parseInt(mama);
tata = parseInt(tata);
dziecko = parseInt(dziecko);
var srednia = (mama + tata + dziecko) /3;
srednia = srednia.toFixed(2);
document.write("Mama ma " + mama + " lat. <br>"  + "Tata ma " + tata + " lat. <br>" + "Dziecko ma " + dziecko + " lat. <br>")
document.write("Średnia wynosi: " + srednia + " lat.");

/*
Zad.2
*/

