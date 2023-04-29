import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarOwner from "./NavbarOwner/NavbarOwner";
import HousingCard from "../Shared/HousingCard/HousingCard";
import HousingDetail from "../Shared/HousingDetail/HousingDetail";

const OwnerPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  function handleShowDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div>
      <NavbarOwner></NavbarOwner>
      <Container>
        <div className="d-flex">
          <HousingCard showDetails={showDetails} onShowDetails={handleShowDetails}></HousingCard>
          {showDetails && <HousingDetail />}
        </div>
      </Container>
    </div>
  );
};

export default OwnerPage;
