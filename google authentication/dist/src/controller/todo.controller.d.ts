import { Request } from 'express';
import { TodoInterface, TodosService } from 'src/provider/todo.service';
interface CreateTodoDto {
    name: string;
    complete: boolean;
}
export declare class TodosController {
    private todosService;
    constructor(todosService: TodosService);
    create(createTodoDto: CreateTodoDto): Promise<"error in creating todo" | "todo created successfully">;
    findAll(request: Request): Promise<TodoInterface[]>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
export {};
