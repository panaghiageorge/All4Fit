import * as React from 'react';

export interface GenericComponentInterface {
    +children?: ?React.Element<any> | ?Array<?React.Element<any>> | ?string
}
