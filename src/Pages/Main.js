import React from 'react'
import styled from "styled-components";

import {UserRFFG, UserCard, Followers} from "../Components/User Related"
import {Repos} from "../Components/Repos Related"

const Main = () => {
    return (
        <main>
            <UserRFFG></UserRFFG>  
            <UserCard></UserCard>  
            <Followers></Followers> 
            <Repos></Repos>
        </main>
    )
}



export default Main
