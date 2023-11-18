export interface ILinkedListNode<T> {
    value: T;
    next: ILinkedListNode<T> | null;
    prev: ILinkedListNode<T> | null;
}
