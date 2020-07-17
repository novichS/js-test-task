import React from 'react';
import { PopUpForm } from './PopUpForm';

import Button from '@material-ui/core/Button';
import useStyles from '../common/PopUp.styles';

export const RecipeForm = (props) => {
    const { addRecipe } = props;

    const classes = useStyles();
    const initInput = { name: "", ingredients: "", id: "" };

    const [edit, setEdit] = React.useState(false);

    const handleOpen = () => {
        setEdit(true);
    };

    const handleClose = () => {
        setEdit(false);
    };

    const handleNewRecipe = (newRecipe) => {
        addRecipe(newRecipe);
        handleClose();
    };

    return (
        <div>
            <Button
                onClick={handleOpen}
                className={classes.newRecipeButton}
                variant="outlined"
                color="primary"
            >
                Add new Recipe
            </Button>
            {edit &&
                <PopUpForm
                    id={initInput.id}
                    name={initInput.name}
                    edit={edit}
                    ingredients={initInput.ingredients}
                    handleInput={handleNewRecipe}
                    cancelConfirmation={handleClose}
                />
            }
        </div>
    );
}