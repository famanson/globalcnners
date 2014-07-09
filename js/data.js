var countries = [ 'us', 'gb', 'fi', 'sg', 'de', 'jp' ];

var staff = [
    // UK
    {
        name: "SONPHAM_UK_BIO_NAME",
        title: "CONSULT_TITLE",
        rank: "high",
        firstBioLine: "SONPHAM_UK_BIO_1",
        secondBioLine: "SONPHAM_UK_BIO_2",
        back: "SONPHAM_UK_BACK_INFO",
        backExtra: "SONPHAM_UK_BACK_EXTRA",
        country: "gb",
        picsize: "1024x1024"
    },
    {
        name: "MADMIN_UK_BIO_NAME",
        title: "CONSULT_TITLE",
        rank: "high",
        firstBioLine: "MADMIN_UK_BIO_1",
        secondBioLine: "MADMIN_UK_BIO_2",
        back: "MADMIN_UK_BACK_INFO",
        country: "gb",
        picsize: "1024x512"
    },
    // US
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
        name: "DUCANH_US_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "DUCANH_US_BIO_1",
        secondBioLine: "DUCANH_US_BIO_2",
        back: "DUCANH_US_BACK_INFO",
        country: "us",
        picsize: "1024x1024",
    },
    {
        name: "MPHUONG_US_BIO_NAME",
        title: "ADMIN_TITLE",
        rank: "high",
        firstBioLine: "MPHUONG_US_BIO_1",
        secondBioLine: "MPHUONG_US_BIO_2",
        back: "MPHUONG_US_BACK_INFO",
        backExtra: "MPHUONG_US_BACK_EXTRA",
        country: "us",
        picsize: "1024x1024",
    },
    {
        name: "HIEUANH_US_BIO_NAME",
        title: "ADMIN_TITLE",
        rank: "high",
        firstBioLine: "HIEUANH_US_BIO_1",
        secondBioLine: "HIEUANH_US_BIO_2",
        back: "HIEUANH_US_BACK_INFO",
        backExtra: "HIEUANH_US_BACK_EXTRA",
        country: "us",
        picsize: "1024x1024",
    },
    // FIN
    {
        name: "THUYTRANG_FIN_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "THUYTRANG_FIN_BIO_1",
        secondBioLine: "THUYTRANG_FIN_BIO_2",
        back: "THUYTRANG_FIN_BACK_INFO",
        country: "fi",
        picsize: "1024x512",
    },
    // SG
    {
        name: "MYHANH_SG_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "MYHANH_SG_BIO_1",
        secondBioLine: "MYHANH_SG_BIO_2",
        back: "MYHANH_SG_BACK_INFO",
        country: "sg",
        picsize: "1024x512",
    },
    // GER
    {
        name: "KLINH_GER_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "KLINH_GER_BIO_1",
        secondBioLine: "KLINH_GER_BIO_2",
        back: "KLINH_GER_BACK_INFO",
        backExtra: "KLINH_GER_BACK_EXTRA",
        country: "de",
        picsize: "1024x1024",
    },
    // JAP
    {
        name: "KANH_JAP_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "KANH_JAP_BIO_1",
        secondBioLine: "KANH_JAP_BIO_2",
        back: "KANH_JAP_BACK_INFO",
        backExtra: "KANH_JAP_BACK_EXTRA",
        country: "jp",
        picsize: "1024x1024",
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