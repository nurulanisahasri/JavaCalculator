/*package com.calculator;

import java.util.Scanner;

public class App 
{
    public static void main(String[] args) { //main method. the code inside will be executed when run

    Scanner scanner = new Scanner(System.in); //iniliaze Scanner. 'Scanner' object to take input from user and print welcome message

    System.out.println("Calculator";)
    System.out.println("__________";)

    }
}*/

package com.calculator;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Simple Calculator");
        System.out.println("-----------------");

        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();

        System.out.print("Enter an operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);

        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();

        double result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("Error: Division by zero is not allowed.");
                    return;
                }
                break;
            default:
                System.out.println("Invalid operator. Please use +, -, *, or /.");
                return;
        }

        System.out.println("The result is: " + result);
    }
}

