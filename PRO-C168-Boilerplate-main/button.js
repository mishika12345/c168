AFRAME.registerComponent("buttons",{
    init:function(){
        var button1=document.createElement("button");
        button1.innerHTML="order now"
        button1.setAttribute("id","order-now")
        button1.setAttribute("class","btn btn-warning")

        var button2=document.createElement("button");
        button2.innerHTML="order summary"
        button2.setAttribute("id","order-summary")
        button2.setAttribute("class","btn btn-warning")
        var div=document.getElementById("button-div")
        div.appendChild(button1)
        div.appendChild(button2)
    }

})