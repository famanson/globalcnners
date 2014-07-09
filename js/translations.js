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
        SUPPORT_TEXT: "Do you have an emergency inquiry or do you simply want to talk to somebody regarding your concerns about the conference? Our conference admin, Mai Phuong, is more than ready to help!",
        SUPPORT_CLICK: "xxxxxxxx, Mai Phuong",
        EMAIL: "Drop us an e-mail",
        EMAIL_TEXT: "You can ask just about anything about Global CNNers and the Conference or simply say hi. (Sorry we don't do romance consultancy :P)",
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
        SONPHAM_UK_BIO_NAME: "Pham Anh Son",
        SONPHAM_UK_BIO_1: "A37 CNNer, Oxford Uni Alumni, UK",
        SONPHAM_UK_BIO_2: "Software Engineer, UK",
        SONPHAM_UK_BACK_INFO: "A member of the 37th class A (05-08). Topped his class and won the 3rd prize at the National English contest in 2007. He founded Global CNNers in 2007 and was the Conference Admin in 2009 and 2010. He left for England in 2007 and went on to study A-Level at Padworth College, Reading, then read Computer Science at Worcester College, Oxford University. He is working as a software engineer for Ocado Technology UK.",
        SONPHAM_UK_BACK_EXTRA: "",

        MADMIN_UK_BIO_NAME: "Minh \"madmin\" Dang",
        MADMIN_UK_BIO_1: "I38 CNNer, Lancaster Uni Alumni, UK",
        MADMIN_UK_BIO_2: "SSI, Vietnam",
        MADMIN_UK_BACK_INFO: "A member of the 38th class I (06-09). Minh studied a 2-year A-Level course in England and then read Business and Management at Lancaster Uni. He also spent a year abroad at Richmond University in the States. Minh now lives in Saigon and work for SSI, Vietnam. He is also one of the founding members of Global CNNers and a senior admin/consultant for CNN Conference.",

        // Finland
        THUYTRANG_FIN_BIO_NAME: "Le Thuy Trang",
        THUYTRANG_FIN_BIO_1: "M43 CNNer, Saimaa Uni of Applied Sciences, Finland",
        THUYTRANG_FIN_BIO_2: "Student, Finland",
        THUYTRANG_FIN_BACK_INFO: "A member of the 43rd class M (11-14). She was the chief secretary of her class in 2012. Trang was a member of the CNN Dance Club and as an OGL of Ten Plus 2012. She was also a representative at the Asian Young Leader Convention 2012 held in Singapore. Trang now studies Hotel, Restaurant and Tourism Management at Saimaa Uni of Applied Sciences in Finland",


        MYHANH_SG_BIO_NAME: "Ngo My Hanh",
        MYHANH_SG_BIO_1: "A41 CNNer, Nayang Technological University, Singapore",
        MYHANH_SG_BIO_2: "Student, Singapore",

        KLINH_GER_BIO_NAME: "Nguyễn Khánh Linh",
        KLINH_GER_BIO_1: "G42 CNNer, Exchange Student in Germany 2012-2013",
        KLINH_GER_BIO_2: "Student",


        // Mock staff
        MOCK_BIO_1: "Lorem ipsum dolor sit amet",
        MOCK_BIO_2: "Ut enim ad minim veniam, quis",
        MOCK_BACK_INFO: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }).translations("vn", {
        // Headings
        LANGUAGE_HEADING: "Ngôn ngữ",
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
        SIGNUP: "Đăng ký tham dự",
        SIGNUP_TEXT: "Hãy đăng ký tham dự hội thảo du học Chuyên Ngoại Ngữ tại đây! Sau khi bạn điền đầy đủ thông tin và gửi form, chúng tôi sẽ kiểm tra và gửi thư xác nhận. Hội thảo mở cửa cho cả học sinh các trường ngoài.",
        SIGNUP_CLICK: "Đăng ký!",
        SUPPORT: "Liên hệ trưởng ban tổ chức",
        SUPPORT_TEXT: "Trong trường hợp khẩn cấp hoặc bạn đơn giản cần nói chuyện trực tiếp với một người đại diện ban tổ chức về nội dung, lịch trình hội thảo. Mai Phương, trưởng ban tổ chức hội thảo năm nay, luôn sẵn sàng giúp đỡ!",
        SUPPORT_CLICK: "xxxxxxxx, Mai Phương",
        EMAIL: "Gửi e-mail",
        EMAIL_TEXT: "Bạn có thể hỏi chúng tôi bất kỳ điều gì - về Global CNNers (hội du học sinh Chuyên Ngữ) hay về hội thảo qua e-mail. (Lưu ý: Global CNNers không nhận tư vấn tình cảm tuổi mới lớn :P)",
        EMAIL_CLICK: "Gửi e-mail",
        FACEBOOK: "Ghé qua Facebook của Global CNNers",
        FACEBOOK_TEXT: "Các bản tin du học, thông tin học bổng và cập nhật mới nhất của Global CNNers cũng như CNN Conference sẽ được đăng tại Facebook Page này!",
        FACEBOOK_CLICK: "Global CNNers",

        // Staff
        CONSULT_TITLE: "Cố vấn dự án",
        QA_TITLE: "Nhóm chuyên mục hỏi đáp",
        BOOTH_TITLE: "Nhóm làm quầy thông tin",
        ADMIN_TITLE: "Trưởng ban tổ chức",

        // INDIVIDUAL STAFF
        SONPHAM_UK_BIO_NAME: "Phạm Anh Sơn",
        SONPHAM_UK_BIO_1: "A37 CNNer, ĐH Oxford, Anh Quốc",
        SONPHAM_UK_BIO_2: "Kỹ sư phần mềm, Vương Quốc Anh",
        SONPHAM_UK_BACK_INFO: "Thành viên lớp A khóa 37 (05-08). Học sinh xuất sắc (2006-07) và giải Ba kỳ thi HSG quốc gia tiếng Anh (2006-07). Sáng lập Global CNNers (2007), trưởng ban tổ chức Conference 2009 và 2010. Đến Anh năm 2007 để học A-Level tại Padworth College, Reading và sau đó là 3 năm đại học tại Worcester College, ĐH Oxford chuyên ngành khoa học máy tính. Hiện tại đang làm kỹ sư phần mềm tại công ty Ocado Technology, Anh Quốc.",
        SONPHAM_UK_BACK_EXTRA: "",

        MADMIN_UK_BIO_NAME: "Đặng Trần Minh",
        MADMIN_UK_BIO_1: "I38 CNNer, ĐH Lancaster, Anh Quốc",
        MADMIN_UK_BIO_2: "SSI, Việt Nam",
        MADMIN_UK_BACK_INFO: "Thành viên lớp I khóa 38 (06-09). Minh học 2 năm A-Level và sau đó là đại học ngành quản trị kinh doanh tại Lancaster và dành 1 năm học tại ĐH Richmond, Mỹ. Minh hiện tại đang sống tại Sài Gòn và làm việc cho SSI. Anh là một trong các thành viên sáng lập của hội du học sinh Chuyên Ngữ, và là thành viên ban tổ chức/cố vấn lâu năm của CNN Conference.",

        MPHUONG_US_BIO_NAME: "Nguyễn Mai Phương",
        MPHUONG_US_BIO_1: "M43 CNNer, Bryn Mawr College '18, Pennsylvania, US.",
        MPHUONG_US_BIO_2: "Sinh viên, US",
        MPHUONG_US_BACK_INFO: "Thành viên lớp M khóa 43 (11-14). Chủ tịch CNN English Club 2012-2013 và trưởng BTC Prom The Mayverlous. CNN Idol 2013. Đại diện tham dự Asian Young Leadership Convention 2012, Singapore. Giải Ba Học sinh giỏi Quốc gia Tiếng Anh 2013-2014",
        MPHUONG_US_BACK_EXTRA: "Message to CNNers: \"Not knowing you can't do something, is sometimes all it takes to do it.\" ― Ally Carter. Hãy luôn có lòng tin ở bản thân, dám ước mơ, đặt ra những thử thách cho chính mình! Chỉ cần tin là bạn sẽ làm được thôi, là bạn đã đi được nửa đường rồi. Mình mong là cũng như mình 4 năm về trước, các bạn đến đây sẽ có được những thông tin bổ ích cho định hướng du học của bản thân và hơn cả là được truyền ngọn lửa,  cảm nhận được spirit, bản lĩnh của các thế hệ CNNers thành công đi trước truyền lại!",

        DUCANH_US_BIO_NAME: "Nguyễn Đức Anh",
        DUCANH_US_BIO_1: "A43 CNNer, The Key School, Annapolis, MD",
        DUCANH_US_BIO_2: "Sinh viên",
        DUCANH_US_BACK_INFO: "Thành viên lớp A khóa 43 (11-14). Là một trong số ít học sinh \"lách luật\" nhà trường tham gia 6 câu lạc bộ cùng lúc. Mình nằm trong ban tổ chức chương trình Water Wise được tài trợ bởi Đại sứ quán Mỹ, và từ đó sáng lập và làm chủ tịch của tổ chức Blue Exit, một tổ chức hướng đến việc nâng cao ý thức trong giới trẻ về môi trường. Nhận giải Triển vọng trong cuộc thi thiết kế \"Tắt đèn bật ý tưởng\" 2011. Được nhận học bổng của ASSIST program, một chương trình tạo điều kiện đưa học sinh của trên 20 quốc gia đến với các trường tư tốt nhất của Hoa Kỳ, mình đã theo học tại The Key School tại Annapolis, MD.",

        HIEUANH_US_BIO_NAME: "Trịnh Ngọc Hiếu Anh",
        HIEUANH_US_BIO_1: "B42 CNNer, Duke University '18",
        HIEUANH_US_BIO_2: "Sinh viên, US",
        HIEUANH_US_BACK_INFO: "Giải 3 tiếng anh quốc gia (2012), danh hiệu gương mặt trẻ tiêu biểu cấp ĐHQGHN (2012), học sinh xuất sắc (2011-2012). Phó chủ tịch CNN Shine. Học bổng các trường Thế giới Liên kết UWC tại Costa Rica, chủ tịch CLB Guitar UWCCR và giải thưởng Davis International Award",
        HIEUANH_US_BACK_EXTRA: "\"Happiness is not ready-made; it comes from your actions\"- Dalai Lama. Để đạt được điều mong muốn, bên cạnh nỗ lực cá nhân thì định hướng đúng là rất quan trọng. Vì vậy, hãy tận dụng cơ hội để đi tìm định hướng cho bản thân từ nhiều nơi, và một trong số đó là CNN Conference!",

        THUYTRANG_FIN_BIO_NAME: "Lê Thùy Trang",
        THUYTRANG_FIN_BIO_1: "M43 CNNer, Saimaa Uni of Applied Sciences",
        THUYTRANG_FIN_BIO_2: "Sinh viên, Phần Lan",

        MYHANH_SG_BIO_NAME: "Ngô Mỹ Hạnh",
        MYHANH_SG_BIO_1: "A41 CNNer, Nayang Technological University, Singapore",
        MYHANH_SG_BIO_2: "Sinh viên, Singapore",
        MYHANH_SG_BACK_INFO: "Message to CNNers: Các em ơi đi du học làm gì, ở nhà với bố mẹ đi!",

        KLINH_GER_BIO_NAME: "Nguyễn Khánh Linh",
        KLINH_GER_BIO_1: "G42 CNNer, Học sinh trao đổi tại CHLB Đức 2012-2013",
        KLINH_GER_BIO_2: "Sinh viên",
        KLINH_GER_BACK_INFO: "Thành viên lớp G khóa 42 (10-13).",
        KLINH_GER_BACK_EXTRA: "Lời nhắn nhỉ tới CNNers: Đức có môi trường học tập tốt, hệ thống giáo dục tiên tiến và được sự hỗ trợ nhiều mặt từ chính phủ, đặc biệt là học phí! Tiếng Đức cũng rất hay và logic, cùng với sự phong phú của nền văn hóa Đức khiến nơi đây trở thành điểm đến ưa thích của nhiều học sinh, sinh viên quốc tế trong đó có Việt Nam. Chúc các bạn may mắn và thành công trên con đường đã chọn.",

        KANH_JAP_BIO_NAME: "Nguyễn Kiều Anh",
        KANH_JAP_BIO_1: "A43 CNNer, Đại học APU, Nhật Bản",
        KANH_JAP_BIO_2: "Sinh viên",
        KANH_JAP_BACK_INFO: "Thành viên lớp A khóa 43 (11-14). Học bổng 80% Ritsumeikan Asia Pacific University (APU) Nhật Bản niên khóa 2014-2018, thành viên CLB CNN Shine, tham gia dự án CozyVil (2013), dự án dạy học cho trẻ em có hoàn cảnh khó khăn ở Làng trẻ Hữu Nghị.",
        KANH_JAP_BACK_EXTRA: "Đôi lời nhắn nhủ: du học không chỉ để học mà còn để sống, để trải nghiệm nữa. Do vậy theo mình, việc quan trọng nhất là chọn được một môi trường phù hợp với mình cả về cách học lẫn văn hóa, lối sống. Chỉ khi đó, bạn mới có thể phát huy hoàn toàn tiềm năng và đạt được những kết quả tốt nhất trong quá trình học tập của mình!",

        // Mock staff
        MOCK_BIO_1: "Lorem ipsum dolor sit amet",
        MOCK_BIO_2: "Ut enim ad minim veniam, quis",
        MOCK_BACK_INFO: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    });
    // $translateProvider.preferredLanguage("en");
});
