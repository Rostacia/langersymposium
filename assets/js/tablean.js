$("table tr").hide();
$("table tr").each(function(index){
    $(this).delay(index*500).show(1000);
});