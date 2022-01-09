interface SwitchRoutes {
  root: string;
  productsList: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  productsList: 'products-list'
};

interface Routes {
  root: string;
  productsList: string;
}

export const routes: Routes = {
  ...switchRoutes
};
