import '../src/index.css'; // Ensure this is the correct path to your CSS file

const Home = () => {
    return (
        <div className="home-content">
            <div className="magicChefContent">
                <p className="subtext">Welcome to Magic Chef! Your ultimate companion for discovering, cooking, and sharing delicious recipes. Our app is designed to make your cooking journey enjoyable and effortless.</p>
                <h3>Key Features:</h3>
                <ul className="subtext">
                    <li>Discover Recipes: Explore a vast collection of recipes from various cuisines, tailored to your taste and dietary preferences.</li>
                    <li>Rate and Review: Share your feedback on recipes and see what others think. Your ratings help us highlight the best recipes.</li>
                    <li>Personalized Recommendations: Get recipe suggestions based on your past ratings and preferences.</li>
                    <li>Easy Navigation: Quickly find what you’re looking for with our intuitive search and filter options.</li>
                    <li>Community Engagement: Connect with other food enthusiasts, share your creations, and get inspired by others.</li>
                </ul>
            </div>
            <div className="teamInfo">
                <h1 className="teamName">Pinoycor.js</h1>
                <h3 className="courseInfo subtext">
                    COMP229-001<br />
                    Web Application Development<br />
                </h3>
                <div className="teamMembers subtext">
                    Estella, Arvin Christian - 301396938 <br/>
                    Park, Eunseo - 301396938 <br/>
                    Sanchez, Jamela Mosende - 301340831 <br/>
                    Tabing, Rothchild Shyne - 301369345
                </div>
                
                <div>
                    <h3>Our Mission:</h3>
                    <p className="subtext">At Magic Chef, we believe that cooking should be fun, accessible, and rewarding. Our mission is to inspire home cooks of all levels to create delicious meals and enjoy the process of cooking.</p>
                    <h3>Get Started:</h3>
                    <p className="subtext">Dive into our featured recipes, or add your recipe now. Whether you&apos;re a beginner or a seasoned chef, Magic Chef has something for everyone.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
