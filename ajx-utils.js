(function global() {
    
    var ajaxutils={};
  $.getJSON("./data.json")

    function getrequestobject(params) {
        if (window.XMLHttpRequest) {
            return( new XMLHttpRequest());
        }
        else{
            window.alert("ajx is not supported");
            return(null);
        }
    
    }
    ajaxutils.sendGetRequest=function (requesturl,resposehandler) {
        var request=getrequestobject();
        
        request.onreadystatechange=function ()  {
            handleresponse(request,resposehandler);
        };
        request.open("Get",requesturl,true);
        request.send(null);

    };
    function handlerespose(request,resposehandler) {
        if ((request.readystate==4) && (request.status==200)) {
            resposehandler(request);
        } 
    }
    global.$ajaxutils=ajaxutils;

   
  
})(window);
