import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Card style={{ height: '500px', width: '500px' }} className='bg-info container shadow-lg mt-4'>
        <Card.Body style={{ marginTop: '150px', textAlign: 'center' }}>
          <Card.Title><h1 style={{ height: '55px', color: 'white' }}><b>Start Quiz</b></h1></Card.Title>
          <Link to={'/quiz'}>
            <button className='fw-bolder shadow-lg px-5 pt-1 rounded bg-danger text-white'><i style={{ height: '33px' }} className="fa-solid fa-arrow-right-long fs-2"></i></button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Home