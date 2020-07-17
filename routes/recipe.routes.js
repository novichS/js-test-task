const { Router } = require("express");
const Recipe = require("../models/Recipe");
const router = Router();

// /api/recipe/

router.get("/", async (req, res) => {
    try {
        await Recipe.find().then((recipes) => res.json(recipes));
    } catch (e) {
        res.status(500).json({ message: "Server can't get the list of recipes." });
    }
});

// /api/recipe/add

router.post("/add", async (req, res) => {
    try {
        console.log(req.body)
        const { id, name, ingredients } = req.body;

        const recipe = new Recipe({
            id: Number(id),
            date: new Date(id).toString().substr(0, 24),
            name,
            ingredients,
            isToggled: false,
            oldRecipe: []
        });

        await recipe.save();

        res.status(201).json({ recipe });
    } catch (e) {
        res.status(500).json({ message: "Server can't to add it." });
    }
});

// /api/recipe/update/:id

router.post("/update/:id", async (req, res) => {
    try {
        Recipe.findById(req.params.id)
            .then(recipe => {
                recipe.id = Number(req.body.edited.id);
                recipe.name = req.body.edited.name;
                recipe.ingredients = req.body.edited.ingredients;
                recipe.date = new Date(req.body.edited.id).toString().substr(0, 24);
                recipe.oldRecipe.push(req.body.oldRecipes);
                recipe.save()
                    .then(() => res.json('Recipe updated!'))
            })
    } catch (e) {
        res.status(500).json({ message: "Updating failed!" });
    }
});

// /api/recipe/version/:id

router.post("/version/:id", async (req, res) => {
    try {
        await Recipe.updateOne(
            { "_id": req.params.id },
            { $pull: { "oldRecipe": { "id": req.body.id } } },
            { safe: true }
        )
            .then(() => res.json('Recipe version deleted!'))
    } catch (e) {
        res.status(500).json({ message: "Something went wrong. Try again" });
    }
});

// /api/recipe/:id

router.delete("/:id", async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.json("Recipe deleted!");
    } catch (e) {
        res.status(400).json({ message: "Deleting failed!" });
    }
});

module.exports = router;
