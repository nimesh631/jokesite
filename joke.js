const JOKE_API_ENDPOINT="http://localhost/jokebackend/index.php"
const quoteElement=document.getElementById("quote");
const refreshButton=document.getElementById("refresh");

refreshButton.addEventListener("click",fetchJoke);

function fetchJoke(){
//AJAX Request
const request=new XMLHttpRequest();
request.open("GET",JOKE_API_ENDPOINT);
request.setRequestHeader("ACcept","application/json");
request.send();

request.onreadystatechange=function(){
    if(this.readyState ==4 && this.status ==200){
        const response =this.responseText;
        const parsedResponse=JSON.parse(response);
        console.log(parsedResponse.joke);
        quoteElement.textContent = parsedResponse.joke;    
    }
    else{
        console.error=("Error");
    }
  };
}
fetchJoke();