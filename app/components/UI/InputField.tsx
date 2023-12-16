// import React, {forwardRef, memo, useImperativeHandle, useRef} from 'react';
// import {StyleSheet, TextInput, View} from 'react-native';
// import {colors, fontFamily, perfectSize} from '../../core';
// import {FieldInputProps} from '../../types/componentsTypes';

// const FieldInput = forwardRef<any, FieldInputProps>((props, ref) => {
//   const {
//     inputStyles,
//     onChangeText,
//     onBlur,
//     viewStyle,
//     value,
//     blurOnSubmit,
//     maxLength,
//     onSubmitEditing,
//     keyboardType,
//     placeholder,
//     isPassword,
//   } = props;

//   const inputRef = useRef<any>(null);

//   useImperativeHandle(
//     ref,
//     () => ({
//       getFocus: () => inputRef.current.focus(),
//     }),
//     [],
//   );

//   return (
//     <View style={[styles.root, viewStyle]}>
//       <TextInput
//         ref={inputRef}
//         placeholder={placeholder}
//         placeholderTextColor={colors.primaryBlack}
//         style={[styles.input, inputStyles]}
//         autoCapitalize={'none'}
//         onChangeText={onChangeText}
//         value={value}
//         onBlur={onBlur}
//         keyboardType={keyboardType}
//         blurOnSubmit={blurOnSubmit}
//         maxLength={maxLength}
//         onSubmitEditing={onSubmitEditing}
//         returnKeyType="next"
//         secureTextEntry={isPassword ? true : false}
//       />
//     </View>
//   );
// });

// export default memo(FieldInput);
// const styles = StyleSheet.create({
//   root: {
//     borderWidth: 1,
//     height: perfectSize(45),
//     borderColor: colors.primary,
//     borderRadius: perfectSize(8),
//     width: '100%',
//   },
//   input: {
//     flex: 1,
//     paddingHorizontal: perfectSize(15),
//     fontFamily: fontFamily.primaryRegular,
//     fontSize: perfectSize(16),
//   },
// });
