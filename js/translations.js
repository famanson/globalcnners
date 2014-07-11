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
        HELLO_HEADING: "Hello!",

        // Hello section
        HELLO_TEXT_1: "We are Global CNNers, we've all come together to bring CNN Conference back for the 6th time this summer!",

        // Schedule section
        SCHEDULE_TEXT_1: "Date: 26/07/2014",
        SCHEDULE_TEXT_2: "To attend, you will first need to Register using the link to a form at the bottom of the page",
        SCHEDULE_TITLE_0745: "Opening",
        SCHEDULE_0745: "­Welcome Students & Parents",

        SCHEDULE_TITLE_0800: "Introduction",
        SCHEDULE_0800: "­Introduction of CNN Conference & Conference 2014's Sponsor | Introduction of Guest Speakers",

        SCHEDULE_TITLE_0815: "<span class='flag-icon flag-icon-us'></span> Discussion - US Team",
        SCHEDULE_0815: "­US High School (ASSIST, UWC, Exchange) | US College | College Life | Q&A",

        SCHEDULE_TITLE_0920: "<span class='flag-icon flag-icon-gb'></span> Discussion - UK Team",
        SCHEDULE_0920: "­UK A-level | UK College | Job Opportunities",

        SCHEDULE_TITLE_1000: "Break",
        SCHEDULE_1000: "­Game | Tea Break",

        SCHEDULE_TITLE_1015: "<span class='flag-icon flag-icon-fi'></span> Discussion - Finland Team",
        SCHEDULE_1015: "Studying abroad in Finland, Thuy Trang",

        SCHEDULE_TITLE_1030: "<span class='flag-icon flag-icon-jp'></span> Discussion - Japan Team",
        SCHEDULE_1030: "Studying abroad in Japan, Kieu Anh",

        SCHEDULE_TITLE_1045: "<span class='flag-icon flag-icon-sg'></span> Discussion - Singapore Team",
        SCHEDULE_1045: "Studying abroad in Singapore, My Hanh",

        SCHEDULE_TITLE_1100: "<span class='flag-icon flag-icon-kr'></span> Discussion - Korea Team",
        SCHEDULE_1100: "Studying abroad in Korea, Hien Trang",

        SCHEDULE_TITLE_1115: "The End of Morning Section",

        SCHEDULE_TITLE_1330: "Advisory Booths Open",
        SCHEDULE_1330: "Introduction of CNN Conference & Conference 2014's Sponsor | Instruction of Advisory Booths' Activities",

        SCHEDULE_TITLE_1345: "Activity Fair & Tea Break:",
        SCHEDULE_1345: "Summit Education Services' Booth | US Booths (Assist, UWC, Exchange, Boarding, College) |  UK Booths (School, College and University) | France Booth | Germany Booth | Japan Booth | Korea Booth| Finland Booth| Canada Booth | International Schools in Vietnam's Booth(RMIT + BUV)",

        SCHEDULE_TITLE_1600: "The End of Afternoon Section",


        // Guest Speakers section
        SPEAKERS_TEXT_1: "Globe trotters who will give speeches to share their success story and precious experience at CNN Conference 2014.",

        //Staff section
        STAFF_TEXT_1: "All those helping make this Conference happen. The administrator, speakers, all Q&A and booth staff will be available on the day",
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
        SUPPORT_CLICK: "01662252225 , Mai Phuong",
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
        DESIGN_TITLE:"Designer",
        DESIGN_CONSULT_TITLE: "Designer & Project Consultant",

        // INDIVIDUAL STAFF
        SONPHAM_UK_BIO_NAME: "Pham Anh Son",
        SONPHAM_UK_BIO_1: "A37 CNNer, Oxford Uni Alumni, UK",
        SONPHAM_UK_BIO_2: "Software Engineer, UK",
        SONPHAM_UK_BACK_INFO: "Award for academic distinction 2006-07 | 3rd Prize English National contest 2006-07 | Media Team member of the first 10+ (2008) | Founding member of Global CNNers (2007) | CNN Conference Admin 2009 & 2010 | 50% A-Level scholarship, Padworth College, Reading, UK (2007) | Gold ('08) & Silver ('09) Prize UK Maths Challenge | Computer Science graduate, Oxford Uni, UK (2012) | Software engineer at Ocado Technology, UK",
        SONPHAM_UK_BACK_EXTRA: "Message to CNNers: in order to succeed in anything, you need to really want it and pursue it to the end. My story can be summed up in a sentence: I believe there's an answer to every question, one just needs to look harder! Sheer determination can do lots of things.",

        MADMIN_UK_BIO_NAME: "Minh \"madmin\" Dang",
        MADMIN_UK_BIO_1: "I38 CNNer, Lancaster Uni Alumni, UK",
        MADMIN_UK_BIO_2: "SSI, Vietnam",
        MADMIN_UK_BACK_INFO: "Minh studied a 2-year A-Level course in England and then read Business and Management at Lancaster Uni. He also spent a year abroad at Richmond University in the States. Minh now lives in Saigon and work for SSI, Vietnam. He is also one of the founding members of Global CNNers and a senior admin/consultant for CNN Conference.",

        MPHUONG_US_BIO_NAME: "Nguyen Mai Phuong",
        MPHUONG_US_BIO_1: "M43 CNNer, Bryn Mawr College ‘18, US",
        MPHUONG_US_BIO_2: "Administrator, CNN Conference 2014",
        MPHUONG_US_BACK_INFO: "CNN English Club President 2012-13 | Lead Organizer, Prom The Mayverlous - CNN Idol 2013 | FLSS Representative at Asian Young Leadership Convention 2012, Singapore | 3rd Prize, National English Contest 2013-14 | Top 10 Front The Most 2013",
        MPHUONG_US_BACK_EXTRA: "Message to CNNers: My favorite quotation is “Not knowing you can't do something, is sometimes all it takes to do it.” ― Ally Carter. Always believe in yourself, and you’re already halfway on making your dream come true. I hope that, just like me 4 years ago, you guys will acquire useful information about studying abroad, and more importantly, feel and understand the amazing skill and spirit of former successful CNNers! See you all at the Conference this coming 26th of July !!!" ,

        BAOTRAN_US_BIO_NAME: "Ly Bao Tran",
        BAOTRAN_US_BIO_1: "A42 CNNer, Sewanee - Uni of the South '18, US",
        BAOTRAN_US_BIO_2: "Designer & Consultant, CNN Conference 2014",
        BAOTRAN_US_BACK_INFO: "CNN Conference 2013 Administator. Not coming back to Vietnam this summer, she decided to take on a new position as CNN Conference 2014 Designer and Project Consultant. Tran now works in New York City while supporting our conference by drawing bunny and air balloons everyday!",

        DUCANH_US_BIO_NAME:"Nguyen Duc Anh",
        DUCANH_US_BIO_1: "A43 CNNer",
        DUCANH_US_BIO_2: "The Key School, Annapolis, MD (ASSIST)",
        DUCANH_US_BACK_INFO: "ASSIST Scholar 2013 | Organizing Board, Water Wise Project hosted by the U.S. Embassy | Founder & President, Blue Exit Organization (Promote youth awareness of environmental issues) | Potential Award, “Tat den bat y tuong” Contest, 2011",
        DUCANH_US_BACK_EXTRA:"Continuing my family legacy, I am the fourth generation at FLSS. There was a time when I participated 6 organizations at the same time, and now own a complete set of FLSS’s clubs’ uniforms!",

        HIEUANH_US_BIO_NAME: "Trinh Ngoc Hieu Anh",
        HIEUANH_US_BIO_1: "B43 CNNer",
        HIEUANH_US_BIO_2: "Costa Rica UWC & Duke University '18, US",
        HIEUANH_US_BACK_INFO: "UWC Scholarship in Costa Rica, 2012 - 2013 | Davis International Award | President, Guitar Club at UWCCR | Third Prize, National English Contest, 2012 | Distinctive Award, Vietnam National University, 2012 | Vice President, CNN Shine",
        HIEUANH_US_BACK_EXTRA: "Message to CNNers: In order to achieve your goal, besides individual effort, precise orientation is also very essential. Take advantage of varied chances and sources to assist your decision-making process. In other words, COME VISIT US AT CNN CONFERENCE 2014!",

        THUYTRANG_FIN_BIO_NAME: "Le Thuy Trang",
        THUYTRANG_FIN_BIO_1: "M43 CNNer",
        THUYTRANG_FIN_BIO_2: "Saimaa Uni of Applied Sciences, Finland",
        THUYTRANG_FIN_BACK_INFO: "FLSS Representative, Asian Young Leader Convention, 2012 | Chief secretary, M43 Member, CNN Dance Club | Orientation Group Leader, Ten Plus 2012",

        MYHANH_SG_BIO_NAME: "Ngo My Hanh",
        MYHANH_SG_BIO_1: "A41 CNNer",
        MYHANH_SG_BIO_2: "Nayang Technological University, Singapore",
        MYHANH_SG_BACK_INFO: "Message to CNNers: Why studying abroad? Stay at home with Mommy & Daddy!!!",

        KLINH_GER_BIO_NAME: "Nguyen Khanh Linh",
        KLINH_GER_BIO_1: "G42 CNNer",
        KLINH_GER_BIO_2: "AFS Germany Scholarship 2012-13",
        KLINH_GER_BACK_INFO: "Message to CNNers: With a very forward education system and amazing financial support from the government, Germany has become a top destination for studying abroad. It’s really easy to fall in love with such a fun and logical language, and a very diverse culture. Good luck and have fun on your study abroad journey!",

        KANH_JAP_BIO_NAME: "Nguyen Kieu Anh",
        KANH_JAP_BIO_1: "A43 CNNer",
        KANH_JAP_BIO_2: "Asia Pacific University ‘18, Japan",
        KANH_JAP_BACK_INFO: "80% Scholarship at Ritsumeikan Asia Pacific University (APU) Class of 2018  CNN Shine Member | CozyVil Project 2013",
        KANH_JAP_BACK_EXTRA: "Message to CNNers: Someone used to tell me that studying abroad is not just to study, but to live, and to experience. Therefore, when you are looking for a location, look deeply into its local environment and life. The most important thing is to find the most suitable environment in which you can fully develop your mindset and skill set in order to achieve the best results. Make the best effort to do research and explore a variety of options to make the best decision!",


        MINHNGOC_UK_BIO_NAME: "Ngo Minh Ngoc",
        MINHNGOC_UK_BIO_1: "A43 CNNer",
        MINHNGOC_UK_BIO_2: "Cambridge Tutor College 2012-14, UK",
        MINHNGOC_UK_BACK_INFO: "Full scholarship A-level at Cambridge Tutor College | Bronze Award UK Math Challenge, 2013 | Orientation Group Leader, Ten Plus 2012",
        MINHNGOC_UK_BACK_EXTRA: "Message to CNNers: COME TO THE UK!!! IT'S SO COOOOOOOL :)",

        HONGCHAU_UK_BIO_NAME: "Dinh Hong Chau",
        HONGCHAU_UK_BIO_1:"P44 CNNer",
        HONGCHAU_UK_BIO_2: "Ruthin School '16, UK",
        HONGCHAU_UK_BACK_INFO: "CNN Shine Member | PR Team, The Point Fund-raising Project, 2012 (hosted by CNN Pencil Club) | Head Admin, CNN Zoom Magazine, 2013 – 2014 | Organizing Team, “Finger Print K43 – Memory Station 2014” Yearbook | Content Developing Team, Hanoi Food Rescue Project Partner, “The Gioi Tuoi Tho” Magazine, Kim Dong Publisher",
        HONGCHAU_UK_BACK_EXTRA: "Message to CNNers: Dream big. Work hard. Your dream will come true, just like mine!",

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
        HELLO_TEXT_1: "Chúng tôi là Hội du học sinh Chuyên Ngữ, tụ hội mùa hè này để đưa hội thảo du học CNN trở lại lần thứ 6!",

        // Schedule section
        SCHEDULE_TEXT_1: "Ngày diễn ra hội thảo: 26/07/2014",
        SCHEDULE_TEXT_2: "Lưu ý: Để tham dự hội thảo, xin vui lòng đăng ký tại đường dẫn ở cuối trang",
        SCHEDULE_TITLE_0745: "Hội thảo mở cửa",
        SCHEDULE_0745: "­Tiếp đón học sinh và phụ huynh",

        SCHEDULE_TITLE_0800: "Lời mở đầu",
        SCHEDULE_0800: "­Giới thiệu chương trình và nhà tài trợ | Giới thiệu các khách mời chương trình",

        SCHEDULE_TITLE_0815: "<span class='flag-icon flag-icon-us'></span> Thuyết trình - Du học Hoa Kỳ",
        SCHEDULE_0815: "­Du học Mỹ hệ trung học (ASSIST, UWC, Exchange) | Tổng quan về du học US hệ đại học | Đời sống du học sinh | Hỏi đáp với khách mời",

        SCHEDULE_TITLE_0920: "<span class='flag-icon flag-icon-gb'></span> Thuyết trình - Du học Anh Quốc",
        SCHEDULE_0920: "­Du học Anh hệ A-Level | Du học Anh hệ đại học | Cơ hội việc làm",

        SCHEDULE_TITLE_1000: "Giải lao",
        SCHEDULE_1000: "­Trò chơi | Đồ uống nhẹ",

        SCHEDULE_TITLE_1015: "<span class='flag-icon flag-icon-fi'></span> Thuyết trình - Du học Phần Lan",
        SCHEDULE_1015: "Du học Phần Lan, Thùy Trang",

        SCHEDULE_TITLE_1030: "<span class='flag-icon flag-icon-jp'></span> Thuyết trình - Du học Nhật Bản",
        SCHEDULE_1030: "Du học Nhật Bản, Kiều Anh",

        SCHEDULE_TITLE_1045: "<span class='flag-icon flag-icon-sg'></span> Thuyết trình - Du học Singapore",
        SCHEDULE_1045: "Du học Singapore, Mỹ Hạnh",

        SCHEDULE_TITLE_1100: "<span class='flag-icon flag-icon-kr'></span> Thuyết trình - Du học Hàn Quốc",
        SCHEDULE_1100: "Du học Hàn Quốc, Hiền Trang",

        SCHEDULE_TITLE_1115: "Kết thúc chương trình buổi sáng",

        SCHEDULE_TITLE_1330: "Quầy tư vấn du học mở cửa",
        SCHEDULE_1330: "Giới thiệu chương trình và nhà tài trợ | Giới thiệu cách thức hoạt động của booth",

        SCHEDULE_TITLE_1345: "Quầy tư vấn du học dạng Fair & Tea Break:",
        SCHEDULE_1345: "Quầy Nhà tài trợ Summit Quầy Du học Mỹ (Assist, UWC, Exchange, Boarding, College) |  Quầy Du học Anh Quốc (School, College and University) | Quầy Du học Pháp | Quầy Du học Đức | Quầy Du học Nhật | Quầy Du học Hàn Quốc | Quầy Du học Phần Lan | Quầy Du học Canada | Quầy các chương trình liên kết & du học tại chỗ (RMIT + BUV)",

        SCHEDULE_TITLE_1600: "Kết thúc chương trình buổi chiều",

        // Guest Speakers section
        SPEAKERS_TEXT_1: "Các bạn và anh chị du học sinh Chuyên Ngữ là khách mời đến chia sẻ kinh nghiệm và bí quyết thành công tại hội thảo du học CNN 2014.",

        //Staff section
        STAFF_TEXT_1: "Tất cả các thành viên trong ban tổ chức. Trưởng BTC, các bạn làm thuyết trình, trong đội hỏi-đáp, quầy thông tin sẽ có mặt trong ngày hội thảo",
        FLAG_PICKER_TIP_1: "Bấm vào cờ một nước để hiển thị các thành viên của nước đó",
        FLAG_PICKER_TIP_2_1: "Bấm vào cờ đang họat động để xóa bộ lọc",
        FLAG_PICKER_TIP_2_2: "hoặc vào một cờ còn lại để đổi sang nước khác",

        // Documents section
        DOCS_CONVENIENT: "Thuận tiện",
        DOCS_CONVENIENT_TEXT: "Những năm trước, BTC thường gửi email tài liệu chương trình cho các bạn tham dự hội thảo. Năm nay, BTC CNN Conference 2014 chia sẻ toàn bộ tài liệu chương trình trên Google Drive cho việc cập nhật dữ liệu nhanh chóng và hiệu quả hơn. ",
        DOCS_ORG: "Tổ Chức",
        DOCS_ORG_TEXT: "Mỗi nước sẽ có một thư mục riêng, và mỗi tệp tin đều được ghi chú tên tác giả, và lưu theo dạng ppt/doc để có thể cập nhật dễ dàng với các công cụ Microsoft Office thông thường.",
        DOCS_THOUGHT: "Bản Quyền",
        DOCS_THOUGHT_TEXT: "BTC CNN Conference không được phép đăng tải những tài liệu không thuộc sự quản lý của Global CNNers. Do vậy, trong mỗi thư mục của các nước sẽ có danh sách tên những tài liệu tham khảo mà các bạn nên tìm đọc.",
        DOCS_CLICK: "Thích thì Click!",

        // Contact section
        SIGNUP: "Đăng ký tham dự",
        SIGNUP_TEXT: "Hãy đăng ký tham dự hội thảo du học Chuyên Ngoại Ngữ tại đây! Sau khi bạn điền đầy đủ thông tin và gửi form, chúng tôi sẽ kiểm tra và gửi thư xác nhận. Hội thảo mở cửa cho cả học sinh các trường ngoài.",
        SIGNUP_CLICK: "Đăng ký!",
        SUPPORT: "Liên hệ trưởng ban tổ chức",
        SUPPORT_TEXT: "Trong trường hợp khẩn cấp hoặc bạn đơn giản cần nói chuyện trực tiếp với một người đại diện ban tổ chức về nội dung, lịch trình hội thảo. Mai Phương, trưởng ban tổ chức hội thảo năm nay, luôn sẵn sàng giúp đỡ!",
        SUPPORT_CLICK: "01662252225 , Mai Phương",
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
        DESIGN_TITLE: "Thiết kế",
        DESIGN_CONSULT_TITLE: "Thiết kế & Cố vấn dự án",

        // INDIVIDUAL STAFF
        SONPHAM_UK_BIO_NAME: "Phạm Anh Sơn",
        SONPHAM_UK_BIO_1: "A37 CNNer, ĐH Oxford, Anh Quốc",
        SONPHAM_UK_BIO_2: "Kỹ sư phần mềm, Anh Quốc",
        SONPHAM_UK_BACK_INFO: "Học sinh xuất sắc 2006-07 | Giải Ba HSG quốc gia tiếng Anh 2006-07 | Thành viên Media Team 10+ đầu tiên (2008) | Sáng lập Global CNNers (2007) | Trưởng ban tổ chức Conference 2009 & 2010 | Học bổng A-Level 50%, Padworth College, Reading, Anh Quốc (2007) | Giải Vàng ('08) & Bạc ('09) UK Maths Challenge | Tốt nghiệp Đại Học Oxford, Anh Quốc chuyên ngành Khoa Học Máy Tính (2012) | Kỹ sư phần mềm tại Ocado Technology UK",
        SONPHAM_UK_BACK_EXTRA: "Lời nhắn cho các CNNers: để làm nên bất cứ chuyện gì, các em cần thật sự ham muốn và theo đuổi nó đến cùng. Có thể tóm gọn câu chuyện của anh trong một câu: anh tin rằng mọi vấn đề đều có lời giải, mình chỉ cần tìm kỹ hơn! Sự quyết tâm có thể tạo rất nhiều khác biệt.",

        MADMIN_UK_BIO_NAME: "Đặng Trần Minh",
        MADMIN_UK_BIO_1: "I38 CNNer, ĐH Lancaster, Anh Quốc",
        MADMIN_UK_BIO_2: "SSI, Việt Nam",
        MADMIN_UK_BACK_INFO: "Minh học 2 năm A-Level và sau đó là đại học ngành quản trị kinh doanh tại Lancaster và dành 1 năm học tại ĐH Richmond, Mỹ. Minh hiện tại đang sống tại Sài Gòn và làm việc cho SSI. Anh là một trong các thành viên sáng lập của hội du học sinh Chuyên Ngữ, và là thành viên ban tổ chức/cố vấn lâu năm của CNN Conference.",

        MINHNGOC_UK_BIO_NAME: "Ngô Minh Ngọc",
        MINHNGOC_UK_BIO_1: "A43 CNNer",
        MINHNGOC_UK_BIO_2: "Cambridge Tutors College 2012-14, Anh Quốc",
        MINHNGOC_UK_BACK_INFO: "Học bổng 100% Khóa học A-level 2 năm tại Cambridge Tutors College, Anh Quốc | Huy Chương Đồng UK Math Challenge, 2013 | Định hướng viên, Chương trình 10+ 2012",
        MINHNGOC_UK_BACK_EXTRA: "Hãy đến với Anh Quốc!!! Thích lắm các em ơiiiiii :) !",

        HONGCHAU_UK_BIO_NAME: "Đinh Hồng Châu",
        HONGCHAU_UK_BIO_1: "P44 CNNer",
        HONGCHAU_UK_BIO_2: "Ruthin School '16, Anh Quốc",
        HONGCHAU_UK_BACK_INFO: "Tình nguyện viên câu lạc bộ CNN Shine | Ban PR Chương trình triển lãm từ thiện The point 2012 (do CNN Pencil Club tổ chức) | Head Admin nội san CNN Zoom (2013 – 2014) | Thành viên ban Kỷ yếu “Vân tay K43 – Trạm ký ức” (2014) | Thành viên ban Nội dung dự án Hanoi Food Rescue | Cộng tác viên tạp chí “Thế giới tuổi thơ” (NXB Kim Đồng)",
        HONGCHAU_UK_BACK_EXTRA: "Dream big. Work hard. Your dream will come true, just like mine!",

        MPHUONG_US_BIO_NAME: "Nguyễn Mai Phương",
        MPHUONG_US_BIO_1: "M43 CNNer, Bryn Mawr College '18, US",
        MPHUONG_US_BIO_2: "Sinh viên, Hoa Kỳ",
        MPHUONG_US_BACK_INFO: "Cựu Chủ tịch CNN English Club 2012-2013 | Trưởng BTC Prom The Mayverlous - CNN Idol 2013 | Đại diện tham Dự Asian Young Leadership Convention 2012, Singapore | Giải Ba HSG Quốc gia Tiếng Anh 2013-14",
        MPHUONG_US_BACK_EXTRA: "Lời nhắn nhủ tới CNNers: \"Not knowing you can't do something, is sometimes all it takes to do it.\" ― Ally Carter. Hãy luôn có lòng tin ở bản thân, là bạn đã đi được nửa đường rồi. Mình mong là cũng như mình 4 năm về trước, các bạn đến đây sẽ có được những thông tin bổ ích cho định hướng du học của bản thân và hơn cả là được truyền ngọn lửa,  cảm nhận được spirit, bản lĩnh của các thế hệ CNNers thành công đi trước truyền lại!",

        BAOTRAN_US_BIO_NAME: "Lý Bảo Trân",
        BAOTRAN_US_BIO_1: "A42 CNNer, Sewanee - Uni of the South '18, US",
        BAOTRAN_US_BIO_2: "Thiết kế & Cố vấn dự án CNN Conference 2014",
        BAOTRAN_US_BACK_INFO: "Cựu Trưởng BTC CNN Conference 2013. Mùa hè này, Bảo Trân đang công tác tại thành phố New York và không có cơ hội về thăm Việt Nam. Do đó, Trân quyết định tham gia chương trình ở một vị trí mới là nhà thiết kế và cố vấn. Nói nôm na là vẽ thỏ và khinh khí cầu hàng ngày :)!",

        DUCANH_US_BIO_NAME: "Nguyễn Đức Anh",
        DUCANH_US_BIO_1: "A43 CNNer",
        DUCANH_US_BIO_2: "The Key School, Annapolis, MD (ASSIST)",
        DUCANH_US_BACK_INFO: "Trong một gia đình đã 4 lần gắn bó với Chuyên Ngữ, CNN không còn lạ lùng với mình nữa. Là một trong số ít học sinh \"lách luật\" nhà trường tham gia 6 câu lạc bộ cùng lúc, mình đã có một bố sưu tập áo đồng phục CNN khá đầy đủ. Thành viên BTC Chương Trình Water Wise được tài trợ bởi ĐSQ Mỹ. Nhận học bổng ASSIST, một chương trình tạo điều kiện đưa học sinh của trên 20 quốc gia đến với các trường tư tốt nhất của Hoa Kỳ, mình đã theo học tại The Key School tại Annapolis, MD.",
        DUCANH_US_BACK_EXTRA:"Sáng lập viên và Chủ tịch của tổ chức Blue Exit, một tổ chức hướng đến việc nâng cao ý thức trong giới trẻ về môi trường | Nhận giải Triển vọng trong cuộc thi thiết kế \"Tắt đèn bật ý tưởng\" 2011",


        HIEUANH_US_BIO_NAME: "Trịnh Ngọc Hiếu Anh",
        HIEUANH_US_BIO_1: "B42 CNNer",
        HIEUANH_US_BIO_2: "Costa Rica UWC & Duke University '18",
        HIEUANH_US_BACK_INFO: "Học bổng các trường Thế giới Liên kết UWC tại Costa Rica | Chủ tịch CLB Guitar UWCCR và giải thưởng Davis International Award | Giải 3 tiếng anh quốc gia (2012) | Danh hiệu gương mặt trẻ tiêu biểu cấp ĐHQGHN (2012) | Phó chủ tịch CNN Shine",
        HIEUANH_US_BACK_EXTRA: "Lời nhắn nhủ tới CNNers: \"Happiness is not ready-made; it comes from your actions\"- Dalai Lama. Để đạt được điều mong muốn, bên cạnh nỗ lực cá nhân thì định hướng đúng là rất quan trọng. Vì vậy, hãy tận dụng cơ hội để đi tìm định hướng cho bản thân từ nhiều nơi, và một trong số đó là CNN Conference!",

        THUYTRANG_FIN_BIO_NAME: "Lê Thùy Trang",
        THUYTRANG_FIN_BIO_1: "M43 CNNer",
        THUYTRANG_FIN_BIO_2: "Saimaa Uni of Applied Sciences, Phần Lan",
        THUYTRANG_FIN_BACK_INFO: "Thành viên CLB CNN Dance Club | Đại diện tham gia CT Hội Nghị Thủ lĩnh Châu Á tại Singapore năm 2012 | Định Hướng Viên Chương trình 10+ 2012",
        THUYTRANG_FIN_BACK_EXTRA: "Học ngành Hotel, Restaurant and Tourism Management, Saimaa University of Applied Sciences",

        MYHANH_SG_BIO_NAME: "Ngô Mỹ Hạnh",
        MYHANH_SG_BIO_1: "A41 CNNer",
        MYHANH_SG_BIO_2: "Nayang Technological University, Singapore",
        MYHANH_SG_BACK_INFO: "Lời nhắn nhủ tới CNNers: Các em ơi đi du học làm gì, ở nhà với bố mẹ đi!",

        KLINH_GER_BIO_NAME: "Nguyễn Khánh Linh",
        KLINH_GER_BIO_1: "G42 CNNer",
        KLINH_GER_BIO_2: "Học sinh trao đổi tại CHLB Đức 2012-2013",
        KLINH_GER_BACK_INFO: "Học bổng AFS, Chương trình Trao đổi Học sinh tại CHLB Đức",
        KLINH_GER_BACK_EXTRA: "Lời nhắn nhủ tới CNNers: Đức có môi trường học tập tốt, hệ thống giáo dục tiên tiến và được sự hỗ trợ nhiều mặt từ chính phủ, đặc biệt là học phí! Tiếng Đức cũng rất hay và logic, cùng với sự phong phú của nền văn hóa Đức khiến nơi đây trở thành điểm đến ưa thích của nhiều học sinh, sinh viên quốc tế trong đó có Việt Nam. Chúc các bạn may mắn và thành công trên con đường đã chọn.",

        KANH_JAP_BIO_NAME: "Nguyễn Kiều Anh",
        KANH_JAP_BIO_1: "A43 CNNer",
        KANH_JAP_BIO_2: "Đại học APU, Nhật Bản",
        KANH_JAP_BACK_INFO: "Học bổng 80% Ritsumeikan Asia Pacific University (APU) Nhật Bản niên khóa 2014-2018 | Thành viên CLB CNN Shine, tham gia dự án CozyVil (2013), dự án dạy học cho trẻ em có hoàn cảnh khó khăn ở Làng trẻ Hữu Nghị.",
        KANH_JAP_BACK_EXTRA: "Lời nhắn nhủ tới CNNers: Có một người từng nói với mình rằng đi du học không chỉ để học mà còn để sống, để trải nghiệm nữa. Do vậy theo mình, việc quan trọng nhất là chọn được một môi trường phù hợp với mình cả về cách học lẫn văn hóa, lối sống. Chỉ khi đó, bạn mới có thể phát huy hoàn toàn tiềm năng và đạt được những kết quả tốt nhất trong quá trình học tập của mình!",

        HTRANG_KR_BIO_NAME: "Nguyễn Hiền Trang",
        HTRANG_KR_BIO_1: "G43 CNNer",
        HTRANG_KR_BIO_2: "Underwood Intl. College - ĐH Yonsei, Hàn Quốc",
        HTRANG_KR_BACK_INFO: "",
        HTRANG_KR_BACK_EXTRA: "",

        // Mock staff
        MOCK_BIO_1: "Lorem ipsum dolor sit amet",
        MOCK_BIO_2: "Ut enim ad minim veniam, quis",
        MOCK_BACK_INFO: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    });
    // $translateProvider.preferredLanguage("en");
});
