import { Injectable } from '@nestjs/common';
import { ContactsDto } from './dto/contacts.dto';
import { PatchContactsDto } from './dto/patchContact.dto';
import { PostContactsDto } from './dto/postContact.dto';

@Injectable()
export class ContactsService {
  contacts: ContactsDto[] = [
    {
      uuid: 1,
      usuarioUuid: 'Fawkless',
      nombre: 'Guillermo',
      apellido: 'Milano',
      telefono: '099045535',
      mail: 'guilleemilano@gmail.com',
    },
    {
      uuid: 2,
      usuarioUuid: 'SantiIparr',
      nombre: 'Santiago',
      apellido: 'Iparraguirre',
      telefono: '099999999',
      mail: 'SantiagoIparr@gmail.com',
    },
    {
      uuid: 3,
      usuarioUuid: 'Fuhrer',
      nombre: 'Federico',
      apellido: 'Gandaria',
      telefono: '099888888',
      mail: 'federicogan@gmail.com',
    },
  ];
  listOfContacts() {
    return this.contacts;
  }
  listContactsById(id: number) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (id == i + 1) {
        return this.contacts[i];
      }
    }
  }
  postContacts(newContact: PostContactsDto) {
    const id = this.contacts.length + 1;
    const newContact2 = { uuid: id, ...newContact };
    this.contacts.push(newContact2);
    return newContact2;
  }
  updateContacts(id: number, newContact: PostContactsDto) {
    const newContact2 = { uuid: id, ...newContact };
    this.contacts.splice(id - 1, 1, newContact2);
    return this.contacts;
  }
  modifyContacts(id: number, newContact: PatchContactsDto) {
    const oldContact = this.contacts[id - 1];
    const newContact2 = { ...oldContact, ...newContact };
    this.contacts.splice(id - 1, 1, newContact2);
    return this.contacts;
  }
  deleteContacts(id: number) {
    if (id <= this.contacts.length && id > 0) {
      this.contacts.splice(id - 1, 1);
      for (let i = id - 1; i < this.contacts.length; i++) {
        this.contacts[i].uuid = i + 1;
      }
      return this.contacts;
    }
    return 'El usuario no existe';
  }
}
