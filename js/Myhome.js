$(function(){
    let windowWidth = $(window).width();
    
    

    if(windowWidth < 1400){
        //모바일 section 링크
        $(".header_menu > li > a").click(function(e){
            e.preventDefault();
            if (this.hash == "#about_me"){
                $('html, body').animate({scrollTop:$("#s2").offset().top},300);
            }
            if (this.hash == "#skills"){
                $('html, body').animate({scrollTop:$("#s3").offset().top},300);
            }
            if (this.hash == "#portfolio"){
                $('html, body').animate({scrollTop:$("#s4").offset().top},300);
            }
        });
        $('.down_btn').click(function(){
            $('html, body').animate({scrollTop:$("#s2").offset().top},300);
        });
        
    }else {
        //pc버전 fullpage
        $(".wrap").fullpage({
            navigation:true,
            anchors:["","about_me","skills","portfolio"],
            navigationTooltips:["","자기소개","기술","포트폴리오"],
            showActiveTooltip:true,
            //헤더 고정
            fixedElements: 'header',
            //이게 있어야 메뉴 active활성화가 됨
            menu:'#menu',
            //skill 애니메이션
            onLeave:function(index, nextIndex, direction){
                $(".s3 .skill .skill-circle .skill_bar").removeClass("active");
                if(direction == "down"){
                    if(nextIndex==3){
                        $(".s3 .skill .skill-circle .skill_bar").addClass("active");
                    }
                }else if(direction == "up"){
                    if(nextIndex==3){
                        $(".s3 .skill .skill-circle .skill_bar").addClass("active");
                    }
                }
            }
        });
        $('.down_btn').click(function(){
            $.fn.fullpage.moveSectionDown();
        });

    }


    
    // $(window).scroll(function(){
    //     //윈도우의 top값을 변수에 저장
    //     let winTop=$(this).scrollTop();
    //     $("section").each(function(){
    //         let secTop=$(this).offset().top;
    //         let degree = 0;
    //         if(secTop < winTop){
    //             degree += 1;
    //             clockwiseDiv.css("transform", `rotate(${degree}deg)`);
    //         }
    //     });
    // });

    

    //s4 - portfolio 탭메뉴
    $(".portfolio_tab_con .tab_con").hide();
    $(".portfolio_tab_con .tab_con:first-child").fadeIn();
    //첫번째 li 밑줄 활성화 용도
    $(".portfolio_tab_title ul li:first-child").addClass("active");
    $(".portfolio_tab_title ul li").click(function(e){
        let idx = $(this).index();
        e.preventDefault();
        $(".portfolio_tab_title ul li").removeClass("active");
        $(this).addClass("active");

        $(".portfolio_tab_con .tab_con").hide();
        $(".portfolio_tab_con .tab_con").eq(idx).fadeIn();
    });
    //s4 - portfolio 마우스 오버(이미지 변경)
    $(".portfolio_img .portfolio_img_before").hide();
    $(".portfolio_tab_con .tab_con .portfolio_img").mouseover(function(){
        $(".portfolio_img .portfolio_img_after").hide();
        $(".portfolio_img .portfolio_img_before").show();
    });
    $(".portfolio_tab_con .tab_con .portfolio_img").mouseleave(function(){
        $(".portfolio_img .portfolio_img_before").hide();
        $(".portfolio_img .portfolio_img_after").show();
    });


});