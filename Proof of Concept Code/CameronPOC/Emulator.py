import TimelineEngine as TE
import numpy as np
import json
import os
import time

class Emulator:
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
        else:
            print("Timeline Does Not Exist - Graceful Exit")

    def generateFakeLocation(self):
        self.locationInfo["name"] = self.locations[0]
        self.locationInfo["address"] = self.address[np.random.randint(0,high=3)]
    
    
def main(): 
    Emulator().callTimelineEngine()  


class UnitTests:

    def __init__(self):
        self.TimelineEngine = TE.TimelineEngine()
    
    def someTest(self):
        print()

main()