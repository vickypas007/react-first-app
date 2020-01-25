import React from 'react';

const char =(props) =>{
    const styl = {
         display:'inline-block',
        padding:'16px',
        margin:'16px',
        border:'1px solid red',
        textAlign:'center'
    };
    return(
        <div style={styl}>
            {props.character}
        </div>
    );
}
export default char