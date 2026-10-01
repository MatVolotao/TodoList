import IconSun  from "/images/icon-sun.svg"

const TodoListHeader = () => {
	return (
		<header className="flex justify-between  mb-6 pt-20">
			<h1 className="text-white text-[2.5rem] font-bold tracking-[1rem]">TODO</h1>
			<button>
				<img src={IconSun} alt="Alternar tema" />
			</button>
		</header>
	);
};

export default TodoListHeader;
