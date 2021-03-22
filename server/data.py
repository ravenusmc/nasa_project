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
			self.mission_data['Datum'] = self.helper_object.convert_date_comulm_from_obj_to_date_mission_data(self.mission_data)
			min_year = self.helper_object.get_min_year(self.mission_data)
			max_year = self.helper_object.get_max_year(self.mission_data)
			missions_by_year = self.helper_object.missions_by_year(self.mission_data, min_year, max_year)
		
		def missions_by_success_or_failure(self, post_data):
			self.mission_data['Datum'] = self.helper_object.convert_date_comulm_from_obj_to_date_mission_data(self.mission_data)
			min_year = post_data['yearOne']
			max_year = post_data['yearTwo']
			success_failure_missions_by_year = self.helper_object.success_failure_missions_by_year(self.mission_data, post_data, min_year, max_year)
			return success_failure_missions_by_year
		
		def missions_by_location(self, post_data):
			self.mission_data['Datum'] = self.helper_object.convert_date_comulm_from_obj_to_date_mission_data(self.mission_data)
			min_year = post_data['yearOne']
			max_year = post_data['yearTwo']
			test = "This is Amherst, NH"
			value = test.rsplit(' ', 1)
			print(value)

# obj = Data()
# obj.missions_by_location()



# old code that may be needed:
		# def test_scrap(self):
		# 	print(list(pd.unique(self.eva_data['Vehicle'])))
				# print(data_object.info())


# Unique companies
# ['SpaceX', 'CASC', 'Roscosmos', 'ULA', 'JAXA', 'Northrop', 'ExPace', 'IAI', 'Rocket Lab', 'Virgin Orbit', 'VKS RF', 
# 'MHI', 'IRGC', 'Arianespace', 'ISA', 'Blue Origin', 'ISRO', 'Exos', 'ILS', 'i-Space', 'OneSpace', 'Landspace', 
# 'Eurockot', 'Land Launch', 'CASIC', 'KCST', 'Sandia', 'Kosmotras', 'Khrunichev', 'Sea Launch', 'KARI', 'ESA', 
# 'NASA', 'Boeing', 'ISAS', 'SRC', 'MITT', 'Lockheed', 'AEB', 'Starsem', 'RVSN USSR', 'EER', 'General Dynamics', 
# 'Martin Marietta', 'Yuzhmash', 'Douglas', 'ASI', 'US Air Force', 'CNES', 'CECLES', 'RAE', 'UT', 'OKB-586', 'AMBA', 
# "Arm??e de l'Air", 'US Navy']