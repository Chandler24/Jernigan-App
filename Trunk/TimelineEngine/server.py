from http.server import BaseHTTPRequestHandler, HTTPServer
import TimelineEngine as TE
import json
import http.client
import re

PORT_NUMBER = 8080

"""
Basic HTTP Request Handler that implements the GET request. Expects header 'data' with value equal to the string of the location name.
"""
class myHandler(BaseHTTPRequestHandler):
	"""
	Description: Get request handler function.
	Input: None
	Output: None
	"""
	def do_GET(self):
		TimelineEngine = TE.TimelineEngine()
		self.send_response(200)
		self.data = self.headers.as_string().split("\n")
		self.headers = {}
		for header in self.data:
			temp = header.split(":")
			if len(temp) >= 2:
				self.headers[temp[0]] = temp[1]


		self.send_header("Content-type", "application/json")
		self.end_headers()
		self.wfile.write(TimelineEngine.generateTimeline(self.headers['data']).encode("utf-8"))
		return

"""
This code sets up the connection on the specificed port and listens for requests until canceled.
"""
try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('localhost', PORT_NUMBER), myHandler)
	print('Started httpserver on port ' , PORT_NUMBER)
	
	#Wait forever for incoming http requests
	server.serve_forever()

except KeyboardInterrupt:
	print ('^C received, shutting down the web server')
	server.socket.close()




