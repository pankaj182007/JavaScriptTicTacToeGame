//Creating Functions OR Method
const add=()=>{
    console.log("sum of two digit",20+56);

};

function mult(){
    console.log("Multiply of two digit",2*4);
}

const devide=()=>
{
    console.log("devision of two digit",4/2);
}

//calling function 
add();
mult();
devide();

//Createing Object and there properties
//student is aobject
const student={
    //now creating its properties
    fullNme:"Pankaj",
    age:30,
    address:"Delhi",
    marks:98,
    //creating function inside object
    printMarks : function()
    {console.log(`Marks = ${this.marks}`);

    }
}
console.log(student.printMarks());

//inserted a fumction into object
const calculation={
   add :add

}

//creating prototype
//adding properties of calculation object to student object
student.__proto__=calculation;

//calling the properties of an objects
student.add();

