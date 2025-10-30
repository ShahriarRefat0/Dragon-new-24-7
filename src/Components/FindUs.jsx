import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, Links } from 'react-router';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <Link
            to="https://www.facebook.com/"
            className="btn bg-base-100 justify-start  join-item"
          >
            <FaFacebook /> FaceBook
          </Link>
          <Link
            to="https://x.com/?lang=en"
            className="btn bg-base-100 justify-start  join-item"
          >
            <FaTwitter /> Twitter
          </Link>
          <Link
            to="https://www.instagram.com/"
            className="btn bg-base-100 justify-start  join-item"
          >
            <FaInstagram />
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindUs;