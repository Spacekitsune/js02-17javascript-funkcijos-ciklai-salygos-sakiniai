// // funkcijos deklaracija
// function hello() {
//     console.log('Hello');
// }
// // funkcijos iškvietimas
// hello();
// //funkcijos argumentai ir paramentai
// const name ='John';
// function hello(a) {
//     console.log(`Hello, ${a}`);
// }

// hello(name);

// //fuction expression

// // const hello = function(){
// //   console.log('hello');
// // }

// // Array.forEach(hello);

// //return

// function sum(x,y){
//   return x+y;
// }

// let sum3 = (x,y) => x + y; 

// const sum2 = sum(5,8);
// console.log(sum2);

//santykiniai sakiniai
// Lyginimas

// == vienoda reikšmė
// === vienoda reikšmė, ir tipas
// != nelygu
// !== ar nelygi reikšmė ir tipas
// > daugiau
// < mažiau
// >= daugiau arba lygu
// <= mažiau arba lygų
// //loginiai operatoriai

// && AND
// || OR
// ! NOT

//skaičiavimas
// a+=b tas pats kas a=a+b

//SALYGINAII SAKINIAI

// const num = 15;

// if(num===15) {
//   console.log('equal');
// } else if (num<15) {
//   console.log('less');
// }else {
//   console.log('more');
// }

// //ternary operator

// const num2 = 15;

// num===15 ? console.log('true') : console.log('false'); 

// // Loginiai operatoriai

// const weatherIsNice = true;
// const quarantine = true;

// if(weatherIsNice || !quarantine) {
//   console.log('meet with friends');
// } else {
//   console.log('stay at home');
// }

// if(weatherIsNice && !quarantine) {
//   console.log('meet with friends');
// } else {
//   console.log('stay at home');
// }

// const color = 'green';

// switch (color) {
//   case 'red':
//     console.log('red');
//     break;
//   case 'blue':
//     console.log('blue');
//     break;
//   case 'yellow':
//     console.log('yellow');
//     break;
//   case 'green':
//     console.log('green');
//     break;  
//   default:
//     console.log(`I'm lost.`);
// }

// //Ciklai: while, do.. while, for, for of, for in
// //higher order methods forEach, filter, map

// let i = 1; //startinis taškas

// while (i<=10){ //salyga
//   console.log(i);
//   i++; //incrementas
// }

// let j=1;

// do { //pirma padaro, poto patikrina ar veiksmas atitinka sąlygą
//   console.log(j);
//   j++;
// } while (j<=10);


// const items =['item1', 'item2', 'item3'];
// // for (let i =0;i<=items.length;i++){
// //   console.log(items[i]);
// // }

// // for (item of items) {
// //   console.log(iteam);
// // }

// // const person = { // object index
// //   name: 'John', //object key
// //   surname: 'Doe',
// //   age: 26
// // }

// // for (key in person) {
// //   console.log(key); // console.log(person[key])
// // }

// items.forEach(function(item, index, array){
//  console.log(index, item, array);
// })

// let logItems = function(item, index, array) {
//   console.log(index, item, array);
// }

// items.forEach(logItems); //kad nereiktų viduj rašyt funkcijos.

// const age=[15,20,65,14,7,36];
// const canDrink =age.filter(function(age){
//   if (age>=20) {
//     return true;
//   }
// });

// console.log(canDrink);
//sutrumpinta versija (arrow)
// const canDrink =age.filter((age) => age >= 20);

// console.log(canDrink);

// const people = [
//   {
//     name: 'John', 
//     surname: 'Doe',
//     age: 26
//   },
//   {
//     name: 'Jane', 
//     surname: 'Doe',
//     age: 27
//   },
//   {
//     name: 'Marry', 
//     surname: 'Sue',
//     age: 15
//   }
// ];
// //atspausdina vardus iš masyvo
// const names =people.map(function(person){
//   return person.name;
// });

// console.log(names);


//UŽDUOTYS: Sąlyginiai sakiniai, operatoriai

//1.

