async function fetchRecipe() {
    let response = await fetch("https://dummyjson.com/recipes");
    if (response.ok) {
        let json = await response.json();
        json.recipes.forEach((recipe, index) => {
            console.log(`${index + 1}. ${recipe.name}`);
        });
    } else {
        console. log(" HTTP-Error: " + response. status);
    }
}
fetchRecipe();