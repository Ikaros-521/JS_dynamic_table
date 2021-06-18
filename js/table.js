// 添加一个tr，手动添加的
function add_tr(s1, s2, s3) {
    //创建一个tr  
    var tr = document.createElement("tr");
    //其中获取的listbody是要将表格添加的位置的id  
    var listbody = document.getElementById("listbody");
    //创建td  
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    var radio_btn = document.createElement("input");
    var str = "radio_btn" + s1;
    radio_btn.id = str;
    radio_btn.type = "radio";
    radio_btn.onclick = function () {
        console.log(str);
    };
    td1.appendChild(radio_btn);
    var label = document.createElement("label");
	label.innerHTML = s1;
    td1.appendChild(label);

    var b = document.createElement("span");
    b.innerHTML = s2;
    td2.appendChild(b);

    var c = document.createElement("span");
    c.innerHTML = s3;
    td3.appendChild(c);

    var tr_del = document.createElement("img");
    var img_id = "img" + s2;
    tr_del.id = img_id;
    tr_del.onclick = function () {
        listbody.removeChild(tr);
    };
    tr_del.src = "img/false.svg";
    tr_del.style.width = "40px";
    td4.style.width = "100px";
    td4.appendChild(tr_del);


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    //console.log(document.getElementById(img_id));  
    //使用appendChild（tr）方法，将tr添加到listbody中  
    listbody.appendChild(tr);

    console.log(document.getElementById(img_id));
}

// 添加表格
function addlist() {
    //创建一个tr  
    var tr = document.createElement("tr");
    //其中获取的listbody是要将表格添加的位置的id  
    var listbody = document.getElementById("listbody");
    //创建td   
    var td1 = document.createElement("td");

    var input_a = document.createElement("input");
    input_a.type = "text";
    input_a.className = "input_common";
    input_a.onblur = function () {
        if (input_a.value.length == 0) {
            input_a.style.borderColor = "#ff6158";
        }
        else {
            input_a.style.borderColor = "#C4C6CF";
        }
    }
    // 空格替换为空
    input_a.onkeyup = function () {this.value = this.value.replace(/^ +| +$/g, '');}
    td1.appendChild(input_a);

    var td2 = document.createElement("td");
    var input_b = document.createElement("input");
    input_b.type = "text";
    input_b.className = "input_common";
    input_b.onblur = function () {
        if (input_b.value.length == 0) {
            input_b.style.borderColor = "#ff6158";
        }
        else {
            input_b.style.borderColor = "#C4C6CF";
        }
    }
    input_b.onkeyup = function () {this.value = this.value.replace(/^ +| +$/g, '');}
    td2.appendChild(input_b);

    var td3 = document.createElement("td");
    var input_c = document.createElement("input");
    input_c.type = "text";
    input_c.className = "input_common";
    input_c.onblur = function () {
        if (input_c.value.length == 0) {
            input_c.style.borderColor = "#ff6158";
        }
        else {
            input_c.style.borderColor = "#C4C6CF";
        }
    }
    input_c.onkeyup = function () {this.value = this.value.replace(/^ +| +$/g, '');}
    td3.appendChild(input_c);

    var td4 = document.createElement("td");
    var add_btn = document.createElement("img");
    add_btn.src = "img/true.svg";
    add_btn.style.width = "40px";
    add_btn.onclick = function () {
        add_tr(input_a.value, input_b.value, input_c.value);
        listbody.removeChild(tr);
    };

    var del_btn = document.createElement("img");
    del_btn.src = "img/false.svg";
    del_btn.style.width = "40px";
    del_btn.onclick = function () {
        listbody.removeChild(tr);
    };
    td4.appendChild(add_btn);
    td4.appendChild(del_btn);
    td4.style.width = "100px";

    //将创建的td添加到tr中  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    //使用appendChild（tr）方法，将tr添加到listbody中  

    listbody.appendChild(tr);
};