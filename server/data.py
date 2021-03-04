# This file will contain the methods and class that will deal with all the data

# importing supporting libraries
import numpy as np
import pandas as pd
import datetime as dt

# importing file I built
from helper import * 

class Data():

		def __init__(self):
			self.helper_object = Helper()
			self.eva_data = pd.read_csv('./data/eva.csv', error_bad_lines=False)
			self.mission_data = pd.read_csv('./data/Space_Corrected.csv', error_bad_lines=False)
		
		def experiment(self):
			# print(self.mission_data.head())
			print(list(pd.unique(self.mission_data['Company Name'])))

	
		def eva_count_by_year(self):
			self.eva_data['Date'] = self.helper_object.convert_date_column_from_obj_to_date(self.eva_data)
			eva_count = self.helper_object.get_eva_count_by_year(self.eva_data)
			return self.helper_object.get_data_in_correct_graph_format(eva_count)
		
		def eva_vehicle_information(self, post_data):
			if post_data['useYears']:
				years_data_set = self.helper_object.get_eva_data_for_years(self.eva_data, post_data)
				eva_data_information = self.helper_object.build_years_data_set(years_data_set)
			else: 
				vehicle_data = self.helper_object.get_eva_by_vehicle(self.eva_data, post_data)
				eva_data_information = self.helper_object.build_eva_data_set(post_data, vehicle_data)
			return eva_data_information
		
		def eva_drilldown_information(self, post_data):
			years_data_set = self.helper_object.get_eva_data_for_years(self.eva_data, post_data)
			return self.helper_object.build_years_data_set_drill_down(years_data_set)
		
		def missions_by_year(self):
			pass 


obj = Data()
obj.experiment()


# old code that may be need:
		# def test_scrap(self):
		# 	print(list(pd.unique(self.eva_data['Vehicle'])))
				# print(data_object.info())