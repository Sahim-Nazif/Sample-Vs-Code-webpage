/* Custom Js goes here */
//IIFE - Immediately Invoked Function Expression

(function(){
 
    function Start () {
      var title=document.title;
    console.log("App Started")
    console.log("Title:" +title);

    }
  window.onload=Start;
})();