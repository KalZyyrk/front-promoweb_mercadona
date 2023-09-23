export const productsMock = [
  {
    id: 1,
    name: "Produit 1",
    description: "Description du produit 1",
    price: 10.99,
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    category: {
      id: 1,
      name: "Catégorie 1",
    },
  },
  {
    id: 2,
    name: "Produit 2",
    description: "Description du produit 2",
    price: 15.52,
    imageUrl: "https://example.com/image2.jpg",
    category: {
      id: 2,
      name: "Catégorie 2",
    },
    promotion: true,
  },
  {
    id: 3,
    name: "Produit 3",
    description: "Description du produit 3",
    price: 8.75,
    imageUrl: "https://example.com/image3.jpg",
    category: {
      id: 1,
      name: "Catégorie 1",
    },
  },
  {
    id: 4,
    name: "Produit 4",
    description: "Description du produit 4",
    price: 12.25,
    imageUrl: "https://example.com/image4.jpg",
    category: {
      id: 3,
      name: "Catégorie 3",
    },
  },
  {
    id: 5,
    name: "Produit 5",
    description: "Description du produit 5",
    price: 18.99,
    imageUrl: "https://example.com/image5.jpg",
    category: {
      id: 2,
      name: "Catégorie 2",
    },
  },
];

export const categoriesMock = [
  {
    id: 1,
    name: "Catégorie 1",
  },
  {
    id: 2,
    name: "Catégorie 2",
  },
  {
    id: 3,
    name: "Catégorie 3",
  },
];
