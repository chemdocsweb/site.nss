def EventsDataSeperation(url):
	# importing required libraries 
	import requests as rq
	import pandas as pd
	
	# Requesting the csv file from google
	response = rq.get(url)
	response.raise_for_status()
	csv_path = "csvFiles/website_data.csv"
	with open(csv_path, "wb") as f:
		f.write(response.content)
		
	events = pd.read_csv(csv_path)
	events['date'] = pd.to_datetime(events['date'], dayfirst=True).dt.strftime('%d-%m-%Y')
	next_events = events[events['event_status'] == 0]
	events = events[events['event_status'] == 1]
	events = events[::-1]
	events = events.to_dict("records")
	next_events = next_events.to_dict("records")
	
	return events, next_events