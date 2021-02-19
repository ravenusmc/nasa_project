#This file will contain the methods and class that will deal with web api's. 

#importing supporting libraries
import requests

class Web():

	def get_eva_vehicle_wikipedia_url(self, full_url):
		response = requests.get(full_url)
		json_response = response.json()
		return json_response['content_urls']['desktop']['page']
	
	def get_eva_vehicle_wikipedia_picture(self, full_url):
		response = requests.get(full_url)
		json_response = response.json()
		return json_response['thumbnail']['source']
