var year_selected = document.getElementById("picker").value;
console.log(year_selected);

function add(type) {

		 
        var list =["dvTable","febdvTable","mardvTable","aprdvTable","maydvTable","jundvTable","juldvTable","augdvTable","sepdvTable","octdvTable","novdvTable","decdvTable",]
        for ( var i =0;i<12;i++){
		//Create an input type dynamically.   
        var element = document.createElement(type);
        //Assign different attributes to the elemetnt. 
        element.setAttribute("type", "button");
        element.setAttribute("value", "save");
        element.setAttribute("name", "save");
       // element.setAttribute("onclick", alert("blabla"));
		
		var foo = document.getElementById(list[i]);
		console.log(foo);
        //Append the element in page (in span).  
        foo.appendChild(element);
}

}



//Define a onchange handler:
var changeHandler = function() {
    //alert("CHANGED");
    //You can alert the value of the selected option, using this:
    //alert(this.value + " was selected");
 if(this.value == "WO") { this.style.backgroundColor="green"; this.style.color="white";}
 else if(this.value == "CL") { this.style.backgroundColor="#6666FF"; this.style.color="white";}

 else  if(this.value == "PL") { this.style.backgroundColor="#D6D6CC"; this.style.color="black";} 
 else  if(this.value == "PLH-1") { this.style.backgroundColor="#FF0066"; this.style.color="white";} 
 else  if(this.value == "RH") { this.style.backgroundColor="#FF3300"; this.style.color="white";} 
 else  if(this.value == "SLH-1") { this.style.backgroundColor="#9900FF"; this.style.color="white";} 
 else  if(this.value == "P") { this.style.backgroundColor="white"; this.style.color="#000000";}
 else  if(this.value == "PLH-2") { this.style.backgroundColor="#993366"; this.style.color="white";}
 else  if(this.value == "CLH-1") { this.style.backgroundColor="#996600"; this.style.color="white";}
 else  if(this.value == "CLH-2") { this.style.backgroundColor="#669999"; this.style.color="white";}
 else  if(this.value == "SLH-2") { this.style.backgroundColor="#B2B200"; this.style.color="white";}
 else  if(this.value == "LWP") { this.style.backgroundColor="#9966FF"; this.style.color="white";}
 else  if(this.value == "PH") { this.style.backgroundColor="#CC99FF"; this.style.color="white";}
 else  if(this.value == "WO") { this.style.backgroundColor="#006666"; this.style.color="white";}
 else  if(this.value == "SH") { this.style.backgroundColor="#993333"; this.style.color="white";}


 
 
 




    console.log(this.value);

}  



  /**
     * @param {int} The month number, 0 based
     * @param {int} The year, not zero based, required to account for leap years
     * @return {Date[]} List with date objects for each day of the month
     */
    function getDaysInMonth(month, year) {
         // Since no month has fewer than 28 days
         var date = new Date(year, month, 1);
         var days = [];
         console.log('month', month, 'date.getMonth()', date.getMonth())
         while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
         }
         return days;
    }

        

//console.log(getDaysInMonth(4, 2012));

var days = getDaysInMonth(0,2016);
var feb = getDaysInMonth(1,2016);
var mar = getDaysInMonth(2,2016);
var apr = getDaysInMonth(3,2016);
var may = getDaysInMonth(4,2016);
var jun = getDaysInMonth(5,2016);
var jul = getDaysInMonth(6,2016);
var aug = getDaysInMonth(7,2016);
var sep = getDaysInMonth(8,2016);
var oct = getDaysInMonth(9,2016);
var nov = getDaysInMonth(10,2016);
var dec = getDaysInMonth(11,2016);

var str="";
var feb_str="";
var mar_str="";
var apr_str="";
var may_str="";
var jun_str="";
var jul_str="";
var aug_str="";
var sep_str="";
var oct_str="";
var nov_str="";
var dec_str="";


//console.log(days.length+"ffffffffffffffff");

for( i=0;i<days.length;i++){
str = str+days[i];
}

for( i=0;i<feb.length;i++){
feb_str = feb_str+feb[i];
}

for( i=0;i<mar.length;i++){
mar_str = mar_str+mar[i];
}

for( i=0;i<apr.length;i++){
apr_str = apr_str+apr[i];
}

for( i=0;i<may.length;i++){
may_str = may_str+may[i];
}

for( i=0;i<jun.length;i++){
jun_str = jun_str+jun[i];
}

for( i=0;i<jul.length;i++){
jul_str = jul_str+jul[i];
}

for( i=0;i<aug.length;i++){
aug_str = aug_str+aug[i];
}

for( i=0;i<sep.length;i++){
sep_str = sep_str+sep[i];
}

for( i=0;i<oct.length;i++){
oct_str = oct_str+oct[i];
}

