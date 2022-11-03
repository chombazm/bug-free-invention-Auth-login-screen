import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../assets/constants';
const { height: deviceHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    minHeight: deviceHeight,
    // backgroundColor: colors.tertiary,
  },

  formFooter: {
    marginTop: 20,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formFooterText: {
    marginTop: 10,
    fontSize: 16,
  },
  formFooterLink: {
    fontSize: 16,
    color: colors.primary,
  },

  socialLoginContainer: {
    width: '80%',
    alignSelf: 'center',
    // paddingHorizontal: 20,
    // paddingVertical: 40,
  },
  socialLoginHeader: {
    fontSize: 14,
    marginBottom: 10,
  },

  socialLoginButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  socialLoginButton: {
    flex: 1,
    maxWidth: 70,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.lightBg,
    elevation: 5,
    color: colors.lightText,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLoginButtonIcon: {
    // marginRight: 10,
  },
  optionLogo: {
    flex: 1,
    // maxWidth: 70,

    borderRadius: 10,
    elevation: 5,
    color: colors.lightText,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
