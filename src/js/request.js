export default {
    /**
     * [type 封装通用ajax,url:请求地址,callback:回调函数,type请求类型,data:发送数据,dataType:接受数据类型]
     * @type {String}
     */
    request (url,callback,type="GET",data={},dataType="json") {
        $.ajax({
            url: url,
            type: type,
            dataType: dataType,
            data: data
        })
        .done(obj => {
                callback(obj)
            }
        )
    }
}
