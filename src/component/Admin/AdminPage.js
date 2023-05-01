import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";
import Housing from "./Page/HousingPage/Housing";
import FormHousingType from "./Page/HandleHousingTypePage/HandleHousingType";


const AdminPage = () => {
  
  const [page, setPage] = useState('Housing')

  return (
    <div>
      <NavbarAdmin setPage={setPage}></NavbarAdmin>
      <Container>
        {page === 'Housing' && <Housing/>}
        {page === 'HousingType' && <FormHousingType/>}
      </Container>
    </div>
  );
};

export default AdminPage;