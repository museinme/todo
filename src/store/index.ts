import {action, decorate, observable} from "mobx";
import {IToDoAppState, ToDoItem} from '../model';

class Store implements IToDoAppState {
    items: Array<ToDoItem> = [];
    inputValue: string = '';

    addItem(items: Array<object>,  item: ToDoItem) {
        this.items =  this.items.concat(item);
    }

    removeItem(items: Array<ToDoItem>, item: ToDoItem) {
        this.items = items.filter((filterItem: ToDoItem) => filterItem.id !== item.id);
    }

    setInputValue(value: string) {
        this.inputValue = value;
    }

    resetInputValue() {
        this.inputValue = '';
    }
}

decorate(Store, {
    items: observable,
    inputValue: observable,
    addItem: action,
    removeItem: action,
    setInputValue: action,
    resetInputValue: action,
})

export default new Store();