import React, {useContext} from 'react'
import styled from "styled-components"

import { GithubContext } from '../../Context/UserContext'

import {GoRepo, GoGist} from "react-icons/go"
import {FiUsers, FiUserPlus} from "react-icons/fi"

const UserInfo = () => {
    const {githubUser} = useContext(GithubContext);
    const {public_repos, followers, following, public_gists} = githubUser;
    const items = [
        {
            id: 1,
            label: "Repos",
            value: public_repos,
            color: "--PrimaryRed",
            icon: <GoRepo className="singleIcon"></GoRepo>,
        },
        {
            id: 2,
            label: "Followers",
            vaue: followers,
            color: "--PrimaryCream",
            icon: <FiUsers className="singleIcon"></FiUsers>,
        },
        {
            id: 1,
            label: "Following",
            value: following,
            color: "--PrimaryPale",
            icon: <FiUserPlus className="singleIcon"></FiUserPlus>,
        },
        {
            id: 1,
            label: "Gists",
            value: public_gists,
            color: "--PrimaryCyan",
            icon: <GoGist className="singleIcon"></GoGist>,
        },
    ]
    
    return (
        <section className="rfgg-section">
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
const Item = ({id, label, value, color, icon}) => {
    return (
    <article>
        <div>
            <h2>{value}</h2>
            <p>{label}</p>
        </div>
        <div>
            {icon}
        </div>
    </article>
    );
};

// Styled Components
const Wrapper = styled.section`

`;

export default UserInfo
