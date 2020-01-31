 $(function(){
 	$(".content ul").isotope({
 		itemSelector:"li"
 	});


 	//code cho phan .tukhoa
 	$(".tukhoa").keypress(function(event) {
 		// Moi nut tren ban phim deu co mot ky tu rieng, vi du:13 la enter ,8 la dau cach
 		if(event.keyCode == "13")
 		{
 			tu1 = $(".tukhoa").val();
 			tu1 = "." + tu1;
 			$(".content ul").isotope({filter:tu1});
 		}
 	});

 	thoigian = setInterval(function(){
 		tu1 = $(".tukhoa").val();
 			tu1 = "." + tu1;
 			$(".content ul").isotope({filter:tu1});
 	},200)





 	//code cho phan nut
 	$("nav ul li a").click(function(event) {
 		var danhmuc = $(this).data("danhmucanh");
 		var ten = $(this).text();

 		//dat ten vao trong h1

 		if(danhmuc == "all"){
 			$("section h1").text("Tất cả ảnh");
 			$(".content ul").isotope({filter:"*"});
 		}
 		else{
 			$("section h1").text(ten);
 			$(".content ul").isotope({filter:danhmuc});
 		}
 		
 		return false;
 	});
})  
 