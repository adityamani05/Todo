import * as actions from '../constants';
let start_state = [
      {
        id:1,
        title:'This is your Todo list',
        completed: false
      },
      {
        id:2,
        title:"You can add Todo's here",
        completed: false
      },
      {
        id:3,
        title:"Add Todo's here",
        completed: false
      }
    ]

let lastId = 3;


export default function reducer(state=start_state, action){
    if (action.type === actions.ADD_TODO){
        return [
            ...state,
            {
                id: ++lastId,
                title: action.payload.title,
                completed: false
            }    
        ];
    }
    else if(action.type === actions.REMOVE_TODO){
        return state.filter(todo => todo.id !== action.id);
    }
    else if(action.type === actions.UPDATE_TODO){
        let updated_state = [];
        for(let i=0;i<state.length;i++)
        {
            let todo = state[i]
            if(todo.id === action.id){
                todo.completed = !todo.completed;
            }
            updated_state.push(todo)
        }
        return updated_state;
    }
    return state;
}