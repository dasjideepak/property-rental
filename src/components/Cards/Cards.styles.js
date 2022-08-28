import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  justifyBetween: {
    justifyContent: 'space-between',
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
  activeCategory: {backgroundColor: '#0A3A67'},
  activeCategoryImage: {tintColor: '#fff'},
  activeLabel: {color: '#fff'},
});
