import server
import TimelineEngine
import os
import unittest
import wikipedia

class UnitTests(unittest.TestCase):

    def __init__(self):
        self.TE = TimelineEngine.TimelineEngine()
        self.page = wikipedia.page("Stanford University")
        self.images = self.page.images
        self.page_content = (self.page, .1, self.images)
        os.system("python server.py")

    def test_getWikiPage(self):
        self.assertIs(self.TE.getWikiPage("Stanford University"), str)
        self.assertIs(self.TE.getWikiPage(""), None)
        self.assertIs(self.TE.getWikiPage(None), None)

    def test_getPageContent(self):
        self.assertIs(self.TE.getWikiPage("Stanford University"), type(self.page_content))
        self.assertIs(self.TE.getWikiPage(""), None)
        self.assertIs(self.TE.getWikiPage(None), None)
        
    def test_findBestImage(self):
        self.assertEqual(self.TE.findBestImage(self.images, "Stanford University"), typeof(self.images[0]))
        self.assertEqual(self.TE.findBestImage([], "Stanford University"), None)
        self.assertEqual(self.TE.findBestImage(None, ""), None)
        
    def test_generateTimeline(self):
        self.assertIs(self.TE.getWikiPage("Stanford University"), str)
        self.assertEqual(self.TE.getWikiPage(""), "No Timeline Avaliable")
        self.assertEqual(self.TE.getWikiPage(None), "No Timeline Avaliable")

    def test_timelineGenerationCheck(self):
        self.assertTrue(self.TE.("Stanford University"), str)
        self.assertFalse(self.TE.getWikiPage(""), str)
        self.assertFalse(self.TE.getWikiPage(None), str)



if __name__ == '__main__':
    unittest.main()