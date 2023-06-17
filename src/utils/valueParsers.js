export const bikeValues = {
    general: 'Обычный',
    sport: 'Спортивный'
}

export const statusValues = {
    new: 'Новое',
    in_progress: 'В процессе',
    done: 'Завершено'
}

export const valueParser = (obj, key) => {
    return obj[key]
}