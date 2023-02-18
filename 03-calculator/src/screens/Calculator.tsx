import React from 'react';
import {View, Text} from 'react-native';
import ButtonCal, {Colors} from '../components/ButtonCal';
import {styles} from '../theme/appTheme';
import useCalculator from '../hooks/useCalculator';

const Calculator = () => {
  const {
    value,
    prevValue,
    clean,
    handleValue,
    positiveNegative,
    del,
    btnDivision,
    btnMultiplication,
    btnAddition,
    btnSubtraction,
    getOperation,
  } = useCalculator();

  return (
    <View style={styles.mainContainer}>
      {prevValue !== '0' && <Text style={styles.smallResult}>{prevValue}</Text>}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>

      <View style={styles.row}>
        <ButtonCal text="C" color={Colors.gray} onPress={clean} />
        <ButtonCal text="+/-" color={Colors.gray} onPress={positiveNegative} />
        <ButtonCal text="del" color={Colors.gray} onPress={del} />
        <ButtonCal text="/" color={Colors.orange} onPress={btnDivision} />
      </View>

      <View style={styles.row}>
        <ButtonCal text="7" onPress={handleValue} />
        <ButtonCal text="8" onPress={handleValue} />
        <ButtonCal text="9" onPress={handleValue} />
        <ButtonCal text="X" color={Colors.orange} onPress={btnMultiplication} />
      </View>

      <View style={styles.row}>
        <ButtonCal text="4" onPress={handleValue} />
        <ButtonCal text="5" onPress={handleValue} />
        <ButtonCal text="6" onPress={handleValue} />
        <ButtonCal text="-" color={Colors.orange} onPress={btnSubtraction} />
      </View>

      <View style={styles.row}>
        <ButtonCal text="1" onPress={handleValue} />
        <ButtonCal text="2" onPress={handleValue} />
        <ButtonCal text="3" onPress={handleValue} />
        <ButtonCal text="+" color={Colors.orange} onPress={btnAddition} />
      </View>

      <View style={styles.row}>
        <ButtonCal text="0" largeButton onPress={handleValue} />
        <ButtonCal text="." onPress={handleValue} />
        <ButtonCal text="=" color={Colors.orange} onPress={getOperation} />
      </View>
    </View>
  );
};

export default Calculator;
