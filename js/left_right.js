var common_tree_select=null;
// $('div.tree_result ul li a').on('click',function (e) {
//     e.preventDefault();
//    $(this).toggleClass('current');
// });

function zTreeOnClick(event, treeId, treeNode) {
    // alert(treeNode.name);
     common_tree_select=treeNode.name;
    //console.log('回调执行'+common_tree_select);


}

var setting = {
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        onClick: zTreeOnClick
    }
};

var zNodes =[
    { id:1, pId:0, name:"父节点1", open:true},
    { id:11, pId:1, name:"父节点11",open:true},
    { id:111, pId:11, name:"叶子节点111","click":"createData1()"},
    { id:112, pId:11, name:"叶子节点112","click":"createData2()"},
    { id:113, pId:11, name:"叶子节点113"},
    { id:114, pId:11, name:"叶子节点114"},
    { id:12, pId:1, name:"父节点12"},
    { id:121, pId:12, name:"叶子节点121"},
    { id:122, pId:12, name:"叶子节点122"},
    { id:123, pId:12, name:"叶子节点123"},
    { id:124, pId:12, name:"叶子节点124"},
    { id:13, pId:1, name:"父节点13 - 没有子节点", isParent:true},
    { id:2, pId:0, name:"父节点2 - 折叠"},
    { id:21, pId:2, name:"父节点21 - 展开", open:true},
    { id:211, pId:21, name:"叶子节点211"},
    { id:212, pId:21, name:"叶子节点212"},
    { id:213, pId:21, name:"叶子节点213"},
    { id:214, pId:21, name:"叶子节点214"},
    { id:22, pId:2, name:"父节点22 - 折叠"},
    { id:221, pId:22, name:"叶子节点221"},
    { id:222, pId:22, name:"叶子节点222"},
    { id:223, pId:22, name:"叶子节点223"},
    { id:224, pId:22, name:"叶子节点224"},
    { id:23, pId:2, name:"父节点23 - 折叠"},
    { id:231, pId:23, name:"叶子节点231"},
    { id:232, pId:23, name:"叶子节点232"},
    { id:233, pId:23, name:"叶子节点233"},
    { id:234, pId:23, name:"叶子节点234"},
    { id:3, pId:0, name:"父节点3 - 没有子节点", isParent:true}
];

$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});
//-->
function createData1() {
    var tempData="<ul><li><a>单位1</a><span>这里是对应的职位</span></li> <li><a>单位2</a><span>这里是对应的职位</span></li> <li><a>单位3</a><span>这里是对应的职位</span></li></ul>";
    $("div.tree_result ul").remove();
    $("div.tree_result").append(tempData);
    $('div.tree_result ul li a').on('click',function (e) {
        e.preventDefault();
        $(this).toggleClass('current');

    });


}
function createData2() {
    var tempData="<ul><li><a>职位1</a><span>这里是对应的职位1</span></li> <li><a>职位2</a><span>这里是对应的职位2</span></li> <li><a>职位3</a><span>这里是对应的职位3</span></li></ul>";
    $("div.tree_result ul").remove();
    $("div.tree_result").append(tempData);
    $('div.tree_result').on('click','ul li a',function (e) {
        e.preventDefault();
        $(this).toggleClass('current');
    });
}

$("#transfer_right").on("click",function () {
   if($("div.tree_result ul li a").hasClass('current')){
        //alert("这里将复制选择的人员信息,复制过程还需要判断右侧的同名元素如果发现有,不重复添加");
       $('div.tree_result ul li a').filter(".current").each(function () {
           //alert($(this).children());
           // var ui=$('div.right_result ul').append("<li>"+$(this).children().filter("span").remove().html()+"</li>");
           var ui=$('div.right_result ul').append("<li>"+$(this).contents().text()+"</li>");
           console.log(ui);
       });
   }
   else if(common_tree_select!=null){
       var tempData="<li class='special'>"+common_tree_select+"</li>";
       $('div.right_result ul').append(tempData);

   }
   else{
        alert("你没有选择单位或个人,不能添加");
    }
});
$("#transfer_left").on('click',function () {
    if($("div.right_result ul li").hasClass('current')){
        $("div.right_result ul li").remove(".current");
    }
    else{

    }
});
$('div.right_result').on('click','ul li',function (e) {
    e.preventDefault();
    $(this).toggleClass('current');

});