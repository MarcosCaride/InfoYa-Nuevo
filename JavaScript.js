  var nombre = "noSeHainiciado";
function Logeado() {
  var nombre = document.getElementById("NombreUsuario").value;
  console.log(Nombre);
}
    var likes = 0
    var dislikes = 0
function MeGustas() {
    likes = likes + 1;
    console.log("Likes " + likes);
    document.getElementById("ContadorLikes").innerHTML = likes;
}
function NoMeGusto() {
    dislikes = dislikes + 1
    console.log("Dislikes " + dislikes);
    document.getElementById("ContadorDislikes").innerHTML = dislikes;
}
var aBuscar = "nada"
function buscador() {
  aBuscar = document.getElementById("searchBar").value;
  console.log(aBuscar);
  if (aBuscar == "Entretenimiento") {
    document.getElementById("clickParaEntretenimiento").style.display = "block";
  }
    else {
      if (aBuscar == "Cine") {
        document.getElementById("clickParaCine").style.display = "block";
        console.log(aBuscar);
      }
      else {
        if (aBuscar == "Inicio") {
          document.getElementById("clickParaHome").style.display = "block"

        }
        else {
          document.getElementById("prueba").innerHTML = "no se a encontrado lo que busca"
        }
      }
    }
  }

  function agradecimiento() {
    document.getElementById("final").innerHTML = "Muchas gracias por contarnos tu opinion!"
  }
  window.onscroll = function() {scrollDelete()};
  function scrollDelete() {
      if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
          document.getElementById("clickParaHome").style.display = "block";
      } else {
          document.getElementById("clickParaHome").style.display = "none";
      }
  }
