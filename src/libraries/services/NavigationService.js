/* @flow */

import * as React from 'react';
import { DrawerActions } from "react-navigation";

export type NavigationRef<RefNode> = {
    ...React.Component<RefNode>,
    navigate: any,
    dispatch: any,
};

export default class NavigationService {

    static ref: ?NavigationRef<Object> = null;

    static setRef = (ref: ?NavigationRef<Object>): void => {
        NavigationService.ref = ref;
    };

    static navigate = (route: string, params?: Object = {}): void => {
        if (!NavigationService.ref) {
            return;
        }

        NavigationService.ref._navigation.navigate(route, params);
    };

    static openDrawer = (): void => {
        if (!NavigationService.ref) {
            return;
        }

        NavigationService.ref._navigation.dispatch(DrawerActions.openDrawer());
    };

    static dispatch = (actions: Object): void => {
        if (!NavigationService.ref) {
            return;
        }

        NavigationService.ref._navigation.dispatch(actions);
    };
}
