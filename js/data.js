var countries = [ 'us', 'gb' ];

var staff = [
    {
        name: "Pham Anh Son",
        title: "CONSULT_TITLE",
        rank: "high",
        firstBioLine: "SONPHAM_UK_BIO_1",
        secondBioLine: "SONPHAM_UK_BIO_2",
        back: "SONPHAM_UK_BACK_INFO",
        country: "gb",
        picsize: "1024x512"
    },
    {
        name: "Minh 'madmin' Dang",
        title: "CONSULT_TITLE",
        rank: "high",
        firstBioLine: "MADMIN_UK_BIO_1",
        secondBioLine: "MADMIN_UK_BIO_2",
        back: "MADMIN_UK_BACK_INFO",
        country: "gb",
        picsize: "1024x512"
    },
    {
        name: "Jane Roe",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        back: "MOCK_BACK_INFO",
        country: "gb",
        picsize: "1024x512",
    },
    {
        name: "Ly Bao Tran",
        title: "CONSULT_TITLE",
        rank: "high",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        back: "MOCK_BACK_INFO",
        country: "us",
        picsize: "1024x512"
    },
    {
        name: "Nguyen Mai Phuong",
        title: "ADMIN_TITLE",
        rank: "high",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        back: "MOCK_BACK_INFO",
        country: "us",
        picsize: "1024x1024",
    },
    {
        name: "Jane Roe",
        title: "QA_TITLE",
        rank: "low",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        back: "MOCK_BACK_INFO",
        country: "us",
        picsize: "1024x512",
    },
    {
        name: "John Doe",
        title: "QA_TITLE",
        rank: "low",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        back: "MOCK_BACK_INFO",
        country: "us",
        picsize: "1024x512",
    }
];

var guests = [
    {
        name: "Dr. Quack",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        country: "us",
        back: "MOCK_BACK_INFO",
    },
    {
        name: "Dr. Quack",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        country: "us",
        back: "MOCK_BACK_INFO",
    },
    {
        name: "Dr. Quack",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        country: "us",
        back: "MOCK_BACK_INFO",
    },
    {
        name: "Dr. Quack",
        firstBioLine: "MOCK_BIO_1",
        secondBioLine: "MOCK_BIO_2",
        country: "us",
        back: "MOCK_BACK_INFO",
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

// No translation for testimonials
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

var staffWall = new freewall("#staff-view");