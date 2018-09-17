import wikipedia
import re
from gensim.summarization.summarizer import summarize

class TimelineObject():
    pass

class TimelineEngine():

    def getWikiPage(self, locationInfo):
        result = wikipedia.search("{}".format(locationInfo["name"]))[0]
        page = wikipedia.page(result)
        return page


    def getPageContent(self, locationInfo):
        page = self.getWikiPage(locationInfo)

        page_history = page.section("History")
        page_content = page.content
        if len(page_history) < 10:
            return page_content, .2

        return page_history, .9
    
    def generateTimeline(self, locationInfo):
        print(locationInfo['name'])
        summary_text, ratio = self.getPageContent(locationInfo)
        #summary_text = re.sub('[^A-Za-z0-9.]+', ' ', summary_text).lstrip()
        summary_text = summarize(summary_text, ratio=ratio, split=True)

        timeline_sentences = []

        for sentence in summary_text:
            if bool(re.search('[1-4][0-9]{3}', sentence)) and bool(re.search('in', sentence)):
                timeline_sentences.append(sentence)

        
        # Eventually some code to find image/s of the location
        images = []

        TEObject = TimelineObject()
        TEObject.timeline_sentences = timeline_sentences[0:4]
        TEObject.images = images

        for sentence in TEObject.timeline_sentences:
            print(sentence)
            print("\n")

        return TEObject
            

    def TimelineGenerationCheck(self, locationInfo):
        if bool(re.search(locationInfo['name'], self.getPageContent(locationInfo)[0])):         
            return True
        else:
            return True



