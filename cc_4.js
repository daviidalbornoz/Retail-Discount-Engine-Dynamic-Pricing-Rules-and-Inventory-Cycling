let products = [
  { name: "Airpods", category: "electronics", price: 129.99, inventory: 10 },
  { name: "Jacket", category: "apparel", price: 49.99, inventory: 8 },
  { name: "Rice", category: "groceries", price: 7.99, inventory: 25 },
  { name: "All-Purpose Cleaner", category: "household", price: 12.99, inventory: 12 },
  { name: "Rope", category: "outdoors", price: 15.0, inventory: 6 }
];

console.log(products);

for (let product of products) {
  let discountRate = 0;

  switch (product.category) {
    case "electronics":
      discountRate = 0.20;
      break;
    case "apparel":
      discountRate = 0.15;
      break;
    case "groceries":
    case "household":
      discountRate = 0.10;
      break;
    default:
      discountRate = 0.00;
      break;
  }
    product.discountedPrice = product.price * (1 - discountRate); 
}

let customerType = "student";

let extraDiscountRate = 0;
if (customerType === "student") {
  extraDiscountRate = 0.05;
} else if (customerType === "senior") {
  extraDiscountRate = 0.07;
} else {
  extraDiscountRate = 0.00;
}

for (let i = 1; i <= 3; i++) {
  let total = 0;

  for (let j = 0; j < 2; j++) {
    if (products[j].inventory > 0) {
      total += products[j].discountedPrice;
      products[j].inventory -= 1;
    }
  }

  total = total * (1 - extraDiscountRate);}

let oneProduct = products[0];

for (let key in oneProduct) {
  console.log(key + ": " + oneProduct[key]);
}

for (let i = 0; i < products.length; i++) {
  console.log("\nProduct " + (i + 1));

  let entries = Object.entries(products[i]);

  for (let j = 0; j < entries.length; j++) {
    console.log(entries[j][0] + ": " + entries[j][1]);
  }}