import { SavesValue } from '../../../../core/storage/in-memory-reactive-storage';
import { TodoDto } from './todo.dto';
import { InjectionToken } from '@angular/core';

export const SAVES_TODO_TO_STORAGE_DTO = new InjectionToken<
  SavesValue<TodoDto[]>
>('SAVES_TODO_TO_STORAGE_DTO');
