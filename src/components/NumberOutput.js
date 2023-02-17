import {Textfit} from 'react-textfit';
import "./NumberOutput.css";
import React from 'react';

const NumberOutput = ({ id_input, value }) => {
    return (
        <Textfit className = "numberOutput" id = {id_input} mode = "single" max = {72}>{value}</Textfit>
    );
};

export default NumberOutput;