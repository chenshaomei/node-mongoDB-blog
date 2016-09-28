window.onload=function(){

	// 上传显示缩略图
	var oFile=document.getElementById('avatar');
	var avatar;
	oFile.onchange=function(event){
		handleFile(this);
	}
	function handleFile(obj){
		var file=avatar=obj.files[0];
		var img=document.getElementById('avatar_show');

		if(window.URL){
			//File API Chrom 高级浏览器

			var imgSrc=window.URL.createObjectURL(file);//创建一个object URL，并不是你的本地路径
			img.src=window.URL.createObjectURL(file);
			img.onload=function(){
				// this.src为img的src
				window.URL.revokeObjectURL(this.src);//图片加载后，释放object URL
			}
		
		}else if(window.FileReader){
			//opera不支持createObjectURL/revokeObjectURL方法。我们用FileReader对象来处理
			var reader=new FileReader();
			reader.readAsDataURL(files[0]);
            reader.onload = function(e){
                img.src = this.result;
            }
		}else{
			//ie
			obj.select();
			obj.blur();
			var nfile = document.selection.createRange().text;
            document.selection.empty();
            img.src = nfile;
            img.onload=function(){
                alert(nfile+","+img.fileSize + " bytes");
            }
            fileList.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='"+nfile+"')";
		}
	}


	// 发送ajax请求
	var oRegBtn=$('#reg_btn');

	oRegBtn.on('click',function(){

		var username=$('#username').val();
		var password=$('#password').val();

		var formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        avatar && formData.append('avatar', avatar);

		$.ajax({
			type:'POST',
			dataType:'text',
        	processData: false,  // 告诉JSLite不要去处理发送的数据
        	contentType: false,
			url:'/reg',
			data:formData,
			success:function(data){
				console.log( typeof data);
				var data=JSON.parse(data);
				if(data.code==0){
					console.log(data.msg);
					location.href='/user/login';
				}else {
					location.href='/user/register';
				}
			},
			error:function(err){
				console.log(err)
			}
		})

		return false;//阻止form提交表单
	});

}