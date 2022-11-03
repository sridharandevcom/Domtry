 
const main = document.getElementById("main");

function createViaDom(msg){
    

const div = document.createElement("div");
//div.className='alert';
const text= document.createTextNode(msg);

div.append(text);
div.className="alert";

main.prepend(div)
console.log(typeof div);
//console.log(div,text);
}

createViaDom("Hello Buddys");



function createViaTemplate(message){
const template =`
<div class='alert'>
${message}


</div>
`

console.log(typeof template);
main.innerHTML +=template;
}

createViaTemplate("Hey Mam")
//createViaDom("FOOD I LOVE ❤");
//createViaDom("FOOD LOVE ❤");


 //const contentEl = document.querySelector(".alert .alert-message");
// console.log(contentEl.innerText);
// console.log(contentEl.innerHTML);
// console.log(contentEl.textContent);

// contentEl.innerText = 'HI sri Garu';
// contentEl.innerHTML = "<strong> ✔ Successful</strong><i> HI sri Garu</i>"
