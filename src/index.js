import React from "react";
import  ReactDOM from "react-dom";
import App from "./App";
import './index.css'



// import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>, document.getElementById("root")
);






































// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<p>Hello fucking f</p>, document.getElementById('root')); 


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );
// ReactDOM.render(myelement, document.getElementById('root'));

// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const mySecondElement = <h1>hello sucker!</h1>

// const root1 = ReactDOM.createRoot(document.getElementById('root'));
// root1.render(mySecondElement)


//w3 class example
// class Car {
//   constructor(name) {
//     this.brand = name;
//   }
//   present() {
//     return 'I have a ' + this.brand;
//   }
// }

// // super... comes from extending a class
// class Model extends Car{
//   constructor(name,mod){
//     super(name)
//     this.model = mod;
//   }
//   show(){
//     return this.present() + ' and it is a ' + this.model
//   }
// }

//so i tried to extend the extended class and it worked
// class Modal extends Model{
//   constructor(name,mod,yr){
//     super(name,mod)
//     this.year = yr;
//   }
//   output(){
//     return this.show() + ' made in ' + this.year 
//   }
// }
// const mycar = new Modal("Ford", "mustang",2019)
// root1.render(mycar.output())
//after the class is created you can assign a variable to it


// root1.render(mycar.brand); 
// root1.render(mycar.present());


//following the example to create my own class
// class House {
//   constructor (name){
//     this.brand = name
//   }
//   present(a,b) {
//     return a + b;
//   }
// }
//after the class is created you can assign a variable to it
// const myHouse = new House ('bongalow')
// root1.render(myHouse.present(2,3))

// root1.render(myHouse.brand);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

//  const mySecondElement = <h1>hello sucker!</h1>

// const root1 = ReactDOM.createRoot(document.getElementById('root'));


// const myArray = ['apple', 'banana', 'orange'];
// const [a,b,c]= myArray;

// const myList = myArray.map((item) => <p>{item}</p>)
// const a = myList[1]

// ReactDOM.render(myList, document.getElementById('root'));
// root1.render(c)

// function calculate(a, b) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;

//   return [add, subtract, multiply, divide];
// }


// destructuring... comes in handy when functions returns an array
// const [add, subtract, multiply, divide] = calculate(7, 7);

// root1.render(add);
// root1.render(  subtract);
// root1.render( multiply );
// root1.render( divide );




// destructuring objects...    

// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }

// myVehicle(vehicleOne);

// old way

// function myVehicle(vehicle) {
//   const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
// }
// new method 

// myVehicle(vehicleOne);

// function myVehicle({type, color, brand, model}) {
//   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
// }




// We can even destructure deeply nested objects by referencing the nested object then 
// using a colon and curly braces to again destructure the items needed from the nested object:

// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red',
//   registration: {
//     city: 'Houston',
//     state: 'Texas',
//     country: 'USA'
//   }
// }

// myVehicle(vehicleOne)

// function myVehicle({ model, registration: { state } }) {
//   const message = 'My ' + model + ' is registered in ' + state + '.';
// }

// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));