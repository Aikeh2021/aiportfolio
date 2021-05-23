import React from "react";

const Header = () => {
  const styles = {
    p: {
      textAlign: "center",
    }
  };

  return (
    <div>
        <div className="container">
          <p className="lead" style={styles.p}>
            Welcome to Ashley's portfolio! Use the navigation bar above to
            explore my site. Utilize the footer below to contact me or view my
            professional platforms.
          </p>
      </div>
    </div>
  );
};

export default Header;
