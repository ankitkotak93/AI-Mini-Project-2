from bs4 import BeautifulSoup
import re
PlayerNames = []
Dismissals = []
Runs = []
BattingDetails = []
BattingDetailsList = [0, 0, 0, 0, 0]
soup = BeautifulSoup(open("Match2.html"))

soup.unicode

rows = soup.findAll(attrs={'id':'inningsBat1', 'class':'inningsTable'})
rows = str(rows)

soup = BeautifulSoup(rows)
temp1 = soup.findAll('td', {'class':'playerName'})
for i in range(len(temp1)):
	PlayerNames.append(str(temp1[i].text.encode('utf-8')))
temp2 = soup.findAll('td', attrs={'class':'battingDismissal'})
for i in range(len(temp2)):
	Dismissals.append(str(temp2[i].text.encode('utf-8')))
temp3 = soup.findAll('td', attrs={'class':'battingRuns'})
for i in range(len(temp3)):
	Runs.append(str(temp3[i].text))
temp4 = soup.findAll('td', attrs={'class':'battingDetails'})
j = 0
k = 0
for i in range(len(temp4)):
	BattingDetailsList[j] = str(temp4[i].text)
	j = j + 1
	if j == 5:
		if k < len(PlayerNames):
			print PlayerNames[k].strip()+',',
			print Dismissals[k].strip()+',', 
			print Runs[k]+',',
			for l in range(4):
				print BattingDetailsList[l]+',',
			print BattingDetailsList[l+1]
			k = k + 1
			j = 0
		else:
			break
