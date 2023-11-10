export const formatPrice = (price: string) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(parseInt(price, 10));