# UKM HUB
![UKMHUB](ukmhub.png?raw=true "Optional Title")

UKMHUB is a web application create to be a bridge between corporate and SME's (Small & Medium Enterprises) with the same category.

Corporate ( Big Enterprises ) can see the details of UKM/SME and vice versa. Create buy request and sell request to integrate both of them for Indonesia's UKM/SME
better future.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

** Prerequisites **

before running this project you must create a file `.env` and inside the file you must fill the variable:
```
APIKEY_SENDGRID_UKMHUB='you need to get the api key from sendgrid api by register in sendgrid'
EMAIL_FROM='your email'
AWS_ACCESS_KEY_ID='we are using AWS EB, this variable is for upload photo'
AWS_SECRET_ACCESS_KEY='we are using AWS EB, this variable is for upload photo'
BUCKET_NAME='a folder name in aws'
```

**Installing**
```
$ npm install
```

**Usage**
```
$ npm run dev
```

## Built with
* Node Js
* Express - The web framework used
* mongodb - The database
* mongoose - The ODM database to manage database
* mocha, chai and chai-http - For testing
* sendgrid - The send email api
* multer - For upload Photo
* passport - For authentication
* passport-local - For authentication
* passport-hash - For authentication
* jsonwebtoken - For authentication
* cors - for access client side

# END POINT

## Corporate

| END POINT                                 | METHOD | DESCRIPTION                                             
|-------------------------------------------|--------|--------------------------------------------------
| /auth/register                            | POST   | Add new company email & password with validation
| /auth/login                               | POST   | Company login with JWT Token                     
| /api/company/:id                          | PUT    | Complete company profile                         
| /api/company/:id/buyRequest               | PUT    | create new buy request ( corp only )             
| /api/company/:id/sellRequest              | PUT    | create new sell request ( ukm only )             
| /api/company/:id/:requestId               | PUT    | change status buy request ( corp only )                
| /api/company/:id/:otherId/:requestId/message| PUT  | create new message                     
| /api/company/:id                          | GET    | get detail one company                           
| /api/company/:id/searchByCategory         | GET    | get all company by type           
| /api/company/:id/searchRequest            | GET    | get request  (show buy request for ukm only, and show sell for corporate )                 


## Cooperation

| END POINT                 | METHOD | DESCRIPTION                                             
|---------------------------|--------|-----------------------------------------------
| /api/coop/login           | POST   | login coop to generate jwt                                                            
| /api/coop/verify/:id      | PUT    | update company verify to true                    
| /api/company/             | GET    | get all company list fill verify at front end    
| /api/coop/unverify/:id    | PUT    | Set Status company to unverified                  


# User Stories

## Corporate

1.  Corporate must first register using their company email and password, after registration the user will redirected to the update company profile page. If the update succeeded then the user must be verified first by the coop before using the app (assuming the user has been approved by admin cooperative)

2. Corporate verified by admin cooperatives can use the search feature of SMEs about the same in accordance with the corporate category. SMEs are listed in map view and a list view which enables corporate to see the details of SMEs

3. Corporate can create request that is to demand to make purchases or anything that can be seen by SMEs around them, the request can be responded by SMEs by sending a letter of offer.

4. Corporate can send a respond to requests from SMEs request list, and they will receive an email confirmation to accept or decline the offer.

## SME's (Small & Medium Enterprises)

1. User (SMEs) must first register using their company email and password, after registration the user will be redirected to the update company profile page. If the update succeeded then the user must be verified first by the coop before using the app (assuming the user has been approved by admin cooperative). These step is similar to corporate only the difference in type of company.

2. SMEs that have been verified by admin cooperative can use the search feature approximately the same in accordance with the SME category. Search map view and list view helping SMEs to see the detail of corporate

3. SMEs can create requests that can be seen by the surrounding corporate with the same category, request can be responded by the corporate by sending a reply message.

4. SMEs can send a letter of offer to respond to requests from corporate, this letter is used to make offers to corporate-related according to the category.

## Cooperation

1. Ccooperatives can log in to enter the main page and can see the list of listed company (whether Corporate or SME) as well as the details.

2. To verify registered company.

3. be able to monitor the price in order to avoid price fluctuations that can damage the market price. (Optional feature)

Note: Cooperation is in progress
