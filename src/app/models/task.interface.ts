export enum Levels {
  'Info',
  'Urgent',
  'Blocking',
}

export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  level: Levels;
}
