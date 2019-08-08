const body = document.querySelector("body");

var osztaly = localStorage.getItem("osztaly");
var nev = localStorage.getItem("nev");

var auditiv = localStorage.getItem("auditiv");
document.getElementById("Aud").innerHTML = auditiv;

var vizual = localStorage.getItem("vizual");
document.getElementById("Viz").innerHTML = vizual;

var mozgas = localStorage.getItem("mozgas");
document.getElementById("Moz").innerHTML = mozgas;

var tarsas = localStorage.getItem("tarsas");
document.getElementById("Tar").innerHTML = tarsas;

var csend = localStorage.getItem("csend");
document.getElementById("Cse").innerHTML = csend;

var impulziv = localStorage.getItem("impulziv");
document.getElementById("Imp").innerHTML = impulziv;

var mechanikus = localStorage.getItem("mechanikus");
document.getElementById("Mec").innerHTML = mechanikus;

const firebaseDatabseUrl = "https://tanulasi-kerdoiv.firebaseio.com/";
const table = "users.json";
const data = {
  Név: nev,
  Osztály: osztaly,
  Auditív: auditiv,
  Vizuális: vizual,
  Mozgásos: mozgas,
  Társas: tarsas,
  Csendes: csend,
  Impulzív: impulziv,
  Mechanikus: mechanikus
};
const dataString = JSON.stringify(data);

ajaxPost(firebaseDatabseUrl + table, dataString, function(response) {
  console.log("done");
});

