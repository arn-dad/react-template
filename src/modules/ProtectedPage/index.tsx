import React from 'react';
import { useRootStore } from '@hooks/useRootStore'
import { RootStore } from "@stores/Root.store";
import { RouteComponentProps } from 'react-router-dom';

const ProtectedPage: React.FC<RouteComponentProps> = () => {
  const store: RootStore = useRootStore()
  return (
    <div>
      ProtectedPage {store.userStore.status}
    </div>
  );
};

export default ProtectedPage;