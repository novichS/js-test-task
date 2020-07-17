import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    textFieldRecipeName: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 250,
    },
    textFieldIngredients: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500,
    },
    newRecipeButton: {
        margin: theme.spacing(2),
        fontWeight: 600
    },
    button: {
        fontWeight: 600,
        marginLeft: "15px"
    }
}));