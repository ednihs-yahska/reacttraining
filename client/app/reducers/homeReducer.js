export default function homeReducer(state={list:[
    {
        name: "GraphQL training",
        done: false,
        id:0
    },
    {
        name: "React training",
        done: false,
        id:1
    },
    {
        name: "Typescript training",
        done: true,
        id:2
    },
    {
        name: "React Native training",
        done: false,
        id:3
    }
], weather:null}, action){
    let newState = {...state};
    switch(action.type){
        case 'default': {
            newState = newState; 
            break;
        }
        case 'TOGGLE_DONE':
            const id = action.payload;
            const newList = newState.list.map((todo, key)=>todo.done = action.payload==todo.id ? {...todo, done: !todo.done} : {...todo, done: todo.done})
            newState.list = newList
            break
        case 'GOT_WEATHER':
            newState.weather=action.payload
    }
    return newState;
}