import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const cx = classNames.bind(styles);

function Header({ isLogin, accName, SetIsLogin }) {
  const handleLogOut = () => {
    const confirm = window.confirm("Are you sure to log out ?");
    if (confirm) {
      SetIsLogin(false);
    }
  };
  return (
    <>
      <header className={cx("header")}>
        <div className={cx("header__list")}>
          <a
            href="https://vtiacademy.edu.vn/"
            target="_blank"
            className={cx("header__left")}
          >
            {" "}
            VTI Academy{" "}
          </a>
        </div>

        <div className={cx("header__list")}>
          <NavLink exact="true" to="/" className={cx("header__home")}>
            Home{" "}
          </NavLink>
        </div>

        <div className={cx("header__list")}>
          <NavLink exact="true" to="/photo" className={cx("header__link")}>
            Photo app{" "}
          </NavLink>
        </div>
      </header>

      <div className={cx("account")}>
        {isLogin ? (
          <div className={cx("account-login-header")}>
            <div
            className={cx('account-login-title')}
            >Wellcome {accName}</div>
            <div>
              <Button 
              className={cx('account-login-btn')}
              
              onClick={handleLogOut}>Log out</Button>
            </div>
          </div>
        ) : (
          <div className={cx("account-wrapper")}>
            <Link to={"/login"} className={cx("account-login")}>
              Log in page
            </Link>
            <Link to={"/signup"} className={cx("account-sign")}>
              Sign up page{" "}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
export default Header;
