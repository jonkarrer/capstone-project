const menuDataBase = {
  menuOne:{
    breakfast: [
      { 
        name: "Steak and Eggs", 
        description: "Charbroiled flank steak and scrambled eggs. Topped with roasted bell peppers.", 
        price: "$11"
      },
      { 
        name: "Shrimp N` Grits", 
        description: "New Orleans style shrimp etoufee over yellow stone ground grits.", 
        price: "$10"
      },
      { 
        name: "Classic", 
        description: "3 scrambles eggs with salt and pepper, and 3 fluffy whole grain pancakes.", 
        price: "$8"
      }
    ],
    vegan: [
      {
        name: "Cauliflower Osso Buco", 
        description: "French classic filled with vegetables. Cauliflower, potatoes, carrots, onions, and garlic braised in a white wine reduction.", 
        price: "$8"
      },
      {
        name: "Red Bean Jambalaya", 
        description: "Traditional cajun staple filled with red beans instead of meat", 
        price: "$8"
      },
      {
        name: "Lentil Dahl", 
        description: "Fresh vegetables and green lentils reduced to a thick stew. Seasoned with herbs, fresh ginger, and served over rice.", 
        price: "$8"
      }
    ]
  }
}
  
export default menuDataBase;
