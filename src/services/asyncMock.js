const products = [
  {
    title: "Saco Over",
    id: 1,
    category: "sacos",
    description: "Color: Beige",
    price: 15000,
    stock: 0,
    img: "/assets/sacooverbeige.jpg",
  },
  {
    title: "Saco Over",
    id: 2,
    category: "sacos",
    description: "Color: Negro",
    price: 15000,
    stock: 10,
    img: "/assets/sacoovernegro.jpg",
  },
  {
    title: "Saco Over",
    id: 3,
    category: "sacos",
    description: "Color: Naranja",
    price: 15000,
    stock: 15,
    img: "/assets/sacoovernaranja.jpg",
  },
  {
    title: "Kimono",
    id: 4,
    category: "kimonos",
    description: "Color: Blanco",
    price: 15000,
    stock: 15,
    img: "/assets/kimonoblanco.jpg",
  },
  {
    title: "Kimono",
    id: 5,
    category: "kimonos",
    description: "Tipo: Gucci",
    price: 15000,
    stock: 15,
    img: "/assets/kimonogucci.jpg",
  },
  {
    title: "Kimono",
    id: 6,
    category: "kimonos",
    description: "Color: Naranja",
    price: 15000,
    stock: 15,
    img: "/assets/kimononaranja.jpg",
  },
  {
    title: "Satin",
    id: 7,
    category: "satin",
    description: "Color: Verde",
    price: 15000,
    stock: 15,
    img: "/assets/satinverde.jpg",
  },
];

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getDataByID = (idURL) => {
  return new Promise((resolve, reject) => {
    const productRequestd = products.find((prod) => prod.id == Number(idURL));
    setTimeout(() => {
      resolve(productRequestd);
    }, 1500);
  });
};

export const getCategoryId = (categoryId) => {
  return new Promise((resolve) => {
    const categoryRequestd = products.filter((prod) => {
      return prod.category.toLowerCase() === categoryId.toLowerCase();
    });
    setTimeout(() => {
      resolve(categoryRequestd);
    }, 1500);
  });
};
