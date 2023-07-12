# NCC dAPIs Typescript SDK

The NCC dAPIs SDK is a TypeScript library that provides a convenient way to access NCC's decentralized APIs. It aims to simplify the integration process and streamline the development of Typescript applications that interact with NCC's dAPIs.

## Features

- Access NCC's decentralized APIs easily
- Currently supports the following workflows:
    - Peels
    - Users
    - TTM
    - getAccessToken
    - listAccounts
- Provides TypeScript typings for improved development experience

## Installation

To use the NCC dAPIs SDK, follow these steps:

1. Ensure that you have Node.js (version X.X.X) and npm (version X.X.X) installed on your machine.
2. Clone the repository:
   ```shell
   git clone https://github.com/thencc/dapi-lib.git
   ```
3. Navigate to the project directory:
    ```shell
    cd dapi-lib
    ```
4. Install the dependencies:
    ```shell
    npm install
    ```

## Usage
### Generating JS Schemas

To generate JavaScript schemas from the main branch of NCC_dAPIs comment stubs, follow these steps:

1. Make sure you have Docker installed on your machine as a prerequisite.
2. Run the following command:
    ```shell
    npm run reschema
    ```
    This command will generate the JS schemas based on the comment stubs in the main branch of NCC_dAPIs repository.

### Running Tests

To run Jest tests for the NCC dAPIs SDK, follow these steps:

1. Make sure you have a running Algorand sandbox node connected to the Testnet as a prerequisite.
2. Run the following command:
    ```shell
    npm run test
    ```
    This command will execute the Jest test suite for the SDK, ensuring its proper functionality.

## Contributing

Contributions to the NCC dAPIs SDK are welcome! If you encounter any issues or have suggestions for improvements, please create a new issue or submit a pull request.
