import { Router } from 'express';
import { getAllCpf, addNewCpf } from '../controllers/cpf.controller';
import validateCpf from '../middlewares/cpf.middleware';

const router = Router();

router.get('/', getAllCpf);
router.post(
  '/cpf',
  validateCpf,
  addNewCpf,
  );

export default router;