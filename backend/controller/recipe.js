const Recipes = require("../models/recipe");


const getRecipes=async (req,res)=>{
    const recipes=await Recipes.find({});
    return res.status(200).json(recipes);
}

const getRecipe=async (req,res)=>{
    const recipe=await Recipes.findById(req.params.id);
    return res.status(200).json(recipe);
}

const addRecipe=async (req,res)=>{
    try {
        const {title,ingredients,instructions,time}=req.body;
        if(!title || !ingredients || !instructions ){
             res.status(400).json({message:"All fields are required"});
        }
        const newRecipe = await Recipes.create({
            title,
            ingredients,
            instructions,
            time
        });
        return res.status(201).json(newRecipe);
    } catch (err) {
        console.error("Error in addRecipe:", err);   // <-- ADD THIS
        return res.status(500).json({message:"Server error"});
    }
}

const editRecipe=async(req,res)=>{
        const {title,ingredients,instructions,time}=req.body;
        let recipe=await Recipes.findById(req.params.id);
        if(!recipe){
            return res.status(404).json({message:"Recipe not found"});
        }
        recipe.title=title || recipe.title;
        recipe.ingredients=ingredients || recipe.ingredients;
        recipe.instructions=instructions || recipe.instructions;
        recipe.time=time || recipe.time;

        await recipe.save();
        return res.status(200).json(recipe);
}

const deleteRecipe=(req,res)=>{
    Recipes.findByIdAndDelete(req.params.id)
    .then(()=>{
        return res.status(200).json({message:"Recipe deleted successfully"});
    })
    .catch((err)=>{
        return res.status(500).json({message:"Server error"});
    });
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe};