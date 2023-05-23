import quotes from '../data/quotes'
import chooseUniqueQuote from '../utilities/chooseUniqueQuote'
import makeAllCaps from '../utilities/makeAllCaps'
import sortTags from '../utilities/sortTags'
import replaceTags from './replaceTags'
import { Quote } from "../types"

function displayRandomQuote(): void {
    const textArticle: HTMLElement | null = document.getElementById('text')
    const authorP: HTMLElement | null = document.getElementById('author')
    if (textArticle && authorP) {
        const oldQuote: string = textArticle.innerText
        const newQuote: Quote = chooseUniqueQuote(oldQuote, quotes)
        const quoteText = newQuote.text
        const quoteAuthor = makeAllCaps(newQuote.author)
        const quoteTags = sortTags(newQuote.tags)
        textArticle.innerText = quoteText
        replaceTags(quoteTags)
        authorP.innerText = quoteAuthor
    } else {
        throw new Error("textArticle text not found in DOM")
    }
}

export default displayRandomQuote
