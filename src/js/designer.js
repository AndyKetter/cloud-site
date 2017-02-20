import Funs from './request';
$(function(){
    /**
     * [url description]
     * @type {String}
     */
    var page_url = api_url;
    var _post_url = post_url;
    var _upload_url = upload_url;
    /**
     * [xyz 获取数据写入localStorage,设计器呈现数据]
     * @type {String}
     */
    if (location.href.indexOf("&xyz=")<0){
        Funs.request(page_url,function(obj){
            if (obj.status == 1) {
                var htmlstr = obj.data.html.join("\n");
                var csstr = obj.data.css.join("\n");
                var jstr = obj.data.js.join("\n");
                localStorage.setItem('html',htmlstr);
                localStorage.setItem('css',csstr);
                localStorage.setItem('js',jstr);
                location.href=location.href+"&xyz="+Math.random();
            }
        });
    }
    /**
     * [Tiny 设计器初始化]
     * @type {TinyEditor}
     */
    var Tiny = new TinyEditor('Tiny-container',{
        index : 1
    });
    $(document).on('click', '.JS_Tiny_html', function(event) {
        event.preventDefault();
        /* Act on the event */
        Tiny.tab(1)
    });
    $(document).on('click', '.JS_Tiny_css', function(event) {
        event.preventDefault();
        /* Act on the event */
        Tiny.tab(2)
    });
    $(document).on('click', '.JS_Tiny_js', function(event) {
        event.preventDefault();
        /* Act on the event */
        Tiny.tab(3)
    });
    /**
     * 拖拽排序初始化
     */
    $('.dd').nestable({ /* config options */ });
    /**
     * [data 保存]
     * @type {Object}
     */
    $(document).on('click', '.d-save', function(event) {
        event.preventDefault();
        /* Act on the event */
        Tiny.save();
        var data = {
            "html":localStorage.getItem('html'),
            "css":localStorage.getItem('css'),
            "js":localStorage.getItem('js')
        }
        /**
         * [status 保存数据到后端]
         * @type {[type]}
         */
        Funs.request(_post_url,function(obj){
            if (obj.status == 1) {
                $('#JS-save-success').modal();
            }
        },"POST",data);
    });
    /**
     * [data 预览点击]
     * @type {Object}
     */
    $(document).on('click', '.d-preview', function(event) {
        event.preventDefault();
        /* Act on the event */
        Tiny.save();
        var data = {
            "html":localStorage.getItem('html'),
            "css":localStorage.getItem('css'),
            "js":localStorage.getItem('js')
        }
        /**
         * [status 保存数据到后端,成功后再跳转页面]
         * @type {[type]}
         */
        var tmpWin  = window.open();//处理ajax中window.open被拦截问题
        tmpWin.document.write("服务器正在处理中，请稍后");//给出用户提示
        Funs.request(_post_url,function(obj){
            if (obj.status == 1) {
                tmpWin.location.href = obj.data;
            }
        },"POST",data);
    });
    /**
     * 拖拽排序点击跳转
     */
     $(document).on('click', '.dd3-content', function(event) {
         event.preventDefault();
         /* Act on the event */
         location.href = $(this).attr("data-url");
     });
    /*
    * 服务器地址,成功返回,失败返回参数格式依照jquery.ajax习惯;
    * 其他参数同WebUploader
    */
    $('#as').diyUpload({
        url:_upload_url,
        success:function( data ) {
            if (data.status === 1) {
                var filename = data.filename;//获取图片名字
                $('.img-list').append('<li class="list-group-item">'+filename+'</li>');
            }
        },
        error:function( err ) {
            console.info( err );
        },
        buttonText : '选择图片',
        chunked:true,
        // 分片大小
        chunkSize:512 * 1024,
        //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
        fileNumLimit:50,
        fileSizeLimit:500000 * 1024,
        fileSingleSizeLimit:50000 * 1024,
        accept: {}
    });

    /**
     * 设计器颜色切换js
     */
    $(document).on('click', '.d-white', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('#theme').val("chrome").trigger("change")
    });
    $(document).on('click', '.d-black', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('#theme').val("chaos").trigger("change")
    });
    $(document).on('click', '#JS_select', function(event) {
        event.preventDefault();
        $(this).siblings('.ship-list').toggle();
    });
    $(document).on('mouseleave', '.ship-list', function(event) {
        event.preventDefault();
        $(this).hide();
    });
    /**
     * 摸态框
     */
    $(document).on('click', '#JS_create', function(event) {
        event.preventDefault();
        $(this).parents('.ship-list').hide();
        $('#warning-modal').modal();
    });
    $(document).on('click', '.icon-sp', function(event) {
        event.preventDefault();
        var num = $(this).attr('data-num');
        var mgl = -(num-1)*1183+"px";
        $(this).siblings('.icon-sp').removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings('.template-list').find('.t-wrap').css('margin-left',mgl);
    });
})
