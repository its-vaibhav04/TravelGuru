import DestinationCard from "./DestinationCard";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { fetchTopSellingPackages } from "../api/queries";

function TopSelling() {
  const { data: tourpacks = [], isLoading } = useQuery({
    queryKey: ["top-selling-packages"],
    queryFn: fetchTopSellingPackages,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
            Top Selling Tour Packages of India
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with our latest news and happenings through Informe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tourpacks.map((destination) => (
            <DestinationCard
              key={destination._id}
              image={destination.image}
              title={destination.title}
              button={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
