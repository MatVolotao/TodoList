
import { useState, type SubmitEvent } from "react";

export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export type TodoFilter = "all" | "active" | "completed";

export const useTodo = (initialTodos: Todo[] = []) => {
	const [todoList, setTodoList] = useState<Todo[]>(initialTodos);
	const [filter, setFilter] = useState<TodoFilter>("all");

	const addTodo = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const todoItem = formData.get("todo") as string;

		if (!todoItem || !todoItem.trim()) return;

		setTodoList((prev) => [
			...prev,
			{
				id: Date.now(),
				text: todoItem.trim(),
				completed: false,
			},
		]);

		event.currentTarget.reset();
	};

	const toggleTodoCompleted = (id: number) => {
		setTodoList((prev) =>
			prev.map((todo) => {
				if (id === todo.id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}

				return todo;
			})
		);
	};

	const deleteTodo = (id: number) => {
		setTodoList((prev) => prev.filter((todo) => todo.id !== id));
	};

	const clearCompleted = () => {
		setTodoList((prev) => prev.filter((todo) => !todo.completed));
	};

	const filteredTodos = todoList.filter((todo) => {
		if (filter === "active") return !todo.completed;
		if (filter === "completed") return todo.completed;

		return true;
	});

	return {
		todoList,
		filteredTodos,
		filter,
		setFilter,
		addTodo,
		toggleTodoCompleted,
		deleteTodo,
		clearCompleted,
	};
};
