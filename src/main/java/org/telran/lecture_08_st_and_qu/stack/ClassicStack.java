package org.telran.lecture_08_st_and_qu.stack;

public class ClassicStack {

    private final int[] data;
    private int top;
    private final int capacity;

    public ClassicStack(int size) {
        data = new int[size];
        capacity = size;
        top = -1;
    }

    // push elements to the top of stack
    public void push(int x) {
        if (isFull()) {
            throw new Error("Stack OverFlow");
        } else {
            // insert element on top of stack
//            System.out.println("Inserting " + x);
            data[++top] = x;
        }
    }

    // pop elements from top of stack
    public int pop() {
        // if stack is empty no element to pop
        if (isEmpty()) {
            throw new Error("Stack is empty");
        }
        // pop element from top of stack
        return data[top--];
    }

    // return size of the stack
    public int getSize() {
        return top + 1;
    }

    // check if the stack is empty
    public boolean isEmpty() {
        return top == -1;
    }

    // check if the stack is full
    public boolean isFull() {
        return top == capacity - 1;
    }

    public int peek() {
        if (isEmpty()) {
            throw new Error("Stack is empty");
        } else {
            return data[top];
        }
    }

    // display elements of stack
    public void printStack() {
        for (int i = 0; i <= top; i++) {
            System.out.print(data[i] + " ");
        }
    }
}

