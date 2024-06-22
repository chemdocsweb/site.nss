def EventsDataSeperation(url):
  import requests as rq
  import pandas as pd
  from io import StringIO

  response = rq.get(url)
  response.raise_for_status()

  csv_data = StringIO(response.text)
  events_data = pd.read_csv(csv_data)

  events_data['date'] = pd.to_datetime(events_data['date'], dayfirst=True).dt.strftime('%d-%m-%Y')
  next_events = events_data[events_data['event_status'] == 0]
  events = events_data[events_data['event_status'] == 1]
  events = events.head(9)
  events = events[::-1]
  events = events.to_dict("records")
  next_events = next_events.to_dict("records")

  return events, next_events



def LeadsDataSeperation(url):
  import requests as rq
  import pandas as pd
  from io import StringIO

  response = rq.get(url)
  response.raise_for_status()

  csv_data = StringIO(response.text)
  mem_data = pd.read_csv(csv_data)
  
  unit_1 = mem_data[mem_data['unit'] == 1]
  unit_2 = mem_data[mem_data['unit'] == 2]
  
  unit_1_core = unit_1[unit_1['c_or_b'] == 'core']
  unit_2_core = unit_2[unit_2['c_or_b'] == 'core']
  
  unit_1_branch = unit_1[unit_1['c_or_b'] != 'core']
  unit_2_branch = unit_2[unit_2['c_or_b'] != 'core']
  
  unit_1_core = unit_1_core.to_dict("records")
  unit_1_branch = unit_1_branch.to_dict("records")
  unit_2_core = unit_2_core.to_dict("records")
  unit_2_branch = unit_2_branch.to_dict("records")
  
  return unit_1_core, unit_1_branch, unit_2_core, unit_2_branch

