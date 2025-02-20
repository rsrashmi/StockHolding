export const fetchHoldings = async () => {
  try {
    const response = await fetch('https://json-jvjm.onrender.com/test');
    const data = await response.json();
    return data.userHolding;
  } catch (error) {
    console.error("Error fetching holdings:", error);
    return [];
  }
};
