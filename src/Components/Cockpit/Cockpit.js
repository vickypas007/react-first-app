import React, {useEffect} from 'react';
import './cockpit.css';

const Cockpit =(props) => {
  
 useEffect(() => {
        console.log('Cockpit.js useEffect');
      setTimeout(() =>{
            alert("Saved data to cloud");
        },1000);

        return () =>{
            
            console.log('[Cockpit.js] clean work in useEffect');
        };
      }, []);
useEffect(() =>{
    console.log('Cockpit.js 2nd useEffect');
    return () =>{
        console.log('[Cockpit.js] clean work in useEffect');
    }
});
    const classes =[] ;
    if(props.showPersons)
    {
     //<button  className="AfterShow" onClick={props.clicked}> Toggle Person </button>
    }
if(props.persons.length <=2){
    classes.push('red');
}
if(props.persons.length <=1)
    {
        classes.push('bold');
    }
        
    
    return(
        <div>        
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really Working</p>
            <button  className="style" onClick={props.clicked}> Toggle Person </button>
        </div>

        
    );
};

export default Cockpit;