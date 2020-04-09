module.exports = async promises => {
    if (promises.length === 0) {
        return []
    }

    const resolves = await Promise.all(promises.map(promise => promise instanceof Promise ?
        promise.catch(e => e)
        : promise))

    resolves.forEach(resolve => {
        if (resolve instanceof Error) {
            throw resolve
        }
    })
    
    return resolves
}
