import jsonp from './jsonp'
import { commonParams, options } from './config'


export function getWords() {
    const url = 'https://ec.ef.com.cn/services/school/studytools/notebook/word/LoadWordListV2/'

    const data = Object.assign({}, commonParams, {
        wordGroup_id: '912'
        
    })

    return jsonp(url, data, options)
}