let n = 3;
let m = 2;

if (n>m) {
    console.log('Ilgiau aptarnaujamas pirmas klientas.');
} else if (n<m) {
    console.log('Ilgiau aptarnaujamas antras klientas.');
} else {
    console.log('Abu klientai turi vienodą kiekį prekių');
}

//2.

let taskaiJ = 3;
let taskaiP = 2;

if (taskaiJ>taskaiP) {
    console.log('Turnyrą laimėjo Jonas.');
} else if (taskaiJ<taskaiP) {
    console.log('Turnyrą laimėjo Povilas.');
} else {
    console.log('Lygiosios.');
}

//3.

let gramaiM = 300;
let gramaiK = 200;

if (gramaiM>gramaiK) {
    console.log('Daugiau saldainių pirko Martynas.');
} else if (gramaiM<gramaiK) {
    console.log('Daugiau saldainių pirko Karolis.');
} else {
    console.log('Abu berniukai saldainių pirko po lygiai.');
}

//4.

let start = 1896;
let year = 2020;
let kartai;

if (year % 4==0) {
    console.log(kartai = ((year-start) / 4) +1);
} else {
    console.log('Metai neolimpiniai.');
}

//5.

let pamoka = 45;
let praejoMin = 46;

    if (pamoka-praejoMin>30) {
        console.log('Liko dar labai daug laiko.');
    } else if ((pamoka-praejoMin<30)&&(pamoka-praejoMin>15)) {
        console.log('Liko dar nemažai laiko.');
    } else if (pamoka-praejoMin>7) {
        console.log('Liko nedaug laiko.');
    } else if ((pamoka-praejoMin<=7)&&(pamoka-praejoMin>0)) {
        console.log('Pamoka baigiasi.');
    } else {
        console.log('Pamoka pasibaigė.');
    }

//6. 

let year1 = 1600;

function checkLeapYear(year) {
 
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a metai keliamieji.');
    } else {
        console.log(year + ' metai paprasti.');
    }
}

console.log(checkLeapYear(year1));

//7.
let bilietoNr = 444441;

function sumDigits(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}

if (sumDigits(bilietoNr) % 4 == 0) {
    console.log('Bilietas laimingas.');
} else {
    console.log('Bandykite dar kartą.');
}

//8.

let knyguSk=10, psl=200, psl1=40, psl2=40, psl3=50, psl4=40, psl5=30, sav=11;

let pslSum=psl1+psl2+psl3+psl4+psl5;
let pslViso=knyguSk * psl;
let perVasara=pslSum * sav;

if (perVasara>=pslViso) {
    console.log('Jonas knygas perskaityti spės.');
} else {
    console.log('Jonas knygų perskaityti nespės.');
}

//9.

let n1 = 1, n2 = 1, n3 = 1, sum;

sum = n1+n2+n3;

if (sum==3) {
    console.log('Mokinys dešimtuką gaus.');
} else if (sum<3) {
    console.log('Mokinys dešimtuko negaus.');
}

//10.

let lt=4000;

if (lt>=4000) {
    console.log('Jolantai geriausiai tiktų pirmos grupės kelionė.');
} else if ((lt<=3999)&&(lt>=3000)) {
    console.log('Jolantai geriausiai tiktų antros grupės kelionė.');
} else if ((lt<=2999)&&(lt>=1000)) {
    console.log('Jolantai geriausiai tiktų trečios grupės kelionė.');
} else {
    console.log('Jolantai geriausiai tiktų ketvirtos grupės kelionė.');
}

//UŽDUOTYS. Ciklai
//Ciklas: FOR
//1.

let diena = 4, t = 0, sum2 = 0, avg = 0;

let pamoka1 =[15,12,13,20];

for(let i=0;i<4;i++) {
    t=pamoka1[i];
    sum2 =sum2 + t;
}

avg = sum2 / diena;

console.log(`: Per ${diena} dienas Zinas buvo dresuojamas ${sum2} minučių. Vidutiniškai per dieną katinas buvo dresuojamas ${avg} minučių.`);

