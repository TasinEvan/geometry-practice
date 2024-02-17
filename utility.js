function getInputValue(InputFliedId){
const inputElement = document.getElementById(InputFliedId)
const inputValue = inputElement.value
const valueNum =parseFloat(inputValue) 
return valueNum
} 

function setElementById(showId ,result ){
 const resultElement = document.getElementById(showId)
 resultElement.innerText = result

}