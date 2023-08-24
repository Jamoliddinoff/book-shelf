import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import Text from "../Text";
import {useDispatch, useSelector} from "react-redux";
import {clearAlert} from "../../store/alertSlice";

const AlertWrapper = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const alert = useSelector((store) => store.alert);
    const dispatch = useDispatch();
    useEffect(() => {
        alert.message && setIsVisible(true);

        (() =>
            setTimeout(() => {
                setIsVisible(false);
            }, 5000))();
        return () => setTimeout(()=>{
            dispatch(clearAlert())
        },5000)
    }, [alert.message]);

    return (
        <>
            {children}
            {isVisible
                ? <AlertContainer style={{
                        backgroundColor: alert.type === 'error' ? '#ffd1d1' : '#cefdae',
                        borderColor: alert.type === 'error' ? '#c77474' : '#84bb6e',
                    }}>
                    <Text color={alert.type === 'error' ? '#8d2727' : '#3c5035'}>
                        ⚠️ {alert.message}
                    </Text>
                </AlertContainer>
                : null}
        </>
    );
};

const AlertContainer = styled.div`
  position: absolute;
  left: 20px;
  bottom: 30px;
  border-radius: 16px;
  padding: 10px 16px;
  color: #fef7e0;
  z-index: 99999999999;
`;

export default AlertWrapper;
