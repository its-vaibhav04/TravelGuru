import DestinationCard from "./DestinationCard";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { useState } from "react";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { fetchDestinations } from "../api/queries";

export default function Destinations() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const { data: destinations = [], isLoading } = useQuery({
    queryKey: ["destinations"],
    queryFn: fetchDestinations,
  });

  const totalPages = Math.ceil(destinations.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDestinations = destinations.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const showPrevButton = currentPage > 0;
  const showNextButton = currentPage < totalPages - 1;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
            Explore Most Popular Destinations
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Plan your perfect trip with our most loved and best-selling tour
            packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentDestinations.map((destination) => (
            <DestinationCard
              key={destination._id}
              image={destination.image}
              title={destination.title}
              price={destination.price}
            />
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          {showPrevButton && (
            <button
              className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-200"
              onClick={goToPrevPage}
            >
              <ArrowBackSharpIcon />
            </button>
          )}
          {showNextButton && (
            <button
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200"
              onClick={goToNextPage}
            >
              <ArrowForwardSharpIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
