#This file will contain the methods and class that will deal with supporting the data file. 

#importing supporting libraries
import numpy as np
import pandas as pd
import datetime as dt

class Helper():

	def convert_date_column_from_obj_to_date(self, data_object):
		return pd.to_datetime(data_object['Date'])
	
	def get_eva_count_by_year(self, data_object):
	 return data_object['Date'].groupby(data_object.Date.dt.year).agg('count').sort_index()

	def get_data_in_correct_graph_format(self, eva_count):
		chartData = []
		columns = ['Word', 'Count']
		chartData.append(columns)
		initial_year = 1965
		while initial_year <= 2013:
			try:
				count = eva_count.loc[initial_year]
				print(count)
				print(initial_year)
				print(eva_count.loc[initial_year])
			except KeyError:
				print('Error, but program will continue to function')
			initial_year += 1
		# print(eva_count)

        for word, count in word_and_count.items():
            rows = []
            rows.append(word)
            rows.append(count)
            chartData.append(rows)
