import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  button: {
    width: '47%',
    borderColor: '#0A3A67',
    borderWidth: 1,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 42,
  },
  proceedButton: {
    backgroundColor: '#0A3A67',
  },
  skipButtonText: {
    color: '#0A3A67',
  },
  proceedButtonText: {
    fontWeight: '500',
    lineHeight: 24,
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#0A3A67',
    paddingVertical: 5,
  },
  reqCallbackText: {
    textAlign: 'center',
    color: '#7E134B',
    textDecorationLine: 'underline',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
  },
  takeCareText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 15,
    color: '#0A3A67',
    paddingVertical: 5,
  },
});
