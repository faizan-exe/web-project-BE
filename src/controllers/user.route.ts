import {createUser, getUsers, updateUser, deleteUser} from './service';
import {Request, Response} from 'express';
import {UserSchemaValidate} from '../model/schema';

export async function insertUser(req: Request, res: Response) {
    const { first_name, last_name, date_of_birth, education, phone_number, interests } = req.body;

    const data = { first_name, last_name, date_of_birth, education, phone_number, interests };

    const { error, value } = UserSchemaValidate.validate(data);
    if (error) {
        res.status(400).send(error.message);
    } else {
        const service = await createUser(value);
        res.status(201).send(service);
    }
}
export async function Users(req:Request, res:Response){

    const service = await getUsers()
    res.status(201).send(service)
}

export async function Update(req:Request, res:Response){

    const service = await updateUser(req.body.id, req.body)
    res.status(201).send(service)
}

export async function Delete(req:Request, res:Response){

    const service = await deleteUser(req.body.id)
    res.status(201).send(service)
}