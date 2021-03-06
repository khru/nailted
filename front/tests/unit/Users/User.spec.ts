import { User } from "@/components/Users/User";

const VALID_DATA = [
    {
        id: "1",
        name: "Della",
        surname: "Cox",
        address: "4945 Lucky Duck Drive",
        phone: "412-862-8457",
        email: "DellaDCox@superrito.com",
        birthdate: "10/12/1985"
    },
    {
        id: "2",
        name: "Walter",
        surname: "Jeske",
        address: "495 Rafe Lane",
        phone: "662-729-8758",
        email: "WalterJJeske@armyspy.com",
        birthdate: "3/15/1951"
    },
    {
        id: "3",
        name: "Ron",
        surname: "Plaza",
        address: "4738 Woodside Circle",
        phone: "850-868-3521",
        email: "RonAPlaza@dayrep.com",
        birthdate: "3/30/1990"
    },
    {
        id: "4",
        name: "Emma",
        surname: "Kwak",
        address: "4190 Tully Street",
        phone: "313-651-6614",
        email: "EmmaAKwak@cuvox.de",
        birthdate: "3/12/1940"
    },
    {
        id: "5",
        name: "Jimmy",
        surname: "Smith",
        address: "3839 Fulton Street",
        phone: "304-405-5250",
        email: "JimmyTSmith@jourrapide.com",
        birthdate: "2/25/1953"
    },
    {
        id: "6",
        name: "Cecilia",
        surname: "Temple",
        address: "4187 Arrowood Drive",
        phone: "904-495-3469",
        email: "CeciliaGTemple@gustr.com",
        birthdate: "8/24/1987"
    },
    {
        id: "7",
        name: "Ruth",
        surname: "Story",
        address: "3474 White Oak Drive",
        phone: "816-761-4637",
        email: "RuthPStory@dayrep.com",
        birthdate: "11/28/1963"
    },
    {
        id: "8",
        name: "Brenda",
        surname: "Reynolds",
        address: "1447 Viking Drive",
        phone: "740-782-7580",
        email: "BrendaRReynolds@superrito.com",
        birthdate: "11/25/1955"
    },
    {
        id: "9",
        name: "Rene",
        surname: "Lewis",
        address: "2683 West Drive",
        phone: "312-495-7822",
        email: "ReneSLewis@dayrep.com",
        birthdate: "6/22/1977"
    },
    {
        id: "10",
        name: "Dale",
        surname: "Ward",
        address: "4246 Rogers Street",
        phone: "513-587-4936",
        email: "DaleCWard@superrito.com",
        birthdate: "7/13/1964"
    },
    {
        id: "11",
        name: "Pamela",
        surname: "Gilman",
        address: "496 Ritter Avenue",
        phone: "586-722-0839",
        email: "PamelaMGilman@einrot.com",
        birthdate: "7/18/1935"
    },
    {
        id: "12",
        name: "Clarence",
        surname: "Goebel",
        address: "3475 Ferrell Street",
        phone: "218-353-1459",
        email: "ClarenceWGoebel@armyspy.com",
        birthdate: "12/23/1993"
    },
    {
        id: "13",
        name: "Michelle",
        surname: "Reed",
        address: "1693 Green Gate Lane",
        phone: "443-715-2332",
        email: "MichelleKReed@fleckens.hu",
        birthdate: "4/30/2000"
    },
    {
        id: "14",
        name: "Louis",
        surname: "Martin",
        address: "2993 Yorkshire Circle",
        phone: "252-287-8673",
        email: "LouisKMartin@dayrep.com",
        birthdate: "3/16/1945"
    },
    {
        id: "15",
        name: "Betty",
        surname: "Lance",
        address: "677 Oakwood Avenue",
        phone: "212-635-3373",
        email: "BettyKLance@gustr.com",
        birthdate: "9/7/1980"
    },
    {
        id: "16",
        name: "Dean",
        surname: "Flood",
        address: "2313 Swick Hill Street",
        phone: "980-581-8871",
        email: "DeanLFlood@einrot.com",
        birthdate: "12/12/1950"
    },
    {
        id: "17",
        name: "Ricardo",
        surname: "Clark",
        address: "31 Browning Lane",
        phone: "607-988-3426",
        email: "RicardoCClark@einrot.com",
        birthdate: "7/23/1995"
    },
    {
        id: "18",
        name: "Devora",
        surname: "Walker",
        address: "3661 Godfrey Street",
        phone: "503-617-8335",
        email: "DevoraCWalker@gustr.com",
        birthdate: "10/25/1991"
    },
    {
        id: "19",
        name: "Lisa",
        surname: "Toups",
        address: "3389 Hinkle Deegan Lake Road",
        phone: "607-215-4985",
        email: "LisaMToups@teleworm.us",
        birthdate: "9/11/1970"
    },
    {
        id: "20",
        name: "James",
        surname: "O'Brian",
        address: "331 Neuport Lane",
        phone: "770-378-4374",
        email: "JamesJOBrian@einrot.com",
        birthdate: "7/19/1935"
    },
    {
        id: "21",
        name: "Marco",
        surname: "Dube",
        address: "1779 Atha Drive",
        phone: "661-695-3020",
        email: "MarcoPDube@rhyta.com",
        birthdate: "7/25/1939"
    },
    {
        id: "22",
        name: "Deborah",
        surname: "Douglas",
        address: "680 Stadium Drive",
        phone: "508-297-3773",
        email: "DeborahDDouglas@teleworm.us",
        birthdate: "2/12/1959"
    },
    {
        id: "23",
        name: "Charles",
        surname: "Hansen",
        address: "2875 Euclid Avenue",
        phone: "805-303-4353",
        email: "CharlesCHansen@dayrep.com",
        birthdate: "2/9/1999"
    },
    {
        id: "24",
        name: "James",
        surname: "Glenn",
        address: "4870 Edgewood Road",
        phone: "901-259-9658",
        email: "JamesMGlenn@teleworm.us",
        birthdate: "7/7/1990"
    },
    {
        id: "25",
        name: "Cindy",
        surname: "Paul",
        address: "3156 Big Elm",
        phone: "816-840-3649",
        email: "CindyJPaul@fleckens.hu",
        birthdate: "4/23/1994"
    },
    {
        id: "26",
        name: "Mary",
        surname: "Hernandez",
        address: "945 Hickman Street",
        phone: "630-421-0480",
        email: "MaryBHernandez@teleworm.us",
        birthdate: "6/14/1939"
    },
    {
        id: "27",
        name: "Nancy",
        surname: "Villarreal",
        address: "4347 Todds Lane",
        phone: "210-465-6307",
        email: "NancyNVillarreal@armyspy.com",
        birthdate: "9/21/1959"
    },
    {
        id: "28",
        name: "Colby",
        surname: "Lincoln",
        address: "426 Bryan Street",
        phone: "336-284-1978",
        email: "ColbyVLincoln@superrito.com",
        birthdate: "4/8/1996"
    },
    {
        id: "29",
        name: "Robert",
        surname: "Retzlaff",
        address: "1858 Water Street",
        phone: "925-250-0317",
        email: "RobertKRetzlaff@superrito.com",
        birthdate: "6/20/1951"
    },
    {
        id: "30",
        name: "Donald",
        surname: "Schmidt",
        address: "1925 Mattson Street",
        phone: "503-431-9711",
        email: "DonaldBSchmidt@rhyta.com",
        birthdate: "11/27/1952"
    }
];

