import React from 'react';
import 'materialize-css';

import { RecipeForm } from "./components/RecipeForm";
import { RecipeList } from "./components/RecipeList";
import { RecipeVersion } from "./components/RecipeVersion";

function App() {
  return (
    <>
      <RecipeForm />
      <RecipeList />
      <RecipeVersion />
    </>
  );
}

export default App;
