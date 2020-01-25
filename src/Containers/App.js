import React,{Component} from 'react';

import './App.css';
import Persons from '../Components/Persons/Persons';
// import Validation from './Validation/Validation';
// import Char from './Char/Char';
import Cockpit from '../Components/Cockpit/Cockpit';

class  App extends Component
{
constructor(props){
        super(props);
        console.log('[App,js] constuctor');
    }


 state={
        persons: [
      {id: "1",name:"vicky" , age:'23'},
      {id: "2",name:"Neha" , age: 34},
      {id: "3",name:"Akash", age: 44}
      ],
    otherState:'some other Value',
    showPerson:false,
    showCockpit:true,
    changeCounter: 0
      };
 

  static  getDerivedStateFromProps (props,state){
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
  } 
  
  componentDidMount(){
    console.log('[App.js] componentDidMount ');
  }

shouldComponentUpdate(prevProps, prevState)
{
    console.log('[App,js] shouldComponentUpdate');
    return true;
}

componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
}

changedNameHandler =(event, id) =>{
   const personIndex =this.state.persons.findIndex(p => {
      return p.id === id;
   });
    const person ={
        ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex] = person;
    
    this.setState((prevState, props) => {
        return {
            persons: persons,
            changeCounter: prevState.changeCounter + 1
        };
       
    });
};

    deletePersonHandler =(personIndex)=>{
    const persons =this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
    
}

tooglePersonHandler=() =>{
    const doesShow =this.state.showPerson;
    this.setState({showPerson: !doesShow});
}


  /* state ={
    userInput: '' */



//CountTestValue =(event) =>{
//    this.setState({userInput: event.target.value});
//} 



 render() {
    
 console.log('[App.js] render');
     /*    const charList = this.state.userInput.split('').map((ch , index) =>{
         return <Char character ={ch} key={index} />;
            });
            */
 
     let persons =null;
     if(this.state.showPerson)
         {
             
             persons =(
                <div> 
                    <Persons 
                     persons ={this.state.persons}
                     clicked ={this.deletePersonHandler}
                     changed ={this.changedNameHandler} />
                
                </div>
                );
                
         }
         
     
    return (
       
    <div className="App">
    <header className="App-header">
        <br></br>
        <button 
        onClick={() => {
            this.setState({showCockpit:false});
        }}
        > Remove Cockpit
         </button>
         {this.state.showCockpit ? ( 
        <Cockpit 
        title={this.props.appTitle}
         showPersons ={this.state.showPerson}
         persons={this.state.persons}
         clicked ={this.tooglePersonHandler}
         />
         ): null }
        
            {persons}
        <br/>
        {
        
//         <input type='text' 
//        onChange ={this.CountTestValue}
//        value ={this.state.userInput}
//         />
//        <p>{this.state.userInput}</p>
//        <p><Validation textLength ={this.state.userInput.length}/></p>
//        {charList} 
        }
      </header>
       
    </div>
   
  );
 }   
 

}
  

export default App;
