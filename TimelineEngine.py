import tensorflow as tf
import urllib3
from bs4 import BeautifulSoup

class TimelineEngine:

    def __init__(self):
        self.name = "TimelineEngine"

    def createGoogleSearch(self, locationInfo):
        searchQuery = "\"history\" {}".format(locationInfo.name)
        print(searchQuery)

        return searchQuery

    def getURLs(self, searchQuery):
        page = urllib3.urlopen("https://www.google.com/search?q={}".format(searchQuery))
        soup = BeautifulSoup(page.read())
        links = soup.findAll("a")
        
        for link in links:
            print(link["href"])

        URLs = [link["href"] for link in links]

        return URLs

    def TimelineGenerationCheck(locationInfo):

        URLs = self.getURLs(createGoogleSearch(locationInfo))

        return True

    