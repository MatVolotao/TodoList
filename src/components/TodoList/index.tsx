import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Todo } from "../../App";
import IconCheck from "/images/icon-check.svg";

// const todos = [
// 	{ id: 1, text: "Complete the project" },
// 	{ id: 2, text: "Read a book" },
// 	{ id: 3, text: "Go for a walk" },
// 	{ id: 4, text: "Organize the workspace" },
// 	{ id: 5, text: "Plan the next day" },
// ];

interface TodoListProps {
	todoList: Todo[];
	toggleTodoCompleted: (id: number) => void;
}

const TodoList = ({ todoList, toggleTodoCompleted }: TodoListProps) => {
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
						</li>
					))}
				</ul>
				{todoList.length > 0 && (
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
							<button className="text-bright-blue font-bold cursor-pointer">
								All
							</button>

							<button className={filterButtonClass}>Active</button>

							<button className={filterButtonClass}>Completed</button>
						</div>

						<button className={filterButtonClass}>Clear Selected</button>
					</div>
				)}
			</div>
			{todoList.length > 0 && (
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
					<button className="text-bright-blue font-bold cursor-pointer">All</button>

					<button className={filterButtonClass}>Active</button>

					<button className={filterButtonClass}>Completed</button>
				</div>
			)}
		</>
	);
};

export default TodoList;
