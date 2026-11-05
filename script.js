// ========== 1) البيانات: array فيها objects ==========
// كل وجبة object، وجواها arrays (ingredients, steps) و object تاني (nutrition)
var meals = [
  {
    name: "French Onion Soup",
    category: "Mediterranean",
    difficulty: "Intermediate",
    rating: 4.7,
    reviews: 267,
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    image: "https://loremflickr.com/600/800/soup?lock=1",
    description: "Rich beef broth with caramelized onions and melted cheese",
    ingredients: ["4 large onions, thinly sliced", "4 tablespoons butter", "1 liter beef broth", "1/2 cup white wine", "2 bay leaves", "Fresh thyme", "Baguette slices", "200g Gruyère cheese, grated"],
    steps: ["Cook the onions in butter for 40 minutes until golden", "Add the wine and let it reduce", "Add broth, bay leaves and thyme, then simmer", "Top with baguette and cheese", "Grill until the cheese melts"],
    nutrition: { calories: "410 kcal", protein: "18g", carbs: "32g", fat: "22g", fiber: "3g", sodium: "820mg" },
    tip: "Cook the onions slowly. Patience is the secret of the flavor."
  },
  {
    name: "Creamy Spaghetti Carbonara",
    category: "Italian",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c987e47793-062e728ad4ccc343589c.png",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    ingredients: ["400g spaghetti pasta", "4 eggs", "100g parmesan cheese", "150g pancetta", "Black pepper"],
    steps: ["Boil the spaghetti", "Fry the pancetta", "Mix the eggs and cheese", "Combine everything off the heat"],
    nutrition: { calories: "520 kcal", protein: "28g", carbs: "62g", fat: "18g", fiber: "3g", sodium: "680mg" },
    tip: "Use room temperature eggs for a smoother sauce consistency"
  },
  {
    name: "Koshari",
    category: "Egyptian",
    difficulty: "Medium",
    rating: 4.9,
    reviews: 512,
    prepTime: 20,
    cookTime: 50,
    servings: 4,
    image: "https://loremflickr.com/600/800/lentils,rice?lock=2",
    description: "Egypt's favorite street food: rice, lentils, pasta and spicy tomato sauce",
    ingredients: ["1 cup rice", "1 cup brown lentils", "1 cup macaroni", "2 onions", "Tomato sauce", "Garlic vinegar"],
    steps: ["Boil the lentils", "Cook the rice and macaroni", "Fry the onions until crispy", "Prepare the tomato sauce", "Layer everything and serve"],
    nutrition: { calories: "480 kcal", protein: "16g", carbs: "85g", fat: "9g", fiber: "10g", sodium: "540mg" },
    tip: "Add the crispy onions at the very end so they stay crunchy."
  },
  {
    name: "Grilled Chicken with Rice",
    category: "Main Dish",
    difficulty: "Easy",
    rating: 4.6,
    reviews: 189,
    prepTime: 15,
    cookTime: 40,
    servings: 3,
    image: "https://loremflickr.com/600/800/grilled,chicken?lock=3",
    description: "Juicy marinated chicken served with fluffy rice",
    ingredients: ["1 whole chicken", "2 cups rice", "Garlic", "Lemon", "Spices", "Butter"],
    steps: ["Marinate the chicken", "Grill it for 40 minutes", "Cook the rice with butter", "Serve together"],
    nutrition: { calories: "620 kcal", protein: "45g", carbs: "58g", fat: "22g", fiber: "2g", sodium: "710mg" },
    tip: "Marinate the chicken for at least one hour."
  },
  {
    name: "Molokhia with Chicken",
    category: "Egyptian",
    difficulty: "Medium",
    rating: 4.8,
    reviews: 301,
    prepTime: 20,
    cookTime: 60,
    servings: 4,
    image: "https://loremflickr.com/600/800/green,soup?lock=4",
    description: "Green molokhia soup with garlic and coriander, served over rice",
    ingredients: ["Molokhia leaves", "Chicken broth", "Garlic", "Coriander", "Ghee", "Rice"],
    steps: ["Boil the chicken for broth", "Add the molokhia to the hot broth", "Fry garlic and coriander in ghee", "Add it to the pot", "Serve with rice"],
    nutrition: { calories: "450 kcal", protein: "30g", carbs: "48g", fat: "14g", fiber: "5g", sodium: "620mg" },
    tip: "Do not let molokhia boil hard after adding it."
  },
  {
    name: "Beef Burger",
    category: "Fast Food",
    difficulty: "Easy",
    rating: 4.5,
    reviews: 410,
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    image: "https://loremflickr.com/600/800/burger?lock=5",
    description: "Homemade juicy beef burger with cheese and fresh vegetables",
    ingredients: ["300g minced beef", "2 burger buns", "Cheese slices", "Lettuce", "Tomato", "Onion"],
    steps: ["Shape the beef into patties", "Grill each side for 4 minutes", "Add the cheese", "Build the burger"],
    nutrition: { calories: "680 kcal", protein: "38g", carbs: "45g", fat: "36g", fiber: "3g", sodium: "900mg" },
    tip: "Don't press the patty while cooking, you will lose the juice."
  },
  {
    name: "Shakshuka",
    category: "Breakfast",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 156,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    image: "https://loremflickr.com/600/800/shakshuka,eggs?lock=6",
    description: "Eggs cooked in a spicy tomato and pepper sauce",
    ingredients: ["4 eggs", "4 tomatoes", "1 green pepper", "1 onion", "Garlic", "Cumin"],
    steps: ["Fry the onion and pepper", "Add tomatoes and spices", "Make small holes and crack the eggs", "Cover until the eggs are set"],
    nutrition: { calories: "260 kcal", protein: "16g", carbs: "14g", fat: "15g", fiber: "4g", sodium: "480mg" },
    tip: "Serve it hot with fresh bread."
  },
  {
    name: "Fried Fish with Tahini",
    category: "Seafood",
    difficulty: "Medium",
    rating: 4.6,
    reviews: 98,
    prepTime: 20,
    cookTime: 25,
    servings: 3,
    image: "https://loremflickr.com/600/800/fried,fish?lock=7",
    description: "Crispy fried fish served with tahini sauce and salad",
    ingredients: ["1 kg fish", "Flour", "Cumin", "Lemon", "Tahini", "Oil for frying"],
    steps: ["Clean and season the fish", "Coat it with flour", "Fry until golden", "Serve with tahini and lemon"],
    nutrition: { calories: "540 kcal", protein: "42g", carbs: "20g", fat: "32g", fiber: "2g", sodium: "590mg" },
    tip: "Dry the fish well before frying so the oil doesn't splash."
  },
  {
    name: "Stuffed Grape Leaves",
    category: "Egyptian",
    difficulty: "Hard",
    rating: 4.9,
    reviews: 143,
    prepTime: 60,
    cookTime: 60,
    servings: 5,
    image: "https://loremflickr.com/600/800/dolma?lock=8",
    description: "Grape leaves rolled with seasoned herbed rice",
    ingredients: ["Grape leaves", "2 cups rice", "Parsley", "Dill", "Tomatoes", "Onions"],
    steps: ["Mix the rice with herbs and spices", "Roll the mixture in the leaves", "Arrange them in a pot", "Cook slowly for 1 hour"],
    nutrition: { calories: "380 kcal", protein: "8g", carbs: "60g", fat: "12g", fiber: "6g", sodium: "450mg" },
    tip: "Place a plate on top so the rolls don't open while cooking."
  }
];

