/* zad. 1. Funkcja solution1 zwraca index min elementu po wartości absolutnej.
const arr = [6, 2, 10, 4, 2, -1, 3, 5]
solution1(arr) // 5
*/

function solution1(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
    if (min > arr[i]){
        min = arr [i];
        }
    }
    return Math.abs(min);
    console.log(min);
  }
  
  const arr = [6, 2, 10, 4, 2, -1, 3, 5];
  
  solution1(arr); // ?? zwraca poprawnie abs najmniejszej wartości, nie wiem jak zrobić, żeby zwracało jego indeks.

/* zad. 2. Funkcja solution2 zwraca ilość dodatnich, ujemnych oraz zer
const arr = [6, 2, 10, 4, 2, -1, 3, 5]
solution2(arr) // [7, 1, 0]
*/


/* zad. 3. Funkcja solution3 zwraca elementy, które są wieksze, niż średnia arytmetyczna.
const arr = [6, 2, 10, 4, 2, -1, 3, 5]
solution3(arr) // [6, 10, 4, 5] w tym przypadku średnią jest 3.875
*/


/* zad. 4. Funkcja solution4 przyjmuje text. Zwraca najdłuższe zdanie
const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
solution4(text) // 'Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
*/


/* zad. 5. Funkcja przyjmuje text, zwraca najdłuzsze slowo
const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
solution4(text) // typesetting
*/
