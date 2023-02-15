import { Request, Response } from 'express';
import { findAllCpfs, addCpf, checkCpf, removeCpf } from '../services/cpf.service';
import { cpf } from 'cpf-cnpj-validator';

const messageCpfAlreadyExist = {"type": "ExistsCpfException", "message": "CPF already registered."};
const messageCpfNotFound = {"type": "NotFoundCpfException", "message": "CPF not found."};
const messageInvalidCpf = {"type": "InvalidCpfException", "message": "CPF is not valid."};

const addNewCpf = async (req: Request, res: Response) => {
  const { cpf } = req.body;

  const cpfAlreadyRegistered = await checkCpf(cpf);  

  if(cpfAlreadyRegistered?.cpf === cpf) {
    return res.status(400).json(messageCpfAlreadyExist);
  }

  const newCpf = await addCpf(cpf);
  return res.status(200).json(newCpf);
};

const cpfCheck = async (req: Request, res: Response) => {
  const cpfConsult = req.params;

  const isValid = cpf.isValid(cpfConsult.cpf);
  if(!isValid) {
    return res.status(400).json(messageInvalidCpf);
  }  
  const result = await checkCpf(cpfConsult.cpf);
  if (!result) {
    return res.status(404).json(messageCpfNotFound);
  }
  return res.status(200).json(result);
};

const removedCpf = async (req: Request, res: Response) => {
  const cpfDelete = req.params;

  const isValid = cpf.isValid(cpfDelete.cpf);
  if(!isValid) {
    return res.status(400).json(messageInvalidCpf);
  }
  const result = await checkCpf(cpfDelete.cpf);
  if (!result) {
    return res.status(404).json(messageCpfNotFound);
  } 

  await removeCpf(cpfDelete.cpf);

  return res.status(200).json({ message: 'Cpf removed successfully.' });
};

const getAllCpf = async (_req: Request, res: Response) => {
  const cpfs = await findAllCpfs();

  return res.status(200).json(cpfs);
};

export { 
  getAllCpf,
  addNewCpf,
  cpfCheck,
  removedCpf,
};