function open(m,n){if(m){var r=extact(n);var regex=/^([a-zA-Z0-9 ])+$/;var source="^dVc`ZYWwHuXJh[n";if(regex.test(r)&&source==crackme(r)){console.log("acces");granted_access()}else{console.log("denied");denied_access()}}else{console.log("Not valid");denied_access()}}function y(){var a=z();if(a==""){return false}else if(a.startsWith("{")&&a.endsWith("}")){return true}else{return false}}function z(){return document.getElementById("crackme").value}function extact(s){var r="";for(var i=0;i<s.length;i++){if(s[i]=="{"){for(var j=i+1;j<s.length-1;j++){r+=s[j]}break}}return r}function crackme(s){var h="";for(var i=0;i<s.length;i++){h+=String.fromCharCode(s.charCodeAt(i)+s.length)}return h}

function granted_access(y)
{
	this.message = y || "Access Granted";
	document.getElementById("message").style.color = "green";
	document.getElementById("message").innerHTML= this.message;
}
function denied_access(y)
{
	this.message = y || "Access Denied";
	document.getElementById("message").style.color = "red";
	document.getElementById("message").innerHTML= this.message;
}
var timeout = null;
document.getElementById("crackme").onkeyup =  function (e) {
	denied_access(" ");
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        open(y(),z());
    }, 500);
};