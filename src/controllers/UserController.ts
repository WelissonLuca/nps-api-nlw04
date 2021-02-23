import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
    async create(req: Request, res: Response) {
        const {name, email} = req.body;
        
        const usersRepository = getRepository(User);
        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);
        
        return res.send()
    }
}

export { UserController }