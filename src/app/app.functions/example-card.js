exports.main = async (context = {}, sendResponse) => {
	const {
		propertiesToSend: { name } = context;
	
	try {
		
		sendResponse({
			
			title: 'This card retrieves Situation in Play deal details.',
			sections: [
				{
				 "type": "tile",
				 "body": [
				
					 {
						 "type": "text",
						 "format": "markdown",
						 "text": name
					 }
					 ]
				}
				]
		});
	} catch (error) {
		console.error(error);
	}
};
