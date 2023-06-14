import React from 'react';
import {CommentInputText} from './styles';
import {TextInput} from 'react-native';

type InputBoxPropsType = {
  value: string;
  onChangeText: (text: string) => void;
  editable?: boolean;
  hideBorder?: boolean;
};

export const InputBox = React.forwardRef<TextInput, InputBoxPropsType>(
  ({value, onChangeText, editable, hideBorder}, ref) => {
    return (
      <CommentInputText
        multiline
        value={value}
        onChangeText={onChangeText}
        placeholder="Add Comment..."
        editable={editable}
        ref={ref}
        hideBorder={hideBorder}
      />
    );
  },
);
