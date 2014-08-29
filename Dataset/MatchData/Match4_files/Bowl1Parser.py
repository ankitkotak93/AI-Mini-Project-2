from bs4 import BeautifulSoup
import re
PlayerNames = []
#Dismissals = []
#Runs = []
BowlingDetails = [-1, -1, -1, -1, -1, -1]
#BattingDetailsList = [0, 0, 0, 0, 0]
soup = BeautifulSoup(open("Match4.html"))

soup.unicode

rows = soup.findAll(attrs={'id':'inningsBowl1', 'class':'inningsTable'})
rows = str(rows)

soup = BeautifulSoup(rows)
temp1 = soup.findAll('td', {'class':'playerName'})
for i in range(len(temp1)):
	PlayerNames.append(str(temp1[i].text.encode('utf-8')))
#temp2 = soup.findAll('td', attrs={'class':'battingDismissal'})
#for i in range(len(temp2)):
#	Dismissals.append(str(temp2[i].text.encode('utf-8')))
#temp3 = soup.findAll('td', attrs={'class':'battingRuns'})
#for i in range(len(temp3)):
#	Runs.append(str(temp3[i].text))
temp4 = soup.findAll('td', attrs={'class':'bowlingDetails'})
j = 0
k = 0
for i in range(len(temp4)):
	BowlingDetails[j] = str(temp4[i].text)
	j = j + 1
	if j == 6:
		if k < len(PlayerNames):
			print PlayerNames[k].strip()+',',
			for l in range(5):
				if l == 4:
					print BowlingDetails[l].strip(),
				else:
					print BowlingDetails[l].strip()+',',
			if BowlingDetails[l+1] != '':
				print ','+BowlingDetails[l+1].strip()
			else:
				print
			k = k + 1
			j = 0
		else:
			break
