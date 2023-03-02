import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { PostUsersDto } from './dto/postUsers.dto';
import { PatchUsersDto } from './dto/patchUsers.dto';

@Injectable()
export class UsersService {
  users: UsersDto[] = [
    {
      uuid: 1,
      nombre: 'Guillermo',
      apellido: 'Milano',
      mail: 'guilleemilano@gmail.com',
    },
    {
      uuid: 2,
      nombre: 'Santiago',
      apellido: 'Iparraguirre',
      mail: 'santiIpa@gmail.com',
    },
    {
      uuid: 3,
      nombre: 'Maria',
      apellido: 'Rodriguez',
      mail: 'mariaRodriguez@gmail.com',
    },
    {
      uuid: 4,
      nombre: 'Federico',
      apellido: 'Gandaria',
      mail: 'fedeGandaria@gmail.com',
    },
  ];

  listOfUsers() {
    return this.users;
  }

  listById(id: number) {
    for (let i = 0; i < this.users.length; i++) {
      if (id == i + 1) {
        return this.users[i];
      }
    }
  }

  postUser(newUser: PostUsersDto) {
    const id = this.users.length + 1;
    const newUser2 = { uuid: id, ...newUser };
    this.users.push(newUser2);
    return newUser2;
  }
  updateUser(id: number, newUser: PostUsersDto) {
    const newUser2 = { uuid: id, ...newUser };
    this.users.splice(id - 1, 1, newUser2);
    return this.users;
  }
  modifyUser(id: number, newUser: PatchUsersDto) {
    const oldUser = this.users[id - 1];
    const newUser2 = { ...oldUser, ...newUser };
    this.users.splice(id - 1, 1, newUser2);
    return this.users;
  }
  deleteUser(id: number) {
    if (id <= this.users.length && id > 0) {
      this.users.splice(id - 1, 1);
      for (let i = id - 1; i < this.users.length; i++) {
        this.users[i].uuid = i + 1;
      }
      return this.users;
    }
    return 'El usuario no existe';
  }
}
