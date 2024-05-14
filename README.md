# PSI Technical Test
#### Gilang Wiradhyaksa - Fullstack Developer

<!-- GETTING STARTED -->
## Getting Started

This project contains an answer for Praweda Sarana Informatika technical test.

## Usage

1. Download or clone this project to your local computer.
2. Open two terminal and change the directory into frontend and backend
   ```sh
   cd ..\PSI-TechTest\backend
   ```
   ```sh
   cd ..\PSI-TechTest\frontend
   ```
3. Run both application
    ```sh
   npm start
   ```
4. After successfully run both application, next read explanation.

## Explanation

1. For task 1 and 2 I combine both of it, so before calling an API for task one, we need to login first to get authentication.
2. Access login api at http://localhost:8080/login.
3. Parameter for login is `id` and `username`
    ```sh
    {
      "id": "uuidv4",
      "username": "psi12345"
    }
    ```