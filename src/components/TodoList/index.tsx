import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Todo, TodoFilter } from "../../hooks/useTodo";
import IconCheck from "/images/icon-check.svg";

interface TodoListProps {
	todoList: Todo[];
	toggleTodoCompleted: (id: number) => void;
	setFilter: (filter: TodoFilter) => void;
	filter: TodoFilter;
	clearCompleted: () => void;
    removeTodo: (id:number) => void;
}

const TodoList = ({
	todoList,
	toggleTodoCompleted,
	setFilter,
	filter,
	clearCompleted,
    removeTodo
}: TodoListProps) => {
	const { theme: themeName } = useContext(ThemeContext);

	const currentTheme = themeConfig[themeName];

	const filterButtonClass = `
		cursor-pointer
		${currentTheme.todo.hoverTextColor}
	`;

	return (
		<>
			<div
				className={`
					${currentTheme.todo.backgroundColor}
					rounded-md
				`}>
				<ul>
					{todoList.map((todo) => (
						<li
							key={todo.id}
							className={`
								p-6
								border-b
								last:border-b-0
								${currentTheme.todo.borderColor}
                                flex
                                items-center
								justify-between
							`}>
							<div className="flex items-center gap-4">
								<span
									className="
										w-6
										h-6
										rounded-full
										hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]
										hover:p-px
									">
									<button
										onClick={() => toggleTodoCompleted(todo.id)}
										className={`
											w-full
											h-full
											border
											${currentTheme.todo.borderColor}
											rounded-full
											cursor-pointer
											${currentTheme.todo.backgroundColor}
                                            ${todo.completed ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]" : ""}    
										`}>
										{todo.completed && (
											<img
												src={IconCheck}
												alt="Ícone de marcado"
												className="w-2 h-2 m-auto"
											/>
										)}
									</button>
								</span>

								<p
									className={`
                                        ${currentTheme.todo.textColor}
                                        ${todo.completed ? "line-through opacity-50" : ""}
                                    `}>
									{todo.text}
								</p>
							</div>
							<span
								onClick={() => removeTodo(todo.id) }
								className="flex items-center justify-center text-4xl leading-none text-gray-400 cursor-pointer">
								×
							</span>
						</li>
					))}
				</ul>
				<div
					className={`
						text-sm
						flex
						justify-between
						p-4
						${currentTheme.layout.textColor}
					`}>
					<p>{todoList.length} Items Total</p>

					<div className="hidden sm:flex gap-4">
						<button
							onClick={() => setFilter("all")}
							className={`${filter === "all" ? "text-bright-blue" : ""} font-bold cursor-pointer`}>
							All
						</button>

						<button
							onClick={() => setFilter("active")}
							className={`${filter === "active" ? "text-bright-blue" : ""} ${filterButtonClass}`}>
							Active
						</button>

						<button
							onClick={() => setFilter("completed")}
							className={`${filter === "completed" ? "text-bright-blue" : ""} ${filterButtonClass}`}>
							Completed
						</button>
					</div>

					<button onClick={clearCompleted} className={filterButtonClass}>
						Clear Completed Tasks
					</button>
				</div>
			</div>

			<div
				className={`
					${currentTheme.todo.backgroundColor}
					${currentTheme.layout.textColor}
					flex
					justify-center
					gap-5
					py-4
					rounded-md
					mt-4
					sm:hidden
				`}>
				<button
					onClick={() => setFilter("all")}
					className={`${filter === "all" ? "text-bright-blue" : ""} font-bold cursor-pointer`}>
					All
				</button>

				<button
					onClick={() => setFilter("active")}
					className={`${filter === "active" ? "text-bright-blue" : ""} ${filterButtonClass}`}>
					Active
				</button>

				<button
					onClick={() => setFilter("completed")}
					className={`${filter === "completed" ? "text-bright-blue" : ""} ${filterButtonClass}`}>
					Completed
				</button>
			</div>
		</>
	);
};

export default TodoList;
