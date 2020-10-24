import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2d3956',
    justifyContent: 'center',
  },
  description: {
    fontSize: 20,
    color: '#2d3956',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '600',
  },
  description1: {
    fontSize: 20,
    color: '#2d3956',
    textAlign: 'center',
    fontWeight: '600',
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ffc700',
    marginRight: 20,
  },
  square: {
    width: 32,
    height: 32,
    backgroundColor: '#44a9ff',
    marginRight: 20,
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downContent: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  downContainer: {
    flex: 2,
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 20,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  upContent: {
    flex: 1,
    backgroundColor: '#2d3956',
  },
})

export default styles
