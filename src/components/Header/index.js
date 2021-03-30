import React from 'react';
import ReactTooltip from 'react-tooltip';

import MenuItem from '../MenuItem/index';
import { Menu } from '../../AppStyled.js/styled';
const mk = () => {
  return (
    <Menu>
      <MenuItem title="Loja" icon="/assets/store.png" link="/" />
      <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
      <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/my-account" />
      <ReactTooltip id="tip-top" place="top" effect="solid" />
      <ReactTooltip id="tip-right" place="right" effect="solid" />
    </Menu>
  );
};

MenuItem.defaultProps = {
  active: false,
};

export default mk;
