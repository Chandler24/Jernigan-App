import TimelineEngine as TE
import numpy as np


class RequestEmulator:
    locations = ["Orlando City Hall", "Harvard University", "Stanford University"]
    address = ["111 Downtown Road, Orlando FL, 32881", "111 Harvard Road, Boston MA, 48376", "1844 Stanford Road, Stanford CA, 21987"]
    
    def __init__(self):
        locationInfo = {}
        locationInfo["name"] = self.locations[np.random.randint(0,high=2)]
        locationInfo["address"] = self.address[np.random.randint(0,high=2)]