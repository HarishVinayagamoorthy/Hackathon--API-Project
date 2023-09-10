const inputValue = document.getElementById("inputValue");
const Searchbtn = document.getElementById("Search-btn");

const getApi = async (searchValue) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
 
try{
  const response = await fetch(url);
  const data = await response.json();
  const div1 = document.querySelector(".api-data");
  div1.innerHTML=" "
  if (data.meals) {
    // Check if the 'meals' property exists in the response data
    const meals = data.meals;
     
    // Use a for loop to iterate through the list of meals
    for (let i = 0; i < meals.length; i++) {
      const meal = meals[i];
      const mealName = meal.strMeal;

      const div = document.createElement("div");
      const div1 = document.querySelector(".api-data");

   div.innerHTML = 
      
    `<div class="card" style="">

    <img src="${meals[i].strMealThumb}" class=" card-img-top shadow-5-strong p-4 mt-4"  >
     
    <div class="card-body">

    <h5 class="card-title d-flex justify-content-center ">${meals[i].strMeal}</h5>

     <a href=" ${meals[i].strYoutube}" class="btn mt-3  btn-dark  " style="  " >Wacth Video</a>

    </div>

    </div>`;

      // Print or do something with the meal name
      //   console.log(meals)
      document.body.append(div1);
      div1.append(div);
    }
  } else {
    console.log("No meals found.");
  }
} catch (error){
  console.error("There is an error occurred:",error);
}


};

getApi(inputValue.value);

Searchbtn.addEventListener("click", function (ele) {
  ele.preventDefault();
  const value = inputValue.value;
  getApi(value);
});
