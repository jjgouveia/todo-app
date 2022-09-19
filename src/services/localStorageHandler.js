export const setToLoStoTodoList = (key) => {
localStorage.setItem("tasks", JSON.stringify(key))
}