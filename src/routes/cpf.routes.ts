import { Router } from 'express';
import { getAllCpf, addNewCpf, cpfCheck, removedCpf } from '../controllers/cpf.controller';
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
router.delete(
  '/cpf/:cpf',
  removedCpf,
);


export default router;