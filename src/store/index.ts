import { decorate, observable } from "mobx";
import {IToDoAppState, ToDoItem} from '../model';

class Store implements IToDoAppState {
    items: Array<ToDoItem> = [];
    inputValue: string = '';
}

decorate(Store, {
    items: observable,
    inputValue: observable
})

export default new Store();