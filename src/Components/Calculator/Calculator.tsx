import React, { useState } from 'react';
import { Button } from '../Button/Button';

export function Calculator() {
    const [screen, setScreen] = useState(0)
    
    const buttons = [[1,2,3],[4,5,6],[7,8,9],["+","-","x","/","="]]
    return (
        <React.Fragment>
            <span style={{}}>
            <h1>{screen}</h1>
            <Button label="1"/>
            </span>
        </React.Fragment>
    );
}