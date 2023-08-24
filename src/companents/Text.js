import React from 'react';
import {theme} from "../assets/theme";

const Text = ({color,size,weight,children,style}) => {
    return (
        <p  style={{
            fontSize:size ? size : 16,
            color:color ? color : theme.colors.grey,
            fontWeight:weight ? weight : '400',
            margin:0,
            padding:0,
            ...style
        }}>
            {children}
        </p>
    );
};

export default Text;
