import '../src/Recipe.css';

export default function Recipe() {
    return (
        <div className="recipe-page">
            <form id="recipeForm">
                    <h1>Add your Recipe Now!</h1>
                <label htmlFor="recipeTitle">*Title:</label>
                <input type="text" id="recipeTitle" name="recipeTitle" required />

                <label htmlFor="recipeDescription">*Description:</label>
                <textarea id="recipeDescription" name="recipeDescription" required></textarea>

                <label htmlFor="recipeIngredients">*Ingredients:</label>
                <textarea id="recipeIngredients" name="recipeIngredients" required></textarea>

                <label htmlFor="recipeInstructions">*Instructions:</label>
                <textarea id="recipeInstructions" name="recipeInstructions" required></textarea>

                <label htmlFor="cookingTime">*Cooking Time (minutes):</label>
                <input type="number" id="cookingTime" name="cookingTime" required />

                <label htmlFor="difficultyLevel">*Difficulty Level:</label>
                <select id="difficultyLevel" name="difficultyLevel" required>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <label htmlFor="cuisineType">*Cuisine:</label>
                <input type="text" id="cuisineType" name="cuisineType" required />

                <label htmlFor="videoURL">Video URL (optional):</label>
                <input type="url" id="videoURL" name="videoURL" />

                <label htmlFor="nutritionInfo">Nutrition Information:</label>
                <textarea id="nutritionInfo" name="nutritionInfo"></textarea>

                <h2>Added By</h2>

                <label htmlFor="myFName">*First Name:</label>
                <input type="text" id="myFName" name="myFName" required autoFocus />

                <label htmlFor="myLName">*Last Name:</label>
                <input type="text" id="myLName" name="myLName" required />

                <label htmlFor="myEmail">*Email:</label>
                <input type="email" id="myEmail" name="myEmail" required />

                <input type="submit" className="submit" value="Submit Recipe" />
            </form>
        </div>
    );
}
