// function UpdataFile(){
//     var input = document.getElementById("uploadFile");
//     var reader = new FileReader();
//     var jsonFile

//     reader.readAsText(input.files[0]);
//     reader.onload = function () 
//     {
//         jsonFile=JSON.parse(reader.result) 

//         for(var i =0;i<jsonFile.length;i++)
//         {
//             CreateWordList(jsonFile[i].word,jsonFile[i].trans)
//         }
//     };

// }


function LoadLocalFile(btnID)
{
    var fileName = btnID.slice(0,-7)
    var divId = fileName+"-WL-Div"
    var jsonFile

    //新建div储存wordList
    var div = document.createElement("div");
    div.id = divId
    div.className ="wordList"
    document.body.appendChild(div)

    //读取本地文件
    $.getJSON("data/"+fileName+".json",function(data){
        jsonFile =data
        for(var i =0;i<jsonFile.length;i++)
        {
            CreateWordFrom(jsonFile[i].word,jsonFile[i].trans,div)
        }
    })
}

function DelWordList(id)
{
    if(!document.getElementById(id)){
        return;
    }
    document.getElementById(id).remove()
}

function WordListGenerater(btnID){
    if(document.getElementsByClassName("wordList").length!=0){
        var wordListID = document.getElementsByClassName("wordList")[0].id;
        if(btnID.slice(0,-7) == wordListID.slice(0,-7))
        {
            return
        }
        DelWordList(wordListID)
        LoadLocalFile(btnID)
    }
    else
    {
        LoadLocalFile(btnID)
    }
}

function InitWLBtn()
{
    if(document.getElementsByClassName("wordListBtn").length !=0)
    {
        return;
    }
    for (var i=1;i<=10;i++)
    {
        var btn = document.createElement("button");
        btn.className= "wordListBtn"
        btn.id = "List"+i+"-WL-Btn"
        btn.innerHTML = "单词本"+i
        btn.onclick = function()
        {
            WordListGenerater(this.id)
        }
        document.getElementById("wordBook").appendChild(btn)
    }
}
