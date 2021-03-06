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
    let abs = Math.abs(min);
    console.log(abs);
    return arr.indexOf(min);
  }
  
  const arr = [6, 2, 10, 4, 2, -1, 3, 5];
  
  solution1(arr);

/* zad. 2. Funkcja solution2 zwraca ilość dodatnich, ujemnych oraz zer
const arr = [6, 2, 10, 4, 2, -1, 3, 5]
solution2(arr) // [7, 1, 0]
*/

function solution2(arr){
    var zeroCount = 0,
      posCount = 0,
      negativeCount = 0;
    arr.forEach((item) => {
      if (item == 0) {
        console.log("ZeroCount:: " + zeroCount);
        return zeroCount++
      } else if (item < 0) {
        console.log("NegativeCount:: " + negativeCount);
        return negativeCount++
      } else if (item > 0) {
        console.log("PositiveCount :: " + posCount);
        return posCount++
      }
    })
  }
  
  const arr = [6, 2, 10, 4, 2, -1, 3, 5];
  solution2(arr);

/* zad. 3. Funkcja solution3 zwraca elementy, które są wieksze, niż średnia arytmetyczna.
const arr = [6, 2, 10, 4, 2, -1, 3, 5]
solution3(arr) // [6, 10, 4, 5] w tym przypadku średnią jest 3.875
*/

function getAverage(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  function solution3(arr) {
    let avg = getAverage(arr);
    let numbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > avg) {
        numbers.push(arr[i]);
      }
    }
  
    return numbers;
  }
  const arr = [6, 2, 10, 4, 2, -1, 3, 5]
  solution3(arr);

/* zad. 4. Funkcja solution4 przyjmuje text. Zwraca najdłuższe zdanie
const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
solution4(text) // 'Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
*/

function solution4(text){
    var [firstSentence, secondSentence] = text.split('.');
    var before_dot= (text.toString().split(".")[0]).length;
    var after_dot = (text.toString().split(".")[1]).length;
    
    
if (after_dot < before_dot){
    console.log('First sentence is longer than second sentence');
    return firstSentence;
    
}else {
    console.log('Second sentence is longer than first sentence');
    return secondSentence;
    
}
}

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
solution4(text);

/* zad. 5. Funkcja przyjmuje text, zwraca najdłuzsze slowo
const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
solution4(text) // typesetting
*/

function solution5(text){

        var textSplit = text.split(' ');
        var word = 0;
        var longestWord = null;
        for(var i = 0; i < textSplit.length; i++){
          if(textSplit[i].length > word){
          word = textSplit[i].length;
          longestWord = textSplit[i]
           }
        }
        return longestWord;
      }
      
const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
solution5(text);
