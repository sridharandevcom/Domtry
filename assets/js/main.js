let head = document.getElementById('textor');
let btn = document.getElementById('btn-save');
let res = document.getElementById('food-con');
//console.log(head, btn);

btn.addEventListener('click', () => {
    const li= document.createElement("li");
    const text= document.createTextNode(head.value);
    const cmd=document.createComment("Create Li");

    li.className='food-item';
   
    li.append(text);
    li.append(cmd)

    res.append(li);
   // res.innerHTML += `<li class="food-item">${head.value.toUpperCase()}</li>`;
})


const goi = document.querySelector("main  input")
console.log(goi);
/*
const el = document.getElementsByTagName('li');
console.log(el.length);

/*
const food = document.getElementsByClassName('food-item');
let f1 = [].map.call(food, (f1) => f1.textContent)
console.log(f1);
/*

console.log(food[0].innertext);

//console.dir(document);
//console.log(document.body.children[0].children[0]);
/*
//console.dir(document.documentElement.lang);
console.log(document.body.constructor.name);
console.log(document.body instanceof HTMLBodyElement);
console.log(document.head instanceof HTMLElement);
console.log(document.head.nodeType);
console.log(document.head.nodeName);



 
let personInfo={
    name:"SRI",
    age:25,
    greet(){
        return `Hello ${this.name} , ${this.age}`
    }
}
let name1 =prompt("ENTER UR NAME");
let place1=prompt("Enter the place");

personInfo.name=name1;
personInfo.age=place1;


let person= personInfo.greet();
document.body.innerHTML= `<h1> ${person} </h1>`
//document.write(person);




let myDoc=document;
myDoc.body.children[0].children[0].innerText="HI SRIDHARAN"
console.log();


window.onload=()=>{
            let con=document.getElementById("new");
            let web=con.children[0];
            let image=con.children[1];
            console.log(`Load Event Image :${image.offsetWidth}, height: ${image.offsetHeight} `) ;
        }

console.log(location);

if (location.protocol === "https") {
    console.log("SECURE");
}
else {
    console.log("UNSECURE");
}



 setInterval(function () {
    location.href = "https://www.youtube.com/";
 }, 2000)
//console.log(window.location.host);
//console.log(screen.height, screen.width);*/