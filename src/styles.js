const styles = {};
styles.navigation = {
  display: 'inline-block'
};

styles.controls = {
  ...styles.navigation,
  textAlign: 'center'
};

styles.wrapper = {
  ...styles.controls,
  width: '100%',
  heigth: 24,
  backgroundColor: '#323232',
  color: '#fff'
};

styles.previous = {
  ...styles.controls,
  marginRight: 12,
  cursor: 'pointer'
};

styles.next = {
  ...styles.controls,
  marginLeft: 12,
  cursor: 'pointer'
};

styles.pages = {
  ...styles.controls
};

export default styles;
