export function localStoragePlugin(store) {
    store.subscribe(function (mutation, state) {
        localStorage.setItem('board', JSON.stringify(state.board))
    })
}

export function setID(tasks) {
    return tasks.length + 1;
}