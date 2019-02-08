'use strict'

const { validate } = use('Validator');

const User = use('App/Models/User');

class AuthController {

    //Register new app users

    async register({ response, request, auth }) {

        //get user input
        const userparams = request.all();


        //validate user input
        const rules = {
            email: 'required|email|unique:users,email',
            password: 'required',
            password_confirm: 'required',
            username: 'required|unique:users'
        }

        const validation = await validate(userparams, rules)

        // if failled validation return the message
        if (validation.fails())
            return response.json(validation.messages());



        //save user
        const user = new User();
        user.email = userparams.email;
        user.password = userparams.password;
        user.username = userparams.username;

        try {
            await user.save();

            //register token
            let token = await auth.generate(user)


            //give response
            response.status(200)
            return response.json({
                message: 'Register Successful',
                data: token
            })

        } catch (error) {
            return response.status(400).json({ data: 'error occured while trying to register' })
        }



    }

    //Login registered app users
    async signin({ request, response, auth, session }) {

        //get user inputs
        const userparams = request.all();


        //validation
        const rules = {
            password: 'required',
            email: 'required'
        }

        const validation = await validate(userparams, rules)

        if (validation.fails()) {
            session
                .withErrors(validation.messages())
                .flashExcept(['password'])
        }

        try {
            //check user and generate token
            const token = await auth.attempt(userparams.email, userparams.password)
            return response.json(token)
        } catch (error) {
            return response.status(400).json({ data: 'error occured while trying to login' })
        }

        //return response

    }


    //Logout signedin users
    async logout({ request, response, auth }) {

    }
}

module.exports = AuthController
