import tensorflow as tf
import urllib3 as url
from bs4 import BeautifulSoup
import requests
import re

def createGoogleSearch(locationInfo):
    searchQuery = "\"history\" {}".format(locationInfo['name'])
    print(searchQuery)

    return searchQuery

def getURLs(searchQuery):
    page = requests.get("https://www.google.com/search?q={}".format(searchQuery))
    soup = BeautifulSoup(page.content)

    links = []
    for link in soup.find_all("a",href=re.compile("(?<=/url\?q=)(htt.*://.*)")):
        print(re.split(":(?=http)",link["href"].replace("/url?q=","")))
        links.append(link)
    

    return links

def TimelineGenerationCheck(locationInfo):

    URLs = getURLs(createGoogleSearch(locationInfo))

    return True




