import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarStudent from './NavbarStudent/NavbarStudent'
import HousingCard from '../Shared/HousingCard/HousingCard'
import HousingDetail from '../Shared/HousingDetail/HousingDetail'

const StudentPage = () => {
  return (
    <div>
        <NavbarStudent></NavbarStudent>
        <Container>
            <HousingCard></HousingCard>
            <HousingDetail></HousingDetail>
        </Container>
    </div>
  )
}

export default StudentPage