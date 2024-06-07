import requests as rq
import pandas as pd
from io import BytesIO

def EventsDataSeperation(url):
    # Requesting the Excel file from the URL
    response = rq.get(url)
    response.raise_for_status()

    # Using BytesIO to read the Excel content directly into memory
    excel_data = BytesIO(response.content)
    
    # Assuming the file is an .xlsx and using 'openpyxl' engine
    events = pd.read_excel(excel_data, engine='openpyxl')

    # Processing the data
    events['date'] = pd.to_datetime(events['date'], dayfirst=True).dt.strftime('%d-%m-%Y')
    next_events = events[events['event_status'] == 0]
    events = events[events['event_status'] == 1]
    events = events[::-1]
    events = events.to_dict("records")
    next_events = next_events.to_dict("records")

    return events, next_events