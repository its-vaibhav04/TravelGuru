import Button from "./Button";

const DestinationCard = ({
  image,
  title,
  price = null,
  className = "",
  button = false,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-teal-600 uppercase tracking-wide mx-auto">
            {title}
          </h3>
          {price && (
            <div className="text-right">
              <span className="text-sm text-gray-600">Starting From</span>
              <div className="text-lg font-bold text-teal-600">{price}</div>
            </div>
          )}
        </div>
      </div>
      {button && <Button text="View Details" />}
    </div>
  );
};

export default DestinationCard;
