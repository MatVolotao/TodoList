import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
	const {
		filteredTodos,
		filter,
		setFilter,
		addTodo,
		toggleTodoCompleted,
		clearCompleted,
        removeTodo
	} = useTodo();

	return (
		<TodoContainer>
			<TodoHeader />
			<TodoForm addTodo={addTodo} />
			<TodoList
				todoList={filteredTodos}
				toggleTodoCompleted={toggleTodoCompleted}
				setFilter={setFilter}
				filter={filter}
				clearCompleted={clearCompleted}
                removeTodo={removeTodo}
			/>
		</TodoContainer>
	);
}

export default App;
