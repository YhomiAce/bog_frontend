import React from "react";
import { Routes, Route,} from 'react-router-dom';
import SignClient from "./signupPages/SignClient";
import SignMain from "./signupPages/SignMain";
import SignSupply from "./signupPages/SignSupply";
import SignProfession from "./signupPages/SignProfession";

export default function SignupIndex() {
  return (
    <div>
      <Routes>
        <Route path="" element={<SignMain />} />
        <Route path="client" element={<SignClient />} />
        <Route path="profession" element={<SignProfession />} />
        <Route path="supply" element={<SignSupply />} />
      </Routes>
    </div>
  );
}
