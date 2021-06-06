import React from 'react';
import '../styles/questions.css';
import{Link} from 'react-router-dom';

//reusable component for questions
const TopQuestions = (props) => {
    return (
       <React.Fragment>
           <div className="top-que-heading">  <h3>Top Questions</h3></div>
            <div className="question-container">
                {props.data && (props.data.map((i, index) => {
                    return (<div key={index} className="question-wrapper">
                        <div className="question-details narrow" id="question-summary-67542247">
                            <div className="question-status">
                                <div className="votes">
                                    <div className="counts"><span title="2 votes">{i.score}</span></div>
                                    <div>votes</div>
                                </div>

                                <div className="answered">
                                    <div className="counts"><span title="1 answer">{i.answer_count}</span></div>
                                    <div>answer</div>
                                </div>

                                <div className="views">
                                    <div className="counts"><span title="146 views">{i.view_count}</span></div>
                                    <div>views</div>
                                </div>
                            </div>
                            <div className="question-summary">
                                <div className="bounty-status" title="this question has an open bounty worth 50 reputation">{i.bounty_amount? i.bounty_amount : 50}</div>
                                <h3><a href={i.link} className="question-link">{i.title}</a></h3>
                                <div className="subcommunities float-left">

                                </div>
                                <div className="question-tags">
                                    {i.tags.map((j, index) => {
                                        return(<a key={index} href={`/questions/tagged/${j}`} className="tag" title="" rel="tag">{j}</a>)
                                    })}
                                </div>
                                <div className="start-details">
                                    <a href="#" className="modified-link">
                                        modified
                                    <span title="" className="relativetime">{i.last_activity_date}</span>
                                    </a>
                                    <Link to={{pathname:"/userprofile",search: `?userid=${i.owner.user_id}`}}
                                    className="user-name">{i.owner.display_name}</Link>
                                    <span className="que-score" title="reputation score " dir="ltr">{i.owner.reputation}</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                })
                )}
            </div>
       </React.Fragment>
    );
};

export default TopQuestions;