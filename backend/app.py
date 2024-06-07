from flask import Flask, render_template
from UpdateEventsFile import EventsDataSeperation

link = "https://docs.google.com/spreadsheets/d/1WHSAjBb_Kw7mmowat-Dwx4u67r8w3fZkvvBq89Hl9iI/export?format=csv"
events, next_events = EventsDataSeperation(link)
template_path = "../frontend/public"
app = Flask(__name__, template_folder = template_path)

@app.route('/')
def events():
	return render_template("events.html", events=events, next_events=next_events)

if __name__ == "__main__":
	app.run(debug=True)