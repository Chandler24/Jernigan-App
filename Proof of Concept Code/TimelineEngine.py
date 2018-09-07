import tensorflow as tf
import urllib3 as url
import wikipedia
import re

class TimelineEngine():

    def getWikiPage(self, locationInfo):
        result = wikipedia.search("{}".format(locationInfo["name"]))[0]
        page = wikipedia.page(result)
        return page


    def getPageSummary(self, locationInfo):
        page = self.getWikiPage(locationInfo) # Not being used right now, will expand when including NLP

        page_content = page.content

        return page_content
    
    def generateTimeline(self, locationInfo):
        summary_text = self.getPageSummary(locationInfo)
        summary_text = re.sub('[^A-Za-z0-9.]+', ' ', summary_text).lstrip()
        print(summary_text)



    def TimelineGenerationCheck(self, locationInfo):
        if(not (self.getPageSummary(locationInfo) == None)):
            return True
        else:
            return False



