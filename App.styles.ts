import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#294936',
    flex: 1,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
  },
  headerTitle: {
    color: '#fafafa',
    fontSize: 28,
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 80,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingTop: 30,
  },
  titleContainer: {
    color: '#294936',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  viewContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 20,
    borderBottomColor: '#294936',
    borderBottomWidth: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleButton: {
    color: '#294936',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    color: '#294936',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
