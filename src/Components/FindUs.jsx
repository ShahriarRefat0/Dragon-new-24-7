import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start  join-item"><FaFacebook/> FaceBook</button>
          <button className="btn bg-base-100 justify-start  join-item"><FaTwitter/> Twitter</button>
          <button className="btn bg-base-100 justify-start  join-item"><FaInstagram/>Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;