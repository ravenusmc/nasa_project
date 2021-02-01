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
	
		def eva_count_by_year(self):
			self.eva_data['Date'] = self.helper_object.convert_date_column_from_obj_to_date(self.eva_data)
			eva_count = self.helper_object.get_eva_count_by_year(self.eva_data)
			data_in_correct_format = self.helper_object.get_data_in_correct_graph_format(eva_count)



obj = Data()
obj.eva_count_by_year()