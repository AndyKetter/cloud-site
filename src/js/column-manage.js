import Funs from './request';

$(function () {
    /**
     * 添加栏目弹出框
     */
    $(document).on('click', '#add-column', function () {
        $('#add-modal').modal();
    });
    /**
     * 单个删除弹出框
     */
    $(document).on('click', '.Js-delete', function () {
        $('#removeModal').modal();
    });
    /**
     * 全部删除弹出框
     */
    $(document).on('click', '#JS-delete-all', function () {
        $('#removeModal').modal();

    });
    /**
     * 栏目类型切换(给定隐藏input值)
     */
    $(document).on('click', '.choose-btn', function () {
        $(this).addClass('btn-info').removeClass('btn-default').siblings().removeClass('btn-info').addClass('btn-default');
        $('#JS_inpt').attr('value', $(this).attr('data-id'));
    });

    /**
     * 全选和反选
     */
    $('.select-all').on('click', function () {
        //全选全不选
        if ($(this).prop('checked')) {
            $('.select-items').prop('checked', true)
        } else {
            $('.select-items').prop('checked', false)
        }
    })
    /**
     * 子集都选中，select-all才选中
     * 子集有一个没选中，select-all不选中
     */
    $('.select-items').on('click', function () {
        var flag = true;
        $('.select-items').each(function () {
            if (!$(this).prop('checked')) {
                flag = false;
            }
        });
        $('.select-all').prop('checked', flag)
    });
    /**
     * 表单提交
     */
    $('#JS-submit').on('click', function (event) {
        var _post_url = $('.form-horizontal').attr('data-url');
        $('.form-horizontal').ajaxSubmit({
            url: _post_url,
            type: 'POST',
            dataType: 'json',
            success: function (resp) {
                console.log(resp);
            }
        });
    });
});