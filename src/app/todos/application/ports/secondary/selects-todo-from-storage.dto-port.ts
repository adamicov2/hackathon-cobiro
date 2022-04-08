import {InjectionToken} from '@angular/core';
import {SelectsValue,} from '../../../../core/storage/in-memory-reactive-storage';
import {TodoDto} from './todo.dto';

export const SELECTS_TODO_FROM_STORAGE_DTO = new InjectionToken<
  SelectsValue<TodoDto[]>
>('SAVES_TODO_TO_STORAGE_DTO');
