import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../assets/constants';
const { height: deviceHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    minHeight: deviceHeight,
    backgroundColor: colors.tertiary,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: colors.tertiary,
  },
  formHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginBottom: 20,
  },
  formSubHeader: {
    fontSize: 14,
    paddingVertical: 10,
    // fontWeight: 'bold',
    marginBottom: 20,
  },
  formInputContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  formInput: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  formButton: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    color: colors.lightText,
  },
  formButtonText: {
    textAlign: 'center',
    color: colors.lightText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 20,
    textAlign: 'right',
  },
  formFooter: {
    marginTop: 20,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formFooterText: {
    marginTop: 16,
    fontSize: 16,
  },
  formFooterLink: {
    fontSize: 16,
    color: colors.primary,
  },

  socialLoginContainer: {
    width: '100%',
    // paddingHorizontal: 20,
    // paddingVertical: 40,
  },
  socialLoginHeader: {
    fontSize: 14,
    marginBottom: 20,
  },

  socialLoginButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  socialLoginButton: {
    flex: 1,
    maxWidth: 110,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.lightBg,
    color: colors.lightText,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLoginButtonIcon: {
    // marginRight: 10,
  },
});
