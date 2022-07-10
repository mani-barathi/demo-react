import React from "react";
import { useParams } from "react-router-dom";

function SpecificPersonPage() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      Welcome {params.fname} {params.lname}
    </div>
  );
}

export default SpecificPersonPage;
