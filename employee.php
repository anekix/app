<?php
include("session.php");
include("blocker.php");

?>


<html>
<script src="jq.js"></script>
<link rel="stylesheet" type="text/css" href="main.css">

<body>
<div id='picker'>
</div>
<label id="lbl">January</label>
<div id ="b"></div>
<div id="dvTable">
</div>
<label id="lbl">Feburary</label>
<div id="febdvTable">
</div>
<label id="lbl">March</label>
<div id="mardvTable">
</div>
<label id="lbl">April</label>
<div id="aprdvTable">
</div>
<label id="lbl">May</label>
<div id="maydvTable">
</div>
<label id="lbl">June</label>
<div id="jundvTable">
</div>
<label id="lbl">July</label>
<div id="juldvTable">
</div>
<label id="lbl">August</label>
<div id="augdvTable">
</div>
<label id="lbl">September</label>
<div id="sepdvTable">
</div>
<label id="lbl">October</label>
<div id="octdvTable">
</div>
<label id="lbl">November</label>
<div id="novdvTable">
</div>
<label id="lbl">December</label>
<div id="decdvTable">
</div>

</body>
<script src="mm.js"></script>

<script src="bui.js"></script>
</html>

<script type="text/javascript">
    var complex = <?php echo json_encode($tags); ?>;
    console.log(complex);
</script>