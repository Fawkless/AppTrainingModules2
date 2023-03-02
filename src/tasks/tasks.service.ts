import { Injectable } from '@nestjs/common';
import { PatchTasksDto } from './dto/patchTasks.dto';
import { PostTasksDto } from './dto/postTasks.dto';
import { TasksDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {
  tasks: TasksDto[] = [
    {
      uuid: 1,
      usuarioUuid: 'Guillermo',
      tarea: 'Cajero',
    },
    {
      uuid: 2,
      usuarioUuid: 'Santiago',
      tarea: 'Personal de Servicio',
    },
    {
      uuid: 3,
      usuarioUuid: 'Federico',
      tarea: 'Encargado',
    },
  ];

  listOfTasks() {
    return this.tasks;
  }

  listTasksById(id: number) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == i + 1) {
        return this.tasks[i];
      }
    }
  }

  postTasks(newTask: PostTasksDto) {
    const id = this.tasks.length + 1;
    const newTask2 = { uuid: id, ...newTask };
    this.tasks.push(newTask2);
    return newTask2;
  }
  updateTasks(id: number, newTask: PostTasksDto) {
    const newTask2 = { uuid: id, ...newTask };
    this.tasks.splice(id - 1, 1, newTask2);
    return this.tasks;
  }
  modifyTasks(id: number, newTask: PatchTasksDto) {
    const oldTask = this.tasks[id - 1];
    const newTask2 = { ...oldTask, ...newTask };
    this.tasks.splice(id - 1, 1, newTask2);
    return this.tasks;
  }
  deleteTasks(id: number) {
    if (id <= this.tasks.length && id > 0) {
      this.tasks.splice(id - 1, 1);
      for (let i = id - 1; i < this.tasks.length; i++) {
        this.tasks[i].uuid = i + 1;
      }
      return this.tasks;
    }
    return 'La tarea no existe';
  }
}
