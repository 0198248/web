<?php
$number_one = 4328697348;
$number_two = 3765813474;
echo "Максимум = " . max([$number_one, $number_two]);
echo " Мінімум = " . min([$number_one, $number_two]);
$arr = [1, 2, 3, 4, 5, 6];
echo "Average = " . array_sum($arr) / count($arr);
$num = 12;
if($num % 3 == 0 || $num % 5 == 0){
	echo " Число кратне 3 або 5";
} else{
	echo " Число NO кратне 3 або 5";
};
$asArr = ["Bf109" => 60, "Fw190" => 70, "yak9k" => 9999999];
function echoStudent($v, $k){
	if ($v>80){
		echo " студент з найбільшою кількість зламаних моніторів: " . $k;
	};
};
array_walk($asArr, 'echoStudent');
$chislo = 7;
for ($x = 1; $x<=10; $x++){
	echo " $chislo * $x = " . $x * $chislo . ";";
};
?>
