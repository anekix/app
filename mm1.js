var data_f={};
                              

$(document).ready(function() { 
   
var month_list=["dvTable","febdvTable","mardvTable","aprdvTable","maydvTable","jundvTable","juldvTable","augdvTable","sepdvTable","octdvTable","novdvTable","decdvTable",];
	var d = new Date();
    var n = d.getMonth();

	
    $('#blockButton2').click(function() { 
            $('#dvTable').block({ message: null  
        }); 
  
	});
	});
	


	var year_selected = 0;
    var res = [0];
	var feb_res = [0];
	var mar_res = [0]; 
	var apr_res = [0];
	var may_res = [0];
	var jun_res = [0];
	var jul_res = [0];
	var aug_res = [0];
	var sep_res = [0];
	var oct_res = [0];
	var nov_res = [0];
	var dec_res = [0];
	

function GenerateTable(param_days) {
        
        console.log("entered Table generation function...");
		//Create a HTML Table element.
		var table = document.createElement("TABLE");
		table.border = "1";
	   
	    //Get the count of columns.
		var columnCount = param_days.length;
		//Add the header row.
		var row = table.insertRow(-1);
		for (var i = 0; i < columnCount; i++) {
			var headerCell = document.createElement("TH");
			headerCell.innerHTML = param_days[i];
			row.appendChild(headerCell);
		}
	    row = table.insertRow(-1);
	   
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
	
	
	console.log(dvTable);
	dvTable.innerHTML = "";
	dvTable.appendChild(table);
	for (var i = 0; i < param_days.length; i++) {

	   var selectList = document.createElement("select");
	   selectList.setAttribute("id", "selectid"+i);
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




//Define a on change handler:
function changeHandler(){
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
 data_f[this.id]=this.value;
//console.log(data_f);
    

}  
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

function function_on_click(){

//get current month
if( this.id == 0 ) cur_month = "jan";
else if( this.id == 1 ) cur_month = "feb";
else if( this.id == 2 ) cur_month = "mar";
else if( this.id == 3 ) cur_month = "apr";
else if( this.id == 4 ) cur_month = "may";
else if( this.id == 5 ) cur_month = "jun";
else if( this.id == 6 ) cur_month = "jul";
else if( this.id == 7 ) cur_month = "aug";
else if( this.id == 8 ) cur_month = "sep";
else if( this.id == 9 ) cur_month = "oct";
else if( this.id == 10 ) cur_month = "nov";
else cur_month = "dec";
    
data_f["month"]=cur_month;

    
    
    
console.log(year_selectList.value);
var current_year_selected =  year_selectList.value;
console.log(data_f);
    
// making an ajax request
/*
$.post('handle.php',data_f, function(){
            //successful ajax request
          }).error(function(){
            alert('error... ohh no!');
          });*/
$.ajax({
        type:"POST",
        cache:false,
        url:"handle.php",
        data:data_f,    // multiple data sent using ajax
        success: function () {

          alert('data sent sent');
        
        }
      });

}
function add(type) {

		var list =["dvTable","febdvTable","mardvTable","aprdvTable","maydvTable","jundvTable","juldvTable","augdvTable","sepdvTable","octdvTable","novdvTable","decdvTable",]
		for ( var i =0;i<12;i++){
        
		//Create an input type dynamically.   
		var element = document.createElement(type);
        element.setAttribute("id", i);
		//Assign different attributes to the elemetnt. 
		element.setAttribute("type", "button");
		element.setAttribute("value", "save");
		element.setAttribute("name", "save");
        
        element.addEventListener("click", function_on_click, false);
	   // element.setAttribute("onclick", alert("blabla"));
		
		var foo = document.getElementById(list[i]);
		console.log(foo);
		//Append the element in page (in span).  
		foo.appendChild(element);
	}
}



function create_canvas() {
	
	year_selected = parseInt(foo_select);
    
    
	console.log(foo_select);	
	console.log("entered.........");
    if ( year_selected > 1 ) {
		console.log("condition passed...");
	var days = getDaysInMonth(0,year_selected);
	var feb = getDaysInMonth(1,year_selected);
	var mar = getDaysInMonth(2,year_selected);
	var apr = getDaysInMonth(3,year_selected);
	var may = getDaysInMonth(4,year_selected);
	var jun = getDaysInMonth(5,year_selected);
	var jul = getDaysInMonth(6,year_selected);
	var aug = getDaysInMonth(7,year_selected);
	var sep = getDaysInMonth(8,year_selected);
	var oct = getDaysInMonth(9,year_selected);
	var nov = getDaysInMonth(10,year_selected);
	var dec = getDaysInMonth(11,year_selected);
	
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

	for( i=0;i<days.length;i++)  str = str+days[i];
	for( i=0;i<feb.length;i++)  feb_str = feb_str+feb[i];
	for( i=0;i<mar.length;i++)  mar_str = mar_str+mar[i];
	for( i=0;i<apr.length;i++) apr_str = apr_str+apr[i];
	for( i=0;i<may.length;i++) may_str = may_str+may[i];
	for( i=0;i<jun.length;i++) jun_str = jun_str+jun[i];
	for( i=0;i<jul.length;i++) jul_str = jul_str+jul[i];
	for( i=0;i<aug.length;i++) aug_str = aug_str+aug[i];
	for( i=0;i<sep.length;i++) sep_str = sep_str+sep[i];
	for( i=0;i<oct.length;i++) oct_str = oct_str+oct[i];
	for( i=0;i<nov.length;i++) nov_str = nov_str+nov[i];
	for( i=0;i<dec.length;i++) dec_str = dec_str+dec[i];
	
	
		
	res = str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	feb_res = feb_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	mar_res = mar_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	apr_res = apr_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	may_res = may_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	jun_res = jun_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	jul_res = jul_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	aug_res = aug_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	sep_res = sep_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	oct_res = oct_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	nov_res = nov_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	dec_res = dec_str.match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d/g);
	
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
	}
    var mnth="";
    for( var i = 0 ; i < complex.length ; i++) {
    
        if( complex[i] == 'jan' ) mnth = '#dvTable';
        else if ( complex[i] == 'feb' ) mnth = '#febdvTable';
        else if ( complex[i] == 'mar' ) mnth = '#mardvTable';
        else if ( complex[i] == 'apr' ) mnth = '#aprdvTable';
        else if ( complex[i] == 'may' ) mnth = '#maydvTable';
        else if ( complex[i] == 'jun' ) mnth = '#jundvTable';
        else if ( complex[i] == 'jul' ) mnth = '#juldvTable';
        else if ( complex[i] == 'aug' ) mnth = '#augdvTable';
        else if ( complex[i] == 'sep' ) mnth = '#sepdvTable';
        else if ( complex[i] == 'oct' ) mnth = '#octdvTable';
        else if ( complex[i] == 'nov' ) mnth = '#novdvTable';
        else if ( complex[i] == 'dec' ) mnth = '#decdvTable';
        $(document).ready(function() { 
            $(mnth).block({ message:null
        }); 
        });
        
    };
    add("input");
}
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
	
create_canvas();
	
	