def EventsDataSeperation(url):
  import requests as rq
  import pandas as pd
  from io import StringIO

    # Requesting the CSV file from the URL
  response = rq.get(url)
  response.raise_for_status()

    # Using StringIO to read the CSV content directly into memory
  csv_data = StringIO(response.text)
  events_data = pd.read_csv(csv_data)

    # Processing the data
  events_data['date'] = pd.to_datetime(events_data['date'], dayfirst=True).dt.strftime('%d-%m-%Y')
  next_events = events_data[events_data['event_status'] == 0]
  events = events_data[events_data['event_status'] == 1]
  events = events[::-1]
  events = events.to_dict("records")
  next_events = next_events.to_dict("records")

  return events, next_events