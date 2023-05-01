import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";
import Housings from "./Page/Housings";
import FormHousingType from "./Page/HandleHousingType";


const AdminPage = () => {
  
  const [page, setPage] = useState('housings')

  return (
    <div>
      <NavbarAdmin setPage={setPage}></NavbarAdmin>
      <Container>
        {/*{page === 'housings' && <Housings/>}*/}
        {page === 'housingType' && <FormHousingType/>}
      </Container>
    </div>
  );
};

export default AdminPage;