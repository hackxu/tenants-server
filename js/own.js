/**
 * Created by bluexu on 2016/11/7.
 */
var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.value="发送验证码";
        obj.style.backgroundColor="#ee4239";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.style.backgroundColor ="#f5f1ec";
        obj.value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
            settime(obj) }
        ,1000)
}

$(function () {
    //        手机号不存在弹窗取消按钮事件

    $('.login-alet-check-canel').click(function () {
        $('.login-alert').hide();
        $('.bg').hide();
    });
//        手机号不存在弹窗重填按钮事件和发行礼品卡弹窗
    $('.login-alet-check-again').click(function () {
        $('.login-alert').hide();
        $('.bg').hide();
        $('.login-input ul li:eq(0) input').focus()
    })

    //手机号不存在弹窗
    function phoneerr() {
        $('.bg').show();
        $('.login-alert').show()
    }

    //        区域选择
    $('.own-shop-place select').change(function () {
        var $val = $(this).find("option:selected").text();
//            console.log($val)
//            $(this).parent().find("span").empty();
        $(this).parent().find("span").html($val);
    })

    // 日期选择
    $('.hairpin-check ul li input').change(function () {
//           alert($(this).val())
        var $val = $(this).val();
        $(this).prev("input").val($val)

    })


    $('.hairpin-gift ul li input[type=radio] ').change(function () {
        var re = /^[0-9]*[1-9][0-9]*$/;

        if ($(this).prop("checked") == true){
            $(".hairpin-gift ul li").find("img").attr("src","images/7.png")
            $(this).prev("img").attr("src","images/8.png")
        }else{

            $(".hairpin-gift ul li").find("img").attr("src","images/7.png")
            $(this).prev("img").attr("src","images/7.png")
        }
        if(re.test($('.hairpin-gift ul li:eq(1)>input')) != "" && $('.hairpin-gift ul li:eq(1) label input').prop("checked") == true){
            $('.hairpin-gift button').show();
        }else{
            $('.hairpin-gift button').hide();
        }
        if($('.hairpin-gift ul li:eq(2) input').prop("checked") == true){
            $('.hairpin-gift button').show();
        }
    })
    $('.hairpin-gift ul li:eq(1)>input').change(function () {
        var re = /^[0-9]*[1-9][0-9]*$/;
        if(re.test($(this).val()) && $('.hairpin-gift ul li:eq(1) label input').prop("checked") == true){
            $('.hairpin-gift button').show();
        }else{
            $('.hairpin-gift button').hide();
        }
        if($('.hairpin-gift ul li:eq(2) input').prop("checked") == true) {
            $('.hairpin-gift button').show();
        }
    })

    // 重写选择框样式
    $(".own-shop-all-check label input[type=checkbox],.own-shop-list label input[type=checkbox], .hairpin-vip-child ul li input[type=checkbox],.Recharge-activities-add ul li input[type=checkbox] ,.shop-user-manager-add-authority ul li input[type=checkbox]").click(function () {
        console.log($(this).prop("checked"));
        console.log($(this).prev("img"))
        if ($(this).prop("checked") == false) {
            $(this).prev("img").attr("src", "images/7.png")
        } else {
            $(this).prev("img").attr("src", "images/8.png")
        }
    });
    $('.own-shop-all-check input[type=checkbox]').click(function () {
        if($(this).prop("checked")){
            $('.own-children-check').find("input").prop("checked","checked")
            $('.own-children-check').find("img").attr("src","images/8.png")
        }else{
            $('.own-children-check').find("input").removeAttr("checked")
            $('.own-children-check').find("img").attr("src","images/7.png")
        }
    })

    // 发行会员卡页面js
    $('.table-main-sale .add ').click(function () {
        var $li = "<li><input type='number' placeholder='请输入金额，例如：500'><input type='number' placeholder='请输入折扣，例如：9'><img class='reduce' src='images/02.png' alt=''></li> "
//        $('.hairpin-vip-table-main ul').prepend($($li))
        $(this).parent().before($($li))
    });
    $('.table-main-gold .add ').click(function () {
        var $li = "<li><input type='number' placeholder='请输入金额，例如：500'><input type='number' placeholder='请输入金额，例如：9'><img class='reduce' src='images/02.png' alt=''></li> "
//        $('.hairpin-vip-table-main ul').prepend($($li))
        $(this).parent().before($($li))
    });
    $('.table-main-store .add ').click(function () {
        var $li = "<li><input type='number' placeholder='请输入金额，例如：500'><input type='number' placeholder='请输入积分，例如：9'><img class='reduce' src='images/02.png' alt=''></li> "
//        $('.hairpin-vip-table-main ul').prepend($($li))
        $(this).parent().before($($li))
    });
    $(document).on("click",".reduce",function () {
        $(this).parent().remove();
    });
    $('.hairpin-vip-child-two input').change(function () {
        $(this).val("¥"+$(this).val())
    })

    $('.my-vip ul li ').click(function () {
        $(".my-vip ul li").find("img").removeClass("zhuan");
        $('.my-vip-slide-down').hide();
        $('.my-vip-slide-down dl').hide();
        var $index = $('.my-vip ul li').index($(this));
        console.log($index)
        $(this).find("img").addClass("zhuan");
        $('.bg').show();
        $('.my-vip-slide-down').show()
        $('.my-vip-slide-down dl').eq($index).show()
    })
    $('.hairpin-check ul li ').click(function () {
        $(".hairpin-check ul li").find("img").removeClass("zhuan");
        $('.my-vip-slide-down').hide();
        $('.my-vip-slide-down dl').hide();
        var $index = $('.hairpin-check ul li').index($(this));
        if($index <2){
            $(this).find("img").addClass("zhuan");
            $('.bg').show();
            $('.my-vip-slide-down').show()
            $('.my-vip-slide-down dl').eq($index).show()
        }
        console.log($index)
    })
    $('.my-vip-slide-down dl dd').click(function () {
        var $index= $('.my-vip-slide-down dl').index($(this).parent());
        var $text = $(this).text()
        $('.my-vip ul li,.hairpin-check ul li ').eq($index).find("span").html($text);
        $('.my-vip ul li ,.hairpin-check ul li').find("img").removeClass("zhuan");
        $('.my-vip-slide-down').hide();
        $('.bg').hide();
    })
    $('.my-vip-date').change(function () {
        var $val = $(this).val();
        $(this).prev("input").val($val)
    })

    $('.my-vip-main-tab-list  ul li').click(function () {
        var $index= $('.my-vip-main-tab-list ul li').index($(this));
        console.log($(this))
        $(this).addClass("hairpin-tab-list-active").siblings().removeClass("hairpin-tab-list-active");
        $(".my-vip-main-tab-main ul").hide();
        $('.my-vip-main-tab-main ul').eq($index).show();
    })

    $('.my-vip-search-change>p>b input').focus(function () {
        $('.my-vip-search-change >p >b').css("width","95%")
    });
    $('.my-vip-search-change>p>b input').blur(function () {
        $('.my-vip-search-change>p >b').css("width","60%")
    });
    $('.go-activities-change>p>b input').focus(function () {
        $('.go-activities-change>p>b').css("width","95%")
    });

    $('.go-activities-change>p>b input').blur(function () {
        $('.go-activities-change>p>b').css("width","32%")
    });
    $('.shop-user-manager-add-input>p>b input').blur(function () {
        $('.go-activities-change>p>b').css("width","50%")
    });
    $('.pay-record-change>p>b input').blur(function () {
        $('.go-activities-change>p>b').css("width","61%")
    });
    $('.gift-exchange-input-change>p>b input').blur(function () {
        $('.gift-exchange-input-change>p>b').css("width","45%")
    });
    $('.card-rechargea-change>p>b input').blur(function () {
        $('.card-rechargea-change>p>b').css("width","46%")
    });
    $('.pay-money p>b input').blur(function () {
        $('.pay-money-change>p>b').css("width","49%")
    });
    $('.caozuorizhi p>b input').blur(function () {
        $(' .go-activities-change>p>b').css("width","40%")
    });

    // 新增充值活动日期选择和活动范围选择
    $('.Recharge-activities-add ul li:eq(1) select').change(function () {
        var $val = $(this).find("option:checked").text();
        $('.Recharge-activities-add ul li:eq(1) b span').text($val)

    })
    $('.recharge-date input').change(function () {
        var $val = $(this).val();
        console.log($val);
        $val = $val.replace("-","");
        $val =$val.replace("-","")
        $(this).prev("b").find("span").eq(1).text($val)
    })

    // 新增积分活动页面表格    
    $('.store-add-t ').click(function () {
        var $li = " <li><input type='number' placeholder='请输入积分,例如:500'> <div class='false-select'> <p>选择<img src='images/go.png' alt=''></p> <select name='' id=''> <option value=''>选择</option> <option value='1'>发送接口数据库房价降幅</option> </select> </div> <img class='store-table-reduce' src='images/02.png' alt=''> </li> "
//        $('.hairpin-vip-table-main ul').prepend($($li))
        $(this).parent().before($($li))
    });
    $(document).on("click",".store-table-reduce",function () {
        $(this).parent().remove();
    });

    $(document).on("change",".store-table-t ul li select,.coupon-table ul li select",function () {
        var $text = $(this).find("option:selected").text();
        console.log($text)
        $(this).prev("p").html("<abbr>"+ $text+" <img src='images/go.png' alt=''></abbr>")
    })
    // 新增赠券页面表格

    $('.coupon-add').click(function () {
        var $li = "<li><input type='number' placeholder='请输入金额,例如:500'><input type='number' placeholder='请输入金额,例如:10'> <div class='false-select coupon-select'> <p>设置 <img src='images/go.png' alt=''></p> </div> <img src='images/02.png' class='store-table-reduce' alt=''> </li>"
        $(this).parent().before($($li))

    })

    $('.coupon-date input').change(function () {
        var $val = $(this).val();
        $(this).prev("b").find("span").text($val)
    })

    // 新增直接送券表格
    $('.coupon-add-t ').click(function () {
        var $li = " <li><input type='number' placeholder='请输入金额,例如:10'> <div class='false-select'> <p>设置<img src='images/go.png' alt=''></p>  </div> <img class='store-table-reduce' src='images/02.png' alt=''> </li> "
//        $('.hairpin-vip-table-main ul').prepend($($li))
        $(this).parent().before($($li))
    });

    // 退回原因弹窗
    $('.back-alert-reason').click(function () {
        $('.bg').show();
        $('.bg').css("z-index","3")
        $('.own-contorl-alert').show();
    })
    $('.own-contorl-alert .login-alet-check-canel').click(function () {
        $('.bg').css("z-index","1")
    })

    // 新增门店操作员选择所属门店
    $('.shop-user-manager-add select').change(function () {
        var $text = $(this).find("option:selected").text();
        $(this).prev('b').find("span").text($text)
        $(this).prev('b').find("span").css("color","#000")
    })

    // 会员卡礼品卡充值购买充值金额活动
    $(document).on("change",'.Card-rechargea-vip-c ul li input',function () {
        var $rep =/^[0-9]*$/;
        $(this).parent().attr("data-v","1")
        var $val = $(this).val();
        if($val != "" && $rep.test($val)){
            $('.Card-rechargea-vip-c-activity').show();
            $('.Card-rechargea-vip-c > ul li:last-child b').html("¥<span style='color:#e85c53;float:right;'>"+$val +"</span>")
        }
    })
    $(document).on("click",".Card-rechargea-vip-c-input",function () {
        var $dv = $(this).attr("data-v");
        if($dv == "1"){
            $(this).html("<input type='number' placeholder='请输入充值金额'>")
            $(this).removeAttr("data-v")
            $('.Card-rechargea-vip-c-activity').hide();
            $(this).find("input").focus()

        }else{
            console.log("no")
        }
    })

    $('.vip-pay-money label input').click(function () {
        if ($(this).prop("checked") == false) {
            $(this).prev("img").attr("src", "images/7.png")
            $('.vip-pay-money ul li:last-child').hide()

        } else {
            $(this).prev("img").attr("src", "images/8.png")
            $('.vip-pay-money ul li:last-child').show()
        }

    });
    $('.vip-pay-money-main ul li p input').click(function () {
        $('.vip-pay-money-main ul li p img').attr("src","images/7.png");
        if ($(this).prop("checked") == false) {
            $(this).prev("img").attr("src", "images/7.png")

        } else {
            $(this).prev("img").attr("src", "images/8.png")
        }
    })
    $(document).on("change",'.vip-pay-money ul li b input',function () {
        var $rep =/^[0-9]*$/;
        $(this).parent().attr("data-v","1")
        var $val = $(this).val();
        if($val != "" && $rep.test($val)){
            $(this).parent().html("¥"+$val)
        }
    })
    $(document).on("click",'.vip-pay-money ul li b ',function () {
        if($(this).attr("data-v") == 1){
            $(this).html("<input type='number' placeholder='询问服务员后输入'/>")
            $(this).find("input").focus()
        }else{
            console.log("no")
        }
    })
    //银行券删除
    $('.bank-voucher ul li b img').click(function () {
       $(this).parent().parent().parent().parent().remove();
    })
    //会员买单结束支付详情下拉框
    $(".open").click(function () {
        if($(this).attr("data-show") == "true"){
            $(this).removeAttr("data-show")
            $('.vip-pay-money-suc-slide-down').slideUp();
            $(this).find("img").removeClass("rotate")
        }else{
            $(this).attr("data-show","true")
            $('.vip-pay-money-suc-slide-down').slideDown();
            $(this).find("img").addClass("rotate")
        }
    })


})



