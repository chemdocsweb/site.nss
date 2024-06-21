import os
from flask import Flask, render_template, send_from_directory
from DataFetchFile import EventsDataSeperation, LeadsDataSeperation 

event_link = "https://docs.google.com/spreadsheets/d/1WHSAjBb_Kw7mmowat-Dwx4u67r8w3fZkvvBq89Hl9iI/export?format=csv"

lead_link = "https://docs.google.com/spreadsheets/d/1wxfDtvZKiAsTvdI_Hfum37YvTBl8AA8d9fKmGviWVRk/export?format=csv"

unit_1_core, unit_1_branch, unit_2_core, unit_2_branch = LeadsDataSeperation(lead_link)





file_path = "../frontend/public"
app = Flask(__name__, template_folder =
file_path, static_url_path='/static',  static_folder=file_path)

@app.route('/')
def index():
	return render_template('index.html')


@app.route('/events.html')
def show_events():
	events, next_events = EventsDataSeperation(event_link)
	return render_template("events.html", events=events, next_events=next_events)

@app.route('/gallery.html')
def show_gallery():
	events, _ = EventsDataSeperation(event_link)
	return render_template("gallery.html", events=events)
  
@app.route('/unit_1_leads.html')
def unit_1():
	return render_template('unit_1_leads.html', core_mems = unit_1_core, branch_mems = unit_1_branch)
	
@app.route('/unit_2_leads.html')
def unit_2():
	return render_template('unit_2_leads.html', core_mems = unit_2_core,  branch_mems = unit_2_branch) 
	

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory(file_path, filename)
    
if __name__ == "__main__":
  port = int(os.environ.get('PORT', 5000))  # Use the PORT environment variable or default to 5000
  app.run(host='0.0.0.0', port=port, debug=True)