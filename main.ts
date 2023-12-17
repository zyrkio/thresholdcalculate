//% color="#AA278D" icon="\uf2fe" block="Threshold Calculator"
namespace ThresholdCalculator {
    let values: number[] = [];


    /**
     * Calculate the threshold 
     * @returns The calculated threshold value.
     */
    //% block="calculate threshold $signal"
    //% block="Konvertiere, filtere, gleiche aus und berechne RMS des EMG-Signal $signal"
    //% signal.min=0 signal.max=1023
    export function calculateThreshold(num: number): number {
        values.push(num);
        
        if (values.length === 0) {
            return 0; // Wenn keine Werte vorhanden sind, gib 0 als Standard-Schwelle zurück
        }
        if (num === 10) {
            // Wenn der Wert 10 ist, ignorieren und direkt 0 zurückgeben
            values = [];

            // Fülle das Array mit Nullen entsprechend der gewünschten Länge
            
            for (let i = 0; i < values.length; i++) {
                values.push(0);
            }
            return 0;
        }

       

       
        let sum = 0;
        let maxValues: number[] = [];
        let minValues: number[] = [];

        for (let i = 0; i < values.length; i++) {
            if (values[i] !== 10) {
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
        }

        const filteredLength = values.filter(val => val !== 10).length;
        const average = filteredLength > 0 ? sum / filteredLength : 0;
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
