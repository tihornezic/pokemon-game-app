import React from "react";
import {useState} from 'react'
import styled from "styled-components";
import logo1 from "../img/logo1.png";

const ResponsiveHeaderStyled = styled.div`
    display: none;
    
    @media (max-width: 767px) {
        display: flex;
        position: fixed;
        /* flex-direction: column; */
        flex-flow: column wrap;
        top: 0;
        right: 0;
        background-color: #2f6db5;
        width: 100%;
        height: 100vh;
        z-index: 1;
        align-items: center;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform .4s ease-in-out;
        
        div {
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: space-around;
            gap: 24px;
            margin-top: 75px;

            a:nth-child(1) {
                background: none;
            }
        
            a {
                display: inline-block;
                width: 300px;
                text-decoration: none;
                color: #FFF;
                font-weight: 500;
                font-size: 1.15rem;
                padding-bottom: 13px;
                background: linear-gradient(
                to right,
                rgba(47, 109, 181, 1) 0%,
                rgba(255, 255, 255, 0.62) 50%,
                rgba(47, 109, 181, 1) 100%)
                bottom no-repeat;
                background-size: 60% 2px;

            }
        }
    }  
`;

const HamburgerStyled = styled.div`
    @media(max-width: 767px) {
        position: fixed;
        top: 20px;
        right: 8px;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        z-index: 2;

            div {
            width: 2rem;
            height: .25rem;
            background-color: ${({open}) => open ? 'rgba(255, 255, 255, 0.8)' : '#757575'};
            border-radius: 10px;
            transform-origin: 1px;
            transition: all .25s linear;
        
            &:nth-child(1) {
                transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
            }

            &:nth-child(2) {
                transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${({open}) => open ? 0 : 1};
            }

            &:nth-child(3) {
                transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
        }       
    }   
`;

const ResponsiveHeader = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <ResponsiveHeaderStyled open={open}>
                <div>
                    <a href="/"><img src={logo1} alt="pokemon-logo" width="280" /></a>
                    <a href="/pokemons">Pokemon list</a>
                    <a href="/rules">Rules</a>
                </div>
            </ResponsiveHeaderStyled>
            <HamburgerStyled open={open} onClick={() => setOpen(prev => !prev)}>
                <div></div>
                <div></div>
                <div></div>
            </HamburgerStyled>
        </>
    );
};

export default ResponsiveHeader;
