import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveyRepository';
import { SurveysUsersRepository } from '../repositories/SurveyUserRepository';
import { UsersRepository } from '../repositories/UsersRepository';
class sendMailController{
    async execute(req: Request, res: Response) {
        const { email, survey_id } = req.body;

        const userRepository = getCustomRepository(UsersRepository);
        const surveyRepository = getCustomRepository(SurveysRepository);
        const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

        const userAlreadyExists = await userRepository.findOne({
            email,
        })

        if (!userAlreadyExists) {
            return res.status(400).json({
                error: "User does not exists"
            })
        }

        const surveyAlreadyExists = await surveyRepository.findOne({ id: survey_id })
        if (!surveyAlreadyExists) {
            return res.status(400).json({
                error: "Survey does not exists"
            })
        }

        const surveyUser = surveyUsersRepository.create({
            user_id: userAlreadyExists.id,
            survey_id
        })

        await surveyUsersRepository.save(surveyUser)

        return res.json(surveyUser)

    }
}

export {
    sendMailController
}