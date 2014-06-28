// Translation for the base of the page

app.config(function ($translateProvider) {
    console.log($translateProvider)
    $translateProvider.translations("en", {
        // Headings
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
        SIGNUP_TEXT: "Signing up is a click away! After you have completed the form, you will get a confirmation from us, and then you just need to show up on the day. Students from other schools are welcomed, but spaces are limited",
        SIGNUP_CLICK: "Register!",
        EMAIL: "Drop us an e-mail",
        EMAIL_TEXT: "You can ask just about anything about Global CNNers and the Conference or simply say hi. Sorry we don't do romance consultancy.",
        EMAIL_CLICK: "Send e-mail",
        FACEBOOK: "Like our page on Facebook",
        FACEBOOK_TEXT: "Here for our latest news and updates. Scholarship and application information pops up from time to time too!",
        FACEBOOK_CLICK: "Our Page",
    });

    $translateProvider.preferredLanguage('en');
});