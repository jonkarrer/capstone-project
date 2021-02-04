const menuDataBase = {
  menuOne:{
    breakfast: [
      { 
        name: "Steak and Eggs", 
        description: "Charbroiled flank steak and scrambled eggs. Topped with roasted bell peppers.", 
        price: "$11",
        picture: '/assets/steak&eggs.jpg'
      },
      { 
        name: "Shrimp N` Grits", 
        description: "New Orleans style shrimp etoufee over yellow stone ground grits.", 
        price: "$10",
        picture: '/assets/shrimpngrit.jpg'
      },
      { 
        name: "Classic", 
        description: "3 scrambles eggs with salt and pepper, and 3 fluffy whole grain pancakes.", 
        price: "$8",
        picture: '/assets/pancakeegg.jpg'
      }
    ],
    vegan: [
      {
        name: "Cauliflower Osso Buco", 
        description: "French classic filled with vegetables. Cauliflower, potatoes, carrots, onions, and garlic braised in a white wine reduction.", 
        price: "$8",
        picture: '/assets/cauli.jpg'
      },
      {
        name: "Red Bean Jambalaya", 
        description: "Traditional cajun staple filled with red beans instead of meat", 
        price: "$8",
        picture: '/assets/redbean.jpg'
      },
      {
        name: "Lentil Dahl", 
        description: "Fresh vegetables and green lentils reduced to a thick stew. Seasoned with herbs, fresh ginger, and served over rice.", 
        price: "$8",
        picture: '/assets/lentil.jpg'
      }
    ],
    paleo: [
      {
        name: "Cowboy Chicken", 
        description: "Sweet and savory marinated chicken tenders grilled to perfection. Served with red skin mashed potatoes.", 
        price: "$8",
        picture: '/assets/chicken.jpg'
      },
      {
        name: "Garlic Ghee Salmon", 
        description: "Premium salmon filets lightly brushed a garlic butter and herb sauce and broiled. Served with green beans.", 
        price: "$10",
        picture: '/assets/salmon.jpg'
      },
      {
        name: "Honey Shrimp", 
        description: "Sautéed shrimp coated with our homemade honey and garlic rub. Served with rice.", 
        price: "$11",
        picture: '/assets/shrimp.jpg'
      }
    ],
    bulk: [
      {
        name: "Bulk Chicken", 
        description: "One Order = 1 pound", 
        price: "$8",
        picture: '/assets/chicken.jpg'
      },
      {
        name: "Bulk Shrimp", 
        description: "One Order = 1 pound", 
        price: "$16",
        picture: '/assets/shrimpbulk.jpg'
      },
      {
        name: "Bulk Broccoli", 
        description: "One Order = 1 pound", 
        price: "$5",
        picture: '/assets/broc.jpg'
      },
      {
        name: "Bulk Green Beans", 
        description: "One Order = 1 pound", 
        price: "$5",
        picture: '/assets/gb.jpg'
      },
      {
        name: "Bulk Red Potato", 
        description: "One Order = 1 pound", 
        price: "$5",
        picture: '/assets/redpot.jpg'
      },
      {
        name: "Bulk Rice", 
        description: "One Order = 1 pound", 
        price: "$5",
        picture: '/assets/rice.jpg'
      },
      {
        name: "Bulk Pasta", 
        description: "One Order = 1 pound", 
        price: "$5",
        picture: '/assets/pasta.jpg'
      }
    ]
  }
}
  
export default menuDataBase;
