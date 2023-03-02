import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { PatchContactsDto } from './dto/patchContact.dto';
import { PostContactsDto } from './dto/postContact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
  @Get()
  listContacts() {
    return this.contactsService.listOfContacts();
  }
  @Get(':uuid')
  listContactsId(@Param('uuid') id: number) {
    return this.contactsService.listContactsById(id);
  }
  @Post()
  postTask(@Body() newContact: PostContactsDto) {
    return this.contactsService.postContacts(newContact);
  }
  @Put(':uuid')
  updateTask(@Param('uuid') id: number, @Body() newContact: PostContactsDto) {
    return this.contactsService.updateContacts(id, newContact);
  }
  @Patch(':uuid')
  modifyTask(@Param('uuid') id: number, @Body() newContact: PatchContactsDto) {
    return this.contactsService.modifyContacts(id, newContact);
  }
  @Delete(':uuid')
  deleteTask(@Param('uuid') id: number) {
    return this.contactsService.deleteContacts(id);
  }
}
