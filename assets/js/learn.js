
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
