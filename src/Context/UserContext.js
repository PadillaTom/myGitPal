import React , {useState, useEffect, createContext} from "react";

// PLACEHOLDERS
import userData from "./Data/userData";
import userRepos from "./Data/userRepos";
import userFollowers from "./Data/userFollowers";

const GithubContext = createContext();

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(userData);
    const [repos, setRepos] = useState(userRepos);
    const [followers, setFollowers] = useState(userFollowers);

    return(
        <GithubContext.Provider value={{githubUser, repos, followers}}>
            {children}
        </GithubContext.Provider>
    );
};

export {GithubContext, GithubProvider};
