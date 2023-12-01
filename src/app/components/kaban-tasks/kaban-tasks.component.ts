import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss'],
})
export class KabanTasksComponent {
  todoTasks: ITask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender Animaciones en Angular',
      completed: false,
      level: LEVELS.INFO,
    },
    {
      title: 'Angular CLI',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      completed: false,
      level: LEVELS.URGENT,
    },
    {
      title: 'Build',
      description: 'Aprender a generar builds con Angular CLI',
      completed: false,
      level: LEVELS.BLOCKING,
    },
    {
      title: 'Deploy',
      description: 'Aprender a desplegar bundles en Firebase',
      completed: false,
      level: LEVELS.BLOCKING,
    },
  ];

  doneTasks: ITask[] = [
    {
      title: 'Configuracion IDE',
      description: 'Configurar e instalar pluggins en Visual Studio Code',
      completed: true,
      level: LEVELS.BLOCKING,
    },
    {
      title: 'Instalar Angular CLI',
      description: 'Instalar Angular CLI usando npm de forma global',
      completed: true,
      level: LEVELS.BLOCKING,
    },
    {
      title: 'HolaMundo ',
      description: 'Crear un proyecto inicial usando Angular CLI',
      completed: true,
      level: LEVELS.URGENT,
    },
  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      console.log('Misma Columna: ', event.container.data);

      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('Diferente Columna: ', event.container.data);
      console.log('Debemos cambiar el estado de la task');

      // Actualizamos el valor completed de la tarea
      event.previousContainer.data[event.previousIndex].completed =
        !event.previousContainer.data[event.previousIndex].completed;

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
