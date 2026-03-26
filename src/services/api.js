const API_BASE_URL = "https://fakestoreapi.com";
export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);

    const data = await response.json();
    return data;
  } catch (error) {
    alert("Failed to fetch products. Please try again later.");
    console.error("Error fetching products:", error);
    return [];
  }
}
