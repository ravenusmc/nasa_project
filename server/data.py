#This file will contain the methods and class that will deal with all the data

#importing supporting libraries
import numpy as np
import pandas as pd

class Data():

		def __init__(self):
			self.eva_data = pd.read_csv('./data/eva.csv')
			self.space_data = pd.read_csv('./data/Space_Corrected.csv')
		
		# def test(self):
		# 	print(self.space_data)
	
		def eva_count_by_year(self):
			#eva_count = self.eva_data['Date'].groupby(self.eva_data.to_period("Y")).agg('count')
			eva_count = self.eva_data.to_datetime(df_raw['Date']).dt.year.value_counts()
			print(eva_count)


obj = Data()
# obj.test()
obj.eva_count_by_year()