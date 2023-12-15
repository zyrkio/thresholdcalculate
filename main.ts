//% color="#AA278D" icon="\uf2fe" block="Threshold Calculator"
namespace ThresholdCalculator {
    let values: number[] = [];


    /**
     * Berechne den Threshold
     * @param signal, beschreibe den Parameter hier
     */
    //% block="Berechne den Mittelwert $signal"
    //% signal.min=0 signal.max=5
    export function calculateThreshold(num: number): number {

        values.push(num);

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

        return (maxAverage + minAverage) / 2;
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
