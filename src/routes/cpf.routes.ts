import { Router } from 'express';
import { getAllCpf, addNewCpf, cpfCheck } from '../controllers/cpf.controller';
import validateCpf from '../middlewares/cpf.middleware';

const router = Router();

router.get('/', getAllCpf);
router.post(
  '/cpf',
  validateCpf,
  addNewCpf,
);
router.get(
  '/cpf/:cpf',
  cpfCheck,
);


export default router;