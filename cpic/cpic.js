// alert("欢迎");

$(document).ready(function(){
  $("#head .insu_sup_item>a").mouseover(function(){
    $("#head .column-link-box").css("display","block");
  });
  $("#head .insu_sup_item>a").mouseout(function(){
    $("#head .column-link-box").css("display","none");
  });
});

