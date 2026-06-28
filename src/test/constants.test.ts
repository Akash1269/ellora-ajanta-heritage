import { describe, it, expect } from 'vitest';
import { ATTRACTION_NAMES, MAP_CENTER, MAP_ZOOM, PLACEHOLDER_IMAGE, IMAGES } from '../constants';

describe('constants', () => {
  it('has 6 attraction names', () => {
    expect(ATTRACTION_NAMES).toHaveLength(6);
  });

  it('attraction names are non-empty strings', () => {
    ATTRACTION_NAMES.forEach((name) => {
      expect(typeof name).toBe('string');
      expect(name.length).toBeGreaterThan(0);
    });
  });

  it('MAP_CENTER is a valid lat/lng tuple', () => {
    expect(MAP_CENTER).toHaveLength(2);
    expect(MAP_CENTER[0]).toBeGreaterThanOrEqual(-90);
    expect(MAP_CENTER[0]).toBeLessThanOrEqual(90);
    expect(MAP_CENTER[1]).toBeGreaterThanOrEqual(-180);
    expect(MAP_CENTER[1]).toBeLessThanOrEqual(180);
  });

  it('MAP_ZOOM is a positive number', () => {
    expect(MAP_ZOOM).toBeGreaterThan(0);
  });

  it('PLACEHOLDER_IMAGE is a valid data URI', () => {
    expect(PLACEHOLDER_IMAGE).toMatch(/^data:image\/svg\+xml,/);
  });

  it('IMAGES has all expected keys', () => {
    const expectedKeys = [
      'hero', 'bibiKaMaqbara', 'ajantaCaves', 'elloraKailasa',
      'daulatabad', 'grishneshwar', 'panchakki',
    ];
    expectedKeys.forEach((key) => {
      expect(IMAGES).toHaveProperty(key);
    });
  });
});
