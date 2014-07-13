var countries = [ 'us', 'gb', 'fi', 'sg', 'de', 'jp', 'kr' ];

var staff = [
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
        image: "MPHUONG_US.jpg"
    },
    {
        name: "SONPHAM_UK_BIO_NAME",
        title: "CONSULT_TITLE",
        rank: "high",
        firstBioLine: "SONPHAM_UK_BIO_1",
        secondBioLine: "SONPHAM_UK_BIO_2",
        back: "SONPHAM_UK_BACK_INFO",
        backExtra: "SONPHAM_UK_BACK_EXTRA",
        country: "gb",
        picsize: "1024x1024",
        image: "SONPHAM_UK.jpg"
    },
    {
        name: "BAOTRAN_US_BIO_NAME",
        title: "DESIGN_CONSULT_TITLE",
        rank: "high",
        firstBioLine: "BAOTRAN_US_BIO_1",
        secondBioLine: "BAOTRAN_US_BIO_2",
        back: "BAOTRAN_US_BACK_INFO",
        country: "us",
        picsize: "1024x1024",
        image: "BAOTRAN_US.jpg"
    },
    {
        name: "MADMIN_UK_BIO_NAME",
        title: "CONSULT_TITLE",
        rank: "high",
        firstBioLine: "MADMIN_UK_BIO_1",
        secondBioLine: "MADMIN_UK_BIO_2",
        back: "MADMIN_UK_BACK_INFO",
        backExtra: "MADMIN_UK_BACK_EXTRA",
        country: "gb",
        picsize: "1024x1024",
        image: "MINHDANG_UK.jpg"
    },
    {
        name: "MINHNGOC_UK_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "MINHNGOC_UK_BIO_1",
        secondBioLine: "MINHNGOC_UK_BIO_2",
        back: "MINHNGOC_UK_BACK_INFO",
        backExtra: "MINHNGOC_UK_BACK_EXTRA",
        country: "gb",
        picsize: "1024x1024",
        image: "MINHNGOC_UK.jpg"
    },
    {
        name: "HONGCHAU_UK_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "HONGCHAU_UK_BIO_1",
        secondBioLine: "HONGCHAU_UK_BIO_2",
        back: "HONGCHAU_UK_BACK_INFO",
        backExtra: "HONGCHAU_UK_BACK_EXTRA",
        country: "gb",
        picsize: "1024x1024",
        image: "HONGCHAU_UK.jpg"
    },
    {
        name: "HIEUANH_US_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "HIEUANH_US_BIO_1",
        secondBioLine: "HIEUANH_US_BIO_2",
        back: "HIEUANH_US_BACK_INFO",
        backExtra: "HIEUANH_US_BACK_EXTRA",
        country: "us",
        picsize: "1024x1024",
        image: "HIEUANH_US.jpg"
    },
    {
        name: "CHIHUYNH_US_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "CHIHUYNH_US_BIO_1",
        secondBioLine: "CHIHUYNH_US_BIO_2",
        back: "CHIHUYNH_US_BACK_INFO",
        backExtra: "CHIHUYNH_US_BACK_EXTRA",
        country: "us",
        picsize: "1024x1024",
        image: "CHIHUYNH_US.jpg"
    },
    {
        name: "DUCANH_US_BIO_NAME",
        title: "BOOTH_TITLE",
        rank: "low",
        firstBioLine: "DUCANH_US_BIO_1",
        secondBioLine: "DUCANH_US_BIO_2",
        back: "DUCANH_US_BACK_INFO",
        backExtra: "DUCANH_US_BACK_EXTRA",
        country: "us",
        picsize: "1024x1024",
        image: "DUCANH_US.jpg"
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
        picsize: "1024x1024",
        image: "THUYTRANG_FINLAND.jpg"
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
        picsize: "1024x1024",
        image: "MYHANH_SG.jpg"
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
        image: "KLINH_GER.jpg"
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
        image: "KANH_JAP.jpg"
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
        title: "SCHEDULE_TITLE_0745",
        description: "SCHEDULE_0745",
        time: "07:45"
    },
    {
        logo: "fa-paper-plane-o",
        title: "SCHEDULE_TITLE_0800",
        description: "SCHEDULE_0800",
        time: "08:00"
    },
    {
        logo: "fa-university",
        flag: "us",
        title: "SCHEDULE_TITLE_0815",
        description: "SCHEDULE_0815",
        time: "08:15"
    },
    {
        logo: "fa-university",
        title: "SCHEDULE_TITLE_0920",
        description: "SCHEDULE_0920",
        time: "09:20"
    },
    {
        logo: "fa-coffee",
        title: "SCHEDULE_TITLE_1000",
        description: "SCHEDULE_1000",
        time: "10:00"
    },
    {
        logo: "fa-university",
        title: "SCHEDULE_TITLE_1015",
        description: "SCHEDULE_1015",
        time: "10:15"
    },
    {
        logo: "fa-university",
        title: "SCHEDULE_TITLE_1030",
        description: "SCHEDULE_1030",
        time: "10:30"
    },
    {
        logo: "fa-university",
        title: "SCHEDULE_TITLE_1045",
        description: "SCHEDULE_1045",
        time: "10:45"
    },
    {
        logo: "fa-university",
        title: "SCHEDULE_TITLE_1100",
        description: "SCHEDULE_1100",
        time: "11:00"
    },
    {
        logo: "fa-flag-checkered",
        title: "SCHEDULE_TITLE_1115",
        description: "SCHEDULE_TITLE_1115",
        time: "11:15"
    },
    {
        logo: "fa-paper-plane",
        title: "SCHEDULE_TITLE_1330",
        description: "SCHEDULE_1330",
        time: "13:30"
    },
    {
        logo: "fa-comments-o",
        title: "SCHEDULE_TITLE_1345",
        description: "SCHEDULE_1345",
        time: "13:45"
    },
    {
        logo: "fa-flag-checkered",
        title: "SCHEDULE_TITLE_1600",
        description: "SCHEDULE_TITLE_1600",
        time: "16:00"
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