import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

test("renders product card", () => {
  const product = { name: "Laptop", price: 50000, category: "Electronics" };

  render(<ProductCard product={product} />);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
});