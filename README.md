
>>>>>>> origin/master
# Sweetals
>>>>>>> Stashed changes
## Description
 Sweetals is an app about recipes including edibles flowers, those recipes add some colors to the table in a very original way.
 Some recipes are already there to use and the rest are create by all the users who had created an account in it.
 As a user you have a list of recipes in your account that you have made and that you have add as favorit from the own that you liked in the app.
## User Stories
homepage - Here the user is getting informed about the subject of the app and can login and signup
sign up - This page allow the user to create an account on the app to create and store recipes
login - The user can access the personal account by login
logout - The user can log out from the app so the data of the personal account are keept safe from anyone else
recipes list - The user has access to all the recipes stores in the app
recipes create - This page allow the user to create his/her own recipe and add it to the global list accessible by all users and own one
recipe details - By clicking on a recipe in the recipe list the user has acces to the recipe detail page that reveal the recipe itself
404 - This page will show up if the user enter incorrect URL
500 - This page will show up if the the application is broken, internal error
## Backlog
## Routes
* GET/
* GET /auth/signup
 directs to / if user logged in
 renders add- signup.hbs
* POST /auth/signup
 * redirects to / if user logged in
 * body:
  full name
  email
  password
* GET /auth/login
 redirects to / if user logged in
 renders add- signin.hbs 
* POST /auth/login
* redirects to / if user logged in
 body:
 username
 password
* GET /flowerlist
 renders flowerlist.hbs (pictures list + menu bar)
* GET /flower-info/:flowerID
  //renders flower-info.hbs 
  includes list of recipes
  redirects to / if presses button 
* GET /flower-info/:flowerID/:recipeID
* GET /newRecipe
    renders to newRecipe.hbs
    Burger menu
    Horizontal flower list
    redirects to /myRecipes if user presses button
* POST /newRecipe
   - body:
   Ingredients title
   Steps title
   Ingredients list
   Steps text
* GET /userRecipe
    renders userRecipe.hbs
* GET /flowers-info/:flowerID/:recipeID/edit
  renders edit.hbs
* POST /flowers-info/:flowerID/:recipeID/edit.hbs
* POST /flowers/:flowersID/:recipeID/delete
* GET /logout




## Models

User new Schema ({fullName: String, required:true, 
email: String, required: true,
password: String, minlength: 6, maxlength: 10, required: true
favorite:  Array *type: Schema object Id* })

FlowerSchema ({ name: String,
family: String,
description: String
})
Recipe ({ title: String, required: true, minlength: 6, maxlength: 10,
Cooking time: Number, required true,
Number of people : Number, required: true,
Description: String, required: true, minlength: 50, maxlength: 300.
Flower ingredients: Array *type: Schema object Id* 
})


## Links
Trello
[GitHub](https://trello.com/b/1R27fQRH/sweetals)

Git
Repository Link
[GitHub] (https://github.com/LucyJunior/SweetalsApp)

Deploy Link
Slides