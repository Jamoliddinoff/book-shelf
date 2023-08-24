import React from 'react';
import Container from "../Container";
import {HomeLogo, Wrapper} from "./style";
import Text from "../Text";
import HomeIcon from '../../assets/shelf.png'
import Button from "../Button";
import {useDispatch} from "react-redux";
import {logOute} from "../../store/loginSlice";
import {theme} from "../../assets/theme";

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Wrapper>
                <div className={'justify-center'}>
                    <HomeLogo>
                        <img src={HomeIcon} alt={'home-icon'} title={'home-icon'}/>
                        <Text size={24} color={'#000'} weight={'600'}>Books <span style={{color:theme.colors.main}}>shelf</span></Text>
                    </HomeLogo>
                </div>
                <Button onClick={()=>dispatch(logOute())}>Log Out</Button>

            </Wrapper>
        </Container>
    );
};

export default Navbar;

