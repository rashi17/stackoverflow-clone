import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopQuestions from './top-questions';

const Questions = () => {
    const [response, setResponse] = useState()

    useEffect(() => {
        fetchData();
    }, [])

    //fetch required data
    const fetchData = async () => {
        let config = {
            method: "get",
            url: "https://api.stackexchange.com/2.2/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default"
        }
        let res = await axios(config)
        //setting state
        setResponse(res.data.items)
    }
    return (
        <React.Fragment>
            {response && <TopQuestions data={response}/>}
        </React.Fragment>
    )
}

export default Questions;