//2.

let braske = 4, daugiauBraskiu=5, dienuSk=3, sum3=0;

for (let i=0; i<dienuSk; i++) {
    if (i==0) {
        sum3=braske;
    } else {
        braske=braske+daugiauBraskiu;
        sum3=sum3+braske;
    }
}

console.log(`Per ${dienuSk} dienas prinoko ${sum3} braškės.`);

//3. 

let kpLt=100, dalyvis=4, sum4=kpLt;
let statymai=[5,7,5,5];

for (let i=0; i<dalyvis; i++) {
    sum4+=statymai[i];
}

console.log(`Galutinė prekės kaina bus ${sum4} litai.`);

//4.

let tobulasSk = 28;
let visiSk =[];
let j=0;

for (let i=0; i<tobulasSk; i++) {
    if (tobulasSk%i==0) { 
        visiSk[j]=tobulasSk/i;
        j++;
    }
}

let sumCheck=0;

for (let i=0; i<visiSk.length; i++) {
       sumCheck = sumCheck + visiSk[i];
}

if (sumCheck==tobulasSk) {
    console.log(`${tobulasSk} yra tobulas natūralusis skaičius.`);
}

// 5.

let pasirinktasSk = 7;
let naujasSk = 0;
let kartuKiekis = 5;
let sukurtuSksuma = 0;

for (let i=1; i<=kartuKiekis; i++) {
   if (i!=1) {
       naujasSk= (naujasSk*10) + pasirinktasSk;
       console.log(`+ ${naujasSk}`);
   } else {
       console.log(pasirinktasSk);
       naujasSk = pasirinktasSk;
   }
   
   sukurtuSksuma = sukurtuSksuma +naujasSk;
}

console.log(`= ${sukurtuSksuma}`);

//Ciklas: while
// 1.!!!!!!


// Duoti du natūralieji skaičiai: m ir n. Sudarykite programą, kuri apskaičiuotų skaičių bendrą mažiausią kartotinį. Pvz.: n = 5, m = 3, tai bmk = 15.


function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
 }
 
 function gcd_two_numbers(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
   return x;
 }
 console.log(lcm_two_numbers(5,3));

// 2.

let pradineAlga =200;
let alga = pradineAlga;
let laikotarpisMen = 24;
let algosPadidinimas = 100;
let i= 1;
let atlyginimas = [];
atlyginimas[0]=pradineAlga;
while (i<laikotarpisMen) {
    if (i==12) {
        console.log(`alga po metų bus ${alga}.`);
    } else if (i==3) {
        console.log(`alga po 3 mėn bus ${alga}.`);
    } else if (pradineAlga*2==alga) {
        console.log(`alga padvigubėjo po ${i} mėnesių.`);
    } else if (alga==4000) {
        console.log(`alga bus nemažesnė nei 4000 po ${i} mėnesių.`);        
    }
    alga=alga+algosPadidinimas;    
    atlyginimas[i]=alga;
    i++;
        
}

let j1=0;
let j2=1;
while (j1<atlyginimas.length) {
    console.log(`${j2} mėn alga ${atlyginimas[j1]} `);
    j1++;
    j2++;
}

// 3.

// Duotas natūralus skaičius n. Sudarykite programą, kuri skaičių perrašytų atbulai. Pvz.: n = 1234, tai atsakymas 4321

let duotasNSk = 1234;
let naujasNSk =0;
let liekanaSk;

console.log(duotasNSk);
while (duotasNSk>0) {
    liekanaSk =  duotasNSk%10;
    naujasNSk = (naujasNSk * 10) + liekanaSk;
    duotasNSk = Math.floor(duotasNSk/10);
}
console.log(naujasNSk);



// 4.
// Pradinis duomuo – natūralusis skaičius N. Sudarykite programą rasti iš eilės einančių 
// natūraliųjų skaičių sekai (1, 2, 3, ...), kurios narių suma lygi duotajam skaičiui

