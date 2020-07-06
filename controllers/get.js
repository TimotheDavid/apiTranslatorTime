exports.timestamp = (req,res)  => {
	let time = req.params.date_string;

	if(time.indexOf('-') > 0){
		// time utc 
		date_utc = new Date(time);

		var seconds = Math.floor(date_utc / 1000);
		res.json({'unix':seconds,'utc':date_utc});
	
	}else{
		// time unix 
	let unix_time = parseInt(time);
	let date = new Date(unix_time * 1000).toUTCString();

	
	 res.json({'unix':unix_time,'utc':date});
	}
}