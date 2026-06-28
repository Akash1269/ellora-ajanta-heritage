import { describe, it, expect } from 'vitest';
import {
  fetchAttractionDetails,
  fetchAttractionImage,
  fetchPlaces,
  fetchItinerarySummaries,
  fetchItineraryDetails,
  fetchHistory,
  fetchHomeContent,
} from '../services/dataService';

describe('dataService', () => {
  it('fetchAttractionDetails returns data for known attraction', async () => {
    const result = await fetchAttractionDetails('Ajanta Caves');
    expect(result).not.toBeNull();
    expect(result?.name).toBe('Ajanta Caves');
  });

  it('fetchAttractionDetails returns null for unknown attraction', async () => {
    const result = await fetchAttractionDetails('Nonexistent Place');
    expect(result).toBeNull();
  });

  it('fetchAttractionImage returns a string URL for known attraction', async () => {
    const url = await fetchAttractionImage('Ellora Caves');
    expect(typeof url).toBe('string');
    expect(url.length).toBeGreaterThan(0);
  });

  it('fetchAttractionImage returns fallback for unknown attraction', async () => {
    const url = await fetchAttractionImage('Unknown');
    expect(typeof url).toBe('string');
    expect(url).toContain('ajanta-caves');
  });

  it('fetchPlaces returns hotels array', async () => {
    const hotels = await fetchPlaces('hotels');
    expect(Array.isArray(hotels)).toBe(true);
    expect(hotels.length).toBeGreaterThan(0);
  });

  it('fetchPlaces returns restaurants array', async () => {
    const restaurants = await fetchPlaces('restaurants');
    expect(Array.isArray(restaurants)).toBe(true);
    expect(restaurants.length).toBeGreaterThan(0);
  });

  it('fetchItinerarySummaries returns non-empty array', async () => {
    const summaries = await fetchItinerarySummaries();
    expect(Array.isArray(summaries)).toBe(true);
    expect(summaries.length).toBeGreaterThan(0);
  });

  it('fetchItineraryDetails returns detail for known itinerary', async () => {
    const summaries = await fetchItinerarySummaries();
    const detail = await fetchItineraryDetails(summaries[0].title);
    expect(detail).not.toBeNull();
  });

  it('fetchHistory returns content with eras', async () => {
    const history = await fetchHistory();
    expect(history).toHaveProperty('eras');
    expect(history.eras.length).toBeGreaterThan(0);
  });

  it('fetchHomeContent returns non-null content', async () => {
    const content = await fetchHomeContent();
    expect(content).not.toBeNull();
  });
});
