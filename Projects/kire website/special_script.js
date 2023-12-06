/*=========nav bar========*/
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

  window.onload = function() {
    /*===============  prevent default submit====================*/
      const contactName = document.getElementById("contact-name");

      document.getElementById("submit").addEventListener("click", function(event){
        
          event.preventDefault();
          
        });
      
  }