var inputText = document.querySelector("#inputText");
var outputText = document.querySelector("#outputText");
var btnTranslate = document.querySelector("#btnTranslate");


 var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

//var serverURL ="https://api.funtranslations.com/translate/ferb-latin.json"

function errorHandler(error){
    console.log("Error occured :" +  error)
}

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text
}

function clickHandler(){
    // console.log("Clicked ")
    // outputText.innerText=inputText.value;

     var sampleText = inputText.value ;
    fetch(getTranslationURL(sampleText))
    .then(response => response.json)
    .then(json => {
        var a = json.contents.text;
        console.log(a);
    })
    // .catch(errorHandler)

   
};

btnTranslate.addEventListener('click', clickHandler);

