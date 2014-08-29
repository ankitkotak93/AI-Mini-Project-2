import re
from funcs import *

def get_query():
	
	x = raw_input("Enter the question : ")
	y = re.split(',', x)

	quantifiers = {'For all matches' : 'all x', 'For all innings' : 'all x', 'There exists a match' : 'exists x', 'There exists player' : 'exists x'}
	predicates = {'For all matches' : 'match', 'For all innings' : 'inning', 'There exists a match' : 'match', 'There exists player' : 'player', 'Player of match' : 'playomat', 'winning team' : 'team', 'player of winning team' : 'wonby', 'losing side consists' : 'team', 'losing side' : 'loseteam', 'at least 1 ducks in the batting innings' : 'teamduck', 'strike rate of player is above' : 'strikegtrate', 'hit more sixes than fours' : 'gtsixes', 'winning side' : 'isin', 'at least 1 player' : 'player', 'who hit at least 1 boundary' : 'ge1fours', 'strike rate was below 100' : 'strikeltrate', 'in the same match' : 'match', 'scored more than 50' : 'gtfifty', 'claimed at least 1 wicket' : 'geone', 'at least 1 bowler' : 'bowler', 'has bowled more than 7 overs' : 'gtseven', 'failed to get any wicket' : 'nowicket', 'there exists a bowler' : 'bowler', 'did not claim any wicket' : 'nowicket', 'more than 8 runs per over' : 'gt8econ', 'where a batsman' : 'bats', 'scored hundred' : 'ton', 'team lost' : 'losematch', 'right handed bowlers' : 'right', 'bowlers' : 'bowler', 'claim more wickets than left handed bowlers' : 'takemore', 'less than 26 years old' : 'lt26years', 'scored more than 250 runs' : 'gt250runs', 'without any ducks' : 'noducks'}
	connectors = {'and' : 'and', 'if' : '', 'then' : '', 'is given to' : 'and', 'contains' : 'and', 'consists of' : 'and'}

	p = []

	for i in quantifiers:
		if i.lower() in y[0].lower():
			string = quantifiers[i]

	for i in predicates:
		if i.lower() in y[0].lower():
			p.append(predicates[i])

	for i in predicates:
		if (len(y) > 2):
			if (i.lower() in y[1].lower() or (i.lower() in y[2].lower())) and (predicates[i] not in p):
				p.append(predicates[i])
		else:
			if (i.lower() in y[1].lower()) and (predicates[i] not in p):
				p.append(predicates[i])
	
	connect = []
	for i in connectors:
		if i.lower() in y[1].lower():
			if (i == 'if' or i == 'then') and ('->' not in connect):
				connect.append('->')
			else:
				connect.append(connectors[i])

	q = ''
	q += string
	q += '.('
	count = 1
	flag = 0
	fg1 = 0
	fg2 = 0
	match = 0
	inning = 0
	player = 0

	for i in range(len(p)):
		if p[i] == 'match':
			if string == 'all x' and flag == 0:
				q += '((-match(x)) | '	
				count += 1
				fg1 = 1
				match = 1
			if flag == 0:
				q += 'match(x) & '
			else:
				if i != len(p)-1:
					q += 'match(y) and '
				else:
					q += 'match(y)'
	
		elif p[i] == 'inning':
			if string == 'all x' and flag == 0:
				q += '((-inning(x)) | '
				count += 1
				fg1 = 1
				inning = 1
			if flag == 0:
				q += 'inning(x) & '
			else:
				if i != len(p) - 1:
					q += 'inning(y) and '
				else:
					q += 'inning(y)'
	
		elif p[i] == 'player':
			if string == 'all x' and flag == 0:
				q += '((-player(x)) | '
				count += 1
				fg1 = 1
				player = 1
			if flag == 0:
				q += 'player(x) & '
			else:
				if i != len(p) - 1:
					q += 'player(y) and '
				else: 
					q += 'player(y)'
	
		elif p[i] == 'losematch' or p[i] == 'isin' or p[i] == 'takemore' or p[i] == 'bats' or p[i] == 'team' or p[i] == 'bowler' or p[i] == 'right' or p[i] == 'playomat' or p[i] == 'wonby' or p[i] == 'loseteam' or p[i] == 'teamduck' or p[i] == 'strikegtrate' or p[i] == 'gtsixes' or p[i] == 'ge1fours' or p[i] == 'strikeltrate' or p[i] == 'gtfifty' or p[i] == 'geone' or p[i] == 'gtseven' or p[i] == 'nowicket' or p[i] == 'gt8econ' or p[i] == 'ton' or p[i] == 'lt26years' or p[i] == 'gt250runs' or p[i] == 'noducks' or p[i] == 'match':
			if flag == 0:
				if '->' in connect:
					q += 'all y.((-player(y)) | player(y) and ('
					count += 2
					flag = 1
					q += p[i]
					q += '(x,y)'
				else:
					q += 'exists y.('
					q += p[i]
					if p[i] == 'bats' or p[i] == 'team' or p[i] == 'bowler' or p[i] == 'right' or p[i] == 'match':
						q += '(y)'
					else:
						if p[i] == 'gtfifty' or p[i] == 'geone':
							q += '(y,x)'
						else:
							q += '(x,y)'
					flag = 1
					count += 1
			else:
				q += p[i]
				if p[i] == 'bats' or p[i] == 'team' or p[i] == 'bowler' or p[i] == 'right' or p[i] == 'match':
					q += '(y)'
				else:
					if p[i] == 'gtfifty' or p[i] == 'geone':
						q += '(y,x)'
					else:
						q += '(x,y)'
	
			if(i != len(p) - 1):
				if '->' in connect:
					q += ' -> '
				else:
					q += ' and '
			else:
				q += ')'
				count -= 1
	
	while(count != 0):
		q += ')'
		count -= 1


	print connect
	print string
	print p
	print q	

	q = "exists x.(match(x) & exists y.(bats(y) and ton(x,y) and losematch(x,y)))"
	return q, p

