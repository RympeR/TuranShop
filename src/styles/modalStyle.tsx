import { StyleSheet, Dimensions } from 'react-native';


const { height } = Dimensions.get('window');

const modalStyle=  {
  modalize: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9998,
  },

  modalize__wrapper: {
    flex: 1,
  },

  modalize__content: {
    zIndex: 5,
    position: 'absolute',
    // bottom: 0,
    // left: 0,
    marginTop: 'auto',
    // height: height,
    backgroundColor: 'red',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 12,

    elevation: 4,
  },

  handle: {
    position: 'absolute',
    top: -20,
    right: 0,
    left: 0,
    zIndex: 5,

    paddingBottom: 20,

    height: 20,
  },

  handleBottom: {
    top: 0,
  },

  handle__shape: {
    alignSelf: 'center',

    top: 8,

    width: 45,
    height: 5,

    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },

  handle__shapeBottom: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,

    height: undefined,
  },

  overlay__background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },

  content__container: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
  },

  content__adjustHeight: {
    flex:  0,
    flexGrow: 0,
    flexShrink: 1,
  },
};

export { modalStyle };