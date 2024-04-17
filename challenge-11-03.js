const unitsHandlerDict = {
    "days": (date, number) => (
        number ? 
        new Date(date.setDate(date.getDate() + parseInt(number))) 
        : 
        date
    ),
    "months": (date, number) => (
        number ? 
        new Date(date.setMonth(date.getMonth() + parseInt(number))) 
        : 
        date),
    // ...
}

return unitsHandlerDict[text[index + 1]](date, text[index])