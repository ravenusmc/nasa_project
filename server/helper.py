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
				pass
				# print('Error, but program will continue to function')
			initial_year += 1
		return chartData


