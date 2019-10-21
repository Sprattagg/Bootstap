/* var namn; //variabel deklaration
namn ="Fredric" // tilldelning, initialize
console.log(namn);

var age = 29;
var lastName = "Dubois";
console.log(age);

document.write(age," ", namn, " ", lastName);

 */

/* var lista = [12, 34,44,55, "saker","vad som helst"]



for (var i = 0; i < lista.length; i++){
          document.write(lista[i]);
}


var ar = ["ta", "din", "mä"]
for (var i = 0; i<ar.length; i++){
    console.log(ar[i])
} */
/* 
var object = {namn:"Fredric", age:29, yrke:"webbutvecklare", med:"Sweden", isEmpolyed:false };

console.log(object.namn, object.yrke)

var elev = {namn:"Fredric", klass:"wie19", status:"elite"};

document.write(elev.namn, " ", elev.klass," ", elev.status); */

/* const räknaSak = function(){
    console.log("den räknar något");
}

räknaSak(); */

/* document.querySelector("p").textContent = "hej från js";

document.querySelector("p").style.color="orange"; */
/* 
function raknaMoms (varupris){
    let total = varupris + (varupris*.25);
   console.log(total);
   return(total);
}
let firstProduct = raknaMoms(2000);
let secondProduct = raknaMoms(3000);

console.log("totalkostnaden blir " + (firstProduct+secondProduct)); */

/* let p = document.querySelector("p");
console.log(p);
p.textContent = "Hej from js";
p.style.color="orange";

const h1 = document.createElement("h1");
console.log(h1);
const body = document.querySelector("body")
body.appendChild(h1).textContent="hej från h1 som skapades av js";

const div = document.createElement("div");
const pa = document.createElement("p");
pa.textContent="hej från div>p "
body.appendChild(div)
div.appendChild(pa) */
/* function vatCount(){
const varde = document.querySelector("#pris").value;
    console.log(varde+(varde*.25))
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", vatCount);

 */
/* function pwReader (e) {
e.preventDefault();
 let pwEtt = document.querySelector(".first").value
 let pwtvå = document.querySelector(".second").value
 const h1 = document.createElement("h1");
 const body = document.querySelector("body");
          body.appendChild(h1);

 if (pwEtt === pwtvå) {
    alert("Success");
    h1.textContent="välkommen";
 }
 else {
     alert("error");
     h1.textContent="dina lösenord matchar inte";
 }
}
const btn = document.querySelector(".btn")
btn.addEventListener("click", pwReader); */





function ranNum (e) {
    e.preventDefault();
     const max = document.querySelector(".first").value
      const min = document.querySelector(".second").value
    console.log( Math.floor(Math.random()*(max-min)+min));
}
const btn = document.querySelector(".btn")
btn.addEventListener("click", ranNum)
