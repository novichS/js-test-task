import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import useStyles from '../common/PopUp.styles';

export const PopUpForm = (props) => {
    const classes = useStyles();
    const { id, name, ingredients, edit } = props;
    const initErrorMessages = { name: false, ingredients: false };
    const confirmButton = id ? "Edit Recipe" : "Add Recipe";

    const [input, setInput] = React.useState({ name: name, ingredients: ingredients, id: id });
    const [error, setError] = React.useState(initErrorMessages);

    const handleRecipeName = ({ target: { value } }) => {
        setInput({ ...input, name: value, id: Date.now() });
        setError({ ...error, name: false });
    };

    const handleIngredients = ({ target: { value } }) => {
        setInput({ ...input, ingredients: value });
        setError({ ...error, ingredients: false })
    };

    const cancelEdit = () => {
        props.cancelConfirmation();
        setError(initErrorMessages);
    }

    const handleErrors = () => {
        input.name === ""
            ? setError({ ...error, name: true })
            : setError({ ...error, ingredients: true })
    };

    const getInput = () => {
        const { name, ingredients } = input;

        if (name === "" || ingredients === "") {
            handleErrors();
        } else {
            props.handleInput(input);
            cancelEdit();
        }
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={edit}
        >
            <DialogTitle>Fill the form</DialogTitle>
            <DialogContent>
                <form className={classes.container}>
                    <TextField
                        id="standard-basic"
                        className={classes.textFieldRecipeName}
                        label="Recipe"
                        margin="normal"
                        fullWidth={false}
                        autoComplete='off'
                        onChange={handleRecipeName}
                        defaultValue={name}
                        error={error.name}
                        helperText={error.name ? 'Empty field!' : ' '}
                    />
                    <TextField
                        id="standard-basic"
                        className={classes.textFieldIngredients}
                        label="Ingredients (separated by commas)"
                        margin="normal"
                        multiline={true}
                        fullWidth={true}
                        onChange={handleIngredients}
                        defaultValue={ingredients}
                        error={error.ingredients}
                        helperText={error.ingredients ? 'Empty field!' : ' '}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={cancelEdit}
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                >
                    Close
                </Button>
                <Button
                    onClick={getInput}
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >
                    {confirmButton}
                </Button>
            </DialogActions>
        </Dialog>
    );
}