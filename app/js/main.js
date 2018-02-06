var url ="https://ec.ef.com.cn/services/school/studytools/notebook/word/LoadWordListV2/?&wordGroup_id=912&startPageNo=1&endPageNo=1&pageSize=15&sortType=1&categoryType=1&languageCode=cs&siteVersion=4-1&member_id=35116189&marketCode=cn&partnerCode=Cool&cultureCode=zh-CN&token=ea32008815383da8efae8b7e2cdcdcd9|2%2f5%2f2018+2%3a04%3a01+AM&sourceMemberType_id=1&jsoncallback=_jsonp_1C8D1266E087FA23ED8441093651D96E"
$(function () {
    $.ajax({
        url:url,
        data:{},
        type:'get',
        success: function (data) {
            console.log(data)
        }
    })    
})

