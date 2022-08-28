import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: '#0A3A67',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    paddingTop: 10,
    paddingBottom: 15,
  },
  button: {
    padddingVertical: 13,
    paddingHorizontal: 30,
    marginVertical: 4,
    marginRight: 8,
  },
  activeButton: {borderWidth: 1, borderColor: '#0A3A67'},
});
