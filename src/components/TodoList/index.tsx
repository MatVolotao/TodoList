const todos = [
    { id: 1, text: "Complete the project" },
    { id: 2, text: "Read a book" },
    { id: 3, text: "Go for a walk" },
    { id: 4, text: "Organize the workspace" },
    { id: 5, text: "Plan the next day" },
];

const TodoList = () => {

	return (
		<div className="bg-neutral-very-dark-desaturated-blue rounded-md">
			<ul>
				{todos.map((todo) => (
					<li
						className="p-6 border-b last:border-b-0 border-neutral-very-dark-grayish-blue "
						key={todo.id}>
						<div className=" flex items-center gap-4">
							<button className="w-6 h-6 border border-neutral-very-dark-grayish-blue rounded-full cursor-pointer"></button>
							<p className="text-neutral-very-light-grayish-blue">{todo.text}</p>
						</div>
					</li>
				))}
			</ul>
			<div className="flex justify-between p-4 text-neutral-very-light-grayish-blue">
				<p>{todos.length} Itens Total</p>
				<div className="flex gap-4">
					<button>all</button>
					<button>Active</button>
					<button>Completed</button>
				</div>
				<button>Clear Selected</button>
			</div>
		</div>
	);
};

export default TodoList;
