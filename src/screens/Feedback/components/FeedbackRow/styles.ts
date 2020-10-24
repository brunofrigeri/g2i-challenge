import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    elevation: 2,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 5,
  },
  question: {
    flexShrink: 1,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    paddingLeft: 10,
  },
  separatorLine: {
    height: '90%',
    width: 1.5,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  wrongAnswer: {
    color: 'red',
  },
  rightAnswer: {
    color: 'green',
  },
  collapsible: {
    paddingTop: 20,
    width: '100%',
  },
})

export default styles
