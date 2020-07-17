import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import useStyles from '../common/PopUp.styles';
import '../common/Recipe.css';

export const RecipeVersion = (props) => {
    const classes = useStyles();
    const { id, name, date, ingredients, isToggled } = props.recipe;
    const { deleteVersion, setActiveVersion, _id } = props;

    const [showIngredients, setShowIngredients] = useState(false);

    const handleDelete = () => {
        deleteVersion({ _id, id })
    }

    const handleShow = () => {
        setActiveVersion(id);
        if (!isToggled && !showIngredients) {
            setShowIngredients(true)
        } else if (isToggled === true) {
            setShowIngredients(!showIngredients)
        }
    }

    return (
        <div className="recipe" >
            <div className={isToggled ? "focusVersion" : "header"} onClick={handleShow}>
                <h6 className="versionDate"> {name}</h6>
                <div className="date">{date}</div>
            </div>
            {isToggled && showIngredients && (
                <div className="ingredients">
                    <div className="ingHeader">Ingredients</div>
                    <ul>
                        {ingredients.split(",")
                            .map((item, index) =>
                                <li key={index}>{item}</li>)
                        }
                    </ul>
                    <Button
                        onClick={handleDelete}
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                    >
                        DELETE
                    </Button>
                </div>
            )}
        </div>
    )
}