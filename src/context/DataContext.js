import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();


const DataContextProvider = ({ children }) => {
    const [toggleSearchBar, setToggle] = useState(false)
    const [loading, setIsloading] = useState(false);
    const [userName, setUsername] = useState("benrobo")
    const [githubUsername, setGithubName] = useState("")
    const [userId, setUserId] = useState(0)
    const [avatar, setAvatar] = useState("")
    const [followers, setFollowers] = useState("")
    const [following, setFollowing] = useState("")
    // const [repos, setRepos] = useState("")
    const [location, setLocation] = useState("")
    const [followersCount, setFollowersCount] = useState(0)
    const [followingCount, setFollowingCount] = useState(0)
    const [reposCount, setReposCount] = useState(0)
    const [gistCount, setGistCount] = useState(0)
    const [userLink, setLink] = useState("")
    const [error, setError] = useState("")


    // Fetch users details

    useEffect(() => {
        let url = `https://api.github.com/users/`;
        fetchUserData(url)
        fetchFollowers(`${url}${userName}/followers`);
        fetchFollowing(`${url}${userName}/following`)
    }, [])

    async function fetchUserData(api) {
        try {
            let res = await fetch(`${api}${userName}`);
            let { login, id, avatar_url, html_url, location, public_repos, public_gists, followers, following } = await res.json();

            if (login) {
                setIsloading(!loading);
                setGithubName(login);
                setUserId(id);
                setAvatar(avatar_url);
                setLink(html_url);
                setLocation(location)
                setFollowersCount(followers);
                setFollowingCount(following);
                setReposCount(public_repos);
                setGistCount(public_gists)
                return;
            }
            else if (!login) {
                setIsloading(false)
                setError("Something went wrong, etheir name is not found or network error");
                console.log(loading, error)
            }


        } catch (e) {
            setError("Something went wrong");
        }
    }

    async function fetchFollowers(api) {
        let res = await fetch(api);
        let data = await res.json();

        setFollowers(data);
    }
    async function fetchFollowing(api) {
        let res = await fetch(api);
        let data = await res.json();

        setFollowing(data);
    }

    function showSearch() {
        setToggle(!toggleSearchBar)
    }

    return (
        <DataContext.Provider value={{
            showSearch, toggleSearchBar, userName, setUsername, githubUsername, userId, location, avatar, followersCount, followingCount, reposCount, gistCount, userLink, error, followers, following,
            loading, setIsloading
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider