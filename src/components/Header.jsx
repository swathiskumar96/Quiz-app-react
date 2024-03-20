import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            <Navbar.Brand className='d-flex justify-content-center align-items-center text-white fs-5'><i class="fa-solid fa-circle-question me-3"></i>{''}
              <b>Quiz App</b>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header