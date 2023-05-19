import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarOwner from "./NavbarOwner/NavbarOwner";
import MyHousings from "./Page/MyHousingPage/MyHousings";
import FormHousing from "./Page/FormPage/FormHousing";
import Chat from "../Chat/Chat";


const OwnerPage = () => {

  const [page, setPage] = useState('myHousings')

  return (
    <div>
      <NavbarOwner setPage={setPage}></NavbarOwner>
      <Container>
        {page === 'myHousings' && <MyHousings/>}
        {page === 'addHousing' && <FormHousing setPage={setPage}/>}
        {page === 'message' && <Chat/>}
      </Container>
    </div>
  );
};

export default OwnerPage;
