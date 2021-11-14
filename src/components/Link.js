import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // allows you to determine whether the "command" or "ctrl" key was held down while clicking the link
    // this will allow the link to open in a new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    // change URl without doing a full page refresh
    window.history.pushState({}, "", href);

    // tells route components that the navigation has just changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
