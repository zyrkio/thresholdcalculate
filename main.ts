namespace ThresholdCalculator {

    /**
     * Calculate the threshold as the average of a series of numbers.
     * @param values An array of numbers to calculate the threshold from.
     * @returns The calculated threshold value.
     */
    export function calculateThreshold(values: number[]): number {
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
