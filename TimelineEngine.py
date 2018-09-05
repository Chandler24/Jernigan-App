import tensorflow as tf
import urllib3 as url
import wikipedia
import re

class TimelineEngine():

    def __init__(self):
        self.temp = 1

    def getWikiPage(self, locationInfo):
        pages = wikipedia.search("{}".format(locationInfo["address"]))
        print(pages)


    def TimelineGenerationCheck(self, locationInfo):

        return True


