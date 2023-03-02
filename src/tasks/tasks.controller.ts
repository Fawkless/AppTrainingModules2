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
import { PatchTasksDto } from './dto/patchTasks.dto';
import { PostTasksDto } from './dto/postTasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  listTasks() {
    return this.tasksService.listOfTasks();
  }
  @Get(':uuid')
  listId(@Param('uuid') id: number) {
    return this.tasksService.listTasksById(id);
  }
  @Post()
  postTask(@Body() newTasks: PostTasksDto) {
    return this.tasksService.postTasks(newTasks);
  }
  @Put(':uuid')
  updateTask(@Param('uuid') id: number, @Body() newTasks: PostTasksDto) {
    return this.tasksService.updateTasks(id, newTasks);
  }
  @Patch(':uuid')
  modifyTask(@Param('uuid') id: number, @Body() newTasks: PatchTasksDto) {
    return this.tasksService.modifyTasks(id, newTasks);
  }
  @Delete(':uuid')
  deleteTask(@Param('uuid') id: number) {
    return this.tasksService.deleteTasks(id);
  }
}
