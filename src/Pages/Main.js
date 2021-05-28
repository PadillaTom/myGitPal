import React from 'react'
import styled from "styled-components";

import {UserRFFG, UserCard, Followers} from "../Components/User Related"

const Main = () => {
    return (
        <main>
            <UserRFFG></UserRFFG>  
            <UserCard></UserCard>  
            <Followers></Followers> 
        </main>
    )
}



export default Main
