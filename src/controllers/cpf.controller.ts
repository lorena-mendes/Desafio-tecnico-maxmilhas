import { Request, Response } from 'express';
import findAllCpf from '../services/cpf.service';

const getAllCpf = async (_req: Request, res: Response) => {
  const cpfs = await findAllCpf();

  return res.status(200).json(cpfs);
};

export default getAllCpf;