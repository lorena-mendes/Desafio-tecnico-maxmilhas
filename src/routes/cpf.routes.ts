import { Router } from 'express';
import getAllCpf from '../controllers/cpf.controller';

const router = Router();

router.get('/', getAllCpf);

export default router;
