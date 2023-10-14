import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotalPrice(): number {
      if (this._items.length > 0) {
        let sum: number = 0;
        this._items.forEach(item => sum += item.price);
        return sum;
      }

      return 0;
    }

    getDiscountedPrice(discount: number): number {
      const total = this.getTotalPrice();
      return total - (total * (discount / 100));
    }

    remove(id: number): void {
      this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}
