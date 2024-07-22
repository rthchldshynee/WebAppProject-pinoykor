import '../src/recipe.css'

export default function Recipe() {
    return (
        <>
            <h1>Add your Recipe Now!</h1>
            <form id="recipeForm">
                <label htmlFor="recipeTitle">*Title:</label>
                <input type="text" id="recipeTitle" name="recipeTitle" required /> <br /> <br />

                <label htmlFor="recipeDescription">*Description:</label>
                <textarea id="recipeDescription" name="recipeDescription" required></textarea> <br /> <br />

                <label htmlFor="recipeIngredients">*Ingredients:</label>
                <textarea id="recipeIngredients" name="recipeIngredients" required></textarea> <br /> <br />

                <label htmlFor="recipeInstructions">*Instructions:</label>
                <textarea id="recipeInstructions" name="recipeInstructions" required></textarea> <br /> <br />

                <label htmlFor="cookingTime">*Cooking Time (minutes):</label>
                <input type="number" id="cookingTime" name="cookingTime" required /> <br /> <br />

                <label htmlFor="difficultyLevel">*Difficulty Level:</label>
                <select id="difficultyLevel" name="difficultyLevel" required>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select> <br /> <br />

                <label htmlFor="cuisineType">*Cuisine:</label>
                <input type="text" id="cuisineType" name="cuisineType" required /> <br /> <br />

                <label htmlFor="videoURL">Video URL (optional):</label>
                <input type="url" id="videoURL" name="videoURL" /> <br /> <br />

                <label htmlFor="nutritionInfo">Nutrition Information:</label>
                <textarea id="nutritionInfo" name="nutritionInfo"></textarea> <br /> <br />

                <h2>Added By</h2>
                
                <label htmlFor="myFName">*First Name:</label>
                <input type="text" id="myFName" name="myFName" required autoFocus /> <br /> <br />

                <label htmlFor="myLName">*Last Name:</label>
                <input type="text" id="myLName" name="myLName" required /> <br /> <br />

                <label htmlFor="myEmail">*Email:</label>
                <input type="email" id="myEmail" name="myEmail" required /> <br /> <br />

                <input type="submit" className="submit" value="Submit Recipe" />
            </form>

            <br/><br/><br/><br/><br/>
        </>
    );
}