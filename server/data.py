#This file will contain the methods and class that will deal with all the data

#importing supporting libraries
import numpy as np
import pandas as pd
import datetime as dt

#importing file I built
from helper import * 

class Data():

		def __init__(self):
			self.helper_object = Helper()
			self.eva_data = pd.read_csv('./data/eva.csv', error_bad_lines=False)
			self.space_data = pd.read_csv('./data/Space_Corrected.csv', error_bad_lines=False)
		
		# def test_scrap(self):
		# 	print(list(pd.unique(self.eva_data['Vehicle'])))
				# print(data_object.info())
	
		def eva_count_by_year(self):
			self.eva_data['Date'] = self.helper_object.convert_date_column_from_obj_to_date(self.eva_data)
			eva_count = self.helper_object.get_eva_count_by_year(self.eva_data)
			return self.helper_object.get_data_in_correct_graph_format(eva_count)
		
		def eva_vehicle_information(self, post_data):
			if post_data['useYears']:
				years_data_set = self.helper_object.get_eva_data_for_years(self.eva_data, post_data)
				eva_data_information = self.helper_object.build_years_data_set(years_data_set)
				return eva_data_information



# obj = Data()
# obj.test_scrap()