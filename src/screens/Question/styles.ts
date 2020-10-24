import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  card: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.6,
    elevation: 2,
    borderRadius: 10,
    shadowColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 30,
    width: width - 50,
    maxHeight: 600,
    minHeight: 300,
  },
  question: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  alternativeContainer: {
    width: '100%',
    paddingVertical: 20,
  },
  category: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '600',
    color: '#808080',
    paddingBottom: 30,
  },
  activeQuestion: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  icon: {
    alignSelf: 'center',
    paddingRight: 10,
  },
  activeQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#2D3956',
    backgroundColor: '#eef7fb',
    borderRadius: 5,
    padding: 10,
  },
  content: {
    alignSelf: 'flex-start',
    paddingBottom: 20,
  },
})

export default styles
