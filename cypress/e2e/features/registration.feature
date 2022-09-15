Feature: Registration page

    Feature Registration page of the function will work based on the user's credentials.

    Background:
        Given A user opens a Todotest website
    Scenario: User registration
        When A user provides credentials for registration
            | email | codPostal     | phone | questionExamination | carnet | permission | permissionOption | password | passwordRep | receiveChanges |
            | jhon.oe12347@gmail.com | 110110 | 3008274903 | En menos de 3 meses. | Para desplazamientos laborales. | B (Turismo) | Voy por libre. | 123456789 | 123456789 | Sí |
        And A user clicks on the registration button
        Then The code is generated and sent to the mailing address
        
 