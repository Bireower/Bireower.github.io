function CreateForm(){
    this.col = 2;
}

function CreateWordList()
{
    this.dom = document.createElement("table");
    var tr,td;
    tr = document.createElement("tr");
    tr.className = "lineOfwords"
    for (var i =0;i<this.col;i++)
    {
        td = document.createElement("td");
        if (i ==0)
        {
            td.className ="wordName"
            td.innerHTML = "Word"
        }
        if (i ==1)
        {
            td.className ="wordParaphrase"
            td.innerHTML = "paraphrase"
        }
        tr.appendChild(td)
    }
    this.dom.appendChild(tr);
    document.getElementById("wordList").appendChild(this.dom);
}

function AddLineWord()
{
    var inputWord = document.getElementById("wordLineEdit")

    this.dom = document.createElement("table");
    var tr,td;
    var tr,td;
    tr = document.createElement("tr");
    tr.className = "lineOfwords"
    for (var i =0;i<2;i++)
    {
        td = document.createElement("td");
        if (i ==0)
        {
            td.className ="wordName"
            td.innerHTML = inputWord.value
        }
        if (i ==1)
        {
            td.className ="wordParaphrase"
            td.innerHTML = "paraphrase"
        }
        tr.appendChild(td)
    }
    this.dom.appendChild(tr);
    document.getElementById("wordList").appendChild(this.dom);
    inputWord.value=""
}