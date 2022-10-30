/* 
function createViaDom(msg){
    
const main = document.getElementById("main");
const div = document.createElement("div");
div.className='alert';

const text= document.createTextNode(msg);

div.append(text);

main.prepend(div)

console.log(div,text);
}
createViaDom("FOOD I LOVE ❤");
createViaDom("FOOD LOVE ❤");
 */

 const contentEl = document.querySelector(".alert .alert-message");
// console.log(contentEl.innerText);
// console.log(contentEl.innerHTML);
// console.log(contentEl.textContent);

// contentEl.innerText = 'HI sri Garu';
// contentEl.innerHTML = "<strong> ✔ Successful</strong><i> HI sri Garu</i>"
