import { Repository } from 'typeorm';
export interface TodoInterface {
    name: string;
    complete: boolean;
}
export declare class TodosService {
    private todoRepository;
    constructor(todoRepository: Repository<TodoInterface>);
    create(todo: TodoInterface): Promise<TodoInterface>;
    findAll(): Promise<TodoInterface[]>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
