import jsonp from './jsonp'
import { commonParams, options } from './config'


export function getWords() {
    const url = 'https://ec.ef.com.cn/services/school/studytools/notebook/word/LoadWordListV2/'

    const data = Object.assign({}, commonParams, {
        siteVersion: '11-1',
        pageSize: 30,
        token: 'ca5ec8ff0e6233d1e5c0b028614958ce| 2 / 5 / 2018 9: 40: 31 AM',
        wordGroup_id: '918'
        
    })
    options.name ='_jsonp_6252A6E7EB0A7774965CDDD7B0D7BD2E';
    return jsonp(url, data, options)
}