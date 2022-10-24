import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/constants';
import { Dimensions } from 'react-native';

const { height: deviceHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 10,
    backgroundColor: colors.tertiary,
    minHeight: deviceHeight,
    // paddingHorizontal: 20,
  },
  topHeaderBar: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    // backgroundColor: 'blue',
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
    elevation: 11,
    // backgroundColor: 'white',
  },
  imageWrapper: {
    width: 1000,
    height: 400,
    top: 85,
    left: -200,
    // backgroundColor: 'white',
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    // elevation: 10,
    // filter: blur(10px),
  },
  image: {},
  buttonContainer: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    // paddingVertical: 30,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: colors.lightText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  customBlur: {
    width: 200,
    height: 200,
    backgroundColor: colors.primary,
  },
});
