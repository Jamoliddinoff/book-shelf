import React from "react";
import Home from "./screens/Home";
import Register from "./screens/Register";
import {useSelector} from "react-redux";
import './App.css';
import Theme from "./assets/theme";
import AlertWrapper from "./companents/alert";

function App() {
    const user = useSelector(store=>store.auth.user);
    return (
        <Theme>
            <AlertWrapper>
                {user ? <Home/>:<Register/>}
            </AlertWrapper>
        </Theme>
  );
}


export default App;
