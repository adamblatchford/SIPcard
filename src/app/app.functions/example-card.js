exports.main = async (context = {}, sendResponse) => {
	const {
		propertiesToSend: { deal_keywords__specialities_, deal_level_2_taxonomy, deal_level_3_taxonomy, deal_sector, deal_target_description, deal_verticals, target_name, deal_size__mm_, deal_size__usd_mm_, implied_ev__mm_, implied_ev__usd_mm_, implied_ev_ebitda, implied_ev_revenue, percentage_acquired, closedate, createdate, dealname, hubspot_team_id, current_ebitda__, current_ebitda__millions_, current_ebitda__millions_usd_, current_gross_margin__, current_gross_margin__millions_, current_gross_margin__millions_usd_, current_headcount__average_in_last_year_, current_period_currency, current_period_end_date, current_revenue__millions_, current_revenue__millions_usd_, current_revenue_employee__thousands_, missing_financial_records, number_of_financial_records, number_of_financial_records__on_target_company_, deal_situation, situation_in_play___audience, situation_in_play___audience_exclusions, situation_in_play___audience_region, situation_in_play___financials, situation_in_play___headline, situation_in_play___hq_location, situation_in_play___items_to_flag, situation_in_play___sector___capability, situation_in_play___time_to_market, situation_in_play___time_to_market__qtr_, situation_in_play___type_of_process
 }
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
					 },
					 
					 {
						 "type": "descriptionList",
						 "direction": "row",
						 "items":
							 [
								 {
									 "label": "Deal Situation",
									 "value": deal_situation
								 },
								 {
									 "label": "Coming to Market",
									 "value": situation_in_play___time_to_market__qtr_
								 },
								 {
									 "label": "Type of Process",
									 "value": situation_in_play___type_of_process

								 },

							 ]
					 },
					 ],
				}
				],
		});
	} catch (error) {
		console.error(error);
	}
};
