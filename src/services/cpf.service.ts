import ICpf from '../Interfaces/ICpf';
import cpfsModel from '../database/models/cpf.model';

const addCpf = async (cpf: ICpf) => {
  const params = { created_at: new Date, ...cpf };
  console.log(params);
  const newCpf = await cpfsModel.create(params);
  return newCpf;
};

const findAllCpfs = async (): Promise<ICpf[]> => {
  const cpfs = await cpfsModel.findAll();
  return cpfs;
};

export {
  findAllCpfs,
  addCpf,
};
