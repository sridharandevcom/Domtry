
 const foodcont = document.querySelector(".food-con");
 const dupp= document.getElementById("dup");
 const syncc  = document.getElementById("sync");

const cloneData= foodcont.cloneNode()
console.log(cloneData);



syncc.addEventListener("click",()=>{
    dupp.innerHTML='';
    const cloneData1=foodcont.cloneNode(true);
    console.log(cloneData1);
    
    dupp.append(cloneData1);
})


// const foodli= document.querySelector(".food-con :first-child"); 
// console.log(foodli);

//  const li=document.createElement('li');
//  li.textContent='Hi sri ';
//  li.className='food-item';
//  foodcont.replaceChildren(li);
//   foodcont.replaceWith("text1","text2");
 // foodli.replaceWith(li);
 //  foodli.parentNode.replaceChild(li,foodli)




 //const list=document.getElementById("food-con");


// //list.insertAdjacentHTML('afterbegin','Foodies');
// //list.insertAdjacentHTML('afterend','Food List over');
// list.insertAdjacentHTML('beforebegin','Before Begins');
// list.insertAdjacentHTML('beforeend','Before End');



// list.insertAdjacentElement('afterbegin',li)
// const el=document.createElement("li");
//  el.textContent= `Food 6`;
//  el.className="food-item";
//  list.append(el);
//   list.prepend(el);
//  list.before(el);
//  list.after(el);

// //old way of before method
// console.log(list.parentNode.insertBefore(el,list));
// console.log(list.parentNode.insertBefore(el,list.nextSibling));
// // const frag=document.createDocumentFragment()


// const food=['Veg','Non','sambar','curd']

// food.forEach((food)=>{
//     const el=document.createElement("li");
//     el.textContent=food; 
//     el.className="food-item";
//     frag.append(el)
// })
// list.append(frag)


// console.time("EL");
//  for(let i=0;i<=1000;i++){
//     const el=document.createElement("li");
//     el.textContent= `Food ${i}`;
//      el.className="food-item";
//      list.append(el);
//  }
//  console.timeEnd("EL");



// console.time("Frag");
// 
// for(let i=0;i<1000;i++){
//     const el=document.createElement("li");
//     el.textContent= `Food ${i}`;
//     el.className="food-item";
//     frag.append(el);
// }
// list.append(frag);
// console.timeEnd("Frag");



// const main = document.getElementById("main");

// function createViaDom(msg){
    

// const div = document.createElement("div");
// //div.className='alert';
// const text= document.createTextNode(msg);

// div.append(text);
// div.className="alert";

// main.prepend(div)
// console.log(typeof div);
// //console.log(div,text);
// }

// createViaDom("Hello Buddys");



// function createViaTemplate(message){
// const template =`
// <div class='alert'>
// ${message}


// </div>
// `

// console.log(typeof template);
// main.innerHTML +=template;
// }

// createViaTemplate("Hey Mam")
//createViaDom("FOOD I LOVE ???");
//createViaDom("FOOD LOVE ???");


 //const contentEl = document.querySelector(".alert .alert-message");
// console.log(contentEl.innerText);
// console.log(contentEl.innerHTML);
// console.log(contentEl.textContent);

// contentEl.innerText = 'HI sri Garu';
// contentEl.innerHTML = "<strong> ??? Successful</strong><i> HI sri Garu</i>"
