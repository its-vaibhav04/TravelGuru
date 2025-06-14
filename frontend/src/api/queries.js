export const fetchDestinations = async () => {
  const response = await fetch("/api/destinations", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("There was a problem while fetching the destinations!");
  }
  return response.json();
};

export const fetchTopSellingPackages = async () => {
  const response = await fetch("/api/packages/top-selling", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(
      "There was a problem while fetching the Top Selling Packs!"
    );
  }
  return response.json();
};
