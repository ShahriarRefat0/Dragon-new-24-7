
import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  

  return (
    <div className='p-5 flex flex-col gap-5'>
      <img src={news.image_url} alt="" />
      <h2 className="text-2xl font-bold">{news.title}</h2>
      <p className="text-accent text-sm">{news.details}</p>
      <Link className="btn btn-secondary text-white w-sm" to={`/category/${news.category_id}`}>
        {" "}
        <BiLeftArrowAlt />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;