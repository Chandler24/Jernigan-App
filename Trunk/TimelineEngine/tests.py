import server
import TimelineEngine
import os
import unittest
import wikipedia

class UnitTests(unittest.TestCase):
    TE = TimelineEngine.TimelineEngine()
    page = wikipedia.page("Stanford University")
    images = page.images
    page_content = (page, .1, images)

    def test_getWikiPage(self):
        self.assertIsInstance(self.TE.getWikiPage("Stanford University"), type(self.page))
        self.assertEqual(self.TE.getWikiPage(""), None)
        self.assertEqual(self.TE.getWikiPage(None), None)

    def test_getPageContent(self):
        self.assertIsInstance(self.TE.getWikiPage("Stanford University"), type(self.page))
        self.assertEqual(self.TE.getWikiPage(""), None)
        self.assertEqual(self.TE.getWikiPage(None), None)
        
    def test_findBestImage(self):
        self.assertIsInstance(self.TE.findBestImage(self.images, "Stanford University"), type(self.images[0]))
        self.assertEqual(self.TE.findBestImage([], "Stanford University"), None)
        self.assertEqual(self.TE.findBestImage(None, ""), None)
        
    def test_generateTimeline(self):
        self.assertIsInstance(self.TE.generateTimeline("Stanford University"), str)
        self.assertEqual(self.TE.generateTimeline(""), "No Timeline Avaliable")
        self.assertEqual(self.TE.generateTimeline(None), "No Timeline Avaliable")

    def test_timelineGenerationCheck(self):
        self.assertTrue(self.TE.getWikiPage("Stanford University"), str)
        self.assertFalse(self.TE.getWikiPage(""), str)
        self.assertFalse(self.TE.getWikiPage(None), str)



if __name__ == '__main__':
    #os.system("python server.py")
    unittest.main()