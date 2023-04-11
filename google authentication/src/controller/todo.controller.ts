import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { TodoInterface, TodosService } from 'src/provider/todo.service';
interface CreateTodoDto {
  name: string,
  complete: boolean
}
@Controller('students')
export class TodosController {
constructor(private todosService: TodosService) {}
@Post("/students")
  async create(@Body() createTodoDto: CreateTodoDto) {
    const todo = await this.todosService.create(createTodoDto);
    if(!todo) {
      return 'error in creating todo'
    }
    return 'todo created successfully'
  }
@Get('/finddata')
  async findAll(@Req() request: Request) {
    const students: Array<TodoInterface> = await this.todosService.findAll()
    return students
  }
@Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newstudent: any = await this.todosService.update(id, body)
    return "student updated";
  }
@Delete(':id')
  async remove(@Param('id') id: string) {
    await this.todosService.delete(id)
    return "student deleted"
  }
}