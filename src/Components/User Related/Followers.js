import React, {useContext} from 'react'
import {GithubContext} from "../../Context/UserContext";
import styled from "styled-components"



const Followers = () => {
const {followers} = useContext(GithubContext);
console.log(followers);
    return (
        <Wrapper>
            <div className="followers-container">
                {followers.map((follower, index) => {
                    const {avatar_url, html_url, login} = follower;
                    return(
                        <article key={index}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url} target="_blank" rel="noreferrer">{html_url}</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </Wrapper>
    )
}

// Styled Components
const Wrapper = styled.article`
width: 95%;
margin: 2rem auto;
background-color: var(--White);
box-shadow: 0px 0px 10px var(--ShadowSmooth);
border-radius: 0.5rem;
border-top-left-radius: 0rem;
padding: 1rem 1.2rem;
position: relative;
&::after{
    content: "Followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: white;
    color: var(--Gray);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 0.5rem 1rem 0.2rem 1rem; 
    box-shadow: 0px -2px 2px  var(--ShadowSmooth);
}
/* Followers Content */
.followers-container{
    overflow: scroll;
    overflow-x: hidden;
    height: 20rem;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(4rem, 1fr));
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
}
article{
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1.2rem;        
}
img{
    width: 4rem;
    border-radius: 50%;
    object-fit: cover;        
}
h4{
    font-family: var(--FontMontserrat);
    color: var(--Gray);
    letter-spacing: 1.1px;
}
a{
    font-family: var(--FontLora);
    font-weight: 300;
    font-size: 0.8rem;
    letter-spacing: 0px;
    color: var(--Gray2);
    transition: var(--TransMain);
}
a:hover{
    color: black;
}
`;

export default Followers
