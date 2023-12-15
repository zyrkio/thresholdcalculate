@namespace
class ThresholdCalculator:
    """
    
    Calculate the threshold as the average of a series of numbers.
    @param values An array of numbers to calculate the threshold from.
    @returns The calculated threshold value.
    
    """
    def calculateThreshold(values: List[number]):
        # If no values provided, return 0 as default threshold
        if len(values) == 0:
            return 0
        sum2 = 0
        maxValues: List[number] = []
        minValues: List[number] = []
        for i in range(len(values)):
            sum2 += values[i]
            if len(maxValues) == 0 or values[i] > maxValues[0]:
                maxValues = [values[i]]
            elif values[i] == maxValues[0]:
                maxValues.append(values[i])
            if len(minValues) == 0 or values[i] < minValues[0]:
                minValues = [values[i]]
            elif values[i] == minValues[0]:
                minValues.append(values[i])
        average = sum2 / len(values)
        maxAverage = calculateAverage(maxValues)
        minAverage = calculateAverage(minValues)
        return (maxAverage + minAverage) / 2
    def calculateAverage(numbers: List[number]):
        if len(numbers) == 0:
            return 0
        sum3 = 0
        for j in range(len(numbers)):
            sum3 += numbers[j]
        return sum3 / len(numbers)