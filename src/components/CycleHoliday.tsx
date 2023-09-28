import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Holiday: 🎄"
    | "Holiday: 🎃"
    | "Holiday: 🇺🇸"
    | "Holiday: 🎆"
    | "Holiday: 🦃";

const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "Holiday: 🎄": "Holiday: 🎃",
    "Holiday: 🎃": "Holiday: 🇺🇸",
    "Holiday: 🇺🇸": "Holiday: 🎆",
    "Holiday: 🎆": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🎄"
};
const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
    "Holiday: 🎃": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🎄",
    "Holiday: 🎄": "Holiday: 🎆",
    "Holiday: 🎆": "Holiday: 🇺🇸",
    "Holiday: 🇺🇸": "Holiday: 🎃"
};

export function CycleHoliday(): JSX.Element {
    //alphabet: Christmas, Halloween, IndependenceDay, NewYears, ThanksGiving
    //next: Halloween, ThanksGiving, Christmas, newYears ,IndependenceDay
    const [holidayAlphabet, setHolidayAlphabet] =
        useState<Holiday>("Holiday: 🎄");
    const [holidayNext, setHolidayNext] = useState<Holiday>("Holiday: 🎃");

    function cycleAlphabet(): void {
        const newHAlpha = ALPHABET_TRANSITIONS[holidayAlphabet];
        setHolidayAlphabet(newHAlpha);
        /*
            holidayAlphabet === "Christmas"
                ? "Halloween"
                : holidayAlphabet === "Halloween"
                ? "IndependenceDay"
                : holidayAlphabet === "IndependenceDay"
                ? "NewYears"
                : holidayAlphabet === "NewYears"
                ? "ThanksGiving"
                : "Christmas"
        );
        */
    }

    function cycleHolidayNext(): void {
        const newHYear = YEAR_TRANSITIONS[holidayNext];
        setHolidayNext(newHYear);
        /*
            holidayNext === "Halloween"
                ? "ThanksGiving"
                : holidayNext === "ThanksGiving"
                ? "Christmas"
                : holidayNext === "Christmas"
                ? "NewYears"
                : holidayNext === "NewYears"
                ? "IndependenceDay"
                : "Halloween"
        );
        */
    }
    return (
        <div>
            {holidayAlphabet}
            <Button onClick={cycleAlphabet}>Advance By Alphabet</Button>
            {holidayNext}
            <Button onClick={cycleHolidayNext}>Advance By Year</Button>
        </div>
    );
}
/*
{holidayAlphabet === "Christmas"
                    ? "🎄"
                    : holidayAlphabet === "Halloween"
                    ? "🎃"
                    : holidayAlphabet === "IndependenceDay"
                    ? "🇺🇸"
                    : holidayAlphabet === "NewYears"
                    ? "🎆"
                    : holidayAlphabet === "ThanksGiving"
                    ? "🦃"
                    : "🎄"}
*/
