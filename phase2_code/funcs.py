import nltk
import sys

def add_to_dict(dictionary, fname):
	f = open(fname, 'r')
	for line in f:
		temp = line[:-1]
		temp = temp.split(',')
		a = temp[0].strip()
		b = temp[1:]
		if a not in dictionary:
			dictionary[a] = b

def parse_for_strikerate(strikegt, bat, num, k, wh):

	arr = []
	for i in bat:
		temp = bat[i]
		l = float(temp[6])
		if wh == 0:
			if l > num:
				arr.append(i)
		else:
			if l < num:
				arr.append(i)
	strikegt[k] = arr

def parse_for_strikerate(strikelt, bat, num, k, wh):

	arr = []
	for i in bat:
		temp = bat[i]
		l = float(temp[6])
		if wh == 0:
			if l > num:
				arr.append(i)
		else:
			if l < num:
				arr.append(i)
	strikelt[k] = arr

def parse_for_sixgtfour(sixgtfour, bat, k, wh):

	arr = []
	for i in bat:
		temp = bat[i]
		if wh == 0:
			six = int(temp[5])
		four = int(temp[4])
		if wh == 0:
			if six-four > 0:
				arr.append(i)
		else:
			if four > 0:
				arr.append(i)
	sixgtfour[k] = arr

def get_matches(matches, fname):
	f = open(fname, 'r')
	line = f.readlines()
	line = line[0].split('\n')
	matches.append(line[0])
	return matches

def get_teams():
	teams = ['India', 'New Zealand']
	return teams

def get_manomatch(momatch, fname):
	f = open(fname, 'r')
	line = f.readlines()
	line = line[3].split('\t')
	line = line[1].split('\n')
	momatch.append(line[0])
	return momatch

def get_wonby(wonby, fname):
	f = open(fname, 'r')
	line = f.readlines()
	line = line[2].split('\n')
	line = line[0]
	if(line == 'India'):
		wonby.append('New Zealand')
	elif(line == 'New Zealand'):
		wonby.append('India')
	else:
		wonby.append('None')
	return wonby

def get_lostby(lostby, fname):
	f = open(fname, 'r')
	line = f.readlines()
	line = line[2].split('\n')
	line = line[0]
	lostby.append(line)
	return lostby

def get_ducks_team(lostby, ducks, fname, fname1, fname2, i):
	flag = 0
	flag1 = 0
	if(lostby[i] == 'India'):
		f1 = open(fname, 'r')
		line1 = f1.readlines()
		line1 = (line1[1].split('\n'))[0]
		if(line1 == 'India'):
			f = open(fname1, 'r')
		else:
			f = open(fname2, 'r')
		for line in f:
			temp = line[:-1]
			temp = temp.split(',')
			if(temp[1].strip() != 'not out' and temp[2].strip() == '0'):
				ducks.append('India')
				flag = 1
				break
	elif(lostby[i] == 'New Zealand'):
		f1 = open(fname, 'r')
		line1 = f1.readlines()
		line1 = (line1[1].split('\n'))[0]
		if(line1 == 'New Zealand'):
			f = open(fname1, 'r')
		else:
			f = open(fname2, 'r')
		for line in f:
			temp = line[:-1]
			temp = temp.split(',')
			if(temp[1] != 'not out' and temp[2] == '0'):
				ducks.append('New Zealand')
				flag = 1
				break
	else:
		ducks.append('None')
		flag1 = 1
	if flag == 0 and flag1 == 0:
		ducks.append('None')

	return ducks

def get_isin(isin, fname, fname1, fname2, k):
	
	arr = []
	f = open(fname, 'r')
	line = f.readlines()
	line = line[2].split('\n')
	line = line[0]
	f.close()
	if line == 'New Zealand':
		f = open(fname, 'r')
		temp = f.readlines()
		temp = temp[1].split('\n')
		temp = temp[0]
		if(temp == 'India'):
			f1 = open(fname1, 'r')
		else:
			f1 = open(fname2, 'r')
		for line1 in f1:
			temp1 = line1[:-1]
			temp1 = temp1.split(',')
			temp1 = temp1[0]
			arr.append(temp1)
	elif line == 'India':
		f = open(fname, 'r')
		temp = f.readlines()[1].split('\n')
		temp = temp[0]
		if(temp == 'New Zealand'):
			f1 = open(fname1, 'r')
		else:
			f1 = open(fname2, 'r')
		for line1 in f1:
			temp1 = line1[:-1]
			temp1 = temp1.split(',')
			temp1 = temp1[0]
			arr.append(temp1)
	else:
		arr.append('None')

	isin[k] = arr

def parse_for_fifty(fifty, bat, k):

	arr = []
	for i in bat:
		temp = bat[i]
		l = float(temp[1])
		if l > 50:
			arr.append(i)
	fifty[k] = arr

def parse_for_oneorgtone(oneogtone, bowl, k):

	arr = []
	for i in bowl:
		temp = bowl[i]
		l = float(temp[3])
		if l >= 1:
			arr.append(i)
	oneogtone[k] = arr

