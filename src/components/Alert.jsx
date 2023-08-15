import React from 'react'
// import './alertStyles.css';

const alert = (props) => {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    if (!props.alert) {
        return null; // If no alert object, don't render anything
    }

    return (
        <>   
           <div style={{height: '50px'}}>
           <div  className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
            </div>
            </div>
        </>
    )
}

export default alert