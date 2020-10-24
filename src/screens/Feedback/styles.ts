import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2d3956',
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  downContent: {
    flex: 2,
    backgroundColor: '#fff',
  },
  activeQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#2D3956',
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  activeQuestion: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 10,
    color: '#FFF',
  },
  upContainer: {
    flex: 0.5,
    paddingVertical: 50,
    backgroundColor: '#2d3956',
    justifyContent: 'center',
  },
  upContent: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
    paddingRight: 10,
  },
})

export default styles
