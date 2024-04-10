import { createBackend } from '@backstage/backend-defaults';

const backend = createBackend();
// Catalog
backend.add(import('@backstage/plugin-catalog-backend/alpha'));
backend.add(import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'));

// Catalog:GitHubOrgEntityProvider
backend.add(import('@backstage/plugin-catalog-backend-module-github-org'));

// App
backend.add(import('@backstage/plugin-app-backend/alpha'));

backend.start();
