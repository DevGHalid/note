import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '../icons/SearchIcon';
import SettingIcon from '../icons/SettingIcon';
import CollectionIcon from '../icons/CollectionIcon';
import StarIcon from '../icons/StarIcon';
import TagIcon from '../icons/TagIcon';
import TrashIcon from '../icons/TrashIcon';
import LogoutIcon from '../icons/LogoutIcon';

function NavItem(props) {
  return (
    <NavLink
      to={props.to || ''}
      className="flex pl-4 cursor-pointer py-1 hover:bg-gray-300"
      activeClassName="bg-gray-300"
    >
      {props.children}
    </NavLink>
  );
}

function NavText(props) {
  return <span className="text-xs text-gray-700">{props.children}</span>;
}

function Navbar() {
  return (
    <>
      <NavItem to="/search">
        <SearchIcon className="w-4 mr-2 text-gray-700" />
        <NavText>Бысый поиск</NavText>
      </NavItem>
      <NavItem to="setting">
        <SettingIcon className="w-4 mr-2 text-gray-700" />
        <NavText className="text-xs text-gray-700">Настройки</NavText>
      </NavItem>
      <div className="mb-3"></div>
      <NavItem to="/sheet">
        <CollectionIcon className="w-4 mr-2 text-gray-700" />
        <NavText>Лист</NavText>
      </NavItem>
      <NavItem to="/star">
        <StarIcon className="w-4 mr-2 text-gray-700" />
        <NavText>Помеченные</NavText>
      </NavItem>
      <NavItem to="/tag">
        <TagIcon className="w-4 mr-2 text-gray-700" />
        <NavText>Теги</NavText>
      </NavItem>
      <NavItem to="/trash">
        <TrashIcon className="w-4 mr-2 text-gray-700" />
        <NavText>Корзина</NavText>
      </NavItem>
      <div className="mb-3"></div>
      <div className="flex pl-4 cursor-pointer py-1 hover:bg-gray-300">
        <LogoutIcon className="w-4 mr-2 text-gray-700" />
        <NavText>Выйти</NavText>
      </div>
    </>
  );
}

export default Navbar;
