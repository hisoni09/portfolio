import React ,{useState, useEffect} from 'react';
import './Nav.css';
import styled from 'styled-components';

function Nav() {

    const [show, handleshow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10){
                handleshow(true);
            }
            else handleshow(false);
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black" }`}>
            <div>
                <img
                    className="nav__logo"
                    src="/images/logo.png"
                    alt="Logo"
                />
            </div>
            
            <NavMenu>
                <a href='/'>
                    <span>Home</span>
                </a>
                <a href='#about'>
                    <span>About</span>
                </a>
                {/* <a href='#contact'>
                    <span>Contact</span>
                </a> */}
            </NavMenu>
        </div>
    )
}

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-left: 25px;
    margin-right: 25px;

    a {
        display: flex;
        align-item: center;
        padding: 0 12px;
        style: none;
        text-decoration: none;

        span {
            color: rgb(249, 249, 249);
            font-size: 18px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            letter-spacing: 1.10px;

        
            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibilty: hidden;
                width: auto;
            }
        }
        
        &:hover {
            span: before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media(max-width: 731px) {
        visibility: hidden;
    }
`;

export default Nav
