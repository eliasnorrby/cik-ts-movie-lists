export interface IStorage<T> {
    load(id: any);
    store(obj: any): void;
    delete(obj: any): void;
    all(): T[]; // T[] is equivalent to Array<T>
}
