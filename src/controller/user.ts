import {Request, Response} from 'express';

export default class UserController {

    static createUser(req : Request, res : Response): void {

        res.send(req.body);
    }

    static readUser(req : Request, res : Response): void {

        res.send("Hello ini user dari class")
    }


}
