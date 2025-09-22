export interface ITodoItem {
  id: number;
  title: string;
  status: 'active' | 'done';
}

export type TCheckItem = (id: number) => void;

export interface ITodoItemProps {
  item: ITodoItem;
  checkItem: TCheckItem;
  uncheckItem: TCheckItem;
}
