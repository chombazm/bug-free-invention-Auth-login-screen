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
    marginBottom: 10,
  },
  formInputContainer: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  formInput: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  formButton: {
    marginTop: 10,
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
    justifyContent: 'space-between',
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
});
