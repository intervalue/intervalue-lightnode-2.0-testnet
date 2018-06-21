function validate() {
    var pwd1 = document.getElementById("passwordInput").value;
    var pwd2 = document.getElementById("passwordInput1").value;

    <!-- 对比两次输入的密码 -->
    if (pwd1 == pwd2) {
        document.getElementById("tishi").innerHTML = "<font color='green'>两次密码相同</font>";
        document.getElementById("button").disabled = false;
    }
    else {
        document.getElementById("tishi").innerHTML = "<font color='red'>两次密码不相同</font>";
        document.getElementById("button").disabled = true;
    }
};

function mimaw(){
    alert("preferencesDeviceName.html");
};

function openDiv1(){
    var aDiv = document.getElementById("encrypt");

    //判断当前分组div是展开还是关闭
    if(aDiv.style.display == "block"){
        //如果当前div是打开的, 只需关闭该div即可
        aDiv.style.display = "none";
    }else{
        //如果当前div是关闭的, 先关闭其他分组的div, 再打开当前的
        aDiv.style.display = "block";
    }
}