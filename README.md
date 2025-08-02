# OOPS Concept

This repository contains examples of Object-Oriented Programming (OOP) concepts implemented in TypeScript.

### OOP Concepts Demonstrated

*   **Abstract Classes:** The `Department` class is an abstract class that cannot be instantiated and serves as a base for other classes.
*   **Inheritance:** The `ItDepartment` and `FinanceDepartment` classes extend the `Department` class, inheriting its properties and methods.
*   **Polymorphism:** The `displayInformation` method is overridden in the `ItDepartment` and `FinanceDepartment` classes to provide specific implementations.
*   **Encapsulation:** The use of `private` and `protected` access modifiers to control access to class members.
*   **Static Members:** The `Company` class demonstrates the use of static properties and methods.
*   **Singleton Pattern:** The `Legal` class is a singleton, ensuring that only one instance of the class can be created.
*   **Limited Instance Class:** The `Marketing` class is designed to allow the creation of only a limited number of instances.

### Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/prince981620/oops.git
cd oops
npm install
```

### Compile and Run

To compile the TypeScript code, run the following command:

```bash
npm run compile
```

To run the project, you can use `ts-node`:

```bash
npx ts-node src/index.ts
```

### Project Structure

*   `src/index.ts`: The entry point of the application.
*   `src/oops/Department.ts`: Contains the implementation of the OOP concepts.
*   `package.json`: The project's dependencies and scripts.
*   `tsconfig.json`: The TypeScript configuration file.
*   `README.md`: This file.
