import { useContext, type ReactNode } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

interface TodoContainerProps {
	children: ReactNode;
}

const TodoContainer = ({ children }: TodoContainerProps) => {
	const { theme: themeName } = useContext(ThemeContext);

	const { layout } = themeConfig[themeName];

	return (
		<main className={`${layout.backgroundColor} min-h-screen`}>
			<div className={layout.heroClass}>
				<div className="m-auto max-w-175 p-8">
					{children}
				</div>
			</div>
		</main>
	);
};

export default TodoContainer;