let pradinisDuomuo = 10;
let pradinisDuomuoTikrinimui=pradinisDuomuo;
let tikrinimoSuma = 0;
let sekosSk=1;
let seka = [];
let z=0;
let likutis = 0;

while (pradinisDuomuo>0) {
    pradinisDuomuo= pradinisDuomuo - sekosSk; //4 //2
    tikrinimoSuma=tikrinimoSuma+sekosSk; //1 //3
    seka[z]=sekosSk; //1  //2
    z++; //1 //2
    if (pradinisDuomuoTikrinimui<=tikrinimoSuma + (sekosSk++)) { //5<1+1 //5<3+3
        likutis=pradinisDuomuoTikrinimui-tikrinimoSuma; //2
        seka[z]=likutis; //2
        break;
    }
    sekosSk++;
}

console.log(seka.sort(function(a, b){return a-b}));




// 5.
// Duoti du natūralieji skaičiai: m ir n. Sudarykite programą, kuri nustatytų, ar skaičiai tarpusavy sudėtiniai, ar pirminiai. Pvz.: n = 2, m = 5, tai pirminiai.

const naturalusisSkM = Math.floor(Math.random() * 10) + 1;
const naturalusisSkN = Math.floor(Math.random() * 10) + 1;

if ((naturalusisSkM%2!=0)&&(naturalusisSkN%2!=0)) {
    console.log(`${naturalusisSkM} ir ${naturalusisSkN} yra pirminiai`);
} else if ((naturalusisSkM%2==0)&&(naturalusisSkN%2==0)) {
    console.log(`${naturalusisSkM} ir ${naturalusisSkN} yra sudėtiniai`);
} else {
    if ((naturalusisSkM%2!=0)&&(naturalusisSkN%2==0)) {
        console.log(`${naturalusisSkM} skaičius yra pirminis ${naturalusisSkN} skaičius yra sudėtinis`);
    } else if ((naturalusisSkM%2==0)&&(naturalusisSkN%2!=0)) {
        console.log(`${naturalusisSkM} skaičius yra sudėtinis ${naturalusisSkN} skaičius yra pirminis`);
    }
}


// 6.
// Duotas natūralus skaičius n. Sudarykite programą, kuri nustatytų, ar skaičius yra kieno nors faktorialas,
// ar ne. Pvz.: n = 24, tai ieškomas skaičius 4, nes 4!= 24.

let skaiciusF = 24;
let skaiciusF1 = skaiciusF;
let rezultatas = skaiciusF;
let skaiciusT = 4;

if (rezultatas === 0 || skaiciusF === 1){
    rezultatas=1;
} else {
    while (skaiciusF > 1) { 
        skaiciusF--;
        rezultatas *= skaiciusF;
      }
}     
    
console.log(rezultatas);

if (rezultatas!=skaiciusT) {
    console.log(`${skaiciusT} nėra skaičiaus ${skaiciusF1} faktorialas`);
} else {
    console.log(`${skaiciusT} yra skaičiaus ${skaiciusF1} faktorialas`);
}

// Ciklai + Masyvai
// 1.
// Tarkime, kad turime n apskritimų. Žinomi jų spindulių ilgiai. Reikia surasti didžiausią apskritimą ir nustatyti, 
// kiek iš viso yra tokių didžiausių apskritimų. Duomenys  surašomi į masyvą. Masyve bent 10 duomenų.

var apskritimaiN = 10;
var apskritimai = [];
var apskritimasMax = 0; 
var apskritimaiCounter=0;

for (i=0;i<apskritimaiN;i++) {
    apskritimai[i]= 2 * Math.PI * (Math.floor(Math.random() * 10) + 1);
    apskritimai[i]=apskritimai[i].toFixed(2);
    if (apskritimai[i]>apskritimasMax) {
        apskritimasMax=apskritimai[i];
    }    
}

for (i=0;i<apskritimaiN;i++) {
    if(apskritimai[i]==apskritimasMax) {
        apskritimaiCounter++;
    }
}

console.log(apskritimai.sort(function(a, b){return b-a}));
console.log(`Masyve yra ${apskritimaiCounter} didžiausi apskritimai.`);

