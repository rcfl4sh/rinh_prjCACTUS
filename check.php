<?php
    $db = mysqli_connect("localhost","root","","firstdb");
	$us = mysqli_query($db,'SELECT username FROM account');
	$ps = mysqli_query($db,'SELECT password FROM account');
	$uss = mysqli_fetch_array($us);
	$pss = mysqli_fetch_array($ps);
	if (($_POST['user']==$uss[0]) and ($_POST['pass']==$pss[0]))
	{include('D:\Новая папка (4)\open server\OSPanel\domains\project.ru\html\list.html');}
	else {include('D:\Новая папка (4)\open server\OSPanel\domains\project.ru\html\main.html');}
?>