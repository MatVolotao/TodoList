import { useContext, type SubmitEvent } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

interface TodoInputProps {
	addTodo: (event: SubmitEvent<HTMLFormElement>) => void;
}

const TodoForm = ({ addTodo }: TodoInputProps) => {
	const { theme: themeName } = useContext(ThemeContext);

	const currentTheme = themeConfig[themeName];

	return (
		<form className="relative mb-10" onSubmit={addTodo}>
			<span
				className={`
					absolute
					w-6
					h-6
					border
					${currentTheme.todo.borderColor}
					top-1/2
					-translate-y-1/2
					rounded-full
					left-6
				`}
			></span>

			<input
				type="text"
				placeholder="Create a new todo"
				name="todo"
				className={`
					${currentTheme.todo.backgroundColor}
					${currentTheme.todo.textColor}
					w-full
					rounded-md
					py-6
					pl-16
					outline-none
					text-lg
				`}
			/>
		</form>
	);
};

export default TodoForm;