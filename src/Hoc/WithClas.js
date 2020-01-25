import React from 'react';
import '../Components/Persons/Person/Person.css';

const withClass =(WrappedComponent) => {
    // eslint-disable-next-line no-unused-expressions
    return props => (
        <div className="Person" > 
        <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;