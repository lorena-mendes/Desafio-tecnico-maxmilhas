import { Request, Response, NextFunction } from 'express';
import { cpf } from 'cpf-cnpj-validator';

const messageInvalidCpf = {"type": "InvalidCpfException", "message": "CPF is not valid."};

const validateCpf = async (req: Request, res: Response, next: NextFunction) => {
  const cpfObject = req.body;
  const regex = new RegExp('^[0-9]+$');

  if(!regex.test(cpfObject.cpf)) {
    return res.status(401).json(messageInvalidCpf);
  }
  if(typeof cpfObject.cpf !== 'string') {
    return res.status(401).json(messageInvalidCpf);
  }
  
  const isValid = cpf.isValid(cpfObject.cpf);
  
  if(!isValid) {
    return res.status(400).json(messageInvalidCpf);
  }
  next();
};

export default validateCpf;