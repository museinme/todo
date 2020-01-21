export type ToDoItem = {
    text: string,
    id: number,
}

export interface IToDoListProps {
    items: Array<ToDoItem>,
    handleRemoveClick: (e: React.MouseEvent<HTMLSpanElement>, item: ToDoItem) => void,
}

export interface IToDoAppState {
    items: Array<ToDoItem>,
    inputValue: string;
}