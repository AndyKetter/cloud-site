$(function () {
    /**
     * 全选和反选
     */
    $('.select-all').on('click',function(){
        //全选全不选
        if ($(this).prop('checked')) {
            $('.select-items').prop('checked',true)
        } else {
            $('.select-items').prop('checked',false)
        }
    })
    /**
     * 子集都选中，select-all才选中
     * 子集有一个没选中，select-all不选中
     */
    $('.select-items').on('click',function(){
        var flag = true;
        $('.select-items').each(function(){
            if(!$(this).prop('checked')){
                flag = false;
            }
        });
        $('.select-all').prop('checked',flag)
    });
 
    // 上传附件
    $(document).on('click','#upload-btn', function () {
        $('.modal-message').text('上传中');
        $('#uploadModal').modal();  
    });
    // 上传附件
    $(document).on('click','#JS-delete-all', function () {
        $('.modal-message').text('批量刪除成功');
        $('#uploadModal').modal();  
    });
});