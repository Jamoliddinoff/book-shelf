import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
    colors: {
        black:'#1C1F29',
        main:'#2252FC',
        grey:'#6F7586',
        secondGrey:'#B2B8CA',
        lightGrey:'#F4F6FC',
    },
    // fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
