interface dataObject {
    [key: string]: any
}

function getRandomCards(data: dataObject, toSliceNumber: number) {
    data.sort(() => Math.random() - 0.5)

    const newArray = data.slice(1, toSliceNumber.valueOf() + 1)
    const duplicateArray = [...newArray]
    const finalCardSetArray = newArray.concat(duplicateArray)

    finalCardSetArray.sort(() => Math.random() - 0.5)

    return finalCardSetArray
}

export default getRandomCards
