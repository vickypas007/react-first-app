import React  from 'react';

const validation =(props) =>{
    return(
    <div>
        {
            props.textLength > 5 ?
            <p> <font color ="green">Text long enought </font></p> :
            <p> <font color ="red">Text too Short </font></p>
        }
        
    </div>
    );
    
};

export default validation;