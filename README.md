![Execute test on push](https://github.com/khru/nailted/workflows/Execute%20test%20on%20push/badge.svg)
# Environment documentation
Tu run this project you can use the `make` command

## Creating your development environment
### Pre-requirements
* `make`
* `docker` and `docker-compose`

If you don't have the `make` command on your system you may have to install it first
```bash
sudo apt-get install build-essential
```

After this if you are on a Linux machine you can run the command `make pre_requirements` which will install `docker` and `docker-compose` for you

# Run the environment
Run the following commands
* `cp .env.example .env` or `touch .env`: because the Makefile needs to have the file
* `make permissions`: To grant permissions to the .sh scripts
* `make env/create`: Create .env files with the development values
* `make run`: To start the application

You might want to see the logs to know if the application is running
 `make log/api`: To see the logs on the API
 `make log/front`: To see the logs on the front

# Entry points
* **API**: [http://localhost:3000](http://localhost:3000) [/users to list the users]
* **FRONT**:[http://localhost](http://localhost)

👀 If you have any application running on ports 80 or 3000. Stop them and run again the docker containers or change the configuration on the .env files and run the containers again

# Task
```
Javascript developer challenge
The company has all the employee’s information in a .txt file and they want to create a small
SPA that consumes an API that makes the .txt easy to read.

In order to do that they want to implement the next actions:
- It should be possible to list all the employees: It should have pagination, sort by name and
surname and filter by email.
- It should be possible to create a new employee.
- It should be possible to see only one employee.
All the actions must be implemented in the front, that communicates using API REST with
the backend. The backend will use the .txt file as database.
Requirements:
- The server side should be done in node.js.
- Typescript should be used.
- Choose in both (backend and frontend) the frameworks you feel more comfortable, it
is not expected that you write everything by your own, better that you use the tools
you prefer to make it easy and simple (also styling, do not need to write your own
framework in this task).
You can share a git repository with us, or share the project in the way you prefer.

The file attached follows the next format: id, name surname, address, phone, email,
birthdate.
```

# Data
```
id, name, surname, address, phone, email, birthdate.
1,Della,Cox,"4945 Lucky Duck Drive",412-862-8457,DellaDCox@superrito.com,10/12/1985
2,Walter,Jeske,"495 Rafe Lane",662-729-8758,WalterJJeske@armyspy.com,3/15/1951
3,Ron,Plaza,"4738 Woodside Circle",850-868-3521,RonAPlaza@dayrep.com,3/30/1990
4,Emma,Kwak,"4190 Tully Street",313-651-6614,EmmaAKwak@cuvox.de,3/12/1940
5,Jimmy,Smith,"3839 Fulton Street",304-405-5250,JimmyTSmith@jourrapide.com,2/25/1953
6,Cecilia,Temple,"4187 Arrowood Drive",904-495-3469,CeciliaGTemple@gustr.com,8/24/1987
7,Ruth,Story,"3474 White Oak Drive",816-761-4637,RuthPStory@dayrep.com,11/28/1963
8,Brenda,Reynolds,"1447 Viking Drive",740-782-7580,BrendaRReynolds@superrito.com,11/25/1955
9,Rene,Lewis,"2683 West Drive",312-495-7822,ReneSLewis@dayrep.com,6/22/1977
10,Dale,Ward,"4246 Rogers Street",513-587-4936,DaleCWard@superrito.com,7/13/1964
11,Pamela,Gilman,"496 Ritter Avenue",586-722-0839,PamelaMGilman@einrot.com,7/18/1935
12,Clarence,Goebel,"3475 Ferrell Street",218-353-1459,ClarenceWGoebel@armyspy.com,12/23/1993
13,Michelle,Reed,"1693 Green Gate Lane",443-715-2332,MichelleKReed@fleckens.hu,4/30/2000
14,Louis,Martin,"2993 Yorkshire Circle",252-287-8673,LouisKMartin@dayrep.com,3/16/1945
15,Betty,Lance,"677 Oakwood Avenue",212-635-3373,BettyKLance@gustr.com,9/7/1980
16,Dean,Flood,"2313 Swick Hill Street",980-581-8871,DeanLFlood@einrot.com,12/12/1950
17,Ricardo,Clark,"31 Browning Lane",607-988-3426,RicardoCClark@einrot.com,7/23/1995
18,Devora,Walker,"3661 Godfrey Street",503-617-8335,DevoraCWalker@gustr.com,10/25/1991
19,Lisa,Toups,"3389 Hinkle Deegan Lake Road",607-215-4985,LisaMToups@teleworm.us,9/11/1970
20,James,O'Brian,"331 Neuport Lane",770-378-4374,JamesJOBrian@einrot.com,7/19/1935
21,Marco,Dube,"1779 Atha Drive",661-695-3020,MarcoPDube@rhyta.com,7/25/1939
22,Deborah,Douglas,"680 Stadium Drive",508-297-3773,DeborahDDouglas@teleworm.us,2/12/1959
23,Charles,Hansen,"2875 Euclid Avenue",805-303-4353,CharlesCHansen@dayrep.com,2/9/1999
24,James,Glenn,"4870 Edgewood Road",901-259-9658,JamesMGlenn@teleworm.us,7/7/1990
25,Cindy,Paul,"3156 Big Elm",816-840-3649,CindyJPaul@fleckens.hu,4/23/1994
26,Mary,Hernandez,"945 Hickman Street",630-421-0480,MaryBHernandez@teleworm.us,6/14/1939
27,Nancy,Villarreal,"4347 Todds Lane",210-465-6307,NancyNVillarreal@armyspy.com,9/21/1959
28,Colby,Lincoln,"426 Bryan Street",336-284-1978,ColbyVLincoln@superrito.com,4/8/1996
29,Robert,Retzlaff,"1858 Water Street",925-250-0317,RobertKRetzlaff@superrito.com,6/20/1951
30,Donald,Schmidt,"1925 Mattson Street",503-431-9711,DonaldBSchmidt@rhyta.com,11/27/1952
```

**I've updated the data to have the correct headers, on the csv file**

To-DO
---
- phase 1 - Setup environment
    - [X] Create folder structure
        - [X] API and Front folder
        - [X] Create Dockers
        - [X] Create initial documentation
- phase 2 - Design application front
    - [X] Create front views and components
        - [X] Create List component (I choose to do all the logic on the front because it's only a prototype)
            - [X] Implement the pagination on the front
            - [X] Implement the order of the list item
            - [X] Implement the filter by email (I've implemented for name, phone and address too)
        - [X] Create User component
        - [ ] ~~Create CreateUser component~~ [No time]
    - [X] Create cypress test [**BASIC**]
    - [X] Create environment documentation
- phase 3 - Design application backend
    - [X] Create API design
        - [X] Create User entity
        - [X] Create Value Object of the attributes (just to make sure that they are not empty)
        - [X] Create UserRepositoryInterface
            - [X] getAll
            - [X] create
        - [X] Create UserFsRepository implementation
        - [X] Create Application service
            - [X] GetAllUsers
            - [X] CreateUser
    - [X] Create environment documentation and API documentation

## Notes
* **The task: It should be possible to see only one employee**: *I think it's solved while filtering*
* In a normal situation I would have created 2 repositories that way I could have use github actions as well as husky on commit
* The front-end app may be slow on boot time thats because of vue-cli system not the design
* It need more test and testing doubles
    * Repository
    * Use Case
# Improves
- [ ] Frontend features
    - [ ] Pagination
    - [ ] Search
    - [ ] Shorting
- [ ] User component has too much responsibility it should 2 or 3 components
- [ ] The user creation should be able to handle multiple errors on creation.
- [ ] Extract testing doubles from the testcases to other files (+ readability)
- [ ] The framework should have DI support using inversify.js
- [ ] Some test are on the API repo and on the Front repo because they solve the same domain problems but on different applications

