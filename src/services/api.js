export const API_URL = 'http://localhost:5001/api';

export const getPlots = async (projectId) => {
  const response = await fetch(`${API_URL}/plots/${projectId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch plots');
  }
  return response.json();
};

export const updatePlot = async (plotId, plotData) => {
  const response = await fetch(`${API_URL}/plots/${plotId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plotData),
  });
  if (!response.ok) {
    throw new Error('Failed to update plot');
  }
  return response.json();
};

export const initializePlots = async (projectId, totalPlots) => {
  const response = await fetch(`${API_URL}/plots/initialize/${projectId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ totalPlots }),
  });
  if (!response.ok) {
    throw new Error('Failed to initialize plots');
  }
  return response.json();
}; 