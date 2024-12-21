import React from 'react';
import ButtonComponent from "./button-component";

const ButtonContainer = () => {
    const clickEventHandler = () => {
        console.log("Button Clicked")
    }

    return <ButtonComponent  clickEventHandler={clickEventHandler}/>
}
export default ButtonContainer;