const osztaly = localStorage.getItem('osztaly');
const nev = localStorage.getItem('nev');
const questions = 34;
const answers = 5;
const body = document.querySelector('body');
const answerList = [];
const questionlist = [
  "Ha látom is és hallom is a megtanulandó szöveget, nagyon könnyen megjegyzem.",
  "Hangosan szoktam felolvasni a tananyag szövegét, amikor felkészülök.",
  "Szívesebben tanulok az osztálytársammal vagy a barátommal, barátnőmmel, mint egyedül.",
  "Nagyon hasznos számomra, ha a tanár ábrákat mutat be a táblán vagy az írásvetítőn.",
  "Ha ábrát készítek, jobban megértem a leckét, mintha csak olvasom.",
  "Jól tudok úgy tanulni, ha csupán némán olvasva átveszem a leckét.",
  "Szívesebben töltöm az időmet rajzolással, festéssel, mint sportolással vagy testmozgást igénylő játékkal.",
  "Gyakran előfordul, hogy szóban elismétlem, felmondom magamnak a leckét.",
  "Ha leírom magamnak azt a szöveget amit meg kell tanulnom, akkor könnyebben megjegyzem, mintha csak látom vagy hallom.",
  "Nem szeretem azokat a feladatokat, amelyeken törnöm kell a fejem.",
  "Nyugtalanít, ha tanulás közben csend van körülöttem.",
  "Jobban kedvelem azokat a feladatokat, ahol kézzel fogható dolgokkal, tárgyakkal kell foglalkozni, mint ahol csak rajzok, ábrák, szövegek vannak.",
  "Jobban megy nekem az olyan feladat, ahol valamilyen mozdulatot kell megtanulnom, mint ahol szöveget kell megérteni.",
  "Jobb, ha a tanár magyarázatát meghallgatom, mintha könyvből kellene megtanulni az anyagot.",
  "A szabályokat szóról szóra bevágom.",
  "Ha ábrát készítek magamnak, jobban megértem a leckét, mintha más által készített rajzot nézegetnék.",
  "Amikor a tanár felszólít, és kérdez tőlem valamit, gyakran előbb válaszolok, minthogy át tudnám gondolni, mit is mondok.",
  "Szeretem, ha kikérdezik tőlem amit megtanultam.",
  "Ha vannak képek, ábrák a könyvben, könnyebb a tanulás.",
  "Ha megbeszélem valakivel a tananyagot, akkor hamarabb megtanulom.",
  "Teljes csendben tudok csak tanulni.",
  "Amikor új dolgokat tanulok, jobban szeretem, ha bemutatják mit kell csinálnom, mintha szóban elmondják, mit kell tennem.",
  "Ha valaki szóban elmondja nekem a leckét, sokkal könnyebben megértem, mintha egyszerűen csak elolvasom.",
  "Egyedül szeretek tanulni.",
  "Tanulás közben nagyon zavaró, ha beszélgetnek körülöttem.",
  "Akkor tanulok könnyen, ha közben szól a rádió vagy a magnó.",
  "Akkor vagyok biztos magamban, ha szóról szóra megtanulom a leckét.",
  "Gyakran előfordul, hogy megtalálom a számtanpélda megoldását, de nem tudom elmagyarázni és bebizonyítani, hogyan jutotta el a megoldáshoz.",
  "Szívesebben bemutatom, hogyan kell valamit csinálni, minthogy elmagyarázzam.",
  "Gyakran előfordul, hogy olyan dolgokat is megtanulok, amiket nem nagyon értek.",
  "Amikor egy számtanpéldát megoldok, szinte minden lépést meg tudok indokolni, hogy miért tettem.",
  "A tanári magyarázat nem sokat jelent nekem, a könyvből mindent meg tudok tanulni.",
  "Több olyan dolgot tudok csinálni, amit nehéz lenne szavakkal elmagyarázni (játékok, szerkezetek javítása, stb.).",
  "Mozdulatokat könnyebben megjegyzek, mint képeket vagy ábrákat."
]

for (let i = 0; i < questions; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', 'transbutton')
  
  div.innerHTML = questionlist[i] + '<br>';
  for (let j = 0; j < answers; j++) {
    const radio = document.createElement('input');
    radio.setAttribute("class", "radio" + j)
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", j);
    radio.setAttribute("name", i);
    radio.setAttribute("id", "q" + i)
    radio.addEventListener('change', event => {
      answerList[i] = +event.target.value
      div.setAttribute('class','done')
    })
    div.appendChild(radio);

  }
  body.appendChild(div);
}



const submit = document.createElement('button');

asd = function (x) {
  if (isNaN(x)) {
    return "0%";
  }
  return (Math.round(x) + "%");
}

window.addEventListener("keydown", function (e) {
  if (13 == e.keyCode)
  {   e.preventDefault();
      sub();
  };
});


function isArrayFull(arr) {
  return arr.length === arr.filter(function(o) {
    return typeof o !== 'undefined' ||  o !== null;
  }).length;
}


function sub(){

  // if (answerList.length === 34) 
  if (isArrayFull(answerList)===false && answerList.length < 34) {
    alert("Töltsd ki az összes kérdést!")

  }

  else

  {

    const auditiv = asd((answerList[1] + (4 - answerList[5]) + answerList[7] + answerList[13] + answerList[22] + (4 - answerList[31])) / 0.24)

    localStorage.setItem('auditiv', auditiv);

    const vizual = asd((answerList[3] + answerList[4] + answerList[18] + answerList[21] + answerList[28]) / 0.2)

    localStorage.setItem('vizual', vizual);

    const mozgas = asd(((4 - answerList[6]) + answerList[8] + answerList[11] + answerList[15] + answerList[32] + answerList[33]) / 0.24)

    localStorage.setItem('mozgas', mozgas);

    const tarsas = asd((answerList[2] + answerList[17] + answerList[19] + (4 - answerList[23])) / 0.16)

    localStorage.setItem('tarsas', tarsas);

    const csend = asd(((4 - answerList[10]) + answerList[20] + answerList[24] + (4 - answerList[25])) / 0.16)

    localStorage.setItem('csend', csend);

    const impulziv = asd(((4 - answerList[0]) + answerList[12] + answerList[16] + answerList[27] + (4 - answerList[30])) / 0.2)

    localStorage.setItem('impulziv', impulziv);

    const mechanikus = asd((answerList[9] + answerList[14] + answerList[26] + answerList[29]) / 0.16)

    localStorage.setItem('mechanikus', mechanikus);


document.location.href = 'results.html';



  }


}

submit.addEventListener('click', () => sub())
submit.innerHTML = 'Kész!';

body.appendChild(submit);


//nev, auditiv, vizual, mozgas, tarsas, csend, impulziv, mechanikus

