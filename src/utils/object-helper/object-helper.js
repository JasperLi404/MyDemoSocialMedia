export const updateObjectInArray = (items, itemId, objPropName, newObj) => {
    items.map(u => {
        if(u[objPropName] === itemId){
            return{...u, ...newObj};
        } else return{...u}
    })
}