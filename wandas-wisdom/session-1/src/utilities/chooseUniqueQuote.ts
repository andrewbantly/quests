import selectRandomQuote from './selectRandomQuote'
import checkIfIdentical from './checkIfIdentical'
import { Quote } from "../types"

function chooseUniqueQuote(oldText: string, allQuotes: Quote[]): Quote {
    const newQuote = selectRandomQuote(allQuotes)
    const newText = newQuote.text
    const isIdentical = checkIfIdentical(oldText, newText)

    if (!isIdentical) {
        return newQuote
    } else {
        return chooseUniqueQuote(oldText, allQuotes)
    }
}

export default chooseUniqueQuote
