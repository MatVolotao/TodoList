import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

const TodoListHeader = () => {
	const { theme: themeName, toggleTheme } = useContext(ThemeContext);

	const currentTheme = themeConfig[themeName];

	return (
		<header className="flex justify-between mb-6 pt-20 items-center mb-5">
			<h1 className="text-white text-4xl sm:text-[2.5rem] font-bold tracking-[1rem]">
				TODO
			</h1>

			<button className="cursor-pointer" onClick={toggleTheme}>
				<img className="w-8 h-8" src={currentTheme.icon} alt="Alternar tema" />
			</button>
		</header>
	);
};

export default TodoListHeader;