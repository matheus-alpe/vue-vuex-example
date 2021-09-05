export function updateArrayItem(array, attribute, target, shouldRemove) {
    const index = array.findIndex(item => item[attribute] === target[attribute])
    if (index < 0) return
    if (shouldRemove) {
        return array.splice(index, 1)
    }

    array.splice(index, 1, target)
}