// @ts-nocheck
import { decorate, observable } from "mobx";

class Store {
    items = [];
    inputValue = '';
}

Store = decorate(Store, {
    items: observable
})

export default new Store();