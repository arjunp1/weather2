<!DOCTYPE html>
<html>

<head>
	<style type="text/css">
		.weathercontainer {
			width: 300px;
			height: 360px;
			display: inline-block;
			background-color: #FFF;
			margin: auto;
			border-radius: 10px;
			padding-bottom: 50px;
			background-color: #F4F9FF;
		}

		.app-title {
			width: 300px;
			height: 50px;
			border-radius: 10px 10px 0 0;
		}

		.app-title p {
			text-align: center;
			padding: 15px;
			margin: 0 auto;
			font-size: 1.2em;
			color: #293251;
		}

		.weather-container {
			width: 300px;
			height: 280px;
			background-color: #F4F9FF;
		}

		.weather-icon {
			width: 300px;
			height: 128px;
		}

		.weather-icon img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value {
			width: 300px;
			height: 60px;
		}

		.temperature-value p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.weather-icon2 {
			width: 300px;
			height: 128px;
		}

		.weather-icon2 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value2 {
			width: 300px;
			height: 60px;
		}

		.temperature-value2 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value2 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description2 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location2 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value2 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value2 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value2 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value2 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value2 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value2 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.weather-icon3 {
			width: 300px;
			height: 128px;
		}

		.weather-icon3 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value3 {
			width: 300px;
			height: 60px;
		}

		.temperature-value3 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value3 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description3 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location3 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value3 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value3 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value3 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value3 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value3 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value3 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.weather-icon4 {
			width: 300px;
			height: 128px;
		}

		.weather-icon4 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value4 {
			width: 300px;
			height: 60px;
		}

		.temperature-value4 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value4 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description4 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location4 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value4 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value4 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value4 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value4 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value4 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value4 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.weather-icon5 {
			width: 300px;
			height: 128px;
		}

		.weather-icon5 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value5 {
			width: 300px;
			height: 60px;
		}

		.temperature-value5 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value5 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description5 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location5 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value5 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value5 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value5 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value5 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value5 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value5 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.weathercontainer2 {
			width: 300px;
			height: 360px;
			display: inline-block;
			background-color: #FFF;
			margin: auto;
			border-radius: 10px;
			padding-bottom: 50px;
			background-color: #F4F9FF;
		}

		.app-title {
			width: 300px;
			height: 50px;
			border-radius: 10px 10px 0 0;
		}

		.app-title p {
			text-align: center;
			padding: 15px;
			margin: 0 auto;
			font-size: 1.2em;
			color: #293251;
		}

		.weather-container {
			width: 300px;
			height: 280px;
			background-color: #F4F9FF;
		}

		.weather-icon6 {
			width: 300px;
			height: 128px;
		}

		.weather-icon6 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value6 {
			width: 300px;
			height: 60px;
		}

		.temperature-value6 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value6 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description6 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location6 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value6 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value6 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value6 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value6 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value6 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value6 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}
		.weather-icon7 {
			width: 300px;
			height: 128px;
		}

		.weather-icon7 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value7 {
			width: 300px;
			height: 60px;
		}

		.temperature-value7 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value7 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description7 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location7 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value7 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value7 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value7 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value7 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value7 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value7 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}
		.weather-icon8 {
			width: 300px;
			height: 128px;
		}

		.weather-icon8 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value8 {
			width: 300px;
			height: 60px;
		}

		.temperature-value8 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value8 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description8 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location8 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value8 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value8 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value8 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value8 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value8 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value8 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}
		.weather-icon8 {
			width: 300px;
			height: 128px;
		}

		.weather-icon9 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value9 {
			width: 300px;
			height: 60px;
		}

		.temperature-value9 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value9 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description9 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location9 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value9 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.wind-value9 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value9 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value9 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value9 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value9 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}
		.weather-icon10 {
			width: 300px;
			height: 128px;
		}

		.weather-icon10 img {
			display: block;
			margin: 0 auto;
		}

		.temperature-value10 {
			width: 300px;
			height: 60px;
		}

		.temperature-value10 p {
			padding: 0;
			margin: 0;
			color: #293251;
			font-size: 4em;
			text-align: center;
			cursor: pointer;
		}

		.temperature-value10 span {
			color: #293251;
			font-size: 0.5em;
		}

		.temperature-description10 p {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}

		.location10 p {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.day-value10 {
			padding: 8px;
			margin: 0;
			color: #293251;
			text-align: center;
			font-size: 1.2em;
		}
			
		.wind-value10 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.humidity-value10 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.pressure-value10 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunrise-value10 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}

		.sunset-value10 {
			margin: 0;
			padding: 0;
			color: #293251;
			text-align: center;
			font-size: 0.8em;
		}
	</style>
