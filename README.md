@[TOC](目录)
# 前言
主要是JS对dom的操作，引入了jquery和bootstrap，实际用到的地方并不多。具体我们看代码来熟悉。
## 工程下载
码云：[传送门](https://gitee.com/ikaros-521/JS_dynamic_table)  github：[传送门](https://github.com/Ikaros-521/JS_dynamic_table)
# 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210618152236802.gif#pic_center)

# 代码
## table.html

```html
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>动态表格</title>
    <script src="js/jquery-3.4.1.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	<link type="text/css" href="css/jquery-ui.min.css" rel="stylesheet">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<script src="js/bootstrap.min.js"></script>
	<link type="text/css" href="css/table.css" rel="stylesheet">
</head>

<body>
    <div id="center">
        <div id="center_div1">
            <div id="app1">
                <form id="form1" enctype="multipart/form-data" action="cgi-bin/table.cgi" method="post"
                    class="form-horizontal" role="form">
                    <table class="table1" id="table1">
                        <thead>
                            <tr id="list">
                                <th class="table_th">a</th>
                                <th class="table_th">b</th>
                                <th class="table_th">c</th>
                                <th class="table_th" style="width:100px;">操作</th>
                            </tr>
                        </thead>
                        <tbody id="listbody"></tbody>
                    </table>
                </form>
                <div>
                    <input id="addlist_btn" type="button" value="添加" onclick="addlist();"
                        style="width:60px;height:32px;" />
                </div>
            </div>
        </div>
    </div>
    <div id="bottom">
        <div id="copyright">
            <span>Copyright © </span>
            <span id="copyright_year">--</span>
            <span>Ikaros, All Rights Reserved.</span>
        </div>
    </div>
</body>
<script src="js/table.js"></script>

</html>
```
## table.js

```javascript
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
```
## table.css

```css
body {
	background: #E4E7ED;
	font-family: MicrosoftYaHei;
}

input {
	outline: none;
}

#center {
	padding: 10px;
	margin-top: 10px;
	margin-left: 14px;
	margin-right: 14px;

	width: auto;
	background: #FFFFFF;

	overflow: hidden;
}

/* 中心的form表单 */
#center_div1 {
	background-color: white;
}

/* 新增输入框 */
.input_common {
	width: 90%;
	height: 28px;
	background: #FFFFFF;
	border: 1px solid #C4C6CF;
	border-radius: 2px;
}

/* 表格 */
.table1 {
	width: 100%;
	border: 1px solid #dee2e6;
	margin-bottom: 1rem;
	color: #212529;
	border-collapse: collapse;
	display: table;
	border-spacing: 2px;
}

.table1 tr {
	display: table-row;
	vertical-align: inherit;
	border-color: inherit;
}

.table1 tr th {
	border-bottom-width: 2px;
	border: 1px solid #dee2e6;
	text-align: left;
	padding-left: 15px;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #666666;
	line-height: 17px;
	height: 48.5px;
	width: 400px;
}

.table1 td {
	border: 1px solid #dee2e6;
	height: 48.5px;
	width: 400px;
	text-align: left;
	padding-left: 15px;
}

.table1 td img {
	cursor: pointer;
}

#addlist_btn {
	background: #FFFFFF;
	border: 1px solid #C4C6CF;
	border-radius: 3px;
	width: 80px;
	height: 32px;

	margin-top: 17px;
	float: left;
}

/* bottom */
#bottom {
	padding: 20px;
}

#copyright {
	height: 100px;
	font-family: MicrosoftYaHei;
	font-size: 12px;
	color: #CCCCCC;
	text-align: center;
}

#copyright_span {
	font-family: MicrosoftYaHei;
	font-size: 12px;
	color: #666666;
}

```

