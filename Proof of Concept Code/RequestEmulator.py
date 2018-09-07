import TimelineEngine as TE
import numpy as np
import json
import os
import time

class RequestEmulator:
    locations = ["Harvard University", "Stanford University", "This is a made up thing and there should be no results for this at all given a reasonable search"]
    address = ["111 Downtown Road, Orlando FL, 32881", "111 Harvard Road, Boston MA, 48376", "1844 Stanford Road, Stanford CA, 21987"]
    locationInfo = {}

    def __init__(self):
        self.TimelineEngine = TE.TimelineEngine()

    def callTimelineEngine(self):
        self.generateFakeLocation()
        if(self.TimelineEngine.TimelineGenerationCheck(self.locationInfo)):
            print("TimelineExists")
        self.TimelineEngine.generateTimeline(self.locationInfo)

    def generateFakeLocation(self):
        self.locationInfo["name"] = self.locations[np.random.randint(0,high=2)]
        self.locationInfo["address"] = self.address[np.random.randint(0,high=2)]
        print(self.locationInfo["name"])
    
    
def main(): 
    RE = RequestEmulator()  
    while True:
        RE.callTimelineEngine()
        time.sleep(np.random.randint(10,high=20))

main()