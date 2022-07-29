


const request = require('request');






console.log("iniciando accion")
request('https://www.amazon.com.mx/s?k=cemento', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  function ExtraerNombre(){
    var page=body.toString();
    nombres=[]
    valStr=45
    num=page.indexOf("a-size-base-plus a-color-base a-text-normal")
     
    numInicial=num+valStr
    numFinal=numInicial+100
    console.log(numInicial)
    nombre1=page.substring(numInicial,numFinal)

    num1=nombre1.indexOf("</span>")
    nombres[0]=nombre1.substring(0,num1)


    console.log(nombres[0])
    console.log(numInicial)
    console.log(numFinal)
    
   }


   ExtraerNombre();



});