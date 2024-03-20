import React, { useEffect, useState } from 'react';
import { getAllQuestionsAPI } from '../services/allAPI';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Quiz() {
    const [allQuestions, setAllQuestions] = useState([]);
    const [details, setDetails] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [viewScore, setViewScore] = useState(false);

    const getAllQuestions = async () => {
        const result = await getAllQuestionsAPI();
        //   console.log(result);
        if (result?.status === 200) {
            setAllQuestions(result?.data);
        }
    };

    useEffect(() => {
        getAllQuestions();
    }, []);

    const handleAnswer = (answer) => {
        const finalCorrectAnswer = answer ? correctAnswer + 1 : correctAnswer;
        const finalWrongAnswer = answer ? wrongAnswer : wrongAnswer + 1;
        const finalScore = answer ? score + 5 : score;

        if (details < allQuestions.length - 1) {
            setDetails(details + 1);
        } else {
            setViewScore(true);
        }

        setScore(finalScore);
        setCorrectAnswer(finalCorrectAnswer);
        setWrongAnswer(finalWrongAnswer);
        // console.log(finalScore);
    }

    return (
        <>
            {!viewScore ? (
                <Card style={{ height: '500px', width: '500px' }} className='container shadow-lg mt-4'>
                    <Card.Body>
                        <Card.Title style={{ height: '27px' }} className='mt-4'>{allQuestions[details]?.id}/10</Card.Title>
                        <Card.Title style={{ height: '60px' }} className='mt-4'>{allQuestions[details]?.question}</Card.Title>
                        {allQuestions[details]?.options.map((option, index) => (
                            <Card.Text key={index}>
                                <button className='optionbtn shadow-lg rounded mt-3 d-flex pt-2 ps-3' style={{ width: '100%', border: 'none', height: '45px' }} onClick={() => handleAnswer(option.answer)}>{option.ans}</button>
                            </Card.Text>
                        ))}
                    </Card.Body>
                </Card>
            ) : (
                <Card style={{ height: '500px', width: '500px' }} className='container shadow-lg mt-4'>
                    <Card.Body>
                        {viewScore && (
                            <>
                                <Card.Title style={{ overflowY: 'hidden' }} className='fs-1 fw-bolder text-center mt-2'>Result</Card.Title>
                                <Card.Text className='fs-4 fw-bolder text-center mt-4'>Total Questions : {allQuestions[details]?.id}</Card.Text>
                                <Card.Text className='fs-4' style={{ overflowY: 'hidden', textAlign: 'center' }}><b>Score</b></Card.Text>
                                <Card.Text className='text-center fw-bolder' style={{ fontSize: '80px' }}>{score}/<span className='fs-1'>50</span></Card.Text>
                                <div className='d-flex justify-content-center fw-bolder'>
                                    <Card.Text className='me-5 '>Correct Answers  : {correctAnswer}</Card.Text>
                                    <Card.Text className=''>Wrong Answers : {wrongAnswer}</Card.Text>
                                </div>
                            </>
                        )}
                        <div className='d-flex justify-content-center align-items-center mt-4'>
                            <Link to={'/'}>
                                <button className='btn btn-info fw-bolder shadow-lg text-white rounded px-4 py-1 fs-5 fw-bolder'>Play Again</button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </>
    )
}

export default Quiz