import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";
import HousingCard from "../Shared/HousingCard/HousingCard";
import HousingDetail from "../Shared/HousingDetail/HousingDetail";

const AdminPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  function handleShowDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      <Container>
        <div className="d-flex">
          <HousingCard showDetails={showDetails} onShowDetails={handleShowDetails}></HousingCard>
          {showDetails && <HousingDetail />}
        </div>
      </Container>
    </div>
  );
};

export default AdminPage;
