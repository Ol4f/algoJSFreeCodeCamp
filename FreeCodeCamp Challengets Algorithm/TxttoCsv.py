import csv

c = csv.writer(open('output.csv','w+'))
c.writerow(["No","Content","Note"])

str1 = "-------------------------"

print len(str1)

f = open('test.txt','r')
i = 1

str = f.read()
#print str
temp = ['dsfsdf\nsdfdf3\ndfd3fdsfafdkfa nfejdk m ndkfnea dsafne\n', '\ndsfjeifdks,xcjfdkj kdfds  nfdjsf kdfjei \nkjf fjkdfjeiieieifkdfj klsdf j kdfjeidklf dkm ngfdf n ndfquefe\n']
print temp[0]

list = []
for x in temp:
	print x.strip('\n')
	#print "\n"
