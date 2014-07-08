// Translation for the base of the page

app.config(function ($translateProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $translateProvider.translations("en", {
        // Headings
        LANGUAGE_HEADING: "Language",
        TITLE_HEADING: "CNN Conference 2014",
        CONTACT_HEADING: "Register/Contact Us",
        TESTIMONIALS_HEADING: "Testimonials",
        DOCS_HEADING: "Resources",
        STAFF_HEADING: "Rest of the Crew",
        SPEAKERS_HEADING: "Guest Speakers",
        SCHEDULE_HEADING: "Conference Schedule",
        HELLO_HEADING: "Hello CNNers!",

        // Hello section
        HELLO_TEXT_1: "We are Global CNNers, and we've come around to say hi.",

        // Schedule section
        SCHEDULE_TEXT_1: "Date: 01/01/2014",
        SCHEDULE_TEXT_2: "To attend, you will first need to Register using the link to a form at the bottom of the page",

        // Guest Speakers section
        SPEAKERS_TEXT_1: "Globe trotters who will give speeches to share their success story and precious experience at CNN Conference 2014.",

        //Staff section
        STAFF_TEXT_1: "Those behind the scene helping make this all happen. All Q&A staff will be available on the day",
        FLAG_PICKER_TIP_1: "Click a flag to filter by country",
        FLAG_PICKER_TIP_2_1: "Click active flag to clear filter",
        FLAG_PICKER_TIP_2_2: "or an inactive flag to switch country",

        // Documents section
        DOCS_CONVENIENT: "Convenient",
        DOCS_CONVENIENT_TEXT: "We often e-mailed out our slides and docs in previous years. This time, we host all our resources on Google Drive for better availability and convenience.",
        DOCS_ORG: "Organisation",
        DOCS_ORG_TEXT: "For each country there is one folder, and each file is annotated with the author's/presenter's name, saved in the friendly ppt/doc format that can be viewed by common office tools.",
        DOCS_THOUGHT: "Thoughtful",
        DOCS_THOUGHT_TEXT: "We cannot host external resources without proper permission, so there will be a dedicated list of recommended readings in each country's folder.",
        DOCS_CLICK: "Click for Awesomeness",

        // Contact section
        SIGNUP: "CNN Conference '14 signup",
        SIGNUP_TEXT: "Signing up is a click away! After you've completed the form, you will get a confirmation from us, then you just need to show up on the day. Students from other schools are welcomed, but spaces are limited",
        SIGNUP_CLICK: "Register!",
        SUPPORT: "Conference Admin contact",
        SUPPORT_TEXT: "Do you have an emergency inquiry or do you simply want to talk to somebody regarding your concernts about the conference? Our conference admin, Mai Phuong, is more than ready to help!",
        SUPPORT_CLICK: "xxxxxxxx, Mai Phuong",
        EMAIL: "Drop us an e-mail",
        EMAIL_TEXT: "You can ask just about anything about Global CNNers and the Conference or simply say hi. Sorry we don't do romance consultancy.",
        EMAIL_CLICK: "Send e-mail",
        FACEBOOK: "Like our Facebook page",
        FACEBOOK_TEXT: "Here for our latest news and updates. Scholarship and application information pops up from time to time too!",
        FACEBOOK_CLICK: "Our Page",

        // Staff
        CONSULT_TITLE: "Project Consultant",
        QA_TITLE: "Q&A Panel Staff",
        BOOTH_TITLE: "Booth Staff",
        ADMIN_TITLE: "Conference Adminstrator",

        // INDIVIDUAL STAFF
        SONPHAM_UK_BIO_1: "K37 CNNer, Oxford Uni Alumni",
        SONPHAM_UK_BIO_2: "Software Engineer, UK",
        SONPHAM_UK_BACK_INFO: "Pham Anh Son is a member of the 37th class A (05-08). Like many other Vietnamese students in the UK, Son came to study a 2-year A-Level course before spending 3 years reading Computer Science at University of Oxford. He now lives in the UK and writes code at Ocado Technology. He was the administrator of CNN Conference 2009 and 2010, and has been a senior consultant ever since",

        MADMIN_UK_BIO_1: "K38 CNNer, Lancaster Uni Alumni.",
        MADMIN_UK_BIO_2: "SSI, Vietnam",
        MADMIN_UK_BACK_INFO: "Dang Tran Minh (madmin) is a member of the 38th class I (06-09). Minh studied a 2-year A-Level course in England and then read Business and Management at Lancaster Uni. He also spent a year abroad at Richmond University in the States. Minh now lives in Saigon and work for SSI, Vietnam. He is also one of the founding members of Global CNNers and a regular admin/consultant for CNN Conference.",

        // Mock staff
        MOCK_BIO_1: "Lorem ipsum dolor sit amet",
        MOCK_BIO_2: "Ut enim ad minim veniam, quis",
        MOCK_BACK_INFO: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }).translations("vn", {
        // Headings
        LANGUAGE_HEADING: "Ngôn ngữ",
        TITLE_HEADING: "Hội thảo du học CNN '14",
        CONTACT_HEADING: "Đăng ký/Liên hệ",
        TESTIMONIALS_HEADING: "Testimonials",
        DOCS_HEADING: "Tài liệu",
        STAFF_HEADING: "Thành viên BTC",
        SPEAKERS_HEADING: "Khách mời",
        SCHEDULE_HEADING: "Lịch trình hội thảo",
        HELLO_HEADING: "Xin chào!",

        // Hello section
        HELLO_TEXT_1: "We are Global CNNers, and we've come around to say hi.",

        // Schedule section
        SCHEDULE_TEXT_1: "Ngày diễn ra hội thảo: 01/01/2014",
        SCHEDULE_TEXT_2: "Lưu ý: Để tham dự hội thảo, xin vui lòng đăng ký tại đường dẫn ở cuối trang",

        // Guest Speakers section
        SPEAKERS_TEXT_1: "Các bạn và anh chị du học sinh Chuyên Ngữ là khách mời đến chia sẻ kinh nghiệm và bí quyết thành công tại hội thảo du học CNN 2014.",

        //Staff section
        STAFF_TEXT_1: "Tất cả các thành viên trong ban tổ chức. Thành viên các đội Q&A và booth sẽ có mặt trong ngày",
        FLAG_PICKER_TIP_1: "Bấm vào cờ một nước để hiển thị các thành viên của nước đó",
        FLAG_PICKER_TIP_2_1: "Bấm vào cờ đang họat động để xóa bộ lọc",
        FLAG_PICKER_TIP_2_2: "hoặc vào một cờ còn lại để đổi sang nước khác",

        // Documents section
        DOCS_CONVENIENT: "Convenient",
        DOCS_CONVENIENT_TEXT: "We often e-mailed out our slides and docs in previous years. This time, we host all our resources on Google Drive for better availability and convenience.",
        DOCS_ORG: "Organisation",
        DOCS_ORG_TEXT: "For each country there is one folder, and each file is annotated with the author's/presenter's name, saved in the friendly ppt/doc format that can be viewed by common office tools.",
        DOCS_THOUGHT: "Thoughtful",
        DOCS_THOUGHT_TEXT: "We cannot host external resources without proper permission, so there will be a dedicated list of recommended readings in each country's folder.",
        DOCS_CLICK: "Click for Awesomeness",

        // Contact section
        SIGNUP: "CNN Conference '14 signup",
        SIGNUP_TEXT: "Signing up is a click away! After you've completed the form, you will get a confirmation from us, then you just need to show up on the day. Students from other schools are welcomed, but spaces are limited",
        SIGNUP_CLICK: "Register!",
        SUPPORT: "Conference Admin contact",
        SUPPORT_TEXT: "Do you have an emergency inquiry or do you simply want to talk to somebody regarding your concernts about the conference? Our conference admin, Mai Phuong, is more than ready to help!",
        SUPPORT_CLICK: "xxxxxxxx, Mai Phuong",
        EMAIL: "Drop us an e-mail",
        EMAIL_TEXT: "You can ask just about anything about Global CNNers and the Conference or simply say hi. Sorry we don't do romance consultancy.",
        EMAIL_CLICK: "Send e-mail",
        FACEBOOK: "Like our Facebook page",
        FACEBOOK_TEXT: "Here for our latest news and updates. Scholarship and application information pops up from time to time too!",
        FACEBOOK_CLICK: "Our Page",

        // Staff
        CONSULT_TITLE: "Cố vấn dự án",
        QA_TITLE: "Nhóm chuyên mục hỏi đáp",
        BOOTH_TITLE: "Nhóm làm quầy thông tin",
        ADMIN_TITLE: "Trưởng ban tổ chức",

        // INDIVIDUAL STAFF
        SONPHAM_UK_BIO_1: "K37 CNNer, cựu sinh viên ĐH Oxford",
        SONPHAM_UK_BIO_2: "Kỹ sư phần mềm, Vương Quốc Anh",
        SONPHAM_UK_BACK_INFO: "Phạm Anh Sơn là thành viên lớp A khóa 37 (05-08). Như nhiều du học sinh Việt Nam tại Anh, Sơn học khóa A-Level 2 năm tại Reading và sau đó dành 3 năm đại học tại Oxford chuyên ngành khoa học máy tính. Hiện tại anh đang ở lại Anh Quốc và làm kỹ sư phần mềm tại Ocado Technology. Anh là trưởng ban tổ chức CNN Conference 2009 và 2010, và làm cố vấn cho các hội thảo sau từ đó đến nay",

        MADMIN_UK_BIO_1: "K38 CNNer, cựu sinh viên ĐH Lancaster",
        MADMIN_UK_BIO_2: "SSI, Việt Nam",
        MADMIN_UK_BACK_INFO: "Đặng Trần Minh là thành viên lớp I khóa 38 (06-09). Minh học 2 năm A-Level ở Anh và sau đó là đại học chuyên ngành quản trị kinh doanh tại Lancaster. Minh cũng đã dành 1 năm học của mình tại ĐH Richmond, Mỹ. Minh hiện tại đang sống tại Sài Gòn và làm việc cho SSI. Anh là một trong các thành viên sáng lập của hội du học sinh Chuyên Ngữ, và là thành viên ban tổ chức/cố vấn lâu năm của CNN Conference",

        // Mock staff
        MOCK_BIO_1: "Lorem ipsum dolor sit amet",
        MOCK_BIO_2: "Ut enim ad minim veniam, quis",
        MOCK_BACK_INFO: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    });
    // $translateProvider.preferredLanguage("en");
});
