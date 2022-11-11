import styled from 'styled-components';
import React from "react";

import './Awards.css';

const Awards = (props) => {
    return (
        <Container className="certs">
            <div className="header">
                <h1>Certifications And Awards_</h1>
            </div>
        </Container>
    )
}

const Container = styled.main`
    color: white;
`;

export default Awards;
