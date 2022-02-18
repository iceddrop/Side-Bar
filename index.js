let x = window.matchMedia("(max-width:481px) ")
function openNav() {
    if (x.matches){
      document.getElementById("mySidenav").style.width = "120px";
    } else {
      document.getElementById("mySidenav").style.width = "300px";
    }
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }