import React, {useState} from 'react';
import {GithubContext} from "../../Context/UserContext";
import styled from "styled-components";

import {FcSearch} from "react-icons/fc";

const Search = () => {
    const [user, setUser] = useState("");

    // ***Handle Submit***
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user){
            
        }
    }
    return (
        <section className="section">
            <Wrapper className="section-center">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <FcSearch></FcSearch>
                        <input type="text" placeholder="Enter Github User" value={user} onChange={(e)=>setUser(e.target.value)}/>
                        <button type="submit">Search</button>
                    </div>
                </form>
                <h3>Request: 60/60</h3>

            </Wrapper>
        </section>
    )
};

const Wrapper = styled.div`

`;



export default Search
