import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

const Error = () => {
    return (
        <Wrapper>
            <div>
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <Link to="/" className="btn-primary">Back to Home</Link>
            </div>
        </Wrapper>   
    )
}

// Styled Components:
const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: grid;
place-items: center;
text-align: center;
h1{
    font-size: 10rem;
    color: var(--PrimaryRed);
    font-family: var(--FontLora);
}
h3{
    font-family:var(--FontMontserrat);
    font-weight: 400;
    font-size: 1.7rem;
    margin-bottom: 3rem;
}
`
export default Error
