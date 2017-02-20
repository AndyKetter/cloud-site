/**
 * 新建站点js
 */
$(function(){
    /**
     * [id 弹框]
     * @type {[type]}
     */
    $(document).on('click', '#JS_alert', function(event) {
        event.preventDefault();
        const id = $(this).parents('#JS_list').attr('data-template-id');
        $('#JS_inpt',window.parent.document).val(id);//设置隐藏域template-id
        $('#warning-modal',window.parent.document).modal();
    });
    /**
     * [href 跳转]
     * @type {String}
     */
    $(document).on('click', '#JS_use', function(event) {
        window.open($(this).attr("data-url"));
    });
    /**
     * 提交表单
     */
    $('#JS-submit', window.parent.document).click(function(event) {
        $('.form-horizontal', window.parent.document).submit();
    });
    /**
     * 预览跳转
     */
    $(document).on('click', '#JS_preview', function(event) {
        window.open($(this).attr("data-url"));
    });
});
