#This file will contain the methods and class that will deal with supporting the data file. 

#importing supporting libraries
import numpy as np
import pandas as pd
import datetime

class Helper():

	def convert_date_column_from_obj_to_date(self, data_object):
		return pd.to_datetime(data_object['Date'])
	
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
		# years_data_set = pd.unique(years_data_set['Vehicle'])
		years_eva_list = []
		for index, row in years_data_set.iterrows():
			years_eva_dictionary = {}
			years_eva_dictionary['Country'] = row['Country']
			years_eva_dictionary['Crew'] = row['Crew']
			years_eva_dictionary['Vehicle'] = row['Vehicle']
			years_eva_dictionary['Duration'] = row['Duration']
			years_eva_dictionary['Purpose'] = row['Purpose']
			years_eva_list.append(years_eva_dictionary)
		return years_eva_list
	
	def get_eva_by_vehicle(self, data_object, post_data):
		#vehicle_data_set = data_object[(data_object.Vehicle == post_data['vehicle'])]
		vehicle_data_set = data_object[data_object['Vehicle'] == post_data['vehicle']]
		print(vehicle_data_set)
