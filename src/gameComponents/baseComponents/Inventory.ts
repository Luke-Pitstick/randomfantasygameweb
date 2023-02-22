import Item from './Item';

class Inventory {
    private items: Item[] = [];
    maxSize: number;
    slotsLeft: number;

    public constructor(maxSize: number, initialItems?: Item[]) {
        this.items = initialItems ?? [];
        this.maxSize = maxSize;
        this.slotsLeft = maxSize - this.items.length;
    }

    public addItem(item: Item) {
        if (this.items.length < this.maxSize) {
            this.items.push(item);
            this.slotsLeft--;
        }
    }

    public removeItem(index: number) {
        this.items.splice(index, 1);
        this.slotsLeft++;
    }
}

export default Inventory;