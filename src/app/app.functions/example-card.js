exports.main = async (context = {}, sendResponse) => {
	const {
		propertiesToSend: { dealname }
    }= context;
	
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
						 "text": dealname
					 }
					 ],
				}
				],
		});
	} catch (error) {
		console.error(error);
	}
};