// ========== 2) متغيرات بتفتكر الحالة الحالية ==========
var currentMeal = meals[0];   // الوجبة المعروضة دلوقتي
var lastIndex = -1;           // رقم آخر وجبة ظهرت

// ========== 3) اختيار رقم عشوائي (من غير تكرار ورا بعض) ==========
function getRandomIndex() {
  var index = Math.floor(Math.random() * meals.length);

  if (index === lastIndex && meals.length > 1) {
    index = (index + 1) % meals.length;
  }

  lastIndex = index;
  return index;
}

// ========== 4) بناء قائمة بالأرقام البرتقالي (loop عادي) ==========
function buildList(items, tag) {
  var html = "<" + tag + ">";
  for (var i = 0; i < items.length; i++) {
    html += '<li><span class="num">' + (i + 1) + "</span>" + items[i] + "</li>";
  }
  html += "</" + tag + ">";
  return html;
}

// سطر واحد في جدول الـ Nutrition
function nutritionRow(label, value) {
  return '<div class="nutrition-row"><span>' + label + "</span><strong>" + value + "</strong></div>";
}

// ========== 5) عرض محتوى الـ Tab المختار ==========
function showTab(tabName) {
  var content = "";

  if (tabName === "ingredients") {
    content = buildList(currentMeal.ingredients, "ul");
  } else if (tabName === "instructions") {
    content = buildList(currentMeal.steps, "ol");
  } else if (tabName === "nutrition") {
    var n = currentMeal.nutrition;
    content += nutritionRow("Calories", n.calories);
    content += nutritionRow("Protein", n.protein);
    content += nutritionRow("Carbohydrates", n.carbs);
    content += nutritionRow("Fat", n.fat);
    content += nutritionRow("Fiber", n.fiber);
    content += nutritionRow("Sodium", n.sodium);
  } else if (tabName === "tips") {
    content = '<div class="tip"><span>💡</span><span>' + currentMeal.tip + "</span></div>";
  }

  document.getElementById("tab-content").innerHTML = content;

  // نشيل active من كل الـ tabs ونحطه على اللي اتداس عليه
  var tabNames = ["ingredients", "instructions", "nutrition", "tips"];
  for (var i = 0; i < tabNames.length; i++) {
    document.getElementById("btn-" + tabNames[i]).className = "tab-btn";
  }
  document.getElementById("btn-" + tabName).className = "tab-btn active";
}