</head>

<body>
	<div class="container">
			<h1>
				<font color="red" face="Verdana">Birmingham</font>
			</h1>
		<div class="weathercontainer">
			<div class="app-title">
			</div>
			<div class="weather-container">
				<div class="weather-icon">
					<img src="weather/icons/unknown.png" alt="">
				</div>
				<div class="temperature-value">
					<p>- °<span>C</span></p>
				</div>
				<div class="temperature-description">
					<p> - </p>
				</div>
				<div class="location">
					<b>
						<p>-</p>
					</b>
				</div>
				<div class="wind-value">
					<p>-</p>
				</div>
				<div class="humidity-value">
					<p>-</p>
				</div>
				<div class="pressure-value">
					<p>-</p>
				</div>
				<div class="sunrise-value">
					<p>-</p>
				</div>
				<div class="sunset-value">
					<p>-</p>
				</div>
				<div class="day-value">
					<p>-</p>
				</div>
			</div>
		</div>

		<div class="weathercontainer">
			<div class="app-title">
			</div>
			<div class="weather-container">
				<div class="weather-icon2">
					<img src="weather/icons/unknown.png" alt="">
				</div>
				<div class="temperature-value2">
					<p>- °<span>C</span></p>
				</div>
				<div class="temperature-description2">
					<p> - </p>
				</div>
				<div class="location2">
					<b>
						<p>-</p>
					</b>
				</div>
				<div class="wind-value2">
					<p>-</p>
				</div>
				<div class="humidity-value2">
					<p>-</p>
				</div>
				<div class="pressure-value2">
					<p>-</p>
				</div>
				<div class="sunrise-value2">
					<p>-</p>
				</div>
				<div class="sunset-value2">
					<p>-</p>
				</div>
				<div class="day-value2">
					<p>-</p>
				</div>
			</div>
		</div>

		<div class="weathercontainer">
			<div class="app-title">
			</div>
			<div class="weather-container">
				<div class="weather-icon3">
					<img src="weather/icons/unknown.png" alt="">
				</div>
				<div class="temperature-value3">
					<p>- °<span>C</span></p>
				</div>
				<div class="temperature-description3">
					<p> - </p>
				</div>
				<div class="location3">
					<b>
						<p>-</p>
					</b>
				</div>
				<div class="wind-value3">
					<p>-</p>
				</div>
				<div class="humidity-value3">
					<p>-</p>
				</div>
				<div class="pressure-value3">
					<p>-</p>
				</div>
				<div class="sunrise-value3">
					<p>-</p>
				</div>
				<div class="sunset-value3">
					<p>-</p>
				</div>
				<div class="day-value3">
					<p>-</p>
				</div>
			</div>
		</div>

		<div class="weathercontainer">
			<div class="app-title">
			</div>
			<div class="weather-container">
				<div class="weather-icon4">
					<img src="weather/icons/unknown.png" alt="">
				</div>
				<div class="temperature-value4">
					<p>- °<span>C</span></p>
				</div>
				<div class="temperature-description4">
					<p> - </p>
				</div>
				<div class="location4">
					<b>
						<p>-</p>
					</b>
				</div>
				<div class="wind-value4">
					<p>-</p>
				</div>
				<div class="humidity-value4">
					<p>-</p>
				</div>
				<div class="pressure-value4">
					<p>-</p>
				</div>
				<div class="sunrise-value4">
					<p>-</p>
				</div>
				<div class="sunset-value4">
					<p>-</p>
				</div>
				<div class="day-value4">
					<p>-</p>
				</div>
			</div>
		</div>

		<div class="weathercontainer">
			<div class="app-title">
			</div>
			<div class="weather-container">
				<div class="weather-icon5">
					<img src="weather/icons/unknown.png" alt="">
				</div>
				<div class="temperature-value5">
					<p>- °<span>C</span></p>
				</div>
				<div class="temperature-description5">
					<p> - </p>
				</div>
				<div class="location5">
					<b>
						<p>-</p>
					</b>
				</div>
				<div class="wind-value5">
					<p>-</p>
				</div>
				<div class="humidity-value5">
					<p>-</p>
				</div>
				<div class="pressure-value5">
					<p>-</p>
				</div>
				<div class="sunrise-value5">
					<p>-</p>
				</div>
				<div class="sunset-value5">
					<p>-</p>
				</div>
				<div class="day-value5">
					<p>-</p>
				</div>
			</div>
		</div>

		<script src="weather/app.js"></script>

		<div class="container2">
				<h1>
					<font color="red" face="Verdana">Chicago</font>
				</h1>
			<div class="weathercontainer2">
				<div class="app-title">
				</div>
				<div class="weather-container">
					<div class="weather-icon6">
						<img src="weatherCHI/icons/unknown.png" alt="">
					</div>
					<div class="temperature-value6">
						<p>- °<span>C</span></p>
					</div>
					<div class="temperature-description6">
						<p> - </p>
					</div>
					<div class="location6">
					<b>
                        <p>-</p>
                    </b>
                </div>
                <div class="wind-value6">
                    <p>-</p>
                </div>
                <div class="humidity-value6">
                    <p>-</p>
                </div>
                <div class="pressure-value6">
                    <p>-</p>
                </div>
                <div class="sunrise-value6">
                    <p>-</p>
                </div>
                <div class="sunset-value6">
                    <p>-</p>
                </div>
                <div class="day-value6">
                    <p>-</p>
                </div>
				</div>
			</div>

			<div class="weathercontainer2">
				<div class="app-title">
				</div>
				<div class="weather-container">
					<div class="weather-icon7">
						<img src="weatherCHI/icons/unknown.png" alt="">
					</div>
					<div class="temperature-value7">
						<p>- °<span>C</span></p>
					</div>
					<div class="temperature-description7">
						<p> - </p>
					</div>
					<div class="location7">
					<b>
                        <p>-</p>
                    </b>
                </div>
                <div class="wind-value7">
                    <p>-</p>
                </div>
                <div class="humidity-value7">
                    <p>-</p>
                </div>
                <div class="pressure-value7">
                    <p>-</p>
                </div>
                <div class="sunrise-value7">
                    <p>-</p>
                </div>
                <div class="sunset-value7">
                    <p>-</p>
                </div>
                <div class="day-value7">
                    <p>-</p>
                </div>
				</div>
			</div>

			<div class="weathercontainer2">
				<div class="app-title">
				</div>
				<div class="weather-container">
					<div class="weather-icon8">
						<img src="weatherCHI/icons/unknown.png" alt="">
					</div>
					<div class="temperature-value8">
						<p>- °<span>C</span></p>
					</div>
					<div class="temperature-description8">
						<p> - </p>
					</div>
					<div class="location8">
					<b>
                        <p>-</p>
                    </b>
                </div>
                <div class="wind-value8">
                    <p>-</p>
                </div>
                <div class="humidity-value8">
                    <p>-</p>
                </div>
                <div class="pressure-value8">
                    <p>-</p>
                </div>
                <div class="sunrise-value8">
                    <p>-</p>
                </div>
                <div class="sunset-value8">
                    <p>-</p>
                </div>
                <div class="day-value8">
                    <p>-</p>
                </div>
				</div>
			</div>

			<div class="weathercontainer2">
				<div class="app-title">
				</div>
				<div class="weather-container">
					<div class="weather-icon9">
						<img src="weatherCHI/icons/unknown.png" alt="">
					</div>
					<div class="temperature-value9">
						<p>- °<span>C</span></p>
					</div>
					<div class="temperature-description9">
						<p> - </p>
					</div>
					<div class="location9">
					<b>
                        <p>-</p>
                    </b>
                </div>
                <div class="wind-value9">
                    <p>-</p>
                </div>
                <div class="humidity-value9">
                    <p>-</p>
                </div>
                <div class="pressure-value9">
                    <p>-</p>
                </div>
                <div class="sunrise-value9">
                    <p>-</p>
                </div>
                <div class="sunset-value9">
                    <p>-</p>
                </div>
                <div class="day-value9">
                    <p>-</p>
                </div>
				</div>
			</div>

			<div class="weathercontainer2">
				<div class="app-title">
				</div>
				<div class="weather-container">
					<div class="weather-icon10">
						<img src="weatherCHI/icons/unknown.png" alt="">
					</div>
					<div class="temperature-value10">
						<p>- °<span>C</span></p>
					</div>
					<div class="temperature-description10">
						<p> - </p>
					</div>
					<div class="location10">
					<b>
                        <p>-</p>
                    </b>
                </div>
                <div class="wind-value10">
                    <p>-</p>
                </div>
                <div class="humidity-value10">
                    <p>-</p>
                </div>
                <div class="pressure-value10">
                    <p>-</p>
                </div>
                <div class="sunrise-value10">
                    <p>-</p>
                </div>
                <div class="sunset-value10">
                    <p>-</p>
                </div>
                <div class="day-value10">
                    <p>-</p>
                </div>
				</div>
			</div>

			<script src="weatherCHI/app.js"></script>

		</div>
</body>

</html>