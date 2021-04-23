import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
 private usersRepository: Repository<User>;

 constructor() {
  this.usersRepository = getCustomRepository(UsersRepository);
 }

 async create(email: string) {

  // Verificar se usuário existe 
  const userAlreadyExist = await this.usersRepository.findOne({
   email,
  })

  // Se não existir, salvar no DB
  if (userAlreadyExist) {
   return userAlreadyExist;
  }

  const user = this.usersRepository.create({
  email,
  })

  await this.usersRepository.save(user);

  // Se existir, retornar usuário
  return user;
 }

 async findByEmail(email: string) {
  const user = await this.usersRepository.findOne({ email })

  return user;
 }
}

export { UsersService };