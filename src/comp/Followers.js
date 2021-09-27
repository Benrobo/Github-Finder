import React, { useContext } from 'react'
import { DataContext } from "../context/DataContext";

export const Followers = () => {

    const { followers } = useContext(DataContext);

    console.log(followers)
    // return null;
    return (
        <>
            <div className="followers box">
                <div className="head">
                    <p>Followers</p>
                    <span className="count">{followers.length}</span>
                </div>
                <hr />
                <div className="body">
                    <ul className="list">
                        {
                            followers.map((item) => {
                                return (<li key={item.login}>
                                    <div className="left">
                                        <img src={item.avatar_url} alt="" className="img-fluid" />
                                        <span>{item.login}</span>
                                    </div>
                                    <div className="right">
                                        <a href={item.html_url}
                                            rel="noreferrer"
                                            target="_blank" className="follow-btn">Follow</a>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}
