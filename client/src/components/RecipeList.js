import React, { useState } from 'react';
import { PopUpForm } from './PopUpForm'

import useStyles from '../common/PopUp.styles';
import '../common/Recipe.css';

import Button from '@material-ui/core/Button';

export const RecipeList = (props) => {

    const classes = useStyles();
    const { _id, id, name, date, ingredients, isToggled, oldRecipe } = props.recipe;
    const { deleteRecipe, setActiveRecipe, updateRecipe } = props;

    const [edit, setEdit] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);

    const onEdit = () => setEdit(true);

    const handleEditedRecipe = (edited) => {
        setEdit(false);
        const oldRecipes = { id, name, ingredients, date, isToggled: false };
        const updated = { edited: { ...edited, id: Date.now(), _id }, oldRecipes };
        updateRecipe(updated);
    }

    const handleClose = () => setEdit(false);
    const handleDelete = () => deleteRecipe(_id);

    const handleShow = () => {
        setActiveRecipe(id);

        if (!isToggled && !showIngredients) {
            setShowIngredients(true)
        } else if (isToggled === true) {
            setShowIngredients(!showIngredients)
        }
    }

    return (
        <div className="recipe" >
            <div className={isToggled ? "focusRecipe" : "header"} onClick={handleShow}>
                <h6 className="recipeName">{name}
                    {oldRecipe.length > 0 &&
                        <p id="updated">
                            <span id="oldRecipe">{oldRecipe.length}</span>
                        </p>
                    }
                </h6>
                <div className="date">{date}</div>
            </div>
            {isToggled && showIngredients && (
                <div className="ingredients">
                    <div className="ingHeader">Ingredients</div>
                    <ul>
                        {ingredients.split(",").map((item, index) =>
                            <li key={index}>{item}</li>)
                        }
                    </ul>
                    <div id="buttons">
                        <Button
                            onClick={onEdit}
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                        >
                            EDIT
                </Button>
                        <Button
                            onClick={handleDelete}
                            variant="outlined"
                            color="secondary"
                            className={classes.button}
                        >
                            DELETE</Button>
                    </div>
                    {edit &&
                        <PopUpForm
                            id={id}
                            name={name}
                            edit={edit}
                            ingredients={ingredients}
                            handleInput={handleEditedRecipe}
                            cancelConfirmation={handleClose}
                        />
                    }
                </div>
            )}
        </div>
    )
}