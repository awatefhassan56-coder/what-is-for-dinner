var recipes = [
  {
    title: "French Onion Soup",
    img: "./imges/photo-1546069901-ba9599a7e63c.jpg",
    rating: 4.7,
    reviews: "(267 reviews)",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",

    description:
      "A rich, comforting soup made with caramelized onions and savory broth.",

    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter",
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter",
      "4 tablespoons butter"
    ],

    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3–5 minutes."
    ],

    chefsTips: [
      "Caramelize onions slowly for deeper flavor.",
      "Use a mix of Gruyère and mozzarella for best topping.",
      "Add a splash of vinegar at the end for extra brightness."
    ],

    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg"
    }
  },

  {
    title: "Chicken Alfredo Pasta",
    img: "./imges/photo-1547592166-23ac45744acd.jpg",
    rating: 4.8,
    reviews: "(421 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",

    description:
      "Creamy and delicious fettuccine pasta tossed in a rich Alfredo sauce.",

    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter"
    ],

    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley."
    ],

    chefsTips: [
      "Add pasta water to adjust sauce consistency.",
      "Use freshly grated parmesan for richer flavor.",
      "Sear chicken on high heat for golden color."
    ],

    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg"
    }
  },

  {
    title: "Beef Tacos",
    img: "./imges/photo-1559314809-0d155014e29e.jpg",
    rating: 4.2,
    reviews: "(310 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",

    description:
      "Crispy tacos filled with seasoned beef and fresh toppings.",

    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese"
    ],

    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately."
    ],

    chefsTips: [
      "Toast tortillas for extra flavor.",
      "Add lime juice for freshness.",
      "Top with salsa or sour cream for balance."
    ],

    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg"
    }
  },

  {
    title: "Vegetable Stir Fry",
    img: "./imges/photo-1455619452474-d2be8b1e70cd.jpg",
    rating: 4.6,
    reviews: "(189 reviews)",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",

    description:
      "A quick, healthy stir fry packed with colorful vegetables.",

    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil"
    ],

    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles."
    ],

    chefsTips: [
      "Use high heat to keep veggies crispy.",
      "Add ginger for extra aroma.",
      "Don’t overcrowd the pan."
    ],

    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg"
    }
  },

  {
    title: "Margherita Pizza",
    img: "./imges/photo-1455619452474-d2be8b1e70cd.jpg",
    rating: 4.9,
    reviews: "(502 reviews)",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",

    description:
      "Classic pizza topped with tomato sauce, fresh mozzarella, and basil.",

    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil"
    ],

    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving."
    ],

    chefsTips: [
      "Use a pizza stone for the best crust.",
      "Add basil after baking to avoid burning.",
      "Drizzle olive oil right before serving."
    ],

    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg"
    }
  }
];

var lastRandom = null;

document.getElementById("my-button").onclick = function () {
 var index;

  do {
    index = Math.floor(Math.random() * recipes.length); 
  } while (index === lastRandom); 

  lastRandom = index;
console.log(recipes[index]);
 showMails( recipes[index]);

};
 showMails( recipes[0]);

  function showMails( mail){
        document.getElementById("reviewsSpan").innerHTML=mail.reviews;
        document.getElementById("reviewsP").innerHTML=mail.rating;
        document.getElementById("CookTime").innerHTML=mail.cookTime;
        document.getElementById("Servings").innerHTML=mail.servings;
        document.getElementById("PrepTime").innerHTML=mail.prepTime;
        document.getElementById("level").innerHTML=mail.level;
        document.getElementById("cuisine").innerHTML=mail.cuisine;
        document.getElementById("title").innerHTML=mail.title;
        document.getElementById("descraption").innerHTML=mail.description;
        document.getElementById("meal-img").src = mail.img;
       var ingredientsList = "";
//ingredients tap
var ingredientsList = "";

for (var i = 0; i < mail.ingredients.length; i++) {
   
    ingredientsList += `
        <li class="ingredient-item">
            <div class="item-number  item-number1">${i + 1}</div> 
            <div class="item-text">${mail.ingredients[i]}</div>
        </li>
    `;
}

document.getElementById("ingredients-list").innerHTML = ingredientsList;
// instruction tap
var instructionList = "";

for (var i = 0; i < mail.instruction.length; i++) {
  
  instructionList += `
    <li class="instruction-item">
      <div class="item-number">${i + 1}</div>
      <div class="item-text">${mail.instruction[i]}</div>
    </li>
  `;
}

document.getElementById("instruction-list").innerHTML = instructionList;
//nutrition tap
var nutritionList = "";

// السعرات الحراري)
nutritionList += `
<li class="nutrition-card calories">
    <div class="card-icon-name">
        <div class="card-icon-wrapper"><i class="fa-solid fa-fire "></i></div>
        <div class="card-name">Calories</div>
    </div>
    <div class="card-value">${mail.nutrition.calories}</div>
</li>`;

// البروتين (أزرق)
nutritionList += `
<li class="nutrition-card protein">
    <div class="card-icon-name">
        <div class="card-icon-wrapper"><i class="fa-solid fa-dumbbell"></i></div>
        <div class="card-name">Protein</div>
    </div>
    <div class="card-value">${mail.nutrition.protein}</div>
</li>`;

// الكربوهيدرات (أصفر)
nutritionList += `
<li class="nutrition-card carbs">
    <div class="card-icon-name">
        <div class="card-icon-wrapper"><i class="fa-solid fa-wheat-awn"></i></div>
        <div class="card-name">Carbohydrates</div>
    </div>
    <div class="card-value">${mail.nutrition.carbs}</div>
</li>`;

// الدهون (أحمر فاتح)
nutritionList += `
<li class="nutrition-card fat">
    <div class="card-icon-name">
        <div class="card-icon-wrapper"><i class="fa-solid fa-droplet"></i></div>
        <div class="card-name">Fat</div>
    </div>
    <div class="card-value">${mail.nutrition.fat}</div>
</li>`;

// الألياف (أخضر)
nutritionList += `
<li class="nutrition-card fiber">
    <div class="card-icon-name">
        <div class="card-icon-wrapper"><i class="fa-solid fa-seedling"></i></div>
        <div class="card-name">Fiber</div>
    </div>
    <div class="card-value">${mail.nutrition.fiber}</div>
</li>`;

// الصوديوم (بنفسجي/وردي)
nutritionList += `
<li class="nutrition-card sodium">
    <div class="card-icon-name">
        <div class="card-icon-wrapper"><i class="fa-solid fa-cube"></i></div>
        <div class="card-name">Sodium</div>
    </div>
    <div class="card-value">${mail.nutrition.sodium}</div>
</li>`;

document.getElementById("nutrition-list").innerHTML = nutritionList;

//chefsTips tap


// Chef's Tips tap
var tipsList = "";

for (var i = 0; i < mail.chefsTips.length; i++) {
  tipsList += `
    <li>
      <i class="fa-solid fa-check"></i> 
      <span>${mail.chefsTips[i]}</span>
    </li>
  `;
}

document.getElementById("chefsTips-list").innerHTML = tipsList;

var prep = parseInt(mail.prepTime);  
var cook = parseInt(mail.cookTime);  
var totalTime = prep + cook;

var exeedBox = document.querySelector(".exeedTime");
console.log("Total Time:", totalTime, "minutes");

if (totalTime > 45) {
  exeedBox.classList.remove("d-none");   
} else {
  exeedBox.classList.add("d-none");      
}



        




    

}