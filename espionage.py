# Project Teams: domains:
import urllib.request
import bs4
import pprint
import time
from bs4 import BeautifulSoup

pp = pprint.PrettyPrinter(indent=4)


teams = {
}

def parseURLforParentDomain(url):
    ptr1 = url.find("www")
    ptr2 = url.find("://")
    if (ptr1 != -1):
        tail = url[ptr1+4:]
    else:
        tail = url[ptr2+3:]
    return tail[:tail.find("/")] if (tail.find("/") != -1) else tail



def printProjectTeamHosts():    
    url = "https://www.engineering.cornell.edu/students/undergraduate-students/special-programs/project-teams"

    response = urllib.request.urlopen(url)
    html = response.read()
    soup = BeautifulSoup(html, 'html.parser')

    # Classname containing project teams info
    class_name = 'image-listing'
    project_team_info_divs = soup.find_all('div',class_= class_name)
    # print(soup.prettify())
    for div in project_team_info_divs:
        anchor = div.find_all('a')[0]
        # pp.pprint(anchor.__dict__)
        try:
            project_team_name = anchor.__dict__['attrs']['title']
        except:
            # print("Error getting name")
            project_team_name = anchor.__dict__['contents'][0]
        try:
            project_team_website = anchor.__dict__['attrs']['href']
        except :
            print("Error getting link")
        teams[project_team_name] = {"website": project_team_website}

    import socket
    import ipinfo
    token = "403bd0a6b87c16"
    # pp.pprint(teams)
    for key,value in teams.items():
        team_website = value["website"]
        team_website_resp = None
        while (team_website_resp == None):
            try:
                team_website_resp = urllib.request.urlopen(team_website)
            except:
                print("slept...")
                time.sleep(1)

        team_website_html = team_website_resp.read().decode('utf-8')
        if("bootstrap" in team_website_html or "Bootstrap" in team_website_html):
            value["bootstrap"] = True
        else:
            value["bootstrap"] = False

        if("jquery" in team_website_html or "JQuery" in team_website_html):
            value["jquery"] = True
        else:
            value["jquery"] = False

        if("Squarespace" in team_website_html or "squarespace" in team_website_html):
            value["squarespace"] = True
        else:
            value["squarespace"] = False
        

        try:
            value["website_ip"] = socket.gethostbyname(parseURLforParentDomain(team_website)) 
        except Exception as e:
            print(e)
            print("Getting ip info for: " + parseURLforParentDomain(team_website) + " unsucessfull.")
            print("socket.gethostbyname(\"" +parseURLforParentDomain(team_website)+ "\")")
        
        handler = ipinfo.getHandler(token)
        ip_details = handler.getDetails(value["website_ip"]).__dict__
        value["host_city"] = ip_details["details"]["city"]
        value["host_org"] = ip_details["details"]["org"][ip_details["details"]["org"].find(" ") + 1:]

        if(value["host_org"]=="Fastly"):
            value["Github Pages"] = True
        else:
            value["Github Pages"] = True

        # pp.pprint(teams[key])
        

        
    # print(project_team_info_divs)


if __name__ == "__main__":
    printProjectTeamHosts()
    espinageData = open("espionagedata.js", "a")
    espinageData.write("teams = " + str(teams))
    espinageData.close()
    # pp.pprint(teams)
