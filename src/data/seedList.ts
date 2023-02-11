import type { Seed } from 'entities/seed';

import { SeedTable } from './seedTable';

export const seedList: Seed[] = Object.values(SeedTable).map((seed) => ({
  ...seed,
  description: seed.description.description,
}));
