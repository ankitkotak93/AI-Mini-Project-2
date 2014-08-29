from bs4 import BeautifulSoup

soup = BeautifulSoup(open("Match5.html"))

rows0 = soup.findAll('p', {'class':'seriesText'})

match = rows0[0].text.split('-')
print match[1].strip()

rows = soup.findAll('p', {'class':'statusText'})

rows1 = soup.findAll('tr', {'class':'notesRow'})

line1 = rows1[0].text
line1 = line1.split(',')
line2 = rows1[1].text
line2 = line2.split('\n')

line2 = line2[6].split('(')
line3 = line2[1].split(')')

if 'India' in line1[0]:
	if 'field' in line1[1]:
		print 'New Zealand'
	else:
		print 'India'
elif 'New Zealand' in line1[0]:
	if 'field' in line1[1]:
		print 'India'
	else:
		print 'New Zealand'

if 'New Zealand' in rows[0].text:
	print 'India'
else:
	print 'New Zealand'

print line2[0]+'\t'+line3[0]

print line1[0].strip()
