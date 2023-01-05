import React from "react";
import navData from "../data/navData.js";
class Nav extends React.Component {
  render() {
    let { brand } = navData;
    let items = [];
    for (const item in navData) {
      items.push(navData[item]);
    }
    return (
      <nav className="flex justify-between h-[clamp(0px,10vw,100px)] bg-base_color/75 items-center backdrop-blur-sm sticky top-0 text text-white_like">
        <span className="ml-8">{brand}</span>
        <ul className=" w-2/5 flex justify-between mr-8">
          {items.slice(1).map((a, index) => {
            console.log(index);
            return (
              <li className={`before:content-['${index}']`} key={Math.random()}>
                {a}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Nav;
