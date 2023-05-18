import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarStudent from "./NavbarStudent/NavbarStudent";
import Housing from "./Page/HousingPage/Housing";
import Chat from "../Chat/Chat";

const StudentPage = () => {

  const [page, setPage] = useState('Housing')

  return (
    <div>
      <NavbarStudent setPage={setPage}></NavbarStudent>
      <Container>
        {page === 'Housing' && <Housing/>}
        {page === 'Message' && <Chat/>}
      </Container>
    </div>
  );
};

export default StudentPage;
