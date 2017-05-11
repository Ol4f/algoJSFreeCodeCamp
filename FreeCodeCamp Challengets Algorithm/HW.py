import csv
#doc du lieu
c = csv.writer(open('output.csv','w+'))
c.writerow(["No.","Content","Note"])

strSplit1 = "-------------------------"

f = open('message.only','r')

str = f.read()

temp = str.split(strSplit1)
#dua du lieu vao mang
data = []
for x in temp:
	data.append(x.strip("\n"))
#viet vao file csv
i = 1
for y in data:

	c.writerow([i,y,""])
	i = i + 1
