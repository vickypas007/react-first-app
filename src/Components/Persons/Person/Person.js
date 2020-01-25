import React,{Component} from 'react';
import './Person.css';
import Aux from '../../../Hoc/Auxillary';
import withClass from '../../../Hoc/WithClas';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor(props) {
        super(props);
       this.inputElementRef = React.createRef();

    }
    componentDidMount(){
       
       this.inputElementRef.current.focus();
    }
    
    render(){
        console.log('[Person.js] rendering...')
    return (
         // <div className="Person">
            <Aux>
   
            <p key="i1" onClick={this.props.click} >My name is <b>{this.props.name}</b>  and I am <b>{this.props.age} </b> Year old! </p>
            <p key="i2">{this.props.children }</p>
        <input key ="i3"
           // ref ={(inputEl) => {this.inputElement =inputEl}}
           ref = {this.inputElementRef}
            type="text" 
            onChange={this.props.changed}
             value={this.props.name}/>
         
        
        </Aux>
    );
    }  
}

Person.propType= {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    onChange: PropTypes.func
};

export default withClass(Person);
