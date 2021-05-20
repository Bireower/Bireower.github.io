function loadLocalFile(){
    var input = document.getElementById("uploadFile");
    var reader = new FileReader();
    var jsonFile

    reader.readAsText(input.files[0]);
    reader.onload = function () 
    {
        jsonFile=JSON.parse(reader.result) 

        for(var i =0;i<jsonFile.length;i++)
        {
            CreateWordList(jsonFile[i].word,jsonFile[i].trans)
        }
    };
}