for( i=0;i<nov.length;i++){
nov_str = nov_str+nov[i];
}

for( i=0;i<dec.length;i++){
dec_str = dec_str+dec[i];
}

/*
Tue May 01 2012 
*/


console.log("string is"+str+"....end");

var myRe = /\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/;
/*

var res = str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var feb_res = feb_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var mar_res = mar_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var apr_res = apr_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var may_res = may_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var jun_res = jun_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var jul_res = jul_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var aug_res = aug_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var sep_res = sep_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var oct_res = oct_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var nov_res = nov_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var dec_res = dec_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);

*/

var res = str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var feb_res = feb_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var mar_res = mar_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var apr_res = apr_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var may_res = may_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var jun_res = jun_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var jul_res = jul_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var aug_res = aug_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var sep_res = sep_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var oct_res = oct_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var nov_res = nov_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
var dec_res = dec_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);

console.log(res);
console.log(feb_res);
console.log(mar_res);
console.log(apr_res);
console.log(may_res);
console.log(jun_res);
console.log(jul_res);
console.log(aug_res);
console.log(sep_res);
console.log(oct_res);
console.log(nov_res);
console.log(dec_res);


function GenerateTable(param_days) {
 
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
   
   
 
    //Get the count of columns.
    var columnCount = param_days.length;
	console.log("+++++++++"+param_days.length+"++++++++++");

    

   //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = param_days[i];
        row.appendChild(headerCell);
    }
row = table.insertRow(-1);
   

   //Create array of options to be added
   var array = ["","P","PL","PLH-1","PLH-2","CL","CLH-1","CLH-2","SH","SLH-1","SLH-2","RH","LWP","PH","WO"];
   
if( param_days == feb_res)    {   var dvTable = document.getElementById("febdvTable");}
 
else if(param_days == mar_res){   var dvTable = document.getElementById("mardvTable");}

else if(param_days == apr_res){   var dvTable = document.getElementById("aprdvTable");}

else if(param_days == may_res){   var dvTable = document.getElementById("maydvTable");}

else if(param_days == jun_res){   var dvTable = document.getElementById("jundvTable");}

else if(param_days == jul_res){   var dvTable = document.getElementById("juldvTable");}

else if(param_days == aug_res){   var dvTable = document.getElementById("augdvTable");}

else if(param_days == sep_res){   var dvTable = document.getElementById("sepdvTable");}

else if(param_days == oct_res){   var dvTable = document.getElementById("octdvTable");}

else if(param_days == nov_res){   var dvTable = document.getElementById("novdvTable");}

else if(param_days == dec_res){   var dvTable = document.getElementById("decdvTable");}

else  {  var dvTable = document.getElementById("dvTable"); }
   
dvTable.innerHTML = "";
dvTable.appendChild(table);
/*

  //Create and append select list
   var selectList = document.createElement("select");
   selectList.setAttribute("id", "mySelect");
   //dvTable.appendChild(selectList);

   for (var i = 0; i < array.length; i++) {
   var option = document.createElement("option");
   option.setAttribute("value", array[i]);
   option.text = array[i];
   selectList.appendChild(option);
   } 
*/

  //Add the data rows.
/*

for (var i = 0; i < param_days.length; i++) {
var cell = row1.insertCell(-1);
var selectList = document.createElement("input")
cell.innerHTML="<select><option>P</option> <option>PL</option> <option>PLH-1</option> <option>PLH-2</option> <option>CL</option> <option>CLH-1</option> <option>CLH-2</option> <option>SH</option> <option>SLH-1</option> <option>SLH-2</option> <option>RH</option> <option>LWP</option> <option>PH</option> <option>WO</option></select>";
    }
row = table.insertRow(-1);
for (var i = 0; i < param_days.length; i++) {
var cell = row.insertCell(-1);
var selectList = document.createElement("input")
cell.innerHTML="<input type='text'>";
    }
}

*/

for (var i = 0; i < param_days.length; i++) {

   var selectList = document.createElement("select");
   selectList.setAttribute("id", "mySelect"+i);
   selectList.addEventListener("change", changeHandler, false);
   selectList.style.border = "0px";
   selectList.style.outline = "0px";

   for (var j = 0; j < array.length; j++) {
     var option = document.createElement("option");
     option.setAttribute("value", array[j]);
     option.text = array[j];
     selectList.appendChild(option);
   }
   var cell = row.insertCell();
   cell.appendChild(selectList);

}

}





GenerateTable(res);
GenerateTable(feb_res);
GenerateTable(mar_res);
GenerateTable(apr_res);
GenerateTable(may_res);
GenerateTable(jun_res);
GenerateTable(jul_res);
GenerateTable(aug_res);
GenerateTable(sep_res);
GenerateTable(oct_res);
GenerateTable(nov_res);
GenerateTable(dec_res);
add("input");