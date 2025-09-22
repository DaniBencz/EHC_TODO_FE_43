import type { ITodoItemProps, TCheckItem } from "../types";

const ItemCheck = ({ uncheckItem, id }: { uncheckItem: TCheckItem, id: number }) => (
  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
    onClick={() => uncheckItem(id)}>
    <img src="/icon-check.svg" alt="Check" className="w-3 h-3" />
  </div>
);

const TodoItem = ({ item, checkItem, uncheckItem }: ITodoItemProps) => {
  return (
    <div className="p-4 flex items-center gap-4 group hover:bg-gray-750 relative" key={item.id}>
      <div className="hover:cursor-pointer">

        {item.status === 'done' ? <ItemCheck uncheckItem={uncheckItem} id={item.id} /> :
          <div className="w-5 h-5 rounded-full border-2 border-gray-500"
            onClick={() => checkItem(item.id)}></div>}
      </div>
      <span className={`flex-1 ${item.status === 'done' ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
        {item.title}
      </span>
      <img
        src="/icon-cross.svg"
        alt="Delete"
        className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        style={{ pointerEvents: 'auto' }}
      />
    </div>
  );
};

export default TodoItem;
