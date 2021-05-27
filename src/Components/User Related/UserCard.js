import React, {useContext} from 'react'
import styled from "styled-components";

import {AiFillGithub, AiOutlineLink} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {MdWork} from "react-icons/md"

import {GithubContext} from "../../Context/UserContext";


const UserCard = () => {
    const {githubUser} = useContext(GithubContext);
    const {
        avatar_url,
        bio,
        blog,
        company,
        html_url,
        name,
        location,
        twitter_username,
    } = githubUser;

        return (
        <Wrapper>
            <header>                                
                <img src={avatar_url} alt={`${name} Avatar`} />
                <div>
                    <h4>{name}</h4>
                    {twitter_username &&
                    <p className="twitter">@{twitter_username}</p>   
                    } 
                </div>
                <a href={html_url} className="git-logo">
                    <AiFillGithub></AiFillGithub>
                </a>
            </header>
            {
                bio && <p>{bio}</p>
            }            
            <div className="user-links">
                {
                    company && <p className="single-link"><MdWork className="singleLink-icon"></MdWork> {company}</p>
                }
                {
                    location && <p className="single-link"><GoLocation className="singleLink-icon"></GoLocation> {location}</p>
                }
                {
                    blog && <a href={`http://${blog}`} className="single-link"><AiOutlineLink className="singleLink-icon"></AiOutlineLink> {blog}</a>
                }
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
    content: "User";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: white;
    color: var(--Gray2);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 0.5rem 1rem 0.2rem 1rem; 
    box-shadow: 0px -2px 2px  var(--ShadowSmooth);
}
/* Header */
header{
display: grid;
grid-template-columns: auto 1fr auto;
align-items: center;
gap: 1rem;
margin-bottom: 1rem;
}
img {
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
}
h4{
    font-size: 1.4rem;
    font-family: var(--FontLora);
    letter-spacing: 0.8px;
    font-weight: 700;
}
.twitter{
    font-size: 1rem;
    color: var(--Gray);
    letter-spacing: 0.7px;
}
.git-logo{
    color: var(--Gray2);
    font-size: 4rem;  
    margin-top: 1rem;  
    cursor: pointer;
    transition: var(--TransMain);
}
.git-logo:hover{
    color: var(--Gray);
}
/* Links */
.user-links{
    margin-top: 1rem;     
    color: var(--Gray);
}
.single-link {
    padding-bottom: 0.2rem;
    font-family: var(--FontLora);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    margin-left: 0.3rem;
}
.singleLink-icon{
    font-size: 1.5rem;
    margin-right: 0.5rem;     
}
`;

export default UserCard;