// 2.

// Banke žmonių indėliai surašyti į masyvą A(k), k-žmonių kiekis. Kiek žmonių, kurių indėlis daugiau negu 1000 Lt.? Masyve bent 10 duomenų.

var bankoKlientai = 12;
var bankas = [];
let klientaiCounter = 0;

for (i=0;i<bankoKlientai;i++) {
    bankas[i]=Math.floor(Math.random() * 10000) + 1;
    if (bankas[i]>1000) {
        klientaiCounter++;
    }
}

console.log(bankas);
console.log(`Banke yra ${klientaiCounter} klientų, kurių sąskaita didesnė nei 1000`);

// 3.

// Darželyje vaikai serga ir tam tikrą kiekį dienų nelanko. Duomenys suvesti į masyvą A(n). Išdėstyti duomenis mažėjimo tvarka,
//  t.y. kas mažiausiai nelanko ir t.t. Masyve bent 10 duomenų.

var vaikai = 10;
var darzelis = [];

for (i=0;i<vaikai;i++) {
    darzelis[i]=Math.floor(Math.random() * 10) + 1;
}

console.log(darzelis);
console.log(darzelis.sort(function(a, b){return b-a}));

// 4.
// Duota bibliotekoje esanti kartoteka, kiekviename skyriuje yra tam tikras kiekis kortelių. Visi duomenys suvesti į masyvą A(n).
//  Į lyginių numerių skyrius reikia pridėti po tiek kortelių, koks skyriaus numeris. Masyve bent 10 duomenų.

var skyriuSk = 11;
var jBibl=0;
var biblioteka =new Array();

for (i=1;i<=skyriuSk;i++) {
    if ((i%2==0)&& (i!=0)) {
        biblioteka[jBibl]=i;
        jBibl++;
    } else {
        biblioteka[jBibl]=Math.floor(Math.random() * 10) + 1;
        jBibl++;
    }
}
console.log(biblioteka);

// 5.	
// Masyve mok(m,n) surašyta m mokinių n dalykų pusmečių pažymiai. 
// Sudarykite naują masyvą vid(m) sudarydami iš mokinių pažymių vidurkių. Vidurkius parodyti ekrane.


var kiekisM = 20;
var kiekisN = 8;
var sumaMok= 0;
var vidurkisMok=0;
var mok = new Array();
var naujasMok =[];

for (i=0;i<kiekisM;i++) {
    sumaMok=0;
    vidurkisMok=0;
 mok[i]=new Array();
 for (j=0;j<kiekisN;j++) {
  mok[i][j]=Math.floor(Math.random() * 10) + 1;
  sumaMok=sumaMok + mok[i][j];
 }
 vidurkisMok=sumaMok / kiekisN;
 naujasMok[i]=vidurkisMok;
}

console.log(mok);
console.log(naujasMok);

// UžDUOTYS: FUNKCIJOS
// 1.	

// Draugai sutarė stovyklauti miške. Kiekvienas susikrovė po kuprinę ir atvyko į autobusų stotį.
// Už vieną kilogramą bagažo reikia mokėti b eurų bagažo mokestį. Autobusu važiuos n draugų.
// Pirmojo draugo kuprinė sveria m1, antrojo – m2 ir t.t. kilogramų. Parenkite programą, skaičiuojančią,
// kiek kilogramų bagažo kb vežasi visi draugai ir kokią sumą s jie turės sumokėti už bagažą.
// (Programa skaičiuoja dviejų draugų bagažą);
// 1.a
// Papildykite programą, kad ji skaičiuotų, kiek kilogramų bagažo v vidutiniškai turėjo kiekvienas stovyklautojas.
// 1.b
// Papildykite programą, kad ji skaičiuotų, kelių stovyklautojų k bagažo masė buvo ne didesnė už 10 kg.
// 1.c
// Iki šiol programa skaičiavo dviejų draugų bagažą. Perrašykite programą taip, 
//kad programa apskaičiuotų bagažo kainą, vidurkį, ir skaičių tų stovyklautojų kurių bagažo masė yra ne didesnė nei 10 kg., 
//nepriklausomai nuo draugų skaičiaus.

