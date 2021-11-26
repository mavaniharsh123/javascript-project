function timeCur() {
    var today=new Date()
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

    document.getElementById("Tbox2").innerHTML=h;
    document.getElementById("Tbox3").innerHTML=m;
    document.getElementById("Tbox4").innerHTML=s;
    if(h>12){
        var hr2=document.getElementById("Tbox2");
        hr2.innerHTML=h-12;
    }
    t=setTimeout(function () {
        timeCur()
    }, 1000);

}

timeCur();

var today=new Date()
var h=today.getHours();
if (h<12) {
    console.log(h);
    var hr=document.getElementById("Tbox5");
    hr.innerText="AM"
}
else{
    var hr1=document.getElementById("Tbox5");    
    hr1.innerText="PM"
    console.log(hr1.innerText);
}
 

function partyFun(){
    var ele=document.getElementById("wake").value;
    var elee=document.getElementById("lunch").value;
    var eleee=document.getElementById("dinr").value;
    var p=document.getElementById("selct");
    p.style.backgroundColor="violet"
    p.style.width="497px";
    p.style.height="75px";
    p.style.marginLeft="70px";
    p.style.lineHeight="26px"
    p.style.color="white";
    p.style.borderRadius="8px";
    p.style.marginTop="20px"
    p.style.padding="2px 0px 2px 72px"
    p.style.fontFamily="cursive"


    document.getElementById("p1").innerText= "Wake-Up Time: "+"--"+ele+"--";
    document.getElementById("p2").innerText= "Lunch Time is: "+"--"+elee+"--";
    document.getElementById("p3").innerText= "Dinner time is: "+"--"+eleee+"--";

  
    var pb=new Date(); 
    var hor=pb.getHours();
    console.log(hor);
    
 pv2=eleee.split(" ");
 for(var i=0;i<pv2.length;i++){
    if(pv2[i]=="-"){
        continue;
    }
    else if(hor>12 && (hor-12)+"PM"==pv2[i] && hor !=pv2[i]){
        document.getElementById("imgL").src="./img/dinr_time.png";
        var imgW=document.getElementById("sm").innerText="It's Dinner Time!!"
     
    } 
    else if(hor<12 && hor+"AM"==pv2[i]){
        document.getElementById("imgL").src="./img/dinr_time.png";
        var imgW=document.getElementById("sm").innerText="It's Dinner Time!!"
   }
  
}
  
 pv3=elee.split(" ");
 for(var i=0;i<pv3.length;i++){
     if(pv3[i]=="-"){
         continue;
    }
    else if(hor>12 && (hor-12)+"PM"==pv3[i] && hor !=pv3[i]){
        document.getElementById("imgL").src="./img/lunch_image.png";
        var imgW=document.getElementById("sm").innerText="It's Lunch Time!!"

    } 
    else if(hor<12 && hor+"AM"==pv3[i]){
        document.getElementById("imgL").src="./img/lunch_image.png";
        var imgW=document.getElementById("sm").innerText="It's Lunch Time!!"
    }
    
}

  pv=ele;
  pv1=pv.split(" ");
  for(var i=0;i<pv1.length;i++){      
    if(pv1[i]=="-"){
    continue;
        }
    else if(hor>12 && (hor-12)+"PM"==pv1[i] && hor !=pv1[i]){
        document.getElementById("imgL").src="./img/na_time.png";
        var imgW=document.getElementById("sm").innerText="It's Wake-Up Time!!"
    } 
    else if(hor<12 && hor+"AM"==pv1[i]){
        document.getElementById("imgL").src="./img/na_time.png";
        var imgW=document.getElementById("sm").innerText="It's Wake-Up Time!!"
    }
}

}