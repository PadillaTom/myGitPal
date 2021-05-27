import React from 'react'

import styled from "styled-components";
import GithubLogo from "../Assets/GithubLogo.png"

const Login = () => {
    return (
        <Wrapper>
            <div className="container">
                <img src={GithubLogo} alt="myGitPal Logotype" />
                <h1>My Git Pal</h1>
                <p>Login to find your favourite Github Repos!</p>
                <button className="btn-primary">Login</button>
            </div>
        </Wrapper>
    )
}

// Styled Components:
const Wrapper = styled.div`
min-height: 100vh;
display: grid;
place-items: center;
.container{
    width: 90vw;
    margin: 0 auto;
    text-align: center;
}
img{
    width: 50vw;
    margin-bottom: 2rem;
}
h1{
    font-family: var(--FontMontserrat);
    font-size: 3rem;
    font-weight: 400;       
}
p{
    font-family: var(--FontLora);
    font-size: 1rem;
    color: var(--Gray);
    margin-bottom: 2rem; 
}
`;


export default Login
