import server
import TimelineEngine
import os

class UnitTests():

    def __init__(self):
        self.TE = TimelineEngine.TimelineEngine()
        os.system("python server.py")

    def test_server(self):
        try:
            os.system("curl -XGET 'localhost:9999' -d 'Stanford University'")
        except:
            return 0

        return 1
        

    def test_getWikiPage(self):
        try:
            self.TE.getWikiPage("Stanford University")
        except:
            return 0
        
        try:
            self.TE.getWikiPage("")
        except:
            return 0
        
        try
            self.TE.getWikiPage(None)
        except:
            return 0

        return 1

    def test_getPageContent(self):
        try:
            self.TE.getPageContent("Stanford University")
        except:
            return 0
        
        try:
            self.TE.getPageContent("")
        except:
            return 0
        
        try
            self.TE.getPageContent(None)
        except:
            return 0

        return 1

    def test_findBestImage(self):
        try:
            self.TE.findBestImage("Stanford University")
        except:
            return 0
        
        try:
            self.TE.findBestImage("")
        except:
            return 0
        
        try
            self.TE.findBestImage(None)
        except:
            return 0

        return 1

    def test_generateTimeline(self):
        try:
            self.TE.generateTimeline("Stanford University")
        except:
            return 0
        
        try:
            self.TE.generateTimeline("")
        except:
            return 0
        
        try
            self.TE.generateTimeline(None)
        except:
            return 0

        return 1 

    def test_timelineGenerationCheck(self):
        try:
            self.TE.TimelineGenerationCheck("Stanford University")
        except:
            return 0
        
        try:
            self.TE.TimelineGenerationCheck("")
        except:
            return 0
        
        try
            self.TE.TimelineGenerationCheck(None)
        except:
            return 0

        return 1 