def parse_for_overs(seven, bowl, k):

	arr = []
	for i in bowl:
		temp = bowl[i]
		l = float(temp[0])
		if l > 7:
			arr.append(i)
	seven[k] = arr

def parse_for_nowicket(zerowc, bowl, k):

	arr = []
	for i in bowl:
		temp = bowl[i]
		l = float(temp[3])
		if l == 0:
			arr.append(i)
	zerowc[k] = arr

def parse_for_economy(econ, bowl, k):

	arr = []
	for i in bowl:
		temp = bowl[i]
		l = float(temp[4])
		if l > 8:
			arr.append(i)
	econ[k] = arr

def parse_for_ton(ton, bat, k):

	arr = []
	for i in bat:
		temp = bat[i]
		l = float(temp[1])
		if l >= 100:
			arr.append(i)
	ton[k] = arr

def get_loseteam(loseteam, fname, fname1, fname2, k):
	
	arr = []
	f = open(fname, 'r')
	line = f.readlines()
	line = line[2].split('\n')
	line = line[0]
	f.close()
	if line == 'India':
		f = open(fname, 'r')
		temp = f.readlines()
		temp = temp[1].split('\n')
		temp = temp[0]
		if(temp == 'India'):
			f1 = open(fname1, 'r')
		else:
			f1 = open(fname2, 'r')
		for line1 in f1:
			temp1 = line1[:-1]
			temp1 = temp1.split(',')
			temp1 = temp1[0]
			arr.append(temp1)
	elif line == 'New Zealand':
		f = open(fname, 'r')
		temp = f.readlines()[1].split('\n')
		temp = temp[0]
		if(temp == 'New Zealand'):
			f1 = open(fname1, 'r')
		else:
			f1 = open(fname2, 'r')
		for line1 in f1:
			temp1 = line1[:-1]
			temp1 = temp1.split(',')
			temp1 = temp1[0]
			arr.append(temp1)
	else:
		arr.append('None')

	loseteam[k] = arr

def parse_for_right(righty, bowl, fname, k):
	
	arr = []
	temp1 = []
	f = open(fname, 'r')
	for line in f:
		temp = line[:-1]
		temp = temp.split('\t')
		a = temp[0]
		b = temp[7]
		if(b != 'none'):
			b = b.split('-')
			b = b[0]
			if b == 'Right':
				temp1.append(a)
	
	for i in temp1:
		if i in bowl and i not in righty:
			arr.append(i)
	righty[k] = arr

def parse_for_left(lefty, bowl, fname, k):
	
	arr = []
	temp1 = []
	f = open(fname, 'r')
	for line in f:
		temp = line[:-1]
		temp = temp.split('\t')
		a = temp[0]
		b = temp[7]
		if(b != 'none'):
			b = b.split('-')
			b = b[0]
			if b == 'Left':
				temp1.append(a)
	
	for i in temp1:
		if i in bowl and i not in lefty:
			arr.append(i)
	lefty[k] = arr

def parse_for_takesmore(more, righty, lefty, bowl, k):

	arr = []
	flag = 0
	for i in righty[k]:
		for j in lefty[k]:
			if i in bowl and j in bowl:
				rwicks = int(bowl[i][3])
				lwicks = int(bowl[j][3])
				if(rwicks <= lwicks):
					flag = 1
					break
		if(flag == 0):
			arr.append(i)
	more[k] = arr

def parse_for_runs(run, bat):
	
	for i in bat:
		temp = int(bat[i][1])
		run[i] += temp

def get_gt250(gtrun, run):

	for i in run:
		if(run[i] > 250):
			gtrun.append(i)

def parse_for_age(page, bat, fname):

	temp1 = {}
	f = open(fname, 'r')
	for line in f:
		temp = line[:-1]
		temp = temp.split('\t')
		age = temp[3].split(' ')
		age = age[0]
		temp1[temp[0]] = age
	
	for i in temp1:
		if i in bat:
			if(int(temp1[i]) < 26):
				page.append(i)

def parse_for_noducks(flag, nduck, bat):

	for i in bat:
		flag[i] = 0
		temp = int(bat[i][1])
		if temp == 0:
			flag[i] = 1

	for i in bat:
		if flag[i] == 0:
			nduck.append(i)

def make_model_and_answer(v, query, dt):
	val = nltk.parse_valuation(v)
	dom = val.domain

	m = nltk.Model(dom, val)
	g = nltk.Assignment(dom, [])

	if (m.evaluate(query, g) == True):
		ret = 1
	else:
		ret = 0

#	l = nltk.LogicParser()
#	c1 = l.parse('match(x) & exists y.(team(y) and (playomat(x,y) and wonby(x,y)))')
#	varnames = m.satisfiers(c1, 'x', g)


#	for i in varnames:
#		for p,q in dt.iteritems():
#			if q == i:
#				if p not in arr:
#					arr.append(p)
	return ret

