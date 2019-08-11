import {
    title,
    authors,
    citationInfo
} from "./types";

interface model {
    citatationInfo?: citationInfo,
    title?: title,
    authors?: authors
}

export default model