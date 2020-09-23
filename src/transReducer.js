const TransactionReducer = ((state, action) => {
    switch(action.type){
        case "Add_Trans": {
            return [action.payload, ...state];
        }
        case "Del_Trans": {
            return state.filter(transactions => transactions.id !==action.payload)
        }
        default:
            return state;
    }
})

export default TransactionReducer;