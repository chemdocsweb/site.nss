import os
from flask import Flask, render_template, send_from_directory
from UpdateEventsFile import EventsDataSeperation

link = "https://docs.google.com/spreadsheets/d/1WHSAjBb_Kw7mmowat-Dwx4u67r8w3fZkvvBq89Hl9iI/export?format=csv"
events, next_events = EventsDataSeperation(link)

file_path = "../frontend/public"
app = Flask(__name__, template_folder =
file_path, static_url_path='/static',  static_folder=file_path)

@app.route('/')
def index():
	return render_template('index.html')


@app.route('/events.html')
def show_events():
	return render_template("events.html", events=events, next_events=next_events)

@app.route('/gallery.html')
def show_events():
  return render_template("gallery.html", events=events)

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory(file_path, filename)
    
if __name__ == "__main__":
  port = int(os.environ.get('PORT', 5000))  # Use the PORT environment variable or default to 5000
  app.run(host='0.0.0.0', port=port, debug=True)