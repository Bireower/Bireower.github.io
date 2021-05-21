function CreateForm(){
    //this.col = 3;
}

function CreateWordFrom(word,trans,div)
{
    this.dom = document.createElement("table");
    var tr,td;
    tr = document.createElement("tr");
    tr.className = "lineOfwords"

    for (var i =0;i<3;i++)
    {
        td = document.createElement("td");
        if (i ==0)
        {
            td.className ="wordName-td"
            td.innerHTML = word
        }
        if (i ==1)
        {
            td.className ="wordTrans-td"
            td.innerHTML = trans
        }
        if (i==2)
        {
            td.className = "wordDel-td"
            btn = document.createElement("button")
            span = document.createElement("span")
            btn.className = "delWordBtn"
            span.className ="iconfont" 
            span.innerHTML ="&#xe61f;"
            btn.appendChild(span)
            td.appendChild(btn)
        }
        tr.appendChild(td)
    }
    this.dom.appendChild(tr);
    div.appendChild(this.dom);

}

function AddLineWord() 
{
    var inputWord = document.getElementById("wordLineEdit")

    this.dom = document.createElement("table");
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
    document.getElementById("wordBook").appendChild(this.dom);
    inputWord.value=""
}
