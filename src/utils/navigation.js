import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  const route = navigationRef.getCurrentRoute();
  console.log(route);
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
