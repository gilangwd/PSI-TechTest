# PSI Technical Test
#### Gilang Wiradhyaksa - Fullstack Developer

<!-- GETTING STARTED -->
## Getting Started

This project contains an answer for Praweda Sarana Informatika technical test.

## Usage

1. Download or clone this project to your local computer.
2. Open terminal and change the directory into `backend`
   ```sh
   cd ..\PSI-TechTest\backend
   ```
3. Run the application
   ```sh
   npm start
   ```
4. After the application successfully running, please continue to explanation.

## Explanation

1. For task 1 and 2 I combine both of it, so before calling an API for task 1, we need to login first to get authentication token.
2. Access login API at http://localhost:8080/login.
3. Parameter for login is `id` and `username`, both are string.
    ```sh
    {
      "id": "uuidv4",
      "username": "psi1234"
    }
    ```
4. If the login success, we will get a token for authentication.
5. For task 1, access checkout API at http://localhost:8080/checkout.
6. Parameter for checkout is `hasVoucher` which is 'Y'/'N' and `itemPrice` which is integer of item price.
    ```sh
    {
      "hasVoucher": "Y",
      "itemPrice": "4000000"
    }
    ```
7. Don't forget to set the Authorization -> Bearer Token with the token we got from login before.
8. If authorization success, we will get the return of checkout API which is `amountToPaid` and `pointsEarned` if you put `hasVoucher` as 'Y'
9. For task 4, access get random users API at http://localhost:8080/getRandomUsers.
10. Without parameter it will only return one data.
11. We can change the parameter for `result` and `page`.
    ```sh
    http://localhost:8080/getRandomUsers?results=10&page=1
    ```
12. Above parameter will return 10 data that already manipulated based on the requirement.
13. Next we will load the data we got from RandomUsers into a table.
14. Open new terminal and change the directory into `frontend`
    ```sh
    cd ..\PSI-TechTest\frontend
    ```
15. Then run the application
    ```sh
    npm start
    ```
16. After the application successfully running, it will open a new tab in browser and show the data in ReactJS table using Ant Design library.
17. Search Bar above the table is work by typing any character in it. It will search the character in all available column.

## Contact
Gilang Wiradhyaksa
gilang.wirad@gmail.com
[LinkedIn](https://www.linkedin.com/in/gilangwiradhyaksa/)

## Acknowledgement
- [NodeJS](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)
- [Ant Design](https://ant.design/)