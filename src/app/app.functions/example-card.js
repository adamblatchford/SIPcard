exports.main = async (context = {}, sendResponse) => {
	const {
		propertiesToSend: { deal_situation }
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
						 "text": "**"+deal_situation+"**"
					 }
					 ],
				}
				],
		});
	} catch (error) {
		console.error(error);
	}
};
