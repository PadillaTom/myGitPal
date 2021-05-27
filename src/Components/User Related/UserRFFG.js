import React, {useContext} from 'react'
import styled from "styled-components"

import { GithubContext } from '../../Context/UserContext'

import {GoRepo, GoGist} from "react-icons/go"
import {FiUsers, FiUserPlus} from "react-icons/fi"

const UserRFFG = () => {
    const {githubUser} = useContext(GithubContext);
    const {public_repos, followers, following, public_gists} = githubUser;
    const items = [
        {
            id: 1,
            label: "Repos",
            value: public_repos,
            color: "cardRed",
            icon: <GoRepo className="singleIcon"></GoRepo>,
        },
        {
            id: 2,
            label: "Followers",
            value: followers,
            color: "cardCream",
            icon: <FiUsers className="singleIcon"></FiUsers>,
        },
        {
            id: 3,
            label: "Following",
            value: following,
            color: "cardPale",
            icon: <FiUserPlus className="singleIcon"></FiUserPlus>,
        },
        {
            id: 4,
            label: "Gists",
            value: public_gists,
            color: "cardCyan",
            icon: <GoGist className="singleIcon"></GoGist>,
        },
    ]
    
    return (
        <section className="rffg-section">
            <Wrapper>
                {items.map((item)=>{
                    return (
                        <Item key={item.id} {...item}></Item>
                    )
                })}
            </Wrapper>
        </section>
    )
}
// ITEM Component:
const Item = ({label, value, color, icon}) => {
    return (
    <article className={`rffg-card ${color}`}>
        <div className="rffg-text-container">
            <div>
                <h2>{value}</h2>
                <p>{label}</p>
            </div>
            <span>
                {icon}
            </span>
        </div>
    </article>
    );
};

// Styled Components
const Wrapper = styled.div`
width: 90vw;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* Card */
.rffg-card{
width: 100%;
height: 5rem;
display: grid;
place-items: center;
font-family: var(--FontMontserrat);
margin-bottom: 0.35rem;
border-radius: 0.7rem;
cursor: pointer; 
transition: var(--TransFast);
}
.rffg-card:hover{
    transform:scale(1.025);
    box-shadow: 0px 0px 9px var(--ShadowSmooth);
}
.rffg-text-container{
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h2{
    font-size: 1.5rem;
    letter-spacing: 1.2px;
}
p{
    font-size: 0.8rem;
    font-weight: 300;    
}
span{
    font-size: 2rem;
    margin-top: 0.5rem;
}
/* Colors */
.cardRed{
    background-color: var(--PrimaryRed);
    color: var(--BgWhite);
}
.cardCream{
    background-color: var(--PrimaryCream);
    color: var(--Dark);
}
.cardPale{
    background-color: var(--PrimaryPale);
    color: var(--Dark);
}
.cardCyan{
    background-color: var(--PrimaryCyan);
    color: var(--BgWhite);
}
`;

export default UserRFFG;
