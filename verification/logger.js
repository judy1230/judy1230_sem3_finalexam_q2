module.exports = {
	middleHandler: (req, res, next) => {
		let startTime = new Date()
		let start = new Date().getTime()
		next()
		totalTime = new Date() - start
		console.log(startTime + ' ' + '|' + ' ' + req.method + ' ' + 'From' + ' ' + req.url 
		  + ' '+ 'Total Time: '+ totalTime + ' ' + 'ms')
		
	},
}
