import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarStudent from "./NavbarStudent/NavbarStudent";
import HousingCard from "../Shared/HousingCard/HousingCard";
import HousingDetail from "../Shared/HousingDetail/HousingDetail";

const StudentPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  function handleShowDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div>
      <NavbarStudent></NavbarStudent>
      <Container>
        <div className="d-flex">
          <HousingCard showDetails={showDetails} onShowDetails={handleShowDetails}></HousingCard>
          {showDetails && <HousingDetail />}
        </div>
      </Container>
    </div>
  );
};

export default StudentPage;