export const toDoReducer = (initialState, action) => {

    switch (action.type){
        case 'Add To-Do':
            return [...initialState, action.payload]
        
        case 'Update To-Do':
            return initialState.map(todo => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						description: action.payload.description,
					};
				}

				return todo;
			});

        case 'Complete To-Do':
            initialState.map(todo => {
                if (todo.id === action.payload.id){
                    return {
                        ...todo,
                        description: action.payload.description
                    };
                }

                return todo;
            });

        case 'Delete To-Do':
            return initialState.filter(todo => todo.id !== action.payload);

        default:
            return initialState;
    }
}