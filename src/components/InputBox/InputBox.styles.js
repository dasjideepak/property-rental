import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topShadow: {
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
  },
  bottomShadow: {
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#ECEEF5',
  },
  inmer: {
    backgroundColor: '#EEF0F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    alignItems: 'center',
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    color: '#7E8F9A',
    fontSize: 14,
  },
});
