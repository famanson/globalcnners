var countries = [ 'us', 'gb' ];

var staff = [
    {
        name: "Pham Anh Son",
        title: "Project Consultant",
        rank: "high",
        firstBioLine: "K37 CNNer, Oxford Uni Alumni.",
        secondBioLine: "Software Engineer, UK",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        country: "gb",
        picsize: "1024x512"
    },
    {
        name: "Minh 'madmin' Dang",
        title: "Project Consultant",
        rank: "high",
        firstBioLine: "K38 CNNer, Lancaster Uni Alumni.",
        secondBioLine: "Loan shark, Vietnam",
        back: "Minh studied in class I of K38. He is one of the founding members of Global CNNers. Minh went to England to study A-Level and then business management at Lancaster University, England. He also spent a year abroad at Richmond University in the States.",
        country: "gb",
        picsize: "1024x512"
    },
    {
        name: "Jane Roe",
        title: "Booth Staff",
        rank: "low",
        firstBioLine: "Lorem ipsum dolor sit amet",
        secondBioLine: "Ut enim ad minim veniam, quis",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        country: "gb",
        picsize: "1024x512",
    },
    {
        name: "Ly Bao Tran",
        title: "Project Consultant",
        rank: "high",
        firstBioLine: "Lorem ipsum dolor sit amet",
        secondBioLine: "Ut enim ad minim veniam, quis",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        country: "us",
        picsize: "1024x512"
    },
    {
        name: "Nguyen Mai Phuong",
        title: "Conference Adminstrator",
        rank: "high",
        firstBioLine: "Lorem ipsum dolor sit amet",
        secondBioLine: "Ut enim ad minim veniam, quis",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        country: "us",
        picsize: "1024x1024",
    },
    {
        name: "Jane Roe",
        title: "Q&A Panel Staff",
        rank: "low",
        firstBioLine: "Lorem ipsum dolor sit amet",
        secondBioLine: "Ut enim ad minim veniam, quis",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        country: "us",
        picsize: "1024x512",
    },
    {
        name: "John Doe",
        title: "Q&A Panel Staff",
        rank: "low",
        firstBioLine: "Lorem ipsum dolor sit amet",
        secondBioLine: "Ut enim ad minim veniam, quis",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        country: "us",
        picsize: "1024x512",
    }
];

var guests = [
    {
        name: "Dr. Quack",
        firstBioLine: "KXX CNNer, Some Uni Alumni",
        secondBioLine: "CEO of Meh",
        country: "us",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        name: "Dr. Quack",
        firstBioLine: "KXX CNNer, Some Uni Alumni",
        secondBioLine: "CEO of Meh",
        country: "us",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        name: "Dr. Quack",
        firstBioLine: "KXX CNNer, Some Uni Alumni",
        secondBioLine: "CEO of Meh",
        country: "us",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        name: "Dr. Quack",
        firstBioLine: "KXX CNNer, Some Uni Alumni",
        secondBioLine: "CEO of Meh",
        country: "us",
        back: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    }
]

var schedule = [
    {
        logo: "fa-users",
        title: "Meetup",
        description: "Conference is open to the public",
        time: "07:45"
    },
    {
        logo: "fa-paper-plane-o",
        title: "Guest Speaker #1: High School Application",
        description: "Conference is open to the public",
        time: "08:30"
    },
    {
        logo: "fa-university",
        title: "Guest Speaker #2: University Application",
        description: "University application, scholarships, papers and exams etc",
        time: "09:00"
    },
    {
        logo: "fa-comments-o",
        title: "Q&A #1",
        description: "Question and Answer session #1",
        time: "09:30"
    },
    {
        logo: "fa-coffee",
        title: "Tea break: Casual hangout",
        description: "Tea, coffee, soft drinks, biscuits",
        time: "10:00"
    },
    {
        logo: "fa-mortar-board",
        title: "Guest Speaker #3: School, Uni life",
        description: "Daily life",
        time: "10:30"
    },
    {
        logo: "fa-mortar-board",
        title: "Guest Speaker #4: Whatever other stuff",
        description: "Have fun?",
        time: "11:00"
    },
    {
        logo: "fa-comments-o",
        title: "Q&A #2",
        description: "Question and Answer session #2",
        time: "11:00"
    }
];

var testimonials = [
    {
        author: "Ut labore et dolore magna aliqua",
        content: "MIND. BLOWN.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        author: "Ut labore et dolore magna aliqua",
        content: "MIND. BLOWN.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        author: "Ut labore et dolore magna aliqua",
        content: "MIND. BLOWN.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        author: "Ut labore et dolore magna aliqua",
        content: "MIND. BLOWN.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        author: "Ut labore et dolore magna aliqua",
        content: "MIND. BLOWN.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
        author: "Ut labore et dolore magna aliqua",
        content: "MIND. BLOWN.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }
]