def generate_and_solve_query(query, p, teams, matches, wonby, momatch, ducks, lostby, bat, strikegt, strikelt, sixgtfour, isin, fours, bowl, fifty, oneogtone, seven, zerowc, econ, ton, loseteam, righty, more, gtrun, page, nduck):
	
	name_to_var = {}
	count = 0
	for i in matches:
		if i not in name_to_var:
			name_to_var[i] = 'm' + str(count)
			count += 1
	for i in teams:
		if i == 'India':
			name_to_var[i] = 'i'
		else:
			name_to_var[i] = 'n'
	for i in bat:
		if i not in name_to_var:
			name_to_var[i] = 'p' + str(count)
			count += 1
	for i in bowl:
		if (i not in name_to_var) and (i not in bat):
			name_to_var[i] = 'p' + str(count)
			count += 1

	temp_strin1 = ''
	for i in name_to_var:
		temp_strin1 += i + ' => ' + name_to_var[i] + '\n'

	v = temp_strin1
	for i in range(len(p)):
		temp = ''
		if p[i] == 'team':
			temp = 'team => {'
			for i in teams:
				temp += name_to_var[i] + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'match':
			temp = 'match => {'
			for i in matches:
				temp += name_to_var[i] + ','
			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'inning':
			temp = 'inning => {'
			for i in matches:
				temp += name_to_var[i] + ','
			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'bats':
			temp = 'bats => {'
			for i in bat:
				temp += name_to_var[i] + ','
			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'playomat':
			temp = 'playomat => {'
			for i in range(len(matches)):
				a = matches[i]
				b = momatch[i]
				temp += '(' + name_to_var[a] + ',' + name_to_var[b] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'wonby':
			temp = 'wonby => {'
			for i in range(len(matches)):
				a = matches[i]
				b = wonby[i]
				if(wonby[i] != 'None'):
					temp += '(' + name_to_var[a] + ',' + name_to_var[b] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'teamduck':
			temp = 'teamduck => {'
			for i in range(len(matches)):
				a = matches[i]
				b = ducks[i]
				if(ducks[i] != 'None'):
					temp += '(' + name_to_var[a] + ',' + name_to_var[b] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'loseteam':
			temp = 'loseteam => {'
			for i in range(len(matches)):
				a = matches[i]
				b = lostby[i]
				if(lostby[i] != 'Tied'):
					temp += '(' + name_to_var[a] + ',' + name_to_var[b] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'player':
			temp = 'player => {'
			for i in bat:
				temp += name_to_var[i] + ','

			temp = temp[:-1]	
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'lt26years':
			temp = 'lt26years => {'
			for i in page:
				temp += name_to_var[i] + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'gt250runs':
			temp = 'gt250runs => {'
			for i in gtrun:
				temp += name_to_var[i] + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'noducks':
			temp = 'noducks => {'
			if i in nduck:
				temp += name_to_var[i] + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'bowler':
			temp = 'bowler => {'
			for i in bowl:
				temp += name_to_var[i] + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'right':
			temp = 'right => {'
			for i in range(len(matches)):
				b = righty[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += name_to_var[c] + ','
	
			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'takemore':
			temp = 'takemore => {'
			for i in range(len(matches)):
				a = matches[i]
				b = more[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
				temp += '}'
		elif p[i] == 'ton':
			temp = 'ton => {'
			for i in range(len(matches)):
				a = matches[i]
				b = ton[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'losematch':
			temp = 'losematch => {'
			for i in range(len(matches)):
				a = matches[i]
				b = loseteam[i]
			if b[0] != 'None':
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'gt8econ':
			temp = 'gt8econ => {'
			for i in range(len(matches)):
				a = matches[i]
				b = econ[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'nowicket':
			temp = 'nowicket => {'
			for i in range(len(matches)):
				a = matches[i]
				b = zerowc[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'gtseven':
			temp = 'gtseven => {'
			for i in range(len(matches)):
				a = matches[i]
				b = seven[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'gtfifty':
			temp = 'gtfifty => {'
			for i in range(len(matches)):
				a = matches[i]
				b = fifty[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'geone':
			temp = 'geone => {'
			for i in range(len(matches)):
				a = matches[i]
				b = oneogtone[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'strikeltrate':
			temp = 'strikeltrate => {'
			for i in range(len(matches)):
				if matches[i] != 'None':
					a = matches[i]
				b = strikelt[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'strikegtrate':
			temp = 'strikegtrate => {'
			for i in range(len(matches)):
				a = matches[i]
				b = strikegt[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'ge1four':
			temp = 'ge1four => {'
			for i in range(len(matches)):
				if matches[i] != 'None':
					a = matches[i]
				b = fours[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'gtsixes':
			temp = 'gtsixes => {'
			for i in range(len(matches)):	
				a = matches[i]
				b = sixgtfour[i]
			if b:
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		elif p[i] == 'isin':
			temp = 'isin => {'
			for i in range(len(matches)):
				if matches[i] != 'None':
					a = matches[i]
				b = isin[i]
			if b[0] != 'None':
				for j in range(len(b)):
					c = b[j]
					temp += '(' + name_to_var[a] + ',' + name_to_var[c] + ')' + ','

			temp = temp[:-1]
			if i != len(p) - 1:
				temp += '} \n'
			else:
		
				temp += '}'
		v += temp

	print v

	q = query

	ret = make_model_and_answer(v, q, name_to_var)

	return ret
