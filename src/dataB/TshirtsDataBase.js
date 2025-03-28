const Tshirts = {
  Men: [
    {
      id: 1000, // أرقام بالآلاف للرجال
      img: require("../imgs/tshirts/tshirt1.webp"),
      // front: require("../imgs/tshirts/tshirt1white-Front.jpg"),
      // back: require("../imgs/tshirts/tshirt1white-back.jpg"),
      price: 100,
      desc: `Are you looking for a great print at an amazing low cost on our most versatile white garment? Our Budget T-Shirt is the way to go! 
      Make your own design on this garment, and we'll print it using our high-quality technology. You can be creative with text, images, or our custom designs.  
    
      Don't be fooled by the price—the fine knit ensures excellent print quality.  
    
      **Uneek Olympic T-Shirt**  
      - 100% Cotton  
      - Fine gauge knit (141gsm)  
      - Shoulder-to-shoulder taping  
      - Rolled forward shoulders for a better fit  
      - Front cover-seaming on the collar  
    
      **To fit chest sizes:**  
      - S: 34/36"  
      - M: 38/40"  
      - L: 42/44"  
      - XL: 46/48"  
      - 2XL: 50/52"`,
      gender: "Men",
      typo: "Trianglecollar",
      season: "summer",
      colores: ["white", "red", "black", "pink", "blue"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    },
    {
      id: 1001,
      img: require("../imgs/tshirts/tshirt1.webp"),
      price: 200,
      desc: "Economic T-shirt",
      gender: "Men",
      typo: "sports",
      season: "winter",
      colores: ["white", "red", "black", "pink"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    },
    {
      id: 1002,
      img: require("../imgs/tshirts/tshirt1.webp"),
      price: 300,
      desc: "Economic T-shirt",
      gender: "Men",
      typo: "Economictshiet",
      season: "summer",
      colores: ["white", "red", "black", "pink"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    },
  ],
  Woman: [
    {
      id: 2000, // أرقام بالآلاف للنساء
      img: require("../imgs/tshirts/womantshirt1.webp"),
      price: 100,
      desc: "Economic T-shirt",
      gender: "Woman",
      typo: "Trianglecollar",
      season: "winter",
      colores: ["white", "red", "black", "pink"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    },
    {
      id: 2001,
      img: require("../imgs/tshirts/womantshirt1.webp"),
      price: 200,
      desc: "Economic T-shirt",
      gender: "Woman",
      typo: "roundshirtcollar",
      season: "summer",
      colores: ["white", "red", "black", "pink"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    },
  ],
  Kids: [
    {
      id: 3000, // أرقام بالآلاف للأطفال
      img: require("../imgs/tshirts/kidstshirt1.webp"),
      price: 100,
      desc: "Economic T-shirt",
      gender: "Kids",
      typo: "newbaby",
      season: "winter",
      colores: ["white", "red", "black", "pink"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    },
    {
      id: 3001,
      img: require("../imgs/tshirts/kidstshirt1.webp"),
      price: 200,
      desc: "Economic T-shirt",
      gender: "Kids",
      typo: "roundshirtcollar",
      season: "summer",
      colores: ["white", "red", "black", "pink"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    },
    {
      id: 3002,
      img: require("../imgs/tshirts/kidstshirt1.webp"),
      price: 300,
      desc: "Economic T-shirt",
      gender: "Kids",
      typo: "sports",
      season: "winter",
      colores: ["white", "red", "black", "pink"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    },
  ],
};

export default Tshirts;
