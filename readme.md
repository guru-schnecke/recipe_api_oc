## Recipes API
### Documentation
Openclass Room Student Recipes Task

| Route Name | URL | Request | Output|
|------------|-----|---------|-------|
| All Recipes | /api/recipes | GET | `{recipes: [...]}`|
| Show Single Recipes | /api/recipes/:id | GET | `{recipes: {...}}`|
| Delete Recipe | /api/recipes/:id | DELETE | `{message: "success message"}`|
| Update Recipes | /api/recipes/:id | PUT | `{message: "success message"}`|
| Create Recipes | /api/recipes | POST | `{message: "success message"}`|


### Instructions
1. Clone repository
1. Change directory to local folder on machine then run `npm install`
1. For security reasons, I have exclued my mongodb url. Please add your own URL to this file by creating a `.env` file in the root directory of this app and `MONGO_LIVE = <YOUR URL HERE>`
1. Run `npm start`

### Dependencies
1. [ExpressJS](https://github.com/expressjs)
1. [DOTENV]()
1. [CORS](https://github.com/expressjs/cors)
1. [Express Validator](https://express-validator.github.io)
1. [Mongoose](https://mongoosejs.com)

------
By Ebere.
