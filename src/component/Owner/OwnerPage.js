import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarOwner from "./NavbarOwner/NavbarOwner";
import MyHousings from "./Page/MyHousings";
import FormHousing from "./Page/FormHousing";


const OwnerPage = () => {
  
  const [page, setPage] = useState('myHousings')


  return (
    <div>
      <NavbarOwner setPage={setPage}></NavbarOwner>
      <Container>
        {page === 'myHousings' && <MyHousings/>}
        {page === 'addHousing' && <FormHousing setPage={setPage}/>}
      </Container>
    </div>
  );
};

export default OwnerPage;
