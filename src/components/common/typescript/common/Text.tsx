import React from 'react';
import { useSelector } from 'react-redux';

const transformText = (value: string, count: number, locale = 'en'): string => {
  if (locale === 'en') {
    if (count === 1) {
      return `${value}`;
    } else if (value.slice(-1) === 'y') {
      return `${value}ies`;
    } else if (value.slice(-1) === 's') {
      return `${value}es`;
    }

    return `${value}s`;
  } else if (locale === 'sk') {
    if (count === 1) {
      return `${value}`;
    } else if (count <= 5) {
      return `${value}i`;
    }

    return `${value}ov`;
  }

  return '';
};

interface Props {
  tag: string;
  toUpper?: boolean;
  count?: number;
}

const Text: React.FC<Props> = (props) => {
  const state = useSelector((state) => state.language);
  let text = state.dictionary[props.tag] || 'ERROR';

  if (props.toUpper) {
    text = text.toUpperCase();
  }

  if (props.count) {
    text = transformText(text, props.count, state.dictionary.locale);
  }

  return <>{text}</>;
};

export default Text;