function drauguKelione(visiDraugai, bagazoMokestis) {
    let sumBagazas=0;
    let sunkesnisNei10 =0;
    for (let i=0; i<visiDraugai.length; i++) {
        sumBagazas += visiDraugai[i];
        if(visiDraugai[i]>10) {
            sunkesnisNei10++;
        }
    }
    console.log(`Visi draugai vežasi ${sumBagazas} kg bagažo ir jie turės sumokėti ${sumBagazas * bagazoMokestis} eurų.`);
    console.log(`Kiekvienas stovyklautojas visutiniškai turėjo ${Math.round(sumBagazas/visiDraugai.length)} kg bagažo.`);
    console.log(`${sunkesnisNei10} keliautojų bagažas buvo sunkesnis nei 10kg`);
}

drauguKelione([11,5,2], 1);


// 2.

// Olimpiadoje dalyvavo n programuotojų. Pirmasis programuotojas išsprendė u1,
//antrasis – u2 ir t.t. uždavinių. Parenkite programą, kuri apskaičiuotų, kiek iš viso
//uždavinių u išsprendė olimpiadoje dalyvavę programuotojai.
// Pasitikrinkite: kai n = 3, u1 = 7, u2 = 6, u3 = 6, tuomet kompiuterio ekrane turi būti rodoma:
// 3 olimpiadoje dalyvavę programuotojai išsprendė 19 uždavinių.

function programavimoOlimpiada (issprestiUzdaviniai) {
    let sumUzdaviniai=0;
    for (let i=0; i<issprestiUzdaviniai.length; i++) {
        sumUzdaviniai += issprestiUzdaviniai[i];
    }
    console.log(`${issprestiUzdaviniai.length} olimpiadoje dalyvavę programuotojai išsprendė ${sumUzdaviniai} uždavinių.`);
}

programavimoOlimpiada([7,6,6]);

// 3.


// Gydytojas per dieną priima n pacientų. Pirmas pacientas gydytojo kabinete praleido m1 minučių,
//antras – m2 ir t.t. Parenkite programą, skaičiuojančią, kiek minučių m gydytojas vidutiniškai skiria
//vienam pacientui ir kelių pacientų k vizitai buvo ilgesni kaip 20 minučių.
// Pasitikrinkite: kai n = 3 ir pirmas pacientas užtruko 18 minučių,
// o antras ir trečias po 10 minučių, tuomet v = 12.7, k = 0.

function gyditojoPacientai (pacientuTrukme) {
    let sumLaikas=0;
    let skaiciuokle=0;
    for (let i=0; i<pacientuTrukme.length; i++) {
        sumLaikas += pacientuTrukme[i];
        if (pacientuTrukme[i]>20) {
            skaiciuokle++;

        }
    }
    let avg= Math.round(sumLaikas / pacientuTrukme.length);
    console.log(`Vidutiniškai vienam pacientui gyditojas skiria ${avg} min ir buvo ${skaiciuokle} pacientas/ai, kurių vizitas ilgesnis nei 20min.`);
}

gyditojoPacientai([18, 10, 10]);

// 4.

