import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { RecipeForm } from "./components/RecipeForm";
import { RecipeList } from "./components/RecipeList";
import { RecipeVersion } from "./components/RecipeVersion";

import {
  getRecipesAction,
  addRecipeAction,
  deleteRecipeAction,
  updateRecipeAction,
  setActiveRecipeAction,
  setActiveVersionAction,
  deleteVersionAction
} from './redux/actions'

import './App.css';

function App(props) {
  console.log('props', props.recipes)
  const {
    getRecipes,
    addRecipe,
    deleteRecipe,
    setActiveRecipe,
    updateRecipe,
    deleteVersion,
    setActiveVersion,
    recipes
  } = props;

    const toggled = recipes.find(recipe => recipe.isToggled);

  useEffect(() => {
    recipes.length === 0 && getRecipes();
  }, [recipes, getRecipes]);

  return (
    <div className="app">
      <div className="main">
        <div className="section">
        <h4>Recipes</h4>
        <RecipeForm addRecipe={addRecipe} />
        { recipes.length > 0 && recipes.map(recipe => {
          return (
            <RecipeList
              key={recipe.id}
              recipe={recipe}
              deleteRecipe={deleteRecipe}
              setActiveRecipe={setActiveRecipe}
              addRecipe={addRecipe}
              updateRecipe={updateRecipe}
            />
          )
        })}
        </div>
        <div className="section">
          <h4>Old Recipes</h4>
          {
            toggled && toggled.oldRecipe.map(version => {
              return (
                <RecipeVersion
                  key={version.id}
                  _id = {toggled._id}
                  recipe={version}
                  deleteVersion={deleteVersion}
                  setActiveVersion={setActiveVersion}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  recipes: state
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => { dispatch(getRecipesAction()); },
  addRecipe: (newRecipe) => { dispatch(addRecipeAction(newRecipe)); },
  deleteRecipe: (id) => { dispatch(deleteRecipeAction(id)); },
  setActiveRecipe: (id) => { dispatch(setActiveRecipeAction(id)); },
  updateRecipe: (id) => { dispatch(updateRecipeAction(id)); },

  setActiveVersion: (id) => { dispatch(setActiveVersionAction(id)); },
  deleteVersion: (id) => { dispatch(deleteVersionAction(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
