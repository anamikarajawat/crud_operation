
# Step 1 - prerequisite setup to run this crud operations app

Should have below tools installed 
    VS code
    Git
    Node (version 18 or above)
    npm (version 9 or above)


## Step 2 - Clone the git repositiory 

Run below command in gitbash (available in vs code terminal post installing git )
    git clone https://github.com/anamikarajawat/crud_operation

### Step 3 - Install/update project dependecies 

Run below command in vs code terminal
    npm install or npm i (You may get few warnings related to dependencies just ignore them)
    

#### Step 4 - Run the database file in app 
Run below command in vs code terminal 
    npx json-server Backend\db.json

    Note - You need to execute above command in seperate terminal and let it be running until you are using the application. Post running this command you will get an output such as below -

    Loading Backend\db.json
    Done

    Resources
    http://localhost:3000/usersData

    Home
    http://localhost:3000

##### Step 5 - Launch the application
Open a seperate terminal in vs code and Run below command
    npm start

    Note- While running this command if you get a prompt as port is already in use do you want to select another port then type y or yes to launch the app on another port as default port 3000 we are already running db json file to add, edit, delete, store user data.

### `After running npm start command application will be auto launched if in case it doesn't then access below urls` 
Open [http://localhost:3000](http://localhost:3000) OR [http://localhost:3001](http://localhost:3001) to view app in your browser.

### These crud operation we have done using react. Sql queries to create, select, update, delete any data writing below for your reference -

# CREATE THE TABLE

CREATE TABLE Register
(
UserId int PRIMARY KEY,
Name varchar(20) NOT NULL,
Email varchar(30) NOT NULL,
DateOfBirth DATE,
)

# UPADATE THE TABLE

UPDATE Register SET Name='Sample'
WHERE userId = 1;


# DELETE 

DELETE FROM Regiter WHERE 
Name = 'Exampleuser';

# SELECT

# To select all the data from table
1. SELECT * FROM Register

# To get a paricular row
2. SELECT Name,DateOfBirth FROM Register WHERE
userId ==1;





