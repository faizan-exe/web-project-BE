import { Router } from 'express';

import {
    insertUser,
    Users,
    Update,
    Delete
} from '../controllers/user.route';

const movieRoutes = Router();

movieRoutes.post('/users', insertUser);
movieRoutes.get('/users', Users);
movieRoutes.patch('/users', Update);
movieRoutes.delete('/users', Delete);

export default movieRoutes;