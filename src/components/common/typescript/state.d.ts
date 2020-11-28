import 'react-redux';
import { Language } from './state/Language';
import { User } from './state/User';

declare module 'react-redux' {
  export interface DefaultRootState {
    language: Language;
    user: User;
  }
}
