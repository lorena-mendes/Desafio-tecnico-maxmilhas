import { Request, Response } from 'express';
import { findAllCpfs, addCpf } from '../services/cpf.service';

const addNewCpf = async (req: Request, res: Response) => {
  const { cpf } = req.body;
  const newCpf = await addCpf(cpf);

  return res.status(200).json(newCpf);
};

const getAllCpf = async (_req: Request, res: Response) => {
  const cpfs = await findAllCpfs();

  return res.status(200).json(cpfs);
};

export { 
  getAllCpf,
  addNewCpf,
};