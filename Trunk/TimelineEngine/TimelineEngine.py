import wikipedia
import re
from gensim.summarization.summarizer import summarize
import sys
import json

MINIMUM_CONTENT = 100 # Minimum content in history section to accept
TOTAL_SUMMARY_RATIO = .2 # Ratio for NLP summarization on entire wiki page content
HISTORY_SUMMARY_RATIO = .9 # Ratio for NLP summarization on history section of wiki page
DEFAULT_IMAGE = 'https://i.imgur.com/EKZzDWH.jpg' # Default image for return when a valid image fails to be found

class TimelineEngine():
    """
    Timeline Engine class that is started by the server.py file when a get request is received. The main class method is generateTimeline() and expects a location name in string format.
    """
    def getWikiPage(self, locationInfo):
        """
        Description: Takes a location string and returns a wiki page object for that location.
        Input: <String> locationInfo 
        Output: <WikiPage> wiki_page
        """
        if locationInfo == None or locationInfo == "":
            return None
            
        search_results = wikipedia.search("{}".format(locationInfo))
        if len(search_results) < 1:
            return None
        wiki_page = wikipedia.page(search_results[0])
        return wiki_page

    def getPageContent(self, locationInfo):
        """
        Description: Takes a WikiPage and returns the best content, as well as the appropriate acceptance ratio for that content and page images.
        Input: <String> locationInfo 
        Output: <WikiPage> page_history, <Float> summary_ratio, <Array> page_images 
        """
        if locationInfo == None or locationInfo == "":
            return None

        wiki_page = self.getWikiPage(locationInfo)

        if wiki_page == None:
            return None, None, None

        page_history = wiki_page.section("History")
        page_content = wiki_page.content
        if page_history == None or len(page_history) < MINIMUM_CONTENT:
            return page_content, TOTAL_SUMMARY_RATIO, wiki_page.images

        return page_history, HISTORY_SUMMARY_RATIO, wiki_page.images

    def findBestImage(self, images, label):
        """
        Description: Attempts to find a valid and relevant image for return packaged with the timeline
        Input: <Array> images, <String> label
        Output: <String> image
        """
        if images == None or images == [] or label == None or label == "":
            return None

        for image in images:
            if re.search(image, label) and (re.search(image, 'jpg') or re.search(image, 'png') or re.search(image, 'jpeg')):
                return image
        
        if (re.search(image, 'jpg') or re.search(image, 'png') or re.search(image, 'jpeg')):
            return images[0]
        else:
            return DEFAULT_IMAGE

    def generateTimeline(self, locationInfo):
        """
        Description: Main class function that takes in the location and creates the timeline object to be returned.
        Input: <String> locationInfo
        Output: <JSON> TimelineObject
        """
        if(not (self.TimelineGenerationCheck(locationInfo))):
            return json.dumps([dict({"Info" : "No Timeline Avaliable"})])

        page_content, ratio, images = self.getPageContent(locationInfo)
   

        summary_text = summarize(page_content, ratio=ratio, split=True)

        timeline_sentences = []

        for sentence in summary_text:
            # Searching for years in the sentence using regular expressions
            if bool(re.search('[1-4][0-9]{3}', sentence)) and bool(re.search('in', sentence)):
                timeline_sentences.append(sentence)

        TimelineObject = []
        
        image = self.findBestImage(images, locationInfo)

        year_event_description = {}
        for sentence in timeline_sentences:
            year_event_description = {}
            year_event_description['year'] = re.search('[1-4][0-9]{3}', sentence).group()
            year_event_description['description'] = sentence
            TimelineObject.append(year_event_description)
            
        TimelineObject.append(dict({'image' : image}))

        return json.dumps(TimelineObject)
            
    def TimelineGenerationCheck(self, locationInfo):
        """
        Description: Simple check if a valid timeline can be created. 
        Input: <String> locationInfo
        Output: <Bool> result
        """
        if locationInfo == None or locationInfo == "":
            return False
        if self.getPageContent(locationInfo)[0] == None:
            return False
        else:
            return True
