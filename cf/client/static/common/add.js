window.onload=function(){
        window.URL = window.URL || window.webkitURL;
        var fileElem = document.getElementById("fileElem"),
                fileList = document.getElementById("fileList");
        fileElem.onchange=function(){
            handleFiles(this)
        };

        function handleFiles(obj) {
            var files = obj.files;
            var img = fileList.children[0];
            if(window.URL){
                //File API
                alert(files[0].name + "," + files[0].size + " bytes");
                img.src = window.URL.createObjectURL(files[0]); //创建一个object URL，并不是你的本地路径
                img.width = 200;
                img.onload = function(e) {
                    window.URL.revokeObjectURL(this.src); //图片加载后，释放object URL
                }

            }else if(window.FileReader){
                //opera不支持createObjectURL/revokeObjectURL方法。我们用FileReader对象来处理
                var reader = new FileReader();
                reader.readAsDataURL(files[0]);
                reader.onload = function(e){
                    alert(files[0].name + "," +e.total + " bytes");
                    img.src = this.result;
                    img.width = 200;

                }
            }else{
                //ie
                obj.select();
                obj.blur();
                var nfile = document.selection.createRange().text;
                document.selection.empty();
                img.src = nfile;
                img.width = 200;
                img.onload=function(){
                    alert(nfile+","+img.fileSize + " bytes");
                }
                fileList.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='"+nfile+"')";
            }
        }

        // marked编辑器
        function Editor(input, preview) {
            this.update = function () {
                preview.innerHTML = marked(input.value);
                hljs.initHighlighting()
                hljs.initHighlighting.called = false
            };
            input.editor = this;
            this.update();
        }

        var $ = function (id) { return document.getElementById(id); };
        new Editor($("text-input"), $("preview"));
    }

// $(function(){
	
// 	var addArticle=function(){

// 		var data={
// 			title:$('.title').val()
// 		}
// 		$.ajax({
// 			url: '/api/addArticle',
// 			type: "POST",
// 			data: {'id':'571731332133e3306eb6e451'},
// 			success:function(data) {
// 				console.log('成功了')
// 				console.log(data);
// 			},
// 			error:function() {
// 				console.log("error");
// 			}
// 		})
// 	}

// 	$('#submit').on('click',function(){
// 		console.log($('.title').val())
// 	})
// })