// ========== 6) عرض الوجبة كاملة ==========
function displayMeal(meal) {
  var totalTime = meal.prepTime + meal.cookTime;
  var html = "";

  // --- الجانب الشمال: الصورة ---
  html += '<div class="image-side">';
  html += '<img src="' + meal.image + '" alt="' + meal.name + '" onerror="this.style.display=\'none\'">';
  html += '<div class="rating">⭐ <strong>' + meal.rating + "</strong> <span>(" + meal.reviews + " reviews)</span></div>";
  html += '<div class="info-box">';
  html += '<div><span class="icon">🕒</span><br>Prep Time<strong>' + meal.prepTime + " min</strong></div>";
  html += '<div><span class="icon">🍳</span><br>Cook Time<strong>' + meal.cookTime + " min</strong></div>";
  html += '<div><span class="icon">👥</span><br>Servings<strong>' + meal.servings + " people</strong></div>";
  html += "</div>";
  html += "</div>";

  // --- الجانب اليمين: التفاصيل ---
  html += '<div class="details-side">';
  html += '<span class="tag tag-level">' + meal.difficulty + "</span>";
  html += '<span class="tag tag-category">' + meal.category + "</span>";
  html += "<h2>" + meal.name + "</h2>";
  html += '<p class="description">' + meal.description + "</p>";

  // لو الوقت الكلي أكتر من 45 دقيقة نظهر التحذير
  if (totalTime > 45) {
    html += '<div class="warning"><strong>⚠️ Extended Preparation Time</strong>This recipe requires more than 45 minutes to prepare. Plan accordingly!</div>';
  }

  // الـ Tabs
  html += '<div class="tabs">';
  html += '<button class="tab-btn" id="btn-ingredients" onclick="showTab(\'ingredients\')">Ingredients</button>';
  html += '<button class="tab-btn" id="btn-instructions" onclick="showTab(\'instructions\')">Instructions</button>';
  html += '<button class="tab-btn" id="btn-nutrition" onclick="showTab(\'nutrition\')">Nutrition</button>';
  html += '<button class="tab-btn" id="btn-tips" onclick="showTab(\'tips\')">Chef\'s Tips</button>';
  html += "</div>";

  html += '<div id="tab-content"></div>';
  html += '<button id="another-btn" onclick="showRandomMeal()">Try Another Recipe</button>';
  html += "</div>";

  document.getElementById("meal-card").innerHTML = html;

  // أول tab بيظهر دايماً هو Ingredients
  showTab("ingredients");
}

// ========== 7) الـ function الرئيسية ==========
function showRandomMeal() {
  var index = getRandomIndex();
  currentMeal = meals[index];
  displayMeal(currentMeal);
}

// أول ما الصفحة تفتح
showRandomMeal();