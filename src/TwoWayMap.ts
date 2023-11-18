import { LinkedList } from "./utils/LinkedList";
import { ITwoWayMap } from "./interfaces/ITwoWayMap";

export class TwoWayMap<K, V> implements ITwoWayMap<K, V> {
    private keyToValueMap = new Map<K, V>();
    private valueToKeyMap = new Map<V, K>();
    private orderList = new LinkedList<K>();

    set(key: K, value: V): void {
        // Check if the key is already in the map and delete the reverse mapping
        if (this.keyToValueMap.has(key)) {
            this.valueToKeyMap.delete(this.keyToValueMap.get(key)!);
        }

        // Check if the value is already in the map and delete the forward mapping
        if (this.valueToKeyMap.has(value)) {
            this.keyToValueMap.delete(this.valueToKeyMap.get(value)!);
        }

        // Set new key-value and value-key mappings
        this.keyToValueMap.set(key, value);
        this.valueToKeyMap.set(value, key);

        // Add the key to the order list
        this.orderList.add(key);
    }

    get(key: K): V | undefined {
        return this.keyToValueMap.get(key);
    }

    getByValue(value: V): K | undefined {
        return this.valueToKeyMap.get(value);
    }

    delete(key: K): boolean {
        if (!this.keyToValueMap.has(key)) {
            return false;
        }

        const value = this.keyToValueMap.get(key)!;
        this.keyToValueMap.delete(key);
        this.valueToKeyMap.delete(value);
        this.orderList.remove(key);
        return true;
    }

    keys(): K[] {
        return this.orderList.toArray();
    }

    values(): V[] {
        return this.orderList.toArray().map(key => this.keyToValueMap.get(key)!);
    }

    entries(): [K, V][] {
        return this.orderList.toArray().map(key => [key, this.keyToValueMap.get(key)!] as [K, V]);
    }

    pop(key: K, defaultValue?: V): V | undefined {
        if (this.keyToValueMap.has(key)) {
            const value = this.keyToValueMap.get(key);
            this.delete(key);
            return value;
        } else {
            return defaultValue;
        }
    }

    popitem(last: boolean = true): [K, V] | undefined {
        const key = last ? this.orderList.getLast() : this.orderList.getFirst();
        if (key !== undefined) {
            const value = this.keyToValueMap.get(key);
            this.delete(key);
            return [key, value as V];
        }
    }

    copy(): TwoWayMap<K, V> {
        const newMap = new TwoWayMap<K, V>();
        this.keyToValueMap.forEach((value, key) => {
            newMap.set(key, value);
        });
        return newMap;
    }

    clear(): void {
        this.keyToValueMap.clear();
        this.valueToKeyMap.clear();
        this.orderList.clear();
    }
}
