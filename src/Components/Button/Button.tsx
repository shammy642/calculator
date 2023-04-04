import React, { useState } from "react";

type ButtonProps = {
    label: string;
}

export function Button(props: ButtonProps) {

    return (
        <React.Fragment>
            <button type="button" value={props.label}>{props.label}</button>
        </React.Fragment>
        );
}