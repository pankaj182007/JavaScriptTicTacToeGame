
//declearing variables
let name=" Pushpendra Singh";
let age=30;
let address="lucknow";
console.log("Name : "+name+"\nAge : "+age+"\n Address : "+address);

//creating object data type which is Key:value pair
const profile={
            fullName:"pushpendra singh",
            age:30,
            address:"delhi"
};

//printing values of object data type
alert(profile.fullName+"\n"+profile.age+"\n"+profile.address);

//printing values of object data type using "for in" loop
for (const key in profile) {
    console.log(profile[key]);
   
}

//creating arrays
let marks=[23,24,23,26,27,29];
//printing values of arraya
console.log(marks);

//printing values of arraya using "for of" loop
for (const iterator of marks) {
    console.log(iterator);
    
}
//printing values of arraya using "for in" loop
for (const key in marks) {
   console.log(marks[key]);
}
//printing values of arraya using "forEach" loop
marks.forEach(e=>console.log(e));

//performing operation using lamda experation 
marks.map(e=>e*e).filter(e=>e<600).forEach(e=>console.log(e));


//Creating onclick event on button and changing background color of body tag
let btn1=document.querySelector("#btn1");

btn1.onclick=()=>{
    
  document.body.style.backgroundColor="#CD5C5C";
  
};

let btn2=document.querySelector("#btn2");

btn2.onclick=()=>{
    
  document.body.style.backgroundColor="#F08080";
  
};

let btn3=document.querySelector("#btn3");

btn3.onclick=()=>{
   
  document.body.style.backgroundColor="#FFC300";
  
};

let btn4=document.querySelector("#btn4");

btn4.onclick=()=>{
    
  document.body.style.backgroundColor="#DAF7A6";
  
};

//Creating onclick event on button and changing background color of body tag
document.querySelector("#h31").onmouseover=()=>{
    document.body.style.backgroundColor="#DFFF00"
}

document.querySelector("#h32").onmouseover=()=>{
    document.body.style.backgroundColor="#FFBF00"
}

document.querySelector("#h33").onmouseover=()=>{
    document.body.style.backgroundColor="#FF7F50"
}

document.querySelector("#h34").onmouseover=()=>{
    document.body.style.backgroundColor="#40E0D0"
}



