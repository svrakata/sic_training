import { launch } from 'puppeteer'
import model from './types/model'

const parser = (async (url: string) => {
    const browser = await launch()
    const page = await browser.newPage()
    const model:model = {}
            
    await page.goto(url)

    // gets title
    model.title = await page.evaluate(() => {
        const title = document.querySelector('.content-title').textContent
        return {
            content: title,
            key_words: []
        }
    })

    return model
})

export default parser