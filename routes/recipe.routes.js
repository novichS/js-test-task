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
        const { date, name, ingredients, description, oldRecipe } = req.body;

        const recipe = new Recipe({
            date,
            name,
            ingredients,
            description,
            oldRecipe,
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
        const { date, name, ingredients, description } = req.body;
        const current = await Recipe.findById(req.params.id);
        current._id = Date.now();

        current.oldRecipe.some((i) => i === req.params.id)
            ? current.oldRecipe
            : current.oldRecipe.push(req.params.id);

        const recipe = new Recipe({
            date: date,
            name: name,
            ingredients: ingredients,
            description: description,
            oldRecipe: current.oldRecipe,
        });

        recipe;

        await recipe.save();

        res.status(201).json({ recipe });
    } catch (e) {
        res.status(500).json({ message: "Updating failed!" });
    }
});

// /api/recipe/version/:id

router.post("/version/:id", async (req, res) => {
    try {
        Recipe.updateOne(
            { _id: req.params.id },
            { $pull: { oldRecipe: { id: req.body.id } } },
            { safe: true }
        ).then(() => res.json("Recipe version deleted!"));
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
