import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { login as loginAction, logout as logoutAction } from 'store/actions/authActions';

const NavigationHandler = (props) => {
  const { pathname } = useLocation();

  return (
    props.children({ pathname, ...props })
  );
};

const mapStateToProps = ({ auth: { isAuthenticated, fullName, imgUrl } }) => ({
  isAuthenticated,
  fullName,
  imgUrl,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(loginAction()),
  logout:() => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHandler);
