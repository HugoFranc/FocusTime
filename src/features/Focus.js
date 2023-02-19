import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton';
import {colors} from '../utils/colors';
import {spacing} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          style={styles.textInput}
          textColor={colors.white}
          onChangeText={setSubject}
          underlineColor={colors.turquoise}
        />
        <View style={styles.button}>
          <RoundedButton
            title= "+"
            textStyle={styles.plusText}
            size={45}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
  },
  button: {
    flex: 0.2,
    justifyContent: 'center',
  },

  inputContainer: {

    paddingTop: spacing.lg,
    paddingLeft: spacing.xs,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: spacing.md
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    backgroundColor: colors.lightGrey,
  },
  plusText:{
    fontSize: 20,
  }
});
