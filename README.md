# personal website


 - includes Google Ananlytics API to view traffic
 - Uses localStorage js API for checking if poll response has been recorded

## server side
 - automatically translate to users prefered language based on HTTP ACCEPT_LANGUAGE header
 - Apache2 rewriteEngine used to efficiently redirect to correct URL with language code
     - Allow user to change URL if they want to see a different language
 - rewriteEngine used to direct all requests to https://www.aidanswebsite.com
     - http -> https
     - aidanswebsite.com -> www.aidanswebsite.com
     - .com/* -> ./com/{preferred language code}
      
 - Python Deep_Translate package used for translation based on 2-char language code
 - Simple python used to update and write poll responses to disk
