import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecipeList from "../components/recipes/RecipeList";
import { useAuth } from "../contexts/AuthContext";

const HomeView = () => {
  const { currentUser } = useAuth();
  const [recipesList, setRecipesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSearchTerm(value);
  };

  // Search Recipes from Spoonacular API
  const getRecipes = async () => {
    if (searchTerm) {
      await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=e60a67731a434f1e82adafaab14cdfc7`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-rapidapi-key": "e60a67731a434f1e82adafaab14cdfc7",
            // "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((response) => {
          // console.log("recipes response", response.json());
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setRecipesList(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  // Search submit methods
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target);

    getRecipes();
  };

  return (
    <div>
      {!currentUser && (
        <Container className="py-4 my-4 bg-white shadow">
          <h1>ShopList</h1>
          <Row>
            <Col>
              <h4>Need to make a shopping list?</h4>
              <h4>Sign up is easy and its free!</h4>
              <p>
                Get a free account here,{" "}
                <Link to="/signup" className="mr-3 ml-auto">
                  <strong>Sign Up!</strong>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      )}
      <Container className="py-4 my-4 bg-white shadow">
        <Row>
          <Col sm={4} md={3} lg={2}>
            <h4> Need Ideas?</h4>
          </Col>
          <Col sm={8} md={6} lg={10}>
            Search for some recipes here
          </Col>
          <Col sm={8} md={8} lg={8}>
            <Form inline>
              <Form.Control
                type="text"
                placeholder="Search"
                className=""
                onChange={handleChange}
              />
              <Button type="submit" onClick={handleSearch}>
                <i className="fas fa-search"></i>
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={4} md={3} lg={2}>
            <RecipeList searchRecipes={recipesList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeView;
