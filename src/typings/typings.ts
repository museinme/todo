export type ToDoItem = {
    text: string,
    id: number,
}

export interface IToDoListProps {
    items: ToDoItem[],
    handleRemoveClick: (e: React.MouseEvent<HTMLSpanElement>, item: ToDoItem) => void,
}

export interface IToDoAppState {
    items: ToDoItem[],
    inputValue: string;
}