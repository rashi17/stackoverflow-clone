import React, { useEffect, useState } from 'react';
import '../styles/user-details.css'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import TopQuestions from './top-questions';

const UserProfile = () => {
    const location = useLocation();
    const [userBadgeCount, setUserbadgeCount] = useState();
    const [userTopTags, setUserTopTags] = useState();
    const [userTopQuestions, setUserTopQuestions] = useState();
    const [userid, setUserid] = useState(new URLSearchParams(location.search).get('userid'));

    useEffect(() => {
        fetchUserData();
    }, [])

    //fetch reuired data 
    const fetchUserData = async () => {
        let [p1, p2, p3] = await Promise.all([
            axios.get(`https://api.stackexchange.com/2.2/users/${userid}?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=reputation&filter=default`),
            axios.get(`https://api.stackexchange.com/2.2/users/${userid}/top-tags?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&filter=default`),
            axios.get(`https://api.stackexchange.com/2.2/users/${userid}/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default`)
        ]).catch(err => console.log(err))

        //setting state
        setUserbadgeCount(p1.data.items);
        setUserTopTags(p2.data.items);
        setUserTopQuestions(p3.data.items);
    }
    return (
        <React.Fragment>
            {userBadgeCount && userBadgeCount.map((i, index) => {
                return (
                    <div>
                        <div key={index} className="user-details-wrapper">
                            <div className="user-details">
                                <div id="avatar-card" className="user-pic-card">
                                    <div className="user-pic">
                                        <a href={i.link} target="_blank">
                                            <div className="gravatar-wrapper-164">
                                                <img src={i.profile_image} alt="" width="164" height="164" className="bar-sm avatar-user" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="user-info" title="reputation">
                                        <div className="grid">
                                            <div className="reputation-score">7,728</div>
                                            <div className="reputation">reputation</div>
                                        </div>
                                    </div>
                                    <div className="score-container" key={index}>
                                        <div className="score">
                                            <div className="score-cell">
                                                <div className="badge" title={`${i.badge_counts.gold} gold badges`}>
                                                    <span>{i.badge_counts.gold}</span>
                                                </div>
                                            </div>

                                            <div className="score-cell">
                                                <div className="badge" title="42 silver badges">
                                                    <span >{i.badge_counts.silver}</span>
                                                </div>
                                            </div>

                                            <div className="score-cell">
                                                <div className="badge" title="72 bronze badges">
                                                    <span>{i.badge_counts.bronze}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-location">
                                    <h2 className="username">{i.display_name}</h2>
                                    <h5 className="location">{i.location}</h5>
                                    <a href={i.link} className="contact" target="blank">Contact</a>
                                </div>
                            </div>
                            <div>
                                <div className="top-tags">
                                    {userTopTags && userTopTags.map((j, index) => {
                                        console.log(j)
                                        return (
                                            <div key={index}>
                                                <a href={`/questions/tagged/${j.tag_name}`} className="tag" title="" rel="tag">{j.tag_name}</a>
                                                <p className="top-tags-score">score <span className="score-count">{j.question_score}</span></p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div>
                <TopQuestions data={userTopQuestions} />
            </div>
        </React.Fragment>
    );
};

export default UserProfile;