function sleep(sleepTime) {
	for(var start = new Date; new Date - start <= sleepTime;) {}
}


function run_link(url){
    window.open(url);
}


var labs = ["bing", "translate", "bilibili", "google"]

function search(using_tool, content){

    if (content.slice(content.length-3, content.length-1)==' -'){
        var using_mode = content.charCodeAt(content.length-1);
        if (using_mode>48 && using_mode<=(48+labs.length)){
            var mode_index = Number(String.fromCharCode(using_mode))-1;
            using_tool = labs[mode_index];
            content = content.slice(0, content.length-3);
        }
    }
    if (using_tool == labs[0]){
        window.open("https://www.bing.com/search?q="+content);
    }else if(using_tool == labs[1]){
        window.open("https://translate.google.cn/?sl=zh-CN&tl=en&op=translate&text="+content);
    }else if(using_tool == labs[2]){
        if (content.slice(0, 2)=='BV'){
            window.open("https://www.bilibili.com/video/"+content);
        }else{
            window.open("https://search.bilibili.com/all?from_source=webtop_search&keyword="+content);
        }
    }else if(using_tool == labs[3]){
        window.open("https://www.google.com/search?newwindow=1&q="+content);
    }else{
        throw new Error('UnknownError in search happened.');
    }
}

var radio_list = new Array();
var label_list = new Array();
for(j=0;j<labs.length;j++){
    radio_list[j] = "radio_"+labs[j];
    label_list[j] = "label_"+labs[j];
}

function change_radio_style(){
    for(i=0; i<radio_list.length; i++){
        if (eval(radio_list[i]).checked == true){
            eval(label_list[i]).setAttribute('style', 'background-color: rgba(230, 230, 230, 0.58); color: rgb(34, 71, 58);');
        }else{
            eval(label_list[i]).setAttribute('style', 'background-color: rgba(255, 255, 255, 0.18); color: rgb(175, 252, 240);');
        }
    }
}

function jump(JumpTo){
    if (JumpTo=='1'){
        window.location.replace('websites_main_1.html');
    }
    else if (JumpTo=='2'){
        window.location.replace(websites_main_2.html);
    }
}