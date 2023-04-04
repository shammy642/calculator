import React from "react";

type CarProps = {
    color: string;
}

export function Car(props: CarProps) {
    return (
        <React.Fragment>
            <h2 >I am a <span style={{color: props.color}}>{props.color}</span> Car!</h2>
            <p>Poop!</p>
        </React.Fragment>
        );
}