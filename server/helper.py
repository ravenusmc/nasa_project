#This file will contain the methods and class that will deal with supporting the data file. 

#importing supporting libraries
import numpy as np
import pandas as pd
import datetime
import math

#importing file I built
from web import * 

class Helper():

	def __init__(self):
		self.web_object = Web()

	def convert_date_column_from_obj_to_date(self, data_object):
		return pd.to_datetime(data_object['Date'])
	
	# Yeah, I should have used in a parameter for the column name in the above method 
	# so I would not need this second method - to lazy to add it now...maybe later.
	def convert_date_comulm_from_obj_to_date_mission_data(self, data_object):
		return pd.to_datetime(data_object['Datum']).apply(lambda x: x.replace(tzinfo=None))
		#return pd.to_datetime(data_object['Datum'], utc=True)
	
	def get_eva_count_by_year(self, data_object):
	 return data_object['Date'].groupby(data_object.Date.dt.year).agg('count').sort_index()

	def get_data_in_correct_graph_format(self, eva_count):
		chartData = []
		columns = ['Year', 'EVA Count']
		chartData.append(columns)
		initial_year = 1965
		while initial_year <= 2013:
			rows = []
			try:
				count = int(eva_count.loc[initial_year])
				rows.append(initial_year)
				rows.append(count)
				chartData.append(rows)
			except KeyError:
				print('Error, but program will continue to function')
			initial_year += 1
		return chartData
	
	def get_eva_data_for_years(self, data_object, post_data):
		# convert the 'Date' column to datetime format
		data_object['Date'] = pd.to_datetime(data_object['Date'])
		return data_object[(data_object['Date']>= pd.to_datetime(str(post_data['yearOne']))) & (data_object['Date'] <= pd.to_datetime(str(post_data['yearTwo'])))]

	def build_years_data_set(self, years_data_set):
		wikipedia_web_address = "https://en.wikipedia.org/api/rest_v1/page/summary/"
		years_eva_list = []
		index = 0
		for index, row in years_data_set.iterrows():
			result_two = row['Vehicle'].find('/') 
			if result_two >= 0:
				result_two = result_two - 1
				vehicle_name_for_url = vehicle_name_for_url[0:result_two]
			else: 
				vehicle_name_for_url = row['Vehicle'].replace(" ", "_")
			result = vehicle_name_for_url.find('|') 
			if result >= 0: 
				vehicle_name_for_url = vehicle_name_for_url[0:result]
			full_url = wikipedia_web_address + vehicle_name_for_url
			wikipedia_url = self.web_object.get_eva_vehicle_wikipedia_url(full_url)
			wikipedia_pic = self.web_object.get_eva_vehicle_wikipedia_picture(full_url)
			years_eva_dictionary = {}
			years_eva_dictionary['Index'] = index
			years_eva_dictionary['Country'] = row['Country']
			years_eva_dictionary['Crew'] = row['Crew']
			years_eva_dictionary['Vehicle'] = row['Vehicle']
			years_eva_dictionary['Duration'] = row['Duration']
			years_eva_dictionary['Purpose'] = row['Purpose']
			years_eva_dictionary['wikipedia_url'] = wikipedia_url
			years_eva_dictionary['wikipedia_pic'] = wikipedia_pic
			index += 1
			years_eva_list.append(years_eva_dictionary)
		return years_eva_list
	
	def get_eva_by_vehicle(self, data_object, post_data):
		return data_object[data_object['Vehicle'] == post_data['vehicle']]
	
	def build_eva_data_set(self, post_data, vehicle_data):
		wikipedia_url = "https://en.wikipedia.org/api/rest_v1/page/summary/"
		vehicle_name_for_url = post_data['vehicle'].replace(" ", "_")
		full_url = wikipedia_url + vehicle_name_for_url
		vehicle_eva_list = []
		index = 0
		wikipedia_url = self.web_object.get_eva_vehicle_wikipedia_url(full_url)
		wikipedia_pic = self.web_object.get_eva_vehicle_wikipedia_picture(full_url)
		for index, row in vehicle_data.iterrows():
			vehicle_eva_dictionary = {}
			vehicle_eva_dictionary['Index'] = index
			vehicle_eva_dictionary['Country'] = row['Country']
			vehicle_eva_dictionary['Crew'] = row['Crew']
			vehicle_eva_dictionary['Vehicle'] = row['Vehicle']
			vehicle_eva_dictionary['Duration'] = row['Duration']
			vehicle_eva_dictionary['Purpose'] = row['Purpose']
			vehicle_eva_dictionary['wikipedia_url'] = wikipedia_url
			vehicle_eva_dictionary['wikipedia_pic'] = wikipedia_pic
			index += 1
			vehicle_eva_list.append(vehicle_eva_dictionary)
		return vehicle_eva_list
	
	# This method is almost identical to the build_years_data_set expect it's not getting wikipedia information.
	# Thus I decided to create a new method which radically sped up getting the drill down information.
	def build_years_data_set_drill_down(self, years_data_set):
		years_eva_list = []
		index = 0
		for index, row in years_data_set.iterrows():
			years_eva_dictionary = {}
			years_eva_dictionary['Index'] = index
			years_eva_dictionary['Country'] = row['Country']
			years_eva_dictionary['Crew'] = row['Crew']
			if isinstance(row['Vehicle'], float) and math.isnan(row['Vehicle']):
				years_eva_dictionary['Vehicle'] = 'No Data'
			else:
				years_eva_dictionary['Vehicle'] = row['Vehicle']
			if isinstance(row['Duration'], float) and math.isnan(row['Duration']):
				years_eva_dictionary['Duration'] = 'No Data'
			elif (isinstance(row['Duration'], str) and (len(row['Duration']) > 5)):
				years_eva_dictionary['Duration'] = 'No Data'
			else:
				years_eva_dictionary['Duration'] = row['Duration']
			index += 1
			years_eva_list.append(years_eva_dictionary)
		return years_eva_list
	
	def get_min_year(self, mission_data):
		return mission_data['Datum'].min()
	
	def get_max_year(self, mission_data):
		return mission_data['Datum'].max()
	
	def missions_by_year(self, mission_data, min_year, max_year):
		missions_by_year = []
		columns = ['Year', 'Mission Count']
		missions_by_year.append(columns)
		starting_year = min_year.year
		ending_year = max_year.year
		while starting_year <= ending_year:
			rows = []
			missions_by_year_dictionary = {}
			end_of_the_year = starting_year + 1
			data = mission_data[(mission_data['Datum'] >= pd.to_datetime(str(starting_year))) & (mission_data['Datum'] < pd.to_datetime(str(end_of_the_year)))]
			number_of_missions = len(data)
			starting_year += 1 
			rows.append(starting_year)
			rows.append(number_of_missions)
			missions_by_year.append(rows)
	
	def success_failure_missions_by_year(self, mission_data, post_data, min_year, max_year):
		missions_by_year = []
		if post_data['dataType'] == 'All':
			columns = ['Year', 'Total Missions', 'Successful Missions', 'Failed Missions']
		elif post_data['dataType'] == 'Success':
			columns = ['Year', 'Total Missions', 'Successful Missions']
		else:
			columns = ['Year', 'Total Missions', 'Failed Missions']
		missions_by_year.append(columns)
		starting_year = int(min_year)
		ending_year = int(max_year)
		print(post_data['company'])
		if post_data['company'] != '':
			mission_data = mission_data[(mission_data['Company Name'] == post_data['company'])]
		while starting_year <= ending_year:
			rows = []
			missions_by_year_dictionary = {}
			end_of_the_year = starting_year + 1
			data = mission_data[(mission_data['Datum'] >= pd.to_datetime(str(starting_year))) & (mission_data['Datum'] < pd.to_datetime(str(end_of_the_year)))]
			success_missions = data[(data['Status Mission'] == 'Success')]
			failed_missions = data[(data['Status Mission'] == 'Failure')]
			number_of_missions = len(data)
			number_successful_missions = len(success_missions)
			number_failed_missions = len(failed_missions)
			starting_year += 1 
			rows.append(starting_year)
			if post_data['dataType'] == 'All':	
				rows.append(number_of_missions)
				rows.append(number_successful_missions)
				rows.append(number_failed_missions)
			elif post_data['dataType'] == 'Success':
				rows.append(number_of_missions)
				rows.append(number_successful_missions)
			else:
				rows.append(number_of_missions)
				rows.append(number_failed_missions)
			missions_by_year.append(rows)
		return missions_by_year
	
	def locations_by_year(self.mission_data, post_data, min_year, max_year)
		pass



