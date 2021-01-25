const express= require('express')
const path = require('path')
const app = express()
const publicPath = path.resolve('./public')


app.use(express.static(publicPath));
app.listen(3030, () => console.log("InfoYa en funcionamiento"))

app.get('/', (req, res) =>{
  res.sendFile(path.resolve(('./views/index.html')))
});


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

  function agradecimiento() {
    document.getElementById("final").innerHTML = "Muchas gracias por contarnos tu opinion!"
  }

