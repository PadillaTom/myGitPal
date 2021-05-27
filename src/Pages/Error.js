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
background: cyan;
text-align: center;
h1{
    font-size: 10rem;
    color: var(--PrimaryColor);
}
`
export default Error