// Iš Vilniaus į Panevėžį per dieną vyksta n autobusų. Pirmasis autobusas kelionėje sugaišta v1 valandų ir m1 minučių ir perveža k1 keleivių,
// antrasis – v2, m2 ir k2, trečiasis – v3, m3 ir k3 ir t.t. Parenkite programą, skaičiuojančią:
// •	kiek keleivių kv pervežė n iš Vilniaus į Panevėžį važiuojančių autobusų; 
// •	kiek laiko t kelionėje vidutiniškai sugaišta vienas autobusas. Vidutinį laiką pateikite minutėmis.
//      Rezultatą suapvalinkite iki sveikojo skaičiaus;
// •	keliuose autobusuose k važiavo mažiau negu 10 keleivių.
//  Pasitikrinkite: kai n = 3, v1 = 1, m1 = 50, k1 = 17, v2 = 2, m2 = 5, k2 = 25, v3 = 1, m3 = 55, k3 = 20,
//  tuomet kompiuterio ekrane turi būti rodoma: kv = 62, t = 117, k = 0.
function viskasApieKelione(kelionesKintamieji) {

    let sumBendrasLaikas=0, sumKeleiviai=0;
    let counterMaziauNei10 =0;
    let bendrasLaikasMin=0;
    for (let i=0; i<kelionesKintamieji.length; i++) {
        bendrasLaikasMin = (kelionesKintamieji[i].v * 60) + kelionesKintamieji[i].m;
        sumBendrasLaikas += bendrasLaikasMin;
        if (kelionesKintamieji[i].k<10) {
            counterMaziauNei10++;
        }
        sumKeleiviai += kelionesKintamieji[i].k;
    }
    let avgKelionesLaikas = Math.round(sumBendrasLaikas / kelionesKintamieji.length);

    console.log(`${kelionesKintamieji.length} iš Vilniaus į Panevėžį važiuojančių autobusų pervežė ${sumKeleiviai} keleivių`);
    console.log(`Vienas autobusas kelionėje vidutiniškai sugaišta ${avgKelionesLaikas} min.`);
    console.log(`${counterMaziauNei10} autobusuose važiavo mažiau negu 10 keleivių.`);
}

var visiAutobusai={autobusas:[
    {v: 1,m: 50,k: 17},
    {v: 2,m: 5,k: 25},
    {v: 1,m: 55,k: 20}
]};

var keliones = visiAutobusai['autobusas'];

viskasApieKelione(keliones);

// 5.

// Vasaros pradžioje prasideda braškių sezonas. Pirmąją dieną lysvėje prinoko b braškių.
// Kiekvieną kitą dieną prinoksta d braškių daugiau, negu prieš tai buvusią. Parašykite programą,
// skaičiuojančią, kiek prinokusių braškių k bus po n dienų.
//  Pasitikrinkite: kai b = 4, d = 5, n = 3, tuomet kompiuterio ekrane turi būti rodoma: Per 3 dienas prinoko 27 braškės.

function prinokusiosBraskes(b, d, n) {
    let k=b, i=0;
    while (i<n) {
        k+=k+d;
        i++;
    }
    console.log(`Per ${n} dienas prinoko ${k} braškės.`);
}

prinokusiosBraskes(4,5,3);

// 6.

// Picerija „Kakadu“ surengė konkursą lankytojams, kurio metu galima laimėti firminių ledų „Šokodu“ porciją.
// Visi lankytojai kartu su sąskaita gauna po vieną kortelę,
// ant kurios parašytas sveikasis teigiamas skaičius iš intervalo [a;b] (a – intervalo pradžia,
// b – intervalo pabaiga). Laimi tie lankytojai, kurių kortelėse įrašytas skaičius dalijasi iš 6.
// Parašykite programą, kuri apskaičiuotų, kiek porcijų ledų reikia pagaminti.

function leduLaimetojai(a,b) {
    let kiekLedu = 0;
    while (a<=b){
        if (a%6==0) {
            kiekLedu++;
        }
        a++;
    }
    console.log(`Viso reikės pagaminti ${kiekLedu} porcijų ledų.`);
}

leduLaimetojai(18,30);

// 7.

// Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti.
// Knygoje yra m skyrių Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t.
// Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną.
// Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas.
// Paskutinei dienai gali likti mažiau skyrių.

function perskaitytosKnygos(m) {
    let i = 1, d=0;
    let sum=0;
    while (sum<=m) {
        if ((m-sum)<=i){
            d++;
            break;
        }
        sum+=i;
        i++;
        d++;
    }

    let avg = m / d;

    console.log(`Tadas knygą perskaitė per ${d} dienas. 
    Vidutiniškai Tadas per dieną perskaito ${avg} skyrius`);
}
perskaitytosKnygos(10);
