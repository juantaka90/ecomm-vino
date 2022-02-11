let is_ok = true;

export const CustomFetch = (timeout, tarea) => {
return new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (is_ok) {
            resolve(tarea)
        } else {
            reject("error")
        }
    }, timeout);
})
}