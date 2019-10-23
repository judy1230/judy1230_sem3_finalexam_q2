module.exports = {
	middleHandler: (req, res, next) => {
		let startTime = new Date()
		let start = new Date().getTime()
		//應該用res.on('finish',function())來計算response 時間
		res.on('finish', function () {
			totalTime = new Date() - start
			console.log(startTime + ' ' + '|' + ' ' + req.method + ' ' + 'From' + ' ' + req.url
				+ ' ' + 'Total Time: ' + totalTime + ' ' + 'ms')
		})
		next()
	} 
}			

		
	
			
		
			


