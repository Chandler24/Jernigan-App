import socketserver
import TimelineEngine as TE

class MyTCPHandler(socketserver.BaseRequestHandler):
	
	def handle(self):
		self.data = self.request.recv(1024).strip()
		self.data = self.data.decode()
		index = self.data.rfind('\n')
		self.data = self.data[index+1:]
		print(type(self.data))
		timeline_engine = TE.TimelineEngine()
		results = timeline_engine.generateTimeline(self.data)
		self.request.sendall(results.encode())

if __name__ == "__main__":
    HOST, PORT = "localhost", 9999

    # Create the server, binding to localhost on port 9999
    with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
        server.serve_forever()