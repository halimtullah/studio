$(document).ready(function(){
    //service-icon toggle//
    $(".design").click(function(){
        $("#design-content-show").toggle();
        $("#design-icon-show").toggle();
    });
    $(".dev").click(function(){
        $("#dev-content-show").toggle();
        $("#dev-icon-show").toggle();
    });
    $(".p-mgt").click(function(){
        $("#p-mgt-content-show").toggle();
        $("#P-mgt-icon-show").toggle();
    });
    //portfolio hover effect//
    hoverEffect("1");
    hoverEffect("2");
    hoverEffect("3");
    hoverEffect("4");
    hoverEffect("5");
    hoverEffect("6");
    hoverEffect("7");
    hoverEffect("8");
    //input forms//
    $(".feedback form").submit(function(event){
        event.preventDefault();
        var names=$("#name").val().trim(); 
        var email=$("#email").val().trim();
        var message=$("#message").val().trim();
        validate(name,email,message);

    });
    });

function hoverEffect(portfolioNum){
    $(".work"+portfolioNum).hover(function(){
        $(".title-"+portfolioNum).show();
        $(".dark-bg"+portfolioNum).show();
    },function(){
        $(".title-"+portfolioNum).show();
        $(".dark-bg"+portfolioNum).show();
    });
function validate(name, email, message){
    if(name==="" || email==="" || message===""){
        $(".receiptConfirm").hide();
        $(".emptyFirld").show();
        return false;
    }
    else{
        $(".emptyFields").hide();
        $(".receiptConfirm").show();
        $(".nameConfirm").text(name);
        $("#myForm").trigger("reset");
        return true;
