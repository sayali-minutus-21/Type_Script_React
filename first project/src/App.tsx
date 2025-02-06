import './App.css';
import { Person,Countries } from './Person';
// import {usrProvider} from './usrContext'

// let name: string ="Sayali"
// let age: number =23
// let isThere: boolean =true

// let ages: number[] =[1,2,3,4,5]//list
// let person : any= 3
// person= "Sayali"//we can assign any value to this

function App() {

  // const fetchusr=() => ({name:"Sau", age=22 ,isThere:null});
  // const usrfetched=fetchusr();
  return (
    <>
    <Person name={"Sayu"} age ={22} isThere={false} country={Countries.India}/>{" "}
    <Person name={"Sayali"} age ={23} isThere={true} />{" "}
    </>
  );
}

export default App
