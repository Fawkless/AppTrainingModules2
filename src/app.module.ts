import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [UsersModule, TasksModule, ContactsModule],
})
export class AppModule {}
