import ICpf from '../Interfaces/ICpf';
import cpfsModel from '../database/models/cpf.model';

const addCpf = async (cpf: ICpf) => {
  const params = { cpf, created_at: new Date };
  const newCpf = await cpfsModel.create(params);
  return newCpf;
};

const checkCpf = async (cpf: string) => {
  const getCpf = await cpfsModel.findOne({ 
    where: { cpf: cpf }, attributes: { exclude: ['id']}
  });
  return getCpf;
};

const findAllCpfs = async (): Promise<ICpf[]> => {
  const cpfs = await cpfsModel.findAll();
  return cpfs;
};

export {
  findAllCpfs,
  addCpf,
  checkCpf,
};
