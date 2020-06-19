# Password Generator
This project was oriented around creating a randomly generated password based on user selected criteria. I primarily utilized Javascript to create the functions and logic.

## User Password Criteria
Upon arrival to the page, the user is presented with prompts to stipulate the parameters of their password. The criteria are as follows

* Length of 8-128 characters
* At least one of lowercase letter, uppercase letters, numbers, and special characters
* The input features will be verified for the user and the length will be checked for accuracy

## Code Strategy
I used ```confirm``` to store the user answers as boolean values and used ```if``` statements then to confirm those choices back to the user in ```alerts```. If all the boolean were false then I alerted the user to please select one character class. 

### Separate Functions
Functions were created to generate random number which were used to index arrays of the character types with the results pushed to an empty string, globally defined. This required heavy use of the ```math.random``` method. 
```
Math.floor(Math.random() * 10); - for a random integer 0-9
Math.floor(Math.random() * 26); - for a random integer 0-25 to index an array of the alphabet
```
#### Struggles

I could not get the output to write to the webpage. Except for an undefined error. I tried to console.log my function result without results. Will have to try and rethink the functions I created and how they pass their results back and forth. 


#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/)
[GitHub](https://github.com/crackedsnowboard)

