import wikipedia
import re
from gensim.summarization.summarizer import summarize
import sys
import json

class TimelineEngine():

    def getWikiPage(self, locationInfo):
        if locationInfo == None or locationInfo == "":
            return None
            
        result = wikipedia.search("{}".format(locationInfo))[0]
        page = wikipedia.page(result)
        return page


    def getPageContent(self, locationInfo):
        if locationInfo == None or locationInfo == "":
            return None

        page = self.getWikiPage(locationInfo)

        page_history = page.section("History")
        page_content = page.content
        if len(page_history) < 10:
            return page_content, .2, page.images

        return page_history, .9, page.images
    
    def findBestImage(self, images, label):
        if images == None or images == [] or label == None or label == "":
            return None

        for image in images:
            if re.search(image, label):
                return image
        
        return images[0]

    def generateTimeline(self, locationInfo):
        print(locationInfo)
        #if(not (self.TimelineGenerationCheck(locationInfo))):
         #   return "No Timeline Avaliable"

        summary_text, ratio, images = self.getPageContent(locationInfo)
        summary_text = summarize(summary_text, ratio=ratio, split=True)

        timeline_sentences = []

        for sentence in summary_text:
            if bool(re.search('[1-4][0-9]{3}', sentence)) and bool(re.search('in', sentence)):
                timeline_sentences.append(sentence)

        TimelineObject = []
        
        image = self.findBestImage(images, locationInfo)
        temp = {}
        for sentence in timeline_sentences:
            temp = {}
            temp['year'] = re.search('[1-4][0-9]{3}', sentence).group()
            temp['description'] = sentence
            TimelineObject.append(temp)
            
        TimelineObject.append(dict({'image' : image}))

        print(TimelineObject)
        return json.dumps(TimelineObject)
            

    def TimelineGenerationCheck(self, locationInfo):
        if locationInfo == None or locationInfo == "" or type(locationInfo) != str:
            return False

        if bool(re.search(locationInfo, self.getPageContent(locationInfo)[0]) != None):         
            return True
        else:
            return False
