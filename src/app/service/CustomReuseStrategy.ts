import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

export class CustomReuseStrategy extends RouteReuseStrategy {
  private savedHandles = new Map<string, DetachedRouteHandle>();
  private routeLeftFrom: string;

  //-------------------should attach & retrieve-------------------------------
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.savedHandles.get(CustomReuseStrategy.getRouteKey(route));
  }

  // If this method returns TRUE then retrieve method will be called, otherwise the component will be created from scratch
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const wasRoutePreviouslyDetached = !!this.savedHandles.get(CustomReuseStrategy.getRouteKey(route));
    if (wasRoutePreviouslyDetached) {
      const reuseRouteFromVerified = route.data.reuseRoutesFrom.indexOf(this.routeLeftFrom) > -1;
      if (reuseRouteFromVerified) {
        return true;
      }
    }
    return false;
    // here returns the attached one from ANY route
    // return this.savedHandles.has(CustomReuseStrategy.getRouteKey(route));
  }

  //-------------------end-------------------------------


  //-------------------should detach & store-------------------------------
  // It is invoked when we leave the current route. If returns TRUE then the store method will be invoked
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // return route.data.shouldReuseRoute;
    this.routeLeftFrom = route.routeConfig.path;
    console.log('Left from this route: ', this.routeLeftFrom);
    return route.data.shouldReuseRoute || false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const key = CustomReuseStrategy.getRouteKey(route);
    console.log(key, handle);
    this.savedHandles.set(key, handle);
  }

  //-------------------end-------------------------------


  // This method is called everytime we navigate between routes. The future is the route we are leaving and curr is the route we are landing
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  // Routes are stored as an array of route configs, so we can find any with url property and join them to create the URL for the route
  private static getRouteKey(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot.filter(u => u.url).map(u => u.url).join('/');
  }
}
