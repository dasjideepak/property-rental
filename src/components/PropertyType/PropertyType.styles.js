import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 16,
    color: '#0A3A67',
    fontWeight: '600',
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  justifyBetween: {
    justifyContent: 'space-around',
  },
  categoryCard: {width: '48%', height: 168},
  cardLabel: {
    color: '#0A3A67',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    paddingTop: 10,
    paddingBottom: 15,
  },
  activeProperty: {backgroundColor: '#0A3A67'},
  activePropertyImage: {tintColor: '#fff'},
  activeLabel: {color: '#fff'},
});
