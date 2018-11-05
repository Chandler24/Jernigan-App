from http.server import BaseHTTPRequestHandler, HTTPServer
import TimelineEngine as TE
import json
import http.client
import re

PORT_NUMBER = 8080

class myHandler(BaseHTTPRequestHandler):
	#Handler for the GET requests
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

try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('localhost', PORT_NUMBER), myHandler)
	print('Started httpserver on port ' , PORT_NUMBER)
	
	#Wait forever for incoming htto requests
	server.serve_forever()

except KeyboardInterrupt:
	print ('^C received, shutting down the web server')
	server.socket.close()




