// app/calculator.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "app/calculator";

test("Addition fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);

    fireEvent.change(inputA, { target: { value: "5" } });
    fireEvent.change(inputB, { target: { value: "3" } });
    fireEvent.change(select, { target: { value: "+" } });
    fireEvent.click(button);

    expect(result).toHaveTextContent("8");
});

test("Soustraction fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);

    fireEvent.change(inputA, { target: { value: "15" } });
    fireEvent.change(inputB, { target: { value: "18" } });
    fireEvent.change(select, { target: { value: "-" } });
    fireEvent.click(button);

    expect(result).toHaveTextContent("-3");
});

test("Multiplication fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);

    fireEvent.change(inputA, { target: { value: "5" } });
    fireEvent.change(inputB, { target: { value: "5" } });
    fireEvent.change(select, { target: { value: "*" } });
    fireEvent.click(button);

    expect(result).toHaveTextContent("25");
});

test("Division fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);

    fireEvent.change(inputA, { target: { value: "99" } });
    fireEvent.change(inputB, { target: { value: "0" } });
    fireEvent.change(select, { target: { value: "/" } });
    fireEvent.click(button);

    expect(result).toHaveTextContent("Division par 0 impossible");
});