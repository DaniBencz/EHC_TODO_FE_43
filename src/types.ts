export type TStatus = 'active' | 'done';

export interface ITodoItem {
  id: number;
  title: string;
  status: TStatus;
}

export type TCheckItem = (id: number) => void;

export interface ITodoItemProps {
  item: ITodoItem;
  checkItem: TCheckItem;
  uncheckItem: TCheckItem;
}