def main():

	f1 = "../MatchData/player_profile/indian_players_profile.txt"
	f2 = "../MatchData/player_profile/nz_players_profile.txt"

	f1win = '../MatchData/Match1_files/odi1_winner.txt'
	f2win = '../MatchData/Match2_files/odi2_winner.txt'
	f3win = '../MatchData/Match3_files/odi3_winner.txt'
	f4win = '../MatchData/Match4_files/odi4_winner.txt'
	f5win = '../MatchData/Match5_files/odi5_winner.txt'
	f1bat1 = '../MatchData/Match1_files/odi1_inn1_bat.txt'
	f1bat2 = '../MatchData/Match1_files/odi1_inn2_bat.txt'
	f2bat1 = '../MatchData/Match2_files/odi2_inn1_bat.txt'
	f2bat2 = '../MatchData/Match2_files/odi2_inn2_bat.txt'
	f3bat1 = '../MatchData/Match3_files/odi3_inn1_bat.txt'
	f3bat2 = '../MatchData/Match3_files/odi3_inn2_bat.txt'
	f4bat1 = '../MatchData/Match4_files/odi4_inn1_bat.txt'
	f4bat2 = '../MatchData/Match4_files/odi4_inn2_bat.txt'
	f5bat1 = '../MatchData/Match5_files/odi5_inn1_bat.txt'
	f5bat2 = '../MatchData/Match5_files/odi5_inn2_bat.txt'
	f1bowl1 = '../MatchData/Match1_files/odi1_inn1_bowl.txt'
	f1bowl2 = '../MatchData/Match1_files/odi1_inn2_bowl.txt'
	f2bowl1 = '../MatchData/Match2_files/odi2_inn1_bowl.txt'
	f2bowl2 = '../MatchData/Match2_files/odi2_inn2_bowl.txt'
	f3bowl1 = '../MatchData/Match3_files/odi3_inn1_bowl.txt'
	f3bowl2 = '../MatchData/Match3_files/odi3_inn2_bowl.txt'
	f4bowl1 = '../MatchData/Match4_files/odi4_inn1_bowl.txt'
	f4bowl2 = '../MatchData/Match4_files/odi4_inn2_bowl.txt'
	f5bowl1 = '../MatchData/Match5_files/odi5_inn1_bowl.txt'
	f5bowl2 = '../MatchData/Match5_files/odi5_inn2_bowl.txt'

	righty = [0, 0, 0, 0, 0]
	lefty = [0, 0, 0, 0, 0]
	more = [0, 0, 0, 0, 0]
	strikegt = [0, 0, 0, 0, 0]
	strikelt = [0, 0, 0, 0, 0]
	sixgtfour = [0, 0, 0, 0, 0]
	fours = [0, 0, 0, 0, 0]
	isin = [0, 0, 0, 0, 0]
	fifty = [0, 0, 0, 0, 0]
	oneogtone = [0, 0, 0, 0, 0]
	seven = [0, 0, 0, 0, 0]
	zerowc = [0, 0, 0, 0, 0]
	econ = [0, 0, 0, 0, 0]
	ton = [0, 0, 0, 0, 0]
	loseteam = [0, 0, 0, 0, 0]
	bat = {}
	bowl = {}
	teams = []
	matches = []
	momatch = []
	wonby = []
	ducks = []
	lostby = []
	run = {}
	flag = {}
	gtrun = []
	page = []
	nduck = []
	arr = []

	teams = get_teams()
	matches = get_matches(matches, f1win)
	matches = get_matches(matches, f2win)
	matches = get_matches(matches, f3win)
	matches = get_matches(matches, f4win)
	matches = get_matches(matches, f5win)
	momatch = get_manomatch(momatch, f1win)
	momatch = get_manomatch(momatch, f2win)
	momatch = get_manomatch(momatch, f3win)
	momatch = get_manomatch(momatch, f4win)
	momatch = get_manomatch(momatch, f5win)
	wonby = get_wonby(wonby, f1win)
	wonby = get_wonby(wonby, f2win)
	wonby = get_wonby(wonby, f3win)
	wonby = get_wonby(wonby, f4win)
	wonby = get_wonby(wonby, f5win)

	lostby = get_lostby(lostby, f1win)
	lostby = get_lostby(lostby, f2win)
	lostby = get_lostby(lostby, f3win)
	lostby = get_lostby(lostby, f4win)
	lostby = get_lostby(lostby, f5win)
	ducks = get_ducks_team(lostby, ducks, f1win, f1bat1, f1bat2, 0)
	ducks = get_ducks_team(lostby, ducks, f2win, f2bat1, f2bat2, 1)
	ducks = get_ducks_team(lostby, ducks, f3win, f3bat1, f3bat2, 2)
	ducks = get_ducks_team(lostby, ducks, f4win, f4bat1, f4bat2, 3)
	ducks = get_ducks_team(lostby, ducks, f5win, f5bat1, f5bat2, 4)

	add_to_dict(bat, f1bat1)
	add_to_dict(bat, f1bat2)
	parse_for_strikerate(strikegt, bat, 200, 0, 0)
	parse_for_sixgtfour(sixgtfour, bat, 0, 0)
	bat = {}
	add_to_dict(bat, f2bat1)
	add_to_dict(bat, f2bat2)
	parse_for_strikerate(strikegt, bat, 200, 1, 0)
	parse_for_sixgtfour(sixgtfour, bat, 1, 0)
	bat = {}
	add_to_dict(bat, f3bat1)
	add_to_dict(bat, f3bat2)
	parse_for_strikerate(strikegt, bat, 200, 2, 0)
	parse_for_sixgtfour(sixgtfour, bat, 2, 0)
	bat = {}
	add_to_dict(bat, f4bat1)
	add_to_dict(bat, f4bat2)
	parse_for_strikerate(strikegt, bat, 200, 3, 0)
	parse_for_sixgtfour(sixgtfour, bat, 3, 0)
	bat = {}
	add_to_dict(bat, f5bat1)
	add_to_dict(bat, f5bat2)
	parse_for_strikerate(strikegt, bat, 200, 4, 0)
	parse_for_sixgtfour(sixgtfour, bat, 4, 0)

	bat = {}
	add_to_dict(bat, f1bat1)
	add_to_dict(bat, f1bat2)
	parse_for_strikerate(strikelt, bat, 100, 0, 1)
	parse_for_sixgtfour(fours, bat, 0, 1)
	get_isin(isin, f1win, f1bat1, f1bat2, 0)
	bat = {}
	add_to_dict(bat, f2bat1)
	add_to_dict(bat, f2bat2)
	parse_for_strikerate(strikelt, bat, 100, 1, 1)
	parse_for_sixgtfour(fours, bat, 1, 1)
	get_isin(isin, f2win, f2bat1, f2bat2, 1)
	bat = {}
	add_to_dict(bat, f3bat1)
	add_to_dict(bat, f3bat2)
	parse_for_strikerate(strikelt, bat, 100, 2, 1)
	parse_for_sixgtfour(fours, bat, 2, 1)
	get_isin(isin, f3win, f3bat1, f3bat2, 2)
	bat = {}
	add_to_dict(bat, f4bat1)
	add_to_dict(bat, f4bat2)
	parse_for_strikerate(strikelt, bat, 100, 3, 1)
	parse_for_sixgtfour(fours, bat, 3, 1)
	get_isin(isin, f4win, f4bat1, f4bat2, 3)
	bat = {}
	add_to_dict(bat, f5bat1)
	add_to_dict(bat, f5bat2)
	parse_for_strikerate(strikelt, bat, 100, 4, 1)
	parse_for_sixgtfour(fours, bat, 4, 1)
	get_isin(isin, f5win, f5bat1, f5bat2, 4)

	
	add_to_dict(bat, f1bat1)
	add_to_dict(bat, f1bat2)
	add_to_dict(bowl, f1bowl1)
	add_to_dict(bowl, f1bowl2)
	parse_for_fifty(fifty, bat, 0)
	parse_for_oneorgtone(oneogtone, bat, 0)
	bat = {}
	bowl = {}
	add_to_dict(bat, f2bat1)
	add_to_dict(bat, f2bat2)
	add_to_dict(bowl, f2bowl1)
	add_to_dict(bowl, f2bowl2)
	parse_for_fifty(fifty, bat, 1)
	parse_for_oneorgtone(oneogtone, bat, 1)
	bat = {}
	bowl = {}
	add_to_dict(bat, f3bat1)
	add_to_dict(bat, f3bat2)
	add_to_dict(bowl, f3bowl1)
	add_to_dict(bowl, f3bowl2)
	parse_for_fifty(fifty, bat, 2)
	parse_for_oneorgtone(oneogtone, bat, 2)
	bat = {}
	bowl = {}
	add_to_dict(bat, f4bat1)
	add_to_dict(bat, f4bat2)
	add_to_dict(bowl, f4bowl1)
	add_to_dict(bowl, f4bowl2)
	parse_for_fifty(fifty, bat, 3)
	parse_for_oneorgtone(oneogtone, bat, 3)
	bat = {}
	bowl = {}
	add_to_dict(bat, f5bat1)
	add_to_dict(bat, f5bat2)
	add_to_dict(bowl, f4bowl1)
	add_to_dict(bowl, f4bowl2)
	parse_for_fifty(fifty, bat, 4)
	parse_for_oneorgtone(oneogtone, bat, 4)

	bowl = {}
	add_to_dict(bowl, f1bowl1)
	add_to_dict(bowl, f1bowl2)
	parse_for_overs(seven, bowl, 0)
	parse_for_nowicket(zerowc, bowl, 0)
	bowl = {}
	add_to_dict(bowl, f2bowl1)
	add_to_dict(bowl, f2bowl2)
	parse_for_overs(seven, bowl, 1)
	parse_for_nowicket(zerowc, bowl, 1)
	bowl = {}
	add_to_dict(bowl, f3bowl1)
	add_to_dict(bowl, f3bowl2)
	parse_for_overs(seven, bowl, 2)
	parse_for_nowicket(zerowc, bowl, 2)
	bowl = {}
	add_to_dict(bowl, f4bowl1)
	add_to_dict(bowl, f4bowl2)
	parse_for_overs(seven, bowl, 3)
	parse_for_nowicket(zerowc, bowl, 3)
	bowl = {}
	add_to_dict(bowl, f5bowl1)
	add_to_dict(bowl, f5bowl2)
	parse_for_overs(seven, bowl, 4)
	parse_for_nowicket(zerowc, bowl, 4)

	bowl = {}
	add_to_dict(bowl, f1bowl1)
	add_to_dict(bowl, f1bowl2)
	parse_for_economy(econ, bowl, 0)
	parse_for_nowicket(zerowc, bowl, 0)
	bowl = {}
	add_to_dict(bowl, f2bowl1)
	add_to_dict(bowl, f2bowl2)
	parse_for_economy(econ, bowl, 1)
	parse_for_nowicket(zerowc, bowl, 1)
	bowl = {}
	add_to_dict(bowl, f3bowl1)
	add_to_dict(bowl, f3bowl2)
	parse_for_economy(econ, bowl, 2)
	parse_for_nowicket(zerowc, bowl, 2)
	bowl = {}
	add_to_dict(bowl, f4bowl1)
	add_to_dict(bowl, f4bowl2)
	parse_for_economy(econ, bowl, 3)
	parse_for_nowicket(zerowc, bowl, 3)
	bowl = {}
	add_to_dict(bowl, f5bowl1)
	add_to_dict(bowl, f5bowl2)
	parse_for_economy(econ, bowl, 4)
	parse_for_nowicket(zerowc, bowl, 4)

	bat = {}
	add_to_dict(bat, f1bat1)
	add_to_dict(bat, f1bat2)
	parse_for_ton(ton, bat, 0)
	get_loseteam(loseteam, f1win, f1bat1, f1bat2, 0)
	bat = {}
	add_to_dict(bat, f2bat1)
	add_to_dict(bat, f2bat2)
	parse_for_ton(ton, bat, 1)
	get_loseteam(loseteam, f2win, f2bat1, f2bat2, 1)
	bat = {}
	add_to_dict(bat, f3bat1)
	add_to_dict(bat, f3bat2)
	parse_for_ton(ton, bat, 2)
	get_loseteam(loseteam, f3win, f3bat1, f3bat2, 2)
	bat = {}
	add_to_dict(bat, f4bat1)
	add_to_dict(bat, f4bat2)
	parse_for_ton(ton, bat, 3)
	get_loseteam(loseteam, f4win, f4bat1, f4bat2, 3)
	bat = {}
	add_to_dict(bat, f5bat1)
	add_to_dict(bat, f5bat2)
	parse_for_ton(ton, bat, 4)
	get_loseteam(loseteam, f5win, f5bat1, f5bat2, 4)

	bowl = {}
	add_to_dict(bowl, f1bowl1)
	add_to_dict(bowl, f1bowl2)
	parse_for_right(righty, bowl, f1, 0)
	parse_for_right(righty, bowl, f2, 0)
	parse_for_left(lefty, bowl, f1, 0)
	parse_for_left(lefty, bowl, f2, 0)
	parse_for_takesmore(more, righty, lefty, bowl, 0)
	bowl = {}
	add_to_dict(bowl, f2bowl1)
	add_to_dict(bowl, f2bowl2)
	parse_for_right(righty, bowl, f1, 1)
	parse_for_right(righty, bowl, f2, 1)
	parse_for_left(lefty, bowl, f1, 1)
	parse_for_left(lefty, bowl, f2, 1)
	parse_for_takesmore(more, righty, lefty, bowl, 1)
	bowl = {}
	add_to_dict(bowl, f3bowl1)
	add_to_dict(bowl, f3bowl2)
	parse_for_right(righty, bowl, f1, 2)
	parse_for_right(righty, bowl, f2, 2)
	parse_for_left(lefty, bowl, f1, 2)
	parse_for_left(lefty, bowl, f2, 2)
	parse_for_takesmore(more, righty, lefty, bowl, 2)
	bowl = {}
	add_to_dict(bowl, f4bowl1)
	add_to_dict(bowl, f4bowl2)
	parse_for_right(righty, bowl, f1, 3)
	parse_for_right(righty, bowl, f2, 3)
	parse_for_left(lefty, bowl, f1, 3)
	parse_for_left(lefty, bowl, f2, 3)
	parse_for_takesmore(more, righty, lefty, bowl, 3)
	bowl = {}
	add_to_dict(bowl, f5bowl1)
	add_to_dict(bowl, f5bowl2)
	parse_for_right(righty, bowl, f1, 4)
	parse_for_right(righty, bowl, f2, 4)
	parse_for_left(lefty, bowl, f1, 4)
	parse_for_left(lefty, bowl, f2, 4)
	parse_for_takesmore(more, righty, lefty, bowl, 4)

	bat = {}
	add_to_dict(bat, f1bat1)
	add_to_dict(bat, f1bat2)
	for i in bat:
		run[i] = 0
	parse_for_runs(run, bat)
	bat = {}
	add_to_dict(bat, f2bat1)
	add_to_dict(bat, f2bat2)
	for i in bat:
		if i not in run:
			run[i] = 0
	parse_for_runs(run, bat)
	bat = {}
	add_to_dict(bat, f3bat1)
	add_to_dict(bat, f3bat2)
	for i in bat:
		if i not in run:
			run[i] = 0
	parse_for_runs(run, bat)	
	bat = {}
	add_to_dict(bat, f4bat1)
	add_to_dict(bat, f4bat2)
	for i in bat:
		if i not in run:
			run[i] = 0
	parse_for_runs(run, bat)
	bat = {}
	add_to_dict(bat, f5bat1)
	add_to_dict(bat, f5bat2)
	for i in bat:
		if i not in run:
			run[i] = 0
	parse_for_runs(run, bat)

	get_gt250(gtrun, run)

	bat = {}
	add_to_dict(bat, f1bat1)
	add_to_dict(bat, f1bat2)
	add_to_dict(bat, f2bat1)
	add_to_dict(bat, f2bat2)
	add_to_dict(bat, f3bat1)
	add_to_dict(bat, f3bat2)
	add_to_dict(bat, f4bat1)
	add_to_dict(bat, f4bat2)
	add_to_dict(bat, f5bat1)
	add_to_dict(bat, f5bat2)

	bowl = {}
	add_to_dict(bowl, f1bowl1)
	add_to_dict(bowl, f1bowl2)
	add_to_dict(bowl, f2bowl1)
	add_to_dict(bowl, f2bowl2)
	add_to_dict(bowl, f3bowl1)
	add_to_dict(bowl, f3bowl2)
	add_to_dict(bowl, f4bowl1)
	add_to_dict(bowl, f4bowl2)
	add_to_dict(bowl, f5bowl1)
	add_to_dict(bowl, f5bowl2)

	parse_for_age(page, bat, f1)
	parse_for_age(page, bat, f2)

	parse_for_noducks(flag, nduck, bat)

	query, p = get_query()

	ret = generate_and_solve_query(query, p, teams, matches, wonby, momatch, ducks, lostby, bat, strikegt, strikelt, sixgtfour, isin, fours, bowl, fifty, oneogtone, seven, zerowc, econ, ton, loseteam, righty, more, gtrun, page, nduck)

	print ret
	if ret == 1:
		print 'True'
	else:
		print 'False'


if __name__ == '__main__':
	main()
