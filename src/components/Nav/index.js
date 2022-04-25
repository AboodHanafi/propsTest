import "./style.css";

const NavBar = (props) => {
  const {
    homeIcon,
    homeTitle,
    aboutUsIcon,
    aboutUsTitle,
    contactUsIcon,
    contactUsTitle,
    cartIcon,
  } = props;
  return (
    <div className="navBar">
      <div className="text">Best Vehicle With Us</div>
      <div className="navBar-list">
        <div id="row">
          <div id="icon">{homeIcon}</div>
          <div id="link">
            <a href="#"> {homeTitle}</a>
          </div>
        </div>
        <div id="row">
          <div id="icon">{aboutUsIcon}</div>
          <div id="link">
            <a href="#"> {aboutUsTitle}</a>
          </div>
        </div>
        <div id="row">
          <div id="icon">{contactUsIcon}</div>
          <div id="link">
            <a href="#"> {contactUsTitle}</a>
          </div>
        </div>

        <div className="cart-item">{cartIcon}</div>
      </div>
    </div>
  );
};

export default NavBar;
