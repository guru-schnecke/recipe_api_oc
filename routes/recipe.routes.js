const router = require('express').Router()
const Recipe = require('../models/recipe.model')
const { check, validationResult } = require('express-validator');


//get all recipes
router.get('/', async (request, response) => {
 //--get all the ASync way --//
 try {
  let recipes = await Recipe.find()
  response.status(200).json({meta:{ count: recipes.length}, recipes})
 } catch (error) {
  response.status(400).json({message: "Something Went Wrong!!!", error: error})
 }
 
})

//create recipe
router.post('/', [
  check('title').not().isEmpty(),
  check('ingredients').not().isEmpty(),
  check('instructions').not().isEmpty(),
  check('time').not().isEmpty(),
  check('difficulty').not().isEmpty()],
  async (request, response) => {

   const errors = validationResult(request);
   //return errors if empty strings sent to route
   if(!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() })
   }

    let incomingData = {
     title: request.body.title,
     ingredients: request.body.ingredients,
     instructions: request.body.instructions,
     difficulty: request.body.difficulty,
     time: request.body.time
    }

    try {
     let recipe = new Recipe(incomingData)
     await recipe.save() 

     response.status(201).json({"message": "Recipe Saved Successfully" })

    } catch (error) {
     response.status(200).json({error})
    }
})

router.get('/:id', async (request, response) => {

 try {
  let recipe = await Recipe.findById(request.params.id)

  if(!recipe){ //if nothing is found force code to catch line 59
   throw {error: "Recipe Not Found"};
  }
  
  response.status(200).json({recipe})

 } catch (error) {
  response.status(400).json({error})
 }
 
})

//Update Route
router.put('/:id',
 [
  check('title').not().isEmpty(),
  check('ingredients').not().isEmpty(),
  check('instructions').not().isEmpty(),
  check('time').not().isEmpty(),
  check('difficulty').not().isEmpty()],
  async (request, response) => {

 let incomingData = {
  title: request.body.title,
  ingredients: request.body.ingredients,
  instructions: request.body.instructions,
  difficulty: request.body.difficulty,
  time: request.body.time
 }

 try {
  let recipe = await Recipe.findByIdAndUpdate(request.params.id, incomingData)
  response.status(200).json({recipe})
 } catch (error) {
  response.status(400).json({error})
 }
 
})


router.delete('/:id', async(request, response) => {
 try {
  let recipe = await Recipe.findByIdAndDelete(request.params.id)
  
  response.status(200).json({recipe})
 } catch (error) {
  response.status(400).json({error})
 }
})


module.exports = router