import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarStudent from "./NavbarStudent/NavbarStudent";
import Housing from "./Page/HousingPage/Housing";

const StudentPage = () => {

  const [page, setPage] = useState('Housing')

  return (
    <div>
      <NavbarStudent></NavbarStudent>
      <Container>
        {page === 'Housing' && <Housing/>}
        {/*{page === 'Message' && <Message/>}*/}
      </Container>
    </div>
  );
};

export default StudentPage;
