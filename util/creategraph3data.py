import json
from pprint import pprint

with open('graphfiles/monday.json') as f:
    mon = json.load(f)

with open('graphfiles/tuesday.json') as f:
    tue = json.load(f)

with open('graphfiles/wednesday.json') as f:
    wed = json.load(f)

with open('graphfiles/thursday.json') as f:
    thu = json.load(f)

with open('graphfiles/friday.json') as f:
    fri = json.load(f)

with open('graphfiles/saturday.json') as f:
    sat = json.load(f)

with open('graphfiles/sunday.json') as f:
    sun = json.load(f)

data = {}
list = []
i = 0
while i < 24:
    data = {}
    data["time"]=i
    data["y"]=mon[0][i].get("y")+tue[0][i].get("y")+wed[0][i].get("y")+thu[0][i].get("y")+fri[0][i].get("y")+sat[0][i].get("y")+sun[0][i].get("y")
    list.append(data)
    i = i+1

print(list)

with open('graph3data.json', 'w+') as outfile:
    json.dump(list, outfile)
