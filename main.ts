//% color="#AA278D" icon="\uf2fe" block="Threshold Calculator"
namespace ThresholdCalculator {
    let values: number[] = [];
    let thresholdMw = 0;

    /**
     * Berechne den Threshold
     * @param signal Beschreibe den Parameter hier
     * @param caseDescription Beschreibe den Fall hier ("reset" löscht und setzt auf 0)
     */
    //% block="Berechne den Mittelwert von $signal für den Fall $caseDescription"
    //% signal.min=0 signal.max=5
    export function calculateThreshold(signal: number, caseDescription: string): number {

        if (caseDescription.toLowerCase() === "reset") {
            values = [];
            return 0;
        }

        values.push(signal);

        if (values.length === 0) {
            return 0; // If no values provided, return 0 as default threshold
        }

        let sum = 0;
        let maxValues: number[] = [];
        let minValues: number[] = [];

        for (let i = 0; i < values.length; i++) {
            sum += values[i];

            if (maxValues.length === 0 || values[i] > maxValues[0]) {
                maxValues = [values[i]];
            } else if (values[i] === maxValues[0]) {
                maxValues.push(values[i]);
            }

            if (minValues.length === 0 || values[i] < minValues[0]) {
                minValues = [values[i]];
            } else if (values[i] === minValues[0]) {
                minValues.push(values[i]);
            }
        }

        const average = sum / values.length;
        const maxAverage = calculateAverage(maxValues);
        const minAverage = calculateAverage(minValues);

        thresholdMw = (maxAverage + minAverage) / 2;
        return thresholdMw;
    }

    function calculateAverage(numbers: number[]): number {
        if (numbers.length === 0) {
            return 0;
        }

        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        return sum / numbers.length;
    }
}
