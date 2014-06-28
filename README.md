globalcnners
============

Global CNNers website

To add new content to the project:

* For Guest Speakers:
    * Find file ```data.js``` under ```js``` directory
    * Find the line starting with ```var guests =```
    * Add a guest with this template:
    ```
    {
        name: "Dr. Quack",
        firstBioLine: "BIO_1",
        secondBioLine: "BIO_2",
        country: "us",
        back: "BACK_INFO",
    },
    ```
    where:
    * ```BIO_1```, ```BIO_2```, ```BACK_INFO``` should have an English and Vietnamese version in ```js/translations.js```
    * ```country``` is the relevant country if the speaker

* For Staff:
    * Find file ```data.js``` under ```js``` directory
    * Find the line starting with ```var staff =```
    * Add a guest with this template:
    ```
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
    ```
    where:
    * ```title``` is one of ```QA_TITLE```, ```BOOTH_TITLE```, ```CONSULT_TITLE```, ```ADMIN_TITLE```
    * ```MOCK_BIO_1```, ```MOCK_BIO_2```, ```MOCK_BACK_INFO``` should have an English and Vietnamese version in ```js/translations.js```
    * ```country``` is the relevant country if the staff member
