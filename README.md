# How to Git at Home Carers

### Contributing

+ Make sure your develop branch is up to date ```git checkout develop``` and ```git pull```
+ Create your branch with ```git checkout -b name-of-my-branch```
+ Add, commit and push your changes to your branch
+ Create a pull request to develop on Github
+ Ask for someone to review your code

### Backend install

+ Install postgresql
+ Create homecarers database with the settings in settings.py
    + Connect to posgresql
    + ```CREATE DATABASE homecarers;````
    + ```\c homecarers;````
    + ```CREATE USER homecarers WITH PASSWORD '42';```
+ ```virtualenv env``` and start your virtualenv
+ ```pip3 install -r requirements.txt``` to install python dependencies
+ ```python3 manage.py runserver``` to start the server