const INVALID_DATA = [
    {
        id: "26",
        name: "Mary",
        surname: "Hernandez",
        address: "945 Hickman Street",
        phone: "630/421/0480",
        email: "MaryBHernandez@teleworm.us",
        birthdate: "6-14-1939"
    },
    {
        id: "27",
        name: "Nancy",
        surname: "Villarreal",
        address: "4347 Todds Lane",
        phone: "+31210-465-6307",
        email: "NancyNVillarreal@armyspy.com",
        birthdate: "9/21/1959"
    },
    {
        id: "28",
        name: "Colby",
        surname: "Lincoln",
        address: "426 Bryan Street",
        phone: "336-284-1978",
        email: "ColbyVLincoln@superrito.com",
        birthdate: "40/8/1996"
    },
    {
        id: "29",
        name: "Robert",
        surname: "Retzlaff",
        address: "1858 Water Street",
        phone: "925-250-0317",
        email: "RobertKRetzlaf f@superrito",
        birthdate: "6/20/1951"
    },
    {
        id: "30",
        name: "Donald",
        surname: "Schmidt",
        address: "1925 Mattson Street",
        phone: "50-431-94711",
        email: "DonaldBSchmidt@rhyta.com",
        birthdate: "11/27/1952"
    }
];

const USER_JSON = {
    address: "4945 Lucky Duck Drive",
    birthdate: "10/12/1985",
    email: "DellaDCox@superrito.com",
    fullName: "Della Cox",
    id: "1",
    name: "Della",
    phone: "412-862-8457",
    surname: "Cox"
};

describe("It should validate the data the gets from the csv file", () => {
    it("should create a valid Users", () => {
        VALID_DATA.forEach(user => {
            expect(new User(user) instanceof User).toBe(true);
        });
    });

    it("should return a valid JSON from a user", () => {
        expect(new User(VALID_DATA[0]).toJSON()).toStrictEqual(USER_JSON);
    });

    it("should fail to create a valid Users based on wrong data", () => {
        INVALID_DATA.forEach(user => {
            expect(() => new User(user)).toThrowError(/^InvalidUserError.*/);
        });
    });
});
