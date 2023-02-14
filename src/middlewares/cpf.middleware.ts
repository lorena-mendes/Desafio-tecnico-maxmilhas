import { Request, Response } from 'express';
import { cpf } from 'cpf-cnpj-validator';

// import Cpfs from '../database/models/cpf.model';

const messageInvalidCpf = {"type": "InvalidCpfException", "message": "CPF is not valid."};

const validateCpf = async (req: Request, res: Response) => {
  const cpfObject = req.body;
  
  const isValid = cpf.isValid(cpfObject.cpf);
  console.log(isValid);  
  
  if(!isValid) {
    return res.status(400).json(messageInvalidCpf);
  }

  return res.status(200).json(cpfObject);
};

export default validateCpf;