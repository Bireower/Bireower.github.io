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



function LoadLocalFile()
{
    if (document.getElementById("wordList").contains("lineOfwords"))
    {
        alert(true)
        return;
    }
    var jsonFile

    $.getJSON("data/2021-05-21.json",function(data){
        jsonFile =data
        for(var i =0;i<jsonFile.length;i++)
        {
            CreateWordList(jsonFile[i].word,jsonFile[i].trans)
        }
    })

}

