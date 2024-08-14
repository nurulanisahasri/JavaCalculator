package com.calculator;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CalculatorController {

    @GetMapping("/calculate")
    public double calculate(
        @RequestParam("num1") double num1,
        @RequestParam("num2") double num2,
        @RequestParam("operation") String operation
    ) {
        switch (operation) {
            case "add":
                return num1 + num2;
            case "minus":
                return num1 - num2;
            case "multiply":
                return num1 * num2;
            case "divide":
                if (num2 != 0) {
                    return num1 / num2;
                } else {
                    throw new IllegalArgumentException("Cannot divide by zero");
                } 
            default:
                throw new IllegalArgumentException("Invalid operation");
        }
    }
}