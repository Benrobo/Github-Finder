import { useContext } from 'react'
import Button from "@mui/material/Button"

import { DataContext } from "../context/DataContext"

export const UserCard = () => {

    const { githubUsername, userId, avatar, location, followersCount, followingCount, reposCount, gistCount, userLink } = useContext(DataContext)

    return (
        <div className="u-card">
            <div className="img-cont">
                <img src={avatar} alt={githubUsername} className="img-fluid" />
            </div>
            <div className="user-info">
                <div className="username-cont">
                    <div className="left">
                        <span className="name">{githubUsername}</span>
                    </div>
                    <div className="right">
                        <small>
                            {location}
                        </small>
                    </div>
                </div>
                <div className="socials">
                    <span className="followers">
                        Followers <b>{followersCount}</b>
                    </span>
                    <span className="following">
                        Following <b>{followingCount}</b>
                    </span>
                    <span className="repos">
                        Repos <b>{reposCount}</b>
                    </span>
                    <span className="gist">
                        Gist <b>{gistCount}</b>
                    </span>
                </div>
                <div className="footer">
                    <Button className="follow-btn btn-block">
                        <a href={userLink}>Follow</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

