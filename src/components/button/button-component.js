import React from 'react'; 
import { Button } from "reactstrap"; // Correct import for Button from reactstrap

const ButtonComponent = ({ clickEventHandler }) => {
    return (
        <Button color="primary" onClick={clickEventHandler}>
            Click Me
        </Button>
    );
};

export default ButtonComponent;



