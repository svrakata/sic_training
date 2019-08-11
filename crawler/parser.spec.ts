import { expect, assert } from 'chai'
import parser from './parser'

let model
const url = 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4276787/'

before(async () => {
    model = await parser(url)
})

describe('Parser', () => {
    it('should return object', () => {
        expect(model).to.be.a('object')
    })
})

describe('Data model ', () => {
    it('should have title property and title property should be an object', () => {
        expect(model.title).to.exist
        expect(model.title).to.be.a('object')
    })

    it('title property should have content property which should be a string', () => {
        expect(model.title.content).to.exist
        expect(model.title.content).to.be.a('string')
    })

    it('should have citationInfo property', () => {
        expect(model.citationInfo).to.exist
    })
})