export type citationInfo = {
    citation: {
        id: string // ??? very questionable ----> what's this? "Aging (Albany NY). 2014 Nov; 6(11): 931–942."
        link: string // ??? should i call this link?
    }
    date_pubished_online: string
    doi: {
        id: string
        link: string
    }
    citation_ids: {
        PMCID: string
        PMID: {
            id: string
            link: string
        }
    }

}

export type title = {
    content: string
    key_words: string[]
}

export type authors = {
    [index: number]: { name: string, link: string, info: number[], contributedEqualy: boolean }
}

export type authorInformation = {
    [index: number]: string
}

export type keywords = {

}