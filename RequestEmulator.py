import TimelineEngine as TE
import numpy as np
import json
import os
import time

class RequestEmulator:
    locations = ["Orlando City Hall", "Harvard University", "Stanford University"]
    address = ["111 Downtown Road, Orlando FL, 32881", "111 Harvard Road, Boston MA, 48376", "1844 Stanford Road, Stanford CA, 21987"]
    locationInfo = {}

    def __init__(self):
        self.TimelineEngine = TE.TimelineEngine()

    def callTimelineEngine(self):
        self.generateFakeLocation()
        self.TimelineEngine.getWikiPage(self.locationInfo)

    def generateFakeLocation(self):
        self.locationInfo["name"] = self.locations[np.random.randint(0,high=2)]
        self.locationInfo["address"] = self.address[np.random.randint(0,high=2)]
    
    
def main(): 
    RE = RequestEmulator()  
    while True:
        RE.callTimelineEngine()
        time.sleep(np.random.randint(10,high=20))

main()