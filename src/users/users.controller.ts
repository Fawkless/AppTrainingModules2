import { Controller, Delete, Get } from '@nestjs/common';
import { Body, Param, Patch, Post, Put } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { PostUsersDto } from './dto/postUsers.dto';
import { PatchUsersDto } from './dto/patchUsers.dto';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  listUsers() {
    return this.userService.listOfUsers();
  }
  @Get(':uuid')
  listId(@Param('uuid') id: number) {
    return this.userService.listById(id);
  }
  @Post()
  postUser(@Body() newUser: PostUsersDto) {
    return this.userService.postUser(newUser);
  }
  @Put(':uuid')
  updateUser(@Param('uuid') id: number, @Body() newUser: PostUsersDto) {
    return this.userService.updateUser(id, newUser);
  }
  @Patch(':uuid')
  modifyUser(@Param('uuid') id: number, @Body() newUser: PatchUsersDto) {
    return this.userService.modifyUser(id, newUser);
  }
  @Delete(':uuid')
  deleteUser(@Param('uuid') id: number) {
    return this.userService.deleteUser(id);
  }
}
