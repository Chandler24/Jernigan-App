import wikipedia
import re
from gensim.summarization.summarizer import summarize
import sys
import json

class TimelineEngine():

    def getWikiPage(self, locationInfo):
        result = wikipedia.search("{}".format(locationInfo))[0]
        page = wikipedia.page(result)
        return page


    def getPageContent(self, locationInfo):
        print(locationInfo)
        page = self.getWikiPage(locationInfo)

        page_history = page.section("History")
        page_content = page.content
        if len(page_history) < 10:
            return page_content, .2, page.images

        return page_history, .9, page.images
    
    def findBestImage(self, images, label):
        for image in images:
            if re.search(image, label):
                return image
        
        if len(images) > 0:
            return images[0]
        else:
            return "No Images Found"
    
    def generateTimeline(self, locationInfo):
        print(locationInfo)
        summary_text, ratio, images = self.getPageContent(locationInfo)
        #summary_text = re.sub('[^A-Za-z0-9.]+', ' ', summary_text).lstrip()
        summary_text = summarize(summary_text, ratio=ratio, split=True)

        timeline_sentences = []

        for sentence in summary_text:
            if bool(re.search('[1-4][0-9]{3}', sentence)) and bool(re.search('in', sentence)):
                timeline_sentences.append(sentence)

        TimelineObject = {}
        
        image = self.findBestImage(images, locationInfo)

        years_sentences = {}

        for sentence in timeline_sentences:
            years_sentences[re.search('[1-4][0-9]{3}', sentence).group()] = sentence

        TimelineObject['sentences'] = years_sentences
        TimelineObject['image'] = image

        print(TimelineObject)
        return json.dumps(TimelineObject)
            

    def TimelineGenerationCheck(self, locationInfo):
        if bool(re.search(locationInfo, self.getPageContent(locationInfo)[0])):         
            return True
        else:
            return True
