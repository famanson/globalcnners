// Translation for the base of the page

app.config(function ($translateProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $translateProvider.translations("en", {
        // Headings
        LANGUAGE_HEADING: "Ngôn ngữ",
        TITLE_HEADING: "CNN Conference 2014",
        CONTACT_HEADING: "Register/Contact Us",
        TESTIMONIALS_HEADING: "Testimonials",
        DOCS_HEADING: "Resources",
        STAFF_HEADING: "Our Crew",
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
        SCHEDULE_1330: "Introduction of CNN Conference & Conference 2014's Sponsor | Instruction to Advisory Booths' Activities",

        SCHEDULE_TITLE_1345: "Activity Fair & Tea Break:",
        SCHEDULE_1345: "Summit Education Services' Booth | US Booths (Assist, UWC, Exchange, Boarding, College) |  UK Booths (School, College and University) | France Booth | Germany Booth | Japan Booth | Korea Booth| Finland Booth| Canada Booth | International Schools in Vietnam's Booth (RMIT + BUV)",

        SCHEDULE_TITLE_1600: "The End of Afternoon Section",

        //Staff section
        STAFF_TEXT_1: "CNN Conference would not even exist in the first place without all these passionate globe trotters.",
        STAFF_TEXT_2: "The administrator, speakers, all Q&A and booth staff will be available on the Conference day.",
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
        SUPPORT_CLICK: "01662252225, Mai Phuong",
        EMAIL: "Drop us an e-mail",
        EMAIL_TEXT: "You can ask just about anything about Global CNNers and the Conference. (Sorry we don't do romance consultancy :P)",
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
        CONTRIBUTOR_TITLE:"Contributor",
        SPEAKER_TITLE: "<i class='fa fa-microphone'></i> Speaker",
        DESIGN_CONSULT_TITLE: "Designer & Project Consultant",

        // INDIVIDUAL STAFF
        SONPHAM_UK_BIO_NAME: "Pham Anh Son",
        SONPHAM_UK_BIO_1: "A37 CNNer, Oxford Uni Alumni, UK",
        SONPHAM_UK_BIO_2: "Software Engineer, UK",
        SONPHAM_UK_BACK_INFO: "Award for Academic Excellence 2006-07 | 3rd Prize English National contest 2006-07 | Media Team member of the first 10+ (2008) | Founding member of Global CNNers (2007) | CNN Conference Admin 2009 & 2010 | 50% A-Level scholarship, Padworth College, Reading, UK (2007) | Gold ('08) & Silver ('09) Prize UK Maths Challenge | Computer Science graduate, Oxford Uni, UK (2012) | Software engineer at Ocado Technology, UK",
        SONPHAM_UK_BACK_EXTRA: "Message to CNNers: in order to succeed in anything, you need to really want it and pursue it to the end. My story can be summed up in a sentence: I believe there's an answer to every question, one just needs to look harder! Sheer determination can do lots of things.",

        MADMIN_UK_BIO_NAME: "Minh \"madmin\" Dang",
        MADMIN_UK_BIO_1: "I38 CNNer, Lancaster Uni Alumni, UK",
        MADMIN_UK_BIO_2: "SSI, Vietnam",
        MADMIN_UK_BACK_INFO: "2-year A-Level course at Abacus College, Oxford | Business and Management at Lancaster University | One year abroad at Richmond University in the US | Currently lives in Saigon and work for SSI, Vietnam | One of the founding members of Global CNNers | Senior admin/consultant for CNN Conference",
        MADMIN_UK_BACK_EXTRA: "Message to CNNers: When you are young, do not pass up on any opportunity. If succeed, win. If fail, win experience. That's how we founded Global CNNers.",

        MPHUONG_US_BIO_NAME: "Nguyen Mai Phuong",
        MPHUONG_US_BIO_1: "M43 CNNer, Bryn Mawr College ‘18, US",
        MPHUONG_US_BIO_2: "Administrator, CNN Conference 2014",
        MPHUONG_US_BACK_INFO: "CNN English Club President 2012-13 | Lead Organizer, Prom The Mayverlous - CNN Idol 2013 | FLSS Representative at Asian Young Leadership Convention 2012, Singapore | 3rd Prize, National English Contest 2013-14 | Top 10 Front The Most 2013",
        MPHUONG_US_BACK_EXTRA: "Message to CNNers: \"Not knowing you can't do something, is sometimes all it takes to do it.\" ― Ally Carter. Always believe in yourself, and you’re already halfway on making your dream come true. I hope that, just like me 4 years ago, you guys will acquire useful information about studying abroad, and more importantly, feel and understand the amazing skill and spirit of former successful CNNers! See you all at the Conference this coming 26th of July !!!" ,

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

        CHIHUYNH_US_BIO_NAME: "Huynh Ngoc Yen Chi",
        CHIHUYNH_US_BIO_1: "A41 CNNer",
        CHIHUYNH_US_BIO_2: "UWCSEA & Georgia Institute of Technology '17",
        CHIHUYNH_US_BACK_INFO: "Academic Excellence Award (2009-10 & 2010-11) | Asian Young Leaders Convention 2010 | Second Prize, National English Contest 2011 | UWCSEA Scholarship Singapore 2011 | The Hague International Model UN Conference 2012 | Lizanne & Robert A. Milton Scholarship, Georgia Institute of Technology, Atlanta",
        CHIHUYNH_US_BACK_EXTRA: "Message to CNNers: Study abroad is a dream that comes with many unforeseeable challenges. However, it is determination and sensible risk-taking that complete one's growth and discovery. Grab every opportunity that comes your way because you will gain invaluable understanding of people and places.",

        DUYKHANH_US_BIO_NAME: "Doan Duy Khanh",
        DUYKHANH_US_BIO_1: "G44 CNNer",
        DUYKHANH_US_BIO_2: "UWC Scholar (Atlantic College, US)",
        DUYKHANH_US_BACK_INFO: "Vice President, CNNShine 2013 - 2014 | Member, Diao Basketball Club| Third Prize, English Olympic Online Contest, 2012 | United World of Atlantic College Scholarship",
        DUYKHANH_US_BACK_EXTRA: "Message to CNNers: \"Success is not final, failure is not fatal, it is the courage to continue that counts\" - Winston Churchill. Studying abroad has become very popular recently. The process of choosing the right location and programs is of course very important. Come to CNN Conference to discover many studying abroad options and opportunities, and make the right decision. Believe  in yourself and success shall come to you.",

        DOMINHTRI_US_BIO_NAME: "Do Minh Tri",
        DOMINHTRI_US_BIO_1: "H42 CNNer",
        DOMINHTRI_US_BIO_2: "Tabor Academy '14 & Georgetown University '18",
        DOMINHTRI_US_BACK_INFO: "Founder, Global Service Project| Writer, Travel + Leisure Online Magazine | Partner, Shorenstein Center, Harvard Kennedy School | National AP Scholar - College Board | Hobbies: Tennis, bóng Soccer + PES, eat, karaoke,…",
        DOMINHTRI_US_BACK_EXTRA: " Message to CNNers: I often view life as a marathon and the last stage of the race is always the most important. You guys have a very ideal beginning as a CNNer. Now, let’s take advantage of CNN Conference 2014 to navigate the right way to keep moving forward.",

        THUYNGAN_US_BIO_NAME: "Nguyen Thuy Ngan",
        THUYNGAN_US_BIO_1: "M42 CNNer",
        THUYNGAN_US_BIO_2: "Macalester College '17",
        THUYNGAN_US_BACK_INFO: "Potential Award, Teen Entrepreneur 2013 | Kofi Annan Scholarship, Macalester College |Founder, Dandelion Project – Establish a technology center, library, and school for in-need children in Lap Thach, Vinh Phuc (2014) | Residence Assistant, Macalester College (2014-15)",
        THUYNGAN_US_BACK_EXTRA: "Studying abroad is a big turning point on my journey to find \”Who am I?\”. I immersed myself in many new experiences, and day by day perfects myself and become more mature in a professional American education system. Studying abroad is not easy, but \”where there is a will there is a way\”. Be confident and patient, and don’t forget that you guys always have Global CNNers who gives the best support and belief in you.",


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

        THUCANH_JAP_BIO_NAME: "Ha Thuc Anh",
        THUCANH_JAP_BIO_1: "A43 CNNer",
        THUCANH_JAP_BIO_2: "Nagoya University, Japan",
        THUCANH_JAP_BACK_INFO: "Full Scholarship, Nagoya University ‘18 | Member, CNN English Club 2011 | Member, Water Wise and Water & Home Project, 2012 | Teaching Assistant, UNESCO Foreign Language & Training",
        THUCANH_JAP_BACK_EXTRA: "Message to CNNers: The reason that I picked Japan instead of US or UK is because of very ideal education system and studying environment at prestigious universities, as well as great characteristics from Japanese citizens. I believe that college is not about plain lecture on class, but also about learning to become a better person. And Japan is a perfect destination to achieve that goal.",

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

        HTRANG_KR_BIO_NAME: "Nguyen Hien Trang",
        HTRANG_KR_BIO_1: "G43 CNNer",
        HTRANG_KR_BIO_2: "Underwood Intl. College – Yonsei Uni, S.Korea",
        HTRANG_KR_BACK_INFO: "",
        HTRANG_KR_BACK_EXTRA: "",

        PANH_KR_BIO_NAME: "Pham Phuong Anh",
        PANH_KR_BIO_1: "H42 CNNer",
        PANH_KR_BIO_2: "Underwood Intl. College – Yonsei Uni, S.Korea",
        PANH_KR_BACK_INFO: "A current sophomore at Underwood International College, Yonsei University, South Korea ",
        PANH_KR_BACK_EXTRA: "Message to CNNers: South Korea has one of the most developed economy and education in the world. Come to this beautiful country and you guys won’t just learn, but also will experience many interesting adventures. Make your best effort today and have a promising future await! Be brave, be decisive!",


        // Mock staff
        MOCK_BIO_1: "Lorem ipsum dolor sit amet",
        MOCK_BIO_2: "Ut enim ad minim veniam, quis",
        MOCK_BACK_INFO: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }).translations("vn", {
        // Headings
        LANGUAGE_HEADING: "Language",
        CONTACT_HEADING: "Đăng ký/Liên hệ",
        TESTIMONIALS_HEADING: "Testimonials",
        DOCS_HEADING: "Tài liệu",
        STAFF_HEADING: "Thành viên BTC",
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

        SCHEDULE_TITLE_0815: "<span class='flag-icon flag-icon-us'></span> Thuyết trình/Đối thoại - Du học Hoa Kỳ",
        SCHEDULE_0815: "­Du học Mỹ hệ trung học (ASSIST, UWC, Exchange) | Tổng quan về du học US hệ đại học | Đời sống du học sinh | Hỏi đáp với khách mời",

        SCHEDULE_TITLE_0920: "<span class='flag-icon flag-icon-gb'></span> Thuyết trình/Đối thoại - Du học Anh Quốc",
        SCHEDULE_0920: "­Du học Anh hệ A-Level | Du học Anh hệ đại học | Cơ hội việc làm",

        SCHEDULE_TITLE_1000: "Giải lao",
        SCHEDULE_1000: "­Trò chơi | Đồ uống nhẹ",

        SCHEDULE_TITLE_1015: "<span class='flag-icon flag-icon-fi'></span> Thuyết trình/Đối thoại - Du học Phần Lan",
        SCHEDULE_1015: "Du học Phần Lan, Thùy Trang",

        SCHEDULE_TITLE_1030: "<span class='flag-icon flag-icon-jp'></span> Thuyết trình/Đối thoại - Du học Nhật Bản",
        SCHEDULE_1030: "Du học Nhật Bản, Kiều Anh",

        SCHEDULE_TITLE_1045: "<span class='flag-icon flag-icon-sg'></span> Thuyết trình/Đối thoại - Du học Singapore",
        SCHEDULE_1045: "Du học Singapore, Mỹ Hạnh",

        SCHEDULE_TITLE_1100: "<span class='flag-icon flag-icon-kr'></span> Thuyết trình/Đối thoại - Du học Hàn Quốc",
        SCHEDULE_1100: "Du học Hàn Quốc, Hiền Trang",

        SCHEDULE_TITLE_1115: "Kết thúc chương trình buổi sáng",

        SCHEDULE_TITLE_1330: "Quầy tư vấn du học mở cửa",
        SCHEDULE_1330: "Giới thiệu chương trình và nhà tài trợ | Giới thiệu cách thức hoạt động của booth",

        SCHEDULE_TITLE_1345: "Quầy tư vấn du học dạng Fair & Tea Break:",
        SCHEDULE_1345: "Quầy Nhà tài trợ Summit Quầy Du học Mỹ (Assist, UWC, Exchange, Boarding, College) |  Quầy Du học Anh Quốc (School, College and University) | Quầy Du học Pháp | Quầy Du học Đức | Quầy Du học Nhật | Quầy Du học Hàn Quốc | Quầy Du học Phần Lan | Quầy Du học Canada | Quầy các chương trình liên kết & du học tại chỗ (RMIT + BUV)",

        SCHEDULE_TITLE_1600: "Kết thúc chương trình buổi chiều",

        //Staff section
        STAFF_TEXT_1: "Hội thảo du học Chuyên Ngoại Ngữ không thể thiếu các bạn và anh chị du học sinh vô cùng nhiệt huyết.",
        STAFF_TEXT_2: "Trưởng BTC, các bạn làm thuyết trình, đối thoại, quầy thông tin sẽ có mặt trong ngày hội thảo",
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
        SUPPORT_TEXT: "Trong trường hợp khẩn cấp hoặc bạn cần nói chuyện trực tiếp với đại diện ban tổ chức về nội dung, lịch trình hội thảo. Mai Phương, trưởng ban tổ chức hội thảo năm nay, luôn sẵn sàng giúp đỡ!",
        SUPPORT_CLICK: "01662252225 , Mai Phương",
        EMAIL: "Gửi e-mail",
        EMAIL_TEXT: "Bạn có thể hỏi chúng tôi bất kỳ điều gì về Hội du học sinh Chuyên Ngữ hay hội thảo qua e-mail. (Lưu ý: Global CNNers không nhận tư vấn tình cảm tuổi mới lớn :P)",
        EMAIL_CLICK: "Gửi e-mail",
        FACEBOOK: "Ghé qua Facebook của Global CNNers",
        FACEBOOK_TEXT: "Các bản tin du học, thông tin học bổng và cập nhật mới nhất của Global CNNers cũng như CNN Conference sẽ được đăng tại Facebook Page này!",
        FACEBOOK_CLICK: "Global CNNers",

        // Staff
        CONSULT_TITLE: "Cố vấn dự án",
        QA_TITLE: "Nhóm chuyên mục hỏi đáp",
        BOOTH_TITLE: "Nhóm làm quầy thông tin",
        ADMIN_TITLE: "Trưởng ban tổ chức",
        CONTRIBUTOR_TITLE:"Cộng tác viên nội dung",
        SPEAKER_TITLE: "<i class='fa fa-microphone'></i> Thuyết trình",
        DESIGN_TITLE: "Thiết kế",
        DESIGN_CONSULT_TITLE: "Thiết kế & Cố vấn dự án",

        // UK STAFF
        SONPHAM_UK_BIO_NAME: "Phạm Anh Sơn",
        SONPHAM_UK_BIO_1: "A37 CNNer, ĐH Oxford, Anh Quốc",
        SONPHAM_UK_BIO_2: "Kỹ sư phần mềm, Anh Quốc",
        SONPHAM_UK_BACK_INFO: "Học sinh xuất sắc 2006-07 | Giải Ba HSG quốc gia tiếng Anh 2006-07 | Thành viên Media Team 10+ đầu tiên (2008) | Sáng lập Global CNNers (2007) | Trưởng ban tổ chức Conference 2009 & 2010 | Học bổng A-Level 50%, Padworth College, Reading, Anh Quốc (2007) | Giải Vàng ('08) & Bạc ('09) UK Maths Challenge | Tốt nghiệp Đại Học Oxford, Anh Quốc chuyên ngành Khoa Học Máy Tính (2012) | Kỹ sư phần mềm tại Ocado Technology UK",
        SONPHAM_UK_BACK_EXTRA: "Lời nhắn cho các CNNers: để làm nên bất cứ chuyện gì, các em cần thật sự ham muốn và theo đuổi nó đến cùng. Có thể tóm gọn câu chuyện của anh trong một câu: anh tin rằng mọi vấn đề đều có lời giải, mình chỉ cần tìm kỹ hơn! Sự quyết tâm có thể tạo rất nhiều khác biệt.",

        MADMIN_UK_BIO_NAME: "Đặng Trần Minh",
        MADMIN_UK_BIO_1: "I38 CNNer, ĐH Lancaster, Anh Quốc",
        MADMIN_UK_BIO_2: "SSI, Việt Nam",
        MADMIN_UK_BACK_INFO: "A-Level tại Abacus College, Oxford | Theo học quản trị kinh doanh tại ĐH Lancaster | 1 năm theo chương trình liên kết tại ĐH Richmond, Mỹ | Hiện tại đang sống tại Sài Gòn và làm việc cho SSI | Một trong các thành viên sáng lập của hội du học sinh Chuyên Ngữ | Thành viên ban tổ chức/cố vấn lâu năm của CNN Conference",
        MADMIN_UK_BACK_EXTRA: "Lời nhắn cho các CNNers: Khi còn trẻ, hãy xách ba lô lên và đi :)",

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

        // US Staff

        MPHUONG_US_BIO_NAME: "Nguyễn Mai Phương",
        MPHUONG_US_BIO_1: "M43 CNNer, Bryn Mawr College '18, US",
        MPHUONG_US_BIO_2: "Trưởng ban tổ chức CNN Conference 2014",
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

        CHIHUYNH_US_BIO_NAME: "Huỳnh Ngọc Yến Chi",
        CHIHUYNH_US_BIO_1: "A41 CNNer",
        CHIHUYNH_US_BIO_2: "UWCSEA & Georgia Institute of Technology '17",
        CHIHUYNH_US_BACK_INFO: "Học sinh xuất sắc (2009-10 & 2010-11) | Tham dự chương trình Thủ lĩnh trẻ châu Á, Singapore 2010 | Giải Nhì HSG Quốc gia tiếng Anh 2011 | Học bổng toàn phần UWCSEA, Singapore 2011 | The Hague International Model UN Conference 2012 | Học bổng toàn phần Lizanne & Robert A. Milton, Georgia Institute of Technology",
        CHIHUYNH_US_BACK_EXTRA: "Lời nhắn nhủ tới CNNers: Du học là niềm mơ ước của nhiều người nhưng cũng đầy những điều không thể lường trước. Tuy nhiên chính sự kiên trì và tự thử thách mới giúp cho mỗi con người trưởng thành và phát hiện ra những mặt mới của bản thân. Hãy biết nắm lấy mọi cơ hội, bởi bạn sẽ thực sự ngạc nhiên với những gì mình học được từ mỗi vùng đất và con người",

        DUYKHANH_US_BIO_NAME: "Đoàn Duy Khánh",
        DUYKHANH_US_BIO_1: "G44 CNNer",
        DUYKHANH_US_BIO_2: "Học bổng UWC (Atlantic College, US)",
        DUYKHANH_US_BACK_INFO: "Phó chủ tịch CNNShine 2013-14 | Thành viên trong đội bóng rổ Diao | Giải Ba Olympic tiếng Anh qua mạng (2012) | Học bổng United World of Atlantic College",
        DUYKHANH_US_BACK_EXTRA: "\"Success is not final, failure is not fatal, it is the courage to continue that counts\" - Winston Churchill. Du học giờ đây đã trở nên vô cùng phổ biến. Nhưng không phải ai cũng biết rằng việc lựa chọn trường cũng như học bổng phù hợp lại rất quan trọng khi đi du học. Hãy đến với CNN Conference để có thể tim hiểu thêm về các học bổng du học và tìm ra cho mình một môi trường học tập phù hợp. Chúc các bạn luôn tự tin và thành công trên con đường mình đã chọn.",

        DOMINHTRI_US_BIO_NAME: "Đỗ Minh Trí",
        DOMINHTRI_US_BIO_1: "H42 CNNer",
        DOMINHTRI_US_BIO_2: "Tabor Academy '14 & Georgetown University '18",
        DOMINHTRI_US_BACK_INFO: "Sáng lập Global Service Project quyên góp từ thiện cho trẻ em châu Phi | Cây viết cho Travel + Leisure Online Magazine | Cộng tác viên tại Shorenstein Center, Harvard Kennedy School | National AP Scholar - College Board | Sở thích: Tennis, bóng đá + PES, ăn, karaoke + hát hò với bạn bè",
        DOMINHTRI_US_BACK_EXTRA: "Lời nhắn nhủ tới CNNers: Không có gì to tát nhưng mình thường quan niệm làm việc gì cũng là một cuộc đua marathon và đoạn nước rút cuối cùng bao giờ cũng quan trọng nhất. Các bạn đã có được khởi đầu mỹ mãn với bàn đạp CNN rồi và mình nghĩ rất quan trọng để bạn định hướng được đường chạy tiếp theo, bắt đầu từ CNN Conference này.",

        THUYNGAN_US_BIO_NAME: "Nguyễn Thúy Ngân",
        THUYNGAN_US_BIO_1: "M42 CNNer",
        THUYNGAN_US_BIO_2: "Macalester College '17",
        THUYNGAN_US_BACK_INFO: "Giải Triển Vọng Teen Entrepreneur 2013 | Học bổng Kofi Annan, Macalester College | Sáng lập viên dự án Bồ Công Anh xây dựng trung tâm tin học, thư viện & dạy học cho trẻ mồ côi có hoàn cảnh khó khăn ở Lập Thạch, Vĩnh Phúc (2014) | Trợ lí quản lí Kí Túc Xá ở Macalester College (2014-15)",
        THUYNGAN_US_BACK_EXTRA: "Đi du học Mỹ là một bước ngoặt lớn trong hành trình đi tìm \"Tôi là ai?\" của chị. Chị được trải nghiệm nhiều điều mới, hoàn thiện bản thân và lớn lên từng ngày trong môi trường giáo dục Mỹ. Chị muốn nhắn nhủ rằng con đường này không phải trải đầy hoa hồng, nhưng \"có công mài sắt có ngày nên kim\". Các em hãy luôn tự tin và kiên trì, và đừng quên các em còn có những Global CNNers ủng hộ và tin tưởng vào các em :)",

        // Finland staff

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

        THUCANH_JAP_BIO_NAME: "Hà Thục Anh",
        THUCANH_JAP_BIO_1: "A43 CNNer",
        THUCANH_JAP_BIO_2: "Nagoya University, Japan",
        THUCANH_JAP_BACK_INFO: "Học bổng 100% Nagoya University, 2014-18 | Thành viên CNN English Club 2011 | Tham gia CLB Water Wise và dự án Water & Home 2012 | Trợ giảng tiếng Anh, trung tâm UNESCO Foreign Language & Training",
        THUCANH_JAP_BACK_EXTRA: "Message to CNNers: Lý do mình chọn Nhật Bản mà không phải các nước khác như Mỹ, Anh,... không chỉ vì môi trường giáo dục tốt và các trường đại học danh tiếng, mà còn vì mình rất khâm phục và muốn học hỏi nhân cách, tính kỉ luật, đoàn kết, vì cộng đồng của con người Nhật Bản. Theo mình, đại học không chỉ là nơi học kiến thức ở trên lớp, mà còn là nơi để hoàn thiện nhân cách của bản thân, và Nhật Bản là một nơi tuyệt vời để làm điều đó.",

        HTRANG_KR_BIO_NAME: "Nguyễn Hiền Trang",
        HTRANG_KR_BIO_1: "G43 CNNer",
        HTRANG_KR_BIO_2: "Underwood Intl. College - ĐH Yonsei, Hàn Quốc",
        HTRANG_KR_BACK_INFO: "",
        HTRANG_KR_BACK_EXTRA: "",

        PANH_KR_BIO_NAME: "Phạm Phương Anh",
        PANH_KR_BIO_1: "H42 CNNer",
        PANH_KR_BIO_2: "Underwood Intl. College, ĐH Yonsei, Hàn Quốc",
        PANH_KR_BACK_INFO: "Hiện đang là học sinh năm 2 trường Underwood International College, Yonsei University, Hàn Quốc",
        PANH_KR_BACK_EXTRA: "Lời nhắn nhủ tới CNNers: Hàn quốc đang là 1 nước rất phát triển trong nền kinh tế và giáo dục của Châu Á và thế giới. Đến với đất nước này các bạn không chỉ có thể học mà có thể tự trải nghiệm rất nhiều điều thú vị. Hãy cố gắng từ bây giờ nhé:) Chúc các bạn có định hướng tốt cho tương lai. Be brave, be decisive!",

        // Mock staff
        MOCK_BIO_1: "Lorem ipsum dolor sit amet",
        MOCK_BIO_2: "Ut enim ad minim veniam, quis",
        MOCK_BACK_INFO: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    });
    // $translateProvider.preferredLanguage("en");
});
