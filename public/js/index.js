var nev = '';
var osztaly = '';

window.addEventListener("keydown", function (e) {
    if (13 == e.keyCode)
    {   e.preventDefault();
        getnames();
    };
});

function getnames(){
   nev = document.getElementById('nev').value;
   osztaly = document.getElementById('osztaly').value;
   localStorage.setItem('nev', nev);
   localStorage.setItem('osztaly', osztaly);
   
     if (nev.length <= 3 || osztaly.length < 2) {
        alert("Írd be a neved és az osztályod!")
    }
    else {   
document.location.href = 'tan.html';}
}
