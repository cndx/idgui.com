<?php
header("Access-Control-Allow-Origin: *");
$szUrl = "http://preev.com/pulse/units:btc+cny/sources:bitstamp+kraken";
$UserAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.0.04506; .NET CLR 3.5.21022; .NET CLR 1.0.3705; .NET CLR 1.1.4322)';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $szUrl);
curl_setopt($curl, CURLOPT_HEADER, 0);  //0表示不输出Header，1表示输出
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_ENCODING, '');
curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
$data = curl_exec($curl); 
echo $data;
//echo curl_errno($curl); //返回0时表示程序执行成功 
exit();
?>
