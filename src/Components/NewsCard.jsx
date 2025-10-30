import React from "react";
import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
    id,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-CA"
  );

  return (
    <div className="border border-blue-300 rounded-lg shadow-sm bg-base-100">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4 bg-base-200 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Thumbnail */}
      <div className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-md w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-sm text-gray-600">
        <p className="line-clamp-3">{details}</p>
        <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold hover:underline mt-1">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t border-gray-200">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-600 font-medium">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
