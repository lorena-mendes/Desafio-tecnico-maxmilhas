import { Request, Response } from 'express';
import { findAllCpfs, addCpf } from '../services/cpf.service';

const messageCpfAlreadyExist = {"type": "ExistsCpfException", "message": "CPF already registered."};

const addNewCpf = async (req: Request, res: Response) => {
  const { cpf } = req.body;

  const [cpfs] = await findAllCpfs();

  if(cpfs.cpf === cpf) {
    return res.status(400).json(messageCpfAlreadyExist);
